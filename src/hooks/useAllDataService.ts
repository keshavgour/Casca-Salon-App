import { useQuery } from "@tanstack/react-query";
import { salonDataService } from "Services/salonDataService";

export const useAllDataService = (url: string) => {
  return useQuery({ queryKey: ["allData"], queryFn: () => salonDataService(url) });
};
