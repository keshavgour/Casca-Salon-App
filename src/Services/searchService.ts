import ApiService from "lib/ApiService";

export const searchService = async (query: string) => {
  const apiServiceInstance = new ApiService();
  const response = await apiServiceInstance.getData(`/salon/search/${query}`);
  return response;
};
