import { useQuery } from "@tanstack/react-query";
import { salonDataService } from "Services/salonDataService";

export const useMakeupDataService = () => {
  return useQuery({ queryKey: ["makeupData"], queryFn: () => salonDataService("Makeup") });
};
