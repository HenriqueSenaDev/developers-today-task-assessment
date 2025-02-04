import { Injectable } from "@nestjs/common";
import { ICountryRepository } from "../persistence/repository";
import { CountryInfo } from "../../entities/country-info";

type GetCountryInfoParams = {
  name: string;
  countryCode: string;
};

type GetCountryInfoDTO = {
  countryInfo: CountryInfo;
};

@Injectable()
export class GetCountryInfoUseCase {
  constructor(private readonly countryRepository: ICountryRepository) {}

  async execute({
    name,
    countryCode,
  }: GetCountryInfoParams): Promise<GetCountryInfoDTO> {
    const countryInfo = await this.countryRepository.getCountryInfo({
      name,
      countryCode,
    });

    return { countryInfo };
  }
}
