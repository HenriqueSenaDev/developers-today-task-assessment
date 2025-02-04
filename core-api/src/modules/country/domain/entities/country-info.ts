import { CountryEntity } from "./country-entity";
import { CountryYearPopulation } from "./country-year-population";

export type CountryInfoProps = {
  flagURL: string | null;
  borderCountries: CountryEntity[];
  population: CountryYearPopulation[];
};

export class CountryInfo {
  private _flagURL: string | null;
  private _borderCountries: CountryEntity[];
  private _population: CountryYearPopulation[];

  constructor(props: CountryInfoProps) {
    this._flagURL = props.flagURL;
    this._borderCountries = props.borderCountries;
    this._population = props.population;
  }

  get flagURL() {
    return this._flagURL;
  }

  get borderCountries() {
    return this._borderCountries;
  }

  get population() {
    return this._population;
  }
}
