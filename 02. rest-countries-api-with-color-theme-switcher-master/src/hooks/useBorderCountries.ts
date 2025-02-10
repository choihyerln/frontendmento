import { COUNTRIES_API } from "@/constants";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchBorderCountries = async (borders: string) => {
  const { data } = await axios.get(`${COUNTRIES_API}/alpha?codes=${borders}`);
  return data;
};

const useBorderCountries = (borders: string) => {
  return useQuery({
    queryKey: ["country", borders],
    queryFn: () => fetchBorderCountries(borders),
  });
};

export default useBorderCountries;
