import { useQuery } from "@tanstack/react-query";
import { salonDataService } from "Services/salonDataService";

export const useMassageDataService = () => {
  return useQuery({
    queryKey: ["massageData"],
    queryFn: () => salonDataService("Massage"),
  });
};
