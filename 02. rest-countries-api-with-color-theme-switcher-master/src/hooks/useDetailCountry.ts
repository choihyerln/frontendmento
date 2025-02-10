import { COUNTRIES_API } from "@/constants";
import { DetailCountry } from "@/types/Country";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchDetailCountry = async (name: string | undefined) => {
  const { data } = await axios.get<DetailCountry[]>(
    `${COUNTRIES_API}/name/${name}?fullText=true`
  );
  return data;
};

const useDetailCountry = (name: string | undefined) => {
  return useQuery<DetailCountry[]>({
    queryKey: ["country", name],
    queryFn: () => fetchDetailCountry(name),
  });
};

export default useDetailCountry;
