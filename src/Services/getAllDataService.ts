import axiosInstance from "lib/axios";

export const getAllDataService = async () => {
  const res = await axiosInstance.get("/salon/All");
  return res.data.salons;
};
