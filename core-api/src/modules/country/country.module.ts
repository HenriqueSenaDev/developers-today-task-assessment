import { Module } from "@nestjs/common";
import { GetAvailableCountriesController } from "./http/controllers/get-available-countries.controller";
import { GetAvailableCountriesUseCase } from "./domain/application/use-cases/get-available-countries";
import { HttpModule } from "@nestjs/axios";
import { ICountryRepository } from "./domain/application/persistence/repository";
import { CountryApiRepository } from "./domain/application/persistence/api-repository";

@Module({
  imports: [HttpModule],
  controllers: [GetAvailableCountriesController],
  providers: [
    {
      provide: ICountryRepository,
      useClass: CountryApiRepository,
    },
    GetAvailableCountriesUseCase,
  ],
})
export class CountryModule {}
