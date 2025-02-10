import CountryCard from "@/components/home/CountryCard";
import { Country } from "@/types/Country.ts";
import useCountriesQuery from "@/hooks/useCountriesQuery.ts";
import { Suspense } from "react";
import HomeSkeleton from "@/pages/HomeSkeleton";
import { countrySearchKeywordAtom, selectedRegionAtom } from "@/atom/atom";
import { useAtomValue } from "jotai";
import { Link } from "react-router-dom";

export default function CountryCardList() {
  const keyword = useAtomValue(countrySearchKeywordAtom);
  const region = useAtomValue(selectedRegionAtom);
  const {
    data: countries,
    isLoading,
    error,
  } = useCountriesQuery(keyword, region);

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
        <p className="font-bold">
          ❌ Something went wrong! Error: {error.message}
        </p>
      </div>
    );

  return (
    <Suspense>
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-15 p-6">
          {countries?.map((country: Country) => (
            <Link key={country.cca3} to={`/detail/${country.name.common}`}>
              <CountryCard country={country} />
            </Link>
          ))}
        </div>
      </div>
    </Suspense>
  );
}
