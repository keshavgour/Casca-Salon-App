import axiosInstance from "lib/axios";

export const validateToken = async (refresh_token: string) => {
  try {
    const response = await axiosInstance.get(`/auth/refresh/${refresh_token}`);
    localStorage.setItem("access_token", response.data.access_token);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
