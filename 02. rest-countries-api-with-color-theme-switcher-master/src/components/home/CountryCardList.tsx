import CountryCard from "@/components/home/CountryCard";
import { Country } from "@/types/Country.ts";
import useCountriesQuery from "@/hooks/useCountriesQuery.ts";
import { Suspense } from "react";
import HomeSkeleton from "@/pages/HomeSkeleton";

interface Props {
  query: string; // atom
}
export default function CountryCardList({ query }: Props) {
  const { data: countries, isLoading, error } = useCountriesQuery(query);

  // TODO: suspense 작업 필요
  if (isLoading)
    return (
      <div>
        <HomeSkeleton />
      </div>
    );

  // TODO: error 컴포넌트 작업 필요
  if (error)
    return (
      <div className="px-15">
        ❌ Something went wrong! Error: {error.message}
      </div>
    );

  return (
    <Suspense>
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-15 p-6">
          {countries?.map((country: Country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </div>
      </div>
    </Suspense>
  );
}
