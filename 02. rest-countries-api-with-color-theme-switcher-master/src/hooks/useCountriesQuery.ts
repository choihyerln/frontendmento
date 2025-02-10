import axios from "axios";
import { Country } from "@/types/Country";
import { useQuery } from "@tanstack/react-query";
import { COUNTRIES_API } from "@/constants";

const fetchCountries = async (query: string, region: string) => {
  if (region === "All") {
    if (!query) {
      const { data } = await axios.get<Country[]>(
        `${COUNTRIES_API}/all?fields=name,population,region,capital,flags,cca3`
      );
      return data;
    } else {
      const { data } = await axios.get<Country[]>(
        `${COUNTRIES_API}/name/${query}`
      );
      return data;
    }
  } else if (region !== "All") {
    if (!query) {
      const { data } = await axios.get<Country[]>(
        `${COUNTRIES_API}/region/${region}`
      );
      return data;
    } else {
      const { data } = await axios.get<Country[]>(
        `${COUNTRIES_API}/name/${query}`
      );
      return data;
    }
  }
};

const useCountriesQuery = (query: string, region: string) => {
  return useQuery({
    queryKey: ["countries", query, region],
    queryFn: () => fetchCountries(query, region),
  });
};

export default useCountriesQuery;
