export type CountryYearPopulationProps = {
  year: number;
  population: number;
};

export class CountryYearPopulation {
  private _year: number;
  private _population: number;

  constructor(props: CountryYearPopulationProps) {
    this._year = props.year;
    this._population = props.population;
  }

  get year() {
    return this._year;
  }

  get population() {
    return this._population;
  }
}
