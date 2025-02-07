import CountryCard from "@/components/home/CountryCard";
import { Country } from "@/types/Country.ts";
import useCountriesQuery from "@/hooks/useCountriesQuery.ts";

export default function CountryCardList() {
  const { data: countries, isLoading, error } = useCountriesQuery();

  // TODO: suspense 작업 필요
  if (isLoading) return <p>Loading...</p>;

  // TODO: error 컴포넌트 작업 필요
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-4 gap-15 p-6">
        {countries.map((country: Country) => (
          <CountryCard country={country} />
        ))}
      </div>
    </div>
  );
}
