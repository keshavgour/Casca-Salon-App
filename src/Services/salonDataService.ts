import axiosInstance from "lib/axios";

export const salonDataService = async (category: string) => {
  const response = await axiosInstance.get(`/salon/${category}`);
  return response.data.salons;
};
