import { CountryService } from "@/services/country";
import { CountryInfoButton } from "./components/country-info-button";

export default async function CountryListPage() {
  const countries = await CountryService.getAvailableCountries();

  return (
    <div className="min-h-screen p-5 lg:p-10">
      <main className="mx-auto max-w-screen-lg grid grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))] gap-5 lg:grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))]">
        {countries.map((country) => (
          <CountryInfoButton key={country.countryCode} countryData={country} />
        ))}
      </main>
    </div>
  );
}
