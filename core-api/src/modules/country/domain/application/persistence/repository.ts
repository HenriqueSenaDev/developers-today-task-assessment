import { CountryEntity } from "../../entities/country-entity";

export abstract class ICountryRepository {
  abstract getAvailableCountries(): Promise<CountryEntity[]>;
}
