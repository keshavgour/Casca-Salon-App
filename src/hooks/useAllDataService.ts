import { useQuery } from "@tanstack/react-query";
import getSalonData from "Services/getSalonData";

export const useAllDataService = () => {
  return useQuery({ queryKey: ["allData"], queryFn: () => getSalonData("All") });
};
