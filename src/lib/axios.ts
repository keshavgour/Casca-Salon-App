import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://ec2-13-232-94-38.ap-south-1.compute.amazonaws.com:3000/api/",
});

const token = localStorage.getItem("access_token");
axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${token}`;
  config.headers["Content-Type"] = "application/json";
  config.withCredentials = true;
  return config;
});

// axiosInstance.interceptors.response.use(
//   (res) => {
//     if (res.status === 200) {
//       console.log("We are good to go");
//     }
//     return res;
//   },
//   (err) => {
//     return Promise.reject(err);
//   }
// );

export default axiosInstance;
