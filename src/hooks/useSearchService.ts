import { useQuery } from "@tanstack/react-query";
import { searchService } from "Services/searchService";

export const useSearchService = (query: string) => {
  return useQuery({ queryKey: ["query"], queryFn: () => searchService(query) });
};

// import { useQuery } from "react-query";
// import { searchService } from "Services/searchService";

// export const useSearchService = (query: string) => {
//   return useQuery(["search", query], async () => {
//     const response = await searchService(query);
//     return response.data;
//   });
// };
