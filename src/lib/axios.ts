import axios from "axios";
import getAccessToken from "Services/getAccessToken";

const axiosInstance = axios.create({
  baseURL: "https://04a5-163-53-201-67.ngrok-free.app/api/",
});
const token = getAccessToken();
axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${token}`;
  config.withCredentials = true;
  config.headers["Content-Type"] = "application/json";
  return config;
});
export default axiosInstance;
