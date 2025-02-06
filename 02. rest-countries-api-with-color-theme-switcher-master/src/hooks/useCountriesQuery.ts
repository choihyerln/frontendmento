import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchCountries = async () => {
  const { data } = await axios.get("https://restcountries.com/v3.1/all");
  return data;
};

const useCountriesQuery = () => {
  return useQuery({
    queryKey: ["countries"],
    queryFn: fetchCountries
  });
};

export default useCountriesQuery;
