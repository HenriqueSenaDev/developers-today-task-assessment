import {
  CountryEntity,
  CountryEntityProps,
} from "../../entities/country-entity";

export const CountryMapper = {
  toDomain(props: CountryEntityProps): CountryEntity {
    return new CountryEntity(props);
  },
};
