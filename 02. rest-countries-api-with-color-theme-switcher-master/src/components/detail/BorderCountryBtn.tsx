import useBorderCountries from "@/hooks/useBorderCountries";
import { Country } from "@/types/Country";
import { Link } from "react-router-dom";

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
              <Link key={item.cca3} to={`/detail/${item.name.common}`}>
                <p
                  className="shadow-[0_2px_6px_rgba(0,0,0,0.2)] dark:shadow-[0_2px_6px_rgba(0,0,0,0.3)] 
                hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_4px_12px_rgba(0,0,0,0.4)]
                transition-all duration-200 px-4 py-1 rounded-sm"
                >
                  {item.name.common}
                </p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
