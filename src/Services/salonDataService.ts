import axiosInstance from "lib/axios";

export const salonDataService = async (category: string) => {
  const response = await axiosInstance.get(`/salon/${category}`);
  console.log(response);
  return response.data.salons;
};
