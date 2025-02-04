import { CountryEntity } from "../../entities/country-entity";
import { CountryInfo } from "../../entities/country-info";

export type GetCountryInfoParams = {
  name: string;
  countryCode: string;
};

export abstract class ICountryRepository {
  abstract getAvailableCountries(): Promise<CountryEntity[]>;

  abstract getCountryInfo(params: GetCountryInfoParams): Promise<CountryInfo>;
}
