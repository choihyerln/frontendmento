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
          className="w-250 h-[160px] object-cover rounded-t-md"
          src={country.flags.svg || country.flags.png}
          alt={country.flags.alt}
        />
      </div>

      {/* 콘텐츠 영역 */}
      <div className="flex flex-1 flex-col p-6">
        <p className="font-bold mb-3">{country.name.common}</p>
        <p className="text-sm mb-1">
          <span className="font-semibold">Population: </span>
          <span>{country.population.toLocaleString()}</span>
        </p>
        <p className="text-sm mb-1">
          <span className="font-semibold">Region: </span>
          <span>{country.region}</span>
        </p>
        <p className="text-sm mb-1">
          <span className="font-semibold">Capital: </span>
          <span>{country.capital?.[0] || "N/A"}</span>
        </p>
      </div>
    </div>
  );
}
