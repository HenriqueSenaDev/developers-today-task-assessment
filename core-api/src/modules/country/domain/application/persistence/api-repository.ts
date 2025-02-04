import { Injectable } from "@nestjs/common";
import { CountryEntity } from "../../entities/country-entity";
import { ICountryRepository } from "./repository";
import { HttpService } from "@nestjs/axios";
import { firstValueFrom } from "rxjs";
import { CountryMapper } from "./mapper";

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
}
