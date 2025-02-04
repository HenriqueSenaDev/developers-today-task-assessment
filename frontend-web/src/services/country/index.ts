import { CountryEntity } from "@/domain/types/country";
import axios, { AxiosResponse } from "axios";

export const CountryService = {
  async getAvailableCountries(): Promise<CountryEntity[]> {
    type ResponseBodyType = Array<{ countryCode: string; name: string }>;

    const response = await axios.get<null, AxiosResponse<ResponseBodyType>>(
      "http://localhost:4000/countries/",
    );

    return response.data;
  },
};
