export type CountryEntityProps = {
  name: string;
  countryCode: string;
};

export class CountryEntity {
  private _name: string;
  private _countryCode: string;

  constructor(props: CountryEntityProps) {
    this._name = props.name;
    this._countryCode = props.countryCode;
  }

  get name() {
    return this._name;
  }

  get countryCode() {
    return this._countryCode;
  }
}
