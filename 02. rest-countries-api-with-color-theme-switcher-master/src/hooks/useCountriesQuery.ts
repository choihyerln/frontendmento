import axios from "axios";
import { Country } from "@/types/Country";
import { useQuery } from "@tanstack/react-query";
import { COUNTRIES_API } from "@/constants";

const fetchCountries = async (query: string) => {
  if (!query) {
    const { data } = await axios.get<Country[]>(`${COUNTRIES_API}/all`);
    return data;
  } else {
    const { data } = await axios.get<Country[]>(
      `${COUNTRIES_API}/name/${query}`
    );
    return data;
  }
};

const useCountriesQuery = (query: string) => {
  return useQuery({
    queryKey: ["countries", query],
    queryFn: () => fetchCountries(query),
  });
};

export default useCountriesQuery;
