import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://ec2-13-232-214-55.ap-south-1.compute.amazonaws.com:3000/api/",
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
  async (err) => {
    const originalRequest = err.config;
    if (err.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refresh_token = localStorage.getItem("refresh_token");
        const response = await axiosInstance.post("/auth/refresh", { refresh_token });
        console.log(response);
        const access_token = response.data;

        localStorage.setItem("access_token", access_token);

        originalRequest.headers.Authorization = `Bearer ${access_token}`;
        return axios(originalRequest);
      } catch (error) {
        console.log(error);
      }
    }
    return Promise.reject(err);
  }
);

export default axiosInstance;
