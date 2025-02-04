import { Controller, Get } from "@nestjs/common";
import { GetAvailableCountriesUseCase } from "../../domain/application/use-cases/get-available-countries";
import { AvailableCountryPresenter } from "../presenters/available-country";

@Controller({ path: "/countries", version: "1.0" })
export class GetAvailableCountriesController {
  constructor(private readonly useCase: GetAvailableCountriesUseCase) {}

  @Get()
  async handle() {
    const { availableCountries } = await this.useCase.execute();

    return availableCountries.map((item) =>
      AvailableCountryPresenter.present(item),
    );
  }
}
