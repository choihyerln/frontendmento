import { useParams } from "react-router-dom";
import useDetailCountry from "@/hooks/useDetailCountry";
import Back from "@/components/detail/Back";
import BorderCountryBtn from "@/components/detail/BorderCountryBtn";

export default function Detail() {
  const { name } = useParams();
  const { data: countryData } = useDetailCountry(name);
  const country = countryData?.[0];
  console.log(country);

  const nativeName = Object.values(country?.name.nativeName || {}).pop();

  const currencyKey = Object.keys(country?.currencies || {})[0];
  const currency = currencyKey ? country?.currencies?.[currencyKey] : undefined;

  const languageKeys = Object.keys(country?.languages || {});
  const languages = languageKeys
    .map((key) => country?.languages?.[key])
    .filter(Boolean)
    .sort()
    .join(", ");

  return (
    <div
      className={"flex flex-col items-center w-[1440px] h-[831px] mt-[68px]"}
    >
      {country && (
        <div className="pt-20 px-15">
          {/* 메인으로 이동하는 버튼 */}
          <Back />
          <div className="flex gap-25">
            {/* 이미지 영역 */}
            <div className="flex flex-1 justify-center items-center">
              <img
                className="w-[500px] h-[300px] object-cover"
                src={country.flags.svg || country.flags.png}
                alt={country.flags.alt}
              />
            </div>

            {/* 컨텐츠 영역 */}
            <div className="flex flex-1 w-[500px] flex-col justify-center">
              <h3 className="font-extrabold text-3xl mb-4">{name}</h3>

              <div className="flex flex-row justify-between gap-10">
                {/* col1 */}
                <div className="flex flex-col flex-1">
                  <p className="text-sm mb-1">
                    <span className="font-bold">Native Name: </span>
                    <span>{nativeName?.common}</span>
                  </p>
                  <p className="text-sm mb-1">
                    <span className="font-bold">Population: </span>
                    <span>{country.population.toLocaleString()}</span>
                  </p>
                  <p className="text-sm mb-1">
                    <span className="font-bold">Region: </span>
                    <span>{country.region}</span>
                  </p>
                  <p className="text-sm mb-1">
                    <span className="font-bold">Sub Region: </span>
                    <span>{country.subregion}</span>
                  </p>
                  <p className="text-sm mb-1">
                    <span className="font-bold">Capital: </span>
                    <span>{country.capital?.[0]}</span>
                  </p>
                </div>

                {/* col2 */}
                <div className="flex flex-col flex-1">
                  <p className="text-sm mb-1">
                    <span className="font-bold">Top Level Domain: </span>
                    <span>{country.tld}</span>
                  </p>
                  <p className="text-sm mb-1">
                    <span className="font-bold">Currencies: </span>
                    <span>{currency?.name}</span>
                  </p>
                  <p className="text-sm mb-1">
                    <span className="font-bold">Languages: </span>
                    <span>{languages}</span>
                  </p>
                </div>
              </div>

              {country.borders ? (
                <BorderCountryBtn borders={country.borders} />
              ) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
