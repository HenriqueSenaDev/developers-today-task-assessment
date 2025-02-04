import { CountryEntity } from "./country";

export type CountryInfo = {
  flagURL: string | null;
  borderCountries: CountryEntity[];
  population: CountryYearPopulation[];
};

export type CountryYearPopulation = {
  year: number;
  population: number;
};
