import { Injectable } from "@nestjs/common";
import { ICountryRepository } from "../persistence/repository";
import { CountryEntity } from "../../entities/country-entity";

type GetAvailableCountriesDTO = {
  availableCountries: CountryEntity[];
};

@Injectable()
export class GetAvailableCountriesUseCase {
  constructor(private readonly countryRepository: ICountryRepository) {}

  async execute(): Promise<GetAvailableCountriesDTO> {
    const availableCountries =
      await this.countryRepository.getAvailableCountries();

    return { availableCountries };
  }
}
