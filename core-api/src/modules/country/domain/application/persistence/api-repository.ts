import { Injectable } from "@nestjs/common";
import { CountryEntity } from "../../entities/country-entity";
import { GetCountryInfoParams, ICountryRepository } from "./repository";
import { HttpService } from "@nestjs/axios";
import { firstValueFrom } from "rxjs";
import { CountryMapper } from "./mapper";
import { CountryInfo } from "../../entities/country-info";
import { CountryYearPopulation } from "../../entities/country-year-population";

@Injectable()
export class CountryApiRepository extends ICountryRepository {
  constructor(private readonly httpService: HttpService) {
    super();
  }

  async getAvailableCountries(): Promise<CountryEntity[]> {
    type ResponseBodyType = Array<{ countryCode: string; name: string }>;

    try {
      const responseObservable = this.httpService.get<ResponseBodyType>(
        "https://date.nager.at/api/v3/AvailableCountries",
      );

      const response = await firstValueFrom(responseObservable);

      return response.data.map((item) => CountryMapper.toDomain(item));
    } catch (error) {
      console.log(`Unexpected query error: ${error}`);
      throw error;
    }
  }

  async getBorderCountries(countryCode: string): Promise<CountryEntity[]> {
    type ResponseBodyType = {
      borders: Array<{
        countryCode: string;
        commonName: string;
      }>;
    };

    const responseObservable = this.httpService.get<ResponseBodyType>(
      `https://date.nager.at/api/v3/CountryInfo/${countryCode}`,
    );

    const response = await firstValueFrom(responseObservable);

    return response.data.borders.map((item) =>
      CountryMapper.toDomain({
        name: item.commonName,
        countryCode: item.countryCode,
      }),
    );
  }

  async getCountryFlagURL(countryCode: string): Promise<string | null> {
    type ResponseBodyType = {
      error: boolean;
      data: { flag: string };
    };

    try {
      const responseObservable = this.httpService.post<ResponseBodyType>(
        "https://countriesnow.space/api/v0.1/countries/flag/images",
        { iso2: countryCode },
      );

      const response = await firstValueFrom(responseObservable);

      return response.data.data.flag;
    } catch (error) {
      console.error(`Could not find flagURL for country code '${countryCode}'`);
      console.log(error);
      return null;
    }
  }

  async getPopulationData(
    countryName: string,
  ): Promise<CountryYearPopulation[]> {
    type ResponseBodyType = {
      data: {
        populationCounts: Array<{
          year: number;
          value: number;
        }>;
      };
    };

    const responseObservable = this.httpService.post<ResponseBodyType>(
      "https://countriesnow.space/api/v0.1/countries/population",
      { country: countryName },
    );

    const response = await firstValueFrom(responseObservable);

    const countsByYear = response.data.data.populationCounts;

    return countsByYear.map(
      (count) =>
        new CountryYearPopulation({
          year: count.year,
          population: count.value,
        }),
    );
  }

  async getCountryInfo({
    name,
    countryCode,
  }: GetCountryInfoParams): Promise<CountryInfo> {
    const [borderCountries, flagURL, population] = await Promise.all([
      this.getBorderCountries(countryCode),
      this.getCountryFlagURL(countryCode),
      this.getPopulationData(name),
    ]);

    return new CountryInfo({
      borderCountries,
      flagURL,
      population,
    });
  }
}
