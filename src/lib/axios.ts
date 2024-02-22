import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://6158-163-53-201-67.ngrok-free.app/api/",
});

// axiosInstance.interceptors.request.use((config) => {
//   config.headers.Authorization = `Bearer`;
//   return config;
// });
export default axiosInstance;
