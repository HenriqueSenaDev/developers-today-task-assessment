import { CountryInfo } from "../../domain/entities/country-info";
import { AvailableCountryPresenter } from "./available-country";

export const CountryInfoPresenter = {
  present(countryInfo: CountryInfo) {
    const borderCountries = countryInfo.borderCountries.map((country) =>
      AvailableCountryPresenter.present(country),
    );

    const population = countryInfo.population.map((count) => ({
      year: count.year,
      population: count.population,
    }));

    return {
      flagURL: countryInfo.flagURL,
      borderCountries,
      population,
    };
  },
};
