import { useQuery } from "@tanstack/react-query";
import { salonDataService } from "Services/salonDataService";

export const useHaircutDataService = () => {
  return useQuery({
    queryKey: ["haircutData"],
    queryFn: () => salonDataService("Haircuts"),
  });
};
