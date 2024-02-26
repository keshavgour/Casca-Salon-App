import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://3ce9-163-53-201-67.ngrok-free.app",
});

const token = localStorage.getItem("access_token");
axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${token}`;
  config.headers["Content-Type"] = "application/json";
  config.withCredentials = true;
  return config;
});

axiosInstance.interceptors.response.use(
  (res) => {
    if (res.status === 200) {
      console.log("We are good to go");
    }
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default axiosInstance;
