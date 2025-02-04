import { CountryEntity } from "../../domain/entities/country-entity";

export const AvailableCountryPresenter = {
  present(countryEntity: CountryEntity) {
    return {
      name: countryEntity.name,
      countryCode: countryEntity.countryCode,
    };
  },
};
