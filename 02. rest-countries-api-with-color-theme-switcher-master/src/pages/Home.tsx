import CountryCard from "@/components/CountryCard";
import { Country } from "@/types/Country.ts";
import useCountriesQuery from "@/hooks/useCountriesQuery.ts";

export default function Home() {
  const { data: countries, isLoading, error } = useCountriesQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={"w-[1425px] h-[791px] mt-[68px] px-16 py-10"}>
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-15 p-6">
          {countries.map((country: Country) => (
            <CountryCard country={country} />
          ))}
        </div>
      </div>
    </div>
  );
}
