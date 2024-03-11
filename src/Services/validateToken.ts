import axiosInstance from "lib/axios";

export const validateToken = async () => {
  try {
    const response = await axiosInstance.get(`/auth/refresh`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
