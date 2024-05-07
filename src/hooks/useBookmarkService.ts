import { useQuery } from "@tanstack/react-query";
import { bookmarkService } from "Services/bookmarkService";

export const useBookmarkService = () => {
  return useQuery({ queryKey: ["bookmark"], queryFn: () => bookmarkService() });
};
