import ApiService from "lib/ApiService";

export const bookmarkService = async () => {
  const apiServiceInstance = new ApiService();
  const response = await apiServiceInstance.getData("/bookmark/getAllBookmark");
  return response;
};
