import { Module } from "@nestjs/common";
import { GetAvailableCountriesController } from "./http/controllers/get-available-countries.controller";
import { GetAvailableCountriesUseCase } from "./domain/application/use-cases/get-available-countries";
import { HttpModule } from "@nestjs/axios";
import { ICountryRepository } from "./domain/application/persistence/repository";
import { CountryApiRepository } from "./domain/application/persistence/api-repository";
import { GetCountryInfoController } from "./http/controllers/get-country-info.controller";
import { GetCountryInfoUseCase } from "./domain/application/use-cases/get-country-info";

@Module({
  imports: [HttpModule],
  controllers: [GetAvailableCountriesController, GetCountryInfoController],
  providers: [
    {
      provide: ICountryRepository,
      useClass: CountryApiRepository,
    },
    GetAvailableCountriesUseCase,
    GetCountryInfoUseCase,
  ],
})
export class CountryModule {}
