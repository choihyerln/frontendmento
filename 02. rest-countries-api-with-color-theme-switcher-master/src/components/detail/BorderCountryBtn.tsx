import useBorderCountries from "@/hooks/useBorderCountries";
import { Country } from "@/types/Country";

interface Props {
  borders: string[];
}

export default function BorderCountryBtn({ borders }: Props) {
  const borderString = borders.join(",");
  const { data: borderCountries } = useBorderCountries(borderString);

  return (
    <div className="mt-10">
      <div className="flex items-center flex-wrap gap-x-2 gap-y-2 max-w-lg">
        <b className="w-full md:w-[140px]">Border Countries:</b>
        <div className="flex flex-wrap gap-2">
          {borderCountries
            ?.slice()
            .sort((a: Country, b: Country) =>
              a.name.common.localeCompare(b.name.common)
            )
            .map((item: Country) => (
              <p
                key={item.cca3}
                className="border border-gray-300 px-2 py-1 rounded-sm"
              >
                {item.name.common}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
}
