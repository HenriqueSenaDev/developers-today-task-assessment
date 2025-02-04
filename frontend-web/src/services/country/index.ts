import { CountryEntity } from "@/domain/types/country";
import { CountryInfo } from "@/domain/types/country-info";
import axios, { AxiosResponse } from "axios";

export const CountryService = {
  async getAvailableCountries(): Promise<CountryEntity[]> {
    type ResponseBodyType = Array<{ countryCode: string; name: string }>;

    const response = await axios.get<null, AxiosResponse<ResponseBodyType>>(
      "http://localhost:4000/countries/",
    );

    return response.data;
  },
  async getCountryInfo(payload: CountryEntity): Promise<CountryInfo> {
    const response = await axios.post<
      CountryEntity,
      AxiosResponse<CountryInfo>
    >("http://localhost:4000/countries/info", payload);

    return response.data;
  },
};
