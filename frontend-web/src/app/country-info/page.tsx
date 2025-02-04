import { CountryService } from "@/services/country";
import { CountryInfoButton } from "../../components/country-info-button";
import { CountryPopulationChart } from "./components/population-chart";

type CountryInfoPageProps = {
  searchParams: {
    code: string;
    name: string;
  };
};

export default async function CountryInfoPage({
  searchParams,
}: CountryInfoPageProps) {
  const countryInfo = await CountryService.getCountryInfo({
    name: searchParams.name,
    countryCode: searchParams.code,
  });

  return (
    <div className="w-full mx-auto max-w-lg gap-10 flex flex-col p-5 lg:p-10">
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl lg:text-3xl font-bold">{searchParams.name}</h1>

        {countryInfo.flagURL ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="object-cover"
            src={countryInfo.flagURL}
            alt={`${searchParams.name} country flag`}
          />
        ) : (
          <div className="w-full aspect-video flex items-center justify-center bg-slate-700">
            <h1>Flag is not available.</h1>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-5">
        <h1 className="text-2xl lg:text-3xl font-bold">Border countries</h1>

        <div className="grid grid-cols-[repeat(auto-fit,_minmax(140px,_1fr))] gap-5">
          {countryInfo.borderCountries.map((country) => (
            <CountryInfoButton
              key={country.countryCode}
              countryData={country}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <h1 className="text-2xl lg:text-3xl font-bold">Population over time</h1>

        {countryInfo.population.length > 1 ? (
          <CountryPopulationChart data={countryInfo.population} />
        ) : (
          <div className="w-full aspect-video flex items-center justify-center bg-slate-800">
            <h1>Population chart not available.</h1>
          </div>
        )}
      </div>
    </div>
  );
}
