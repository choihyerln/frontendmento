import { Country } from "@/types/Country.ts";

interface CountryCardProps {
  country: Country;
}

export default function CountryCard({ country }: CountryCardProps) {
  return (
    <div
      key={country.cca3}
      className="cursor-pointer flex flex-col w-[250px] h-[320px] bg-white rounded-md shadow-md shadow-gray-200"
    >
      {/* 국기 이미지 */}
      <div className="flex flex-1">
        <img
          className="w-[250px] h-[150px] object-cover rounded-t-md"
          src={country.flags.svg || country.flags.png}
          alt={country.flags.alt}
        />
      </div>

      {/* 콘텐츠 영역 */}
      <div className="flex flex-1 flex-col p-5">
        <p className="text-base font-extrabold mb-2">{country.name.common}</p>
        <p className="text-sm mb-1">
          <span className="font-bold">Population: </span>
          <span className="font-normal">
            {country.population.toLocaleString()}
          </span>
        </p>
        <p className="text-sm mb-1">
          <span className="font-bold">Region: </span>
          <span className="font-normal">{country.region}</span>
        </p>
        <p className="text-sm mb-1">
          <span className="font-bold">Capital: </span>
          <span className="font-normal">{country.capital?.[0] || "N/A"}</span>
        </p>
      </div>
    </div>
  );
}
