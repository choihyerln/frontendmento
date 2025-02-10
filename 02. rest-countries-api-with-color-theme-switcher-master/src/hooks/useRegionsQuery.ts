import axios from "axios";
import { COUNTRIES_API } from "@/constants";
import { useQuery } from "@tanstack/react-query";
import { RegionResponse } from "@/types/Region";

const fetchRegions = async () => {
  const { data } = await axios.get<RegionResponse>(
    `${COUNTRIES_API}/all?fields=region`
  );
  return data;
};

const useRegionsQuery = () => {
  return useQuery({
    queryKey: ["regions"],
    queryFn: fetchRegions,
  });
};

export default useRegionsQuery;
