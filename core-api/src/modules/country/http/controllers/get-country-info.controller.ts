import { Body, Controller, Post } from "@nestjs/common";
import { GetCountryInfoUseCase } from "../../domain/application/use-cases/get-country-info";
import { CountryInfoPresenter } from "../presenters/country-info";

type RequestBody = {
  countryCode: string;
  name: string;
};

@Controller({ path: "/countries", version: "1.0" })
export class GetCountryInfoController {
  constructor(private readonly useCase: GetCountryInfoUseCase) {}

  @Post("/info")
  async handle(@Body() body: RequestBody) {
    const { countryInfo } = await this.useCase.execute({
      name: body.name,
      countryCode: body.countryCode,
    });

    return CountryInfoPresenter.present(countryInfo);
  }
}
