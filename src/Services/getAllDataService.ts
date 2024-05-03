import axiosInstance from "lib/axios";

export const getAllDataService = async () => {
  const res = await axiosInstance.get("/salon/All");
  console.log(res);
  return res.data.salons;
};
