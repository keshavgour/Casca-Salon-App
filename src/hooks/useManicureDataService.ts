import { useQuery } from "@tanstack/react-query";
import { salonDataService } from "Services/salonDataService";

export const useManicureDataService = () => {
  return useQuery({
    queryKey: ["manicureData"],
    queryFn: () => salonDataService("Manicure"),
  });
};
