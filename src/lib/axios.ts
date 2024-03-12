import { getAccessToken, getRefreshToken } from "Services/getTokens";
import logout from "Services/logoutService";
import { validateToken } from "Services/validateToken";
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
  (err) => {
    if (err.response) {
      const originalReq = err.config;
      if (err.response.status === 401) {
        const refresh_token = getRefreshToken();
        if (refresh_token) {
          try {
            validateToken(refresh_token);
            const access_token = getAccessToken();
            originalReq.headers.Authorization = `Bearer ${access_token}`;
            return axios(originalReq);
          } catch (error) {
            logout();
            window.location.reload();
            return Promise.reject(error);
          }
        } else {
          logout();
          window.location.reload();
          return Promise.reject(err);
        }
      }
    }
  }
);
export default axiosInstance;
