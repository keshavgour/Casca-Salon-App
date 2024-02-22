import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://04a5-163-53-201-67.ngrok-free.app/api/",
});
const token = localStorage.getItem("access_token");
axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${token}`;
  config.headers["Content-Type"] = "application/json";
  config.withCredentials = true;
  return config;
});
export default axiosInstance;
