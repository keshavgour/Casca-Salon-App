import { getAccessToken, getRefreshToken } from "Services/getTokens";
import logout from "Services/logoutService";
import { validateToken } from "Services/validateToken";
import axios, { AxiosInstance } from "axios";
import { urlConstants } from "constants/urlConstants";

class ApiService {
  private httpClient: AxiosInstance;

  constructor() {
    this.httpClient = axios.create({
      baseURL: urlConstants.BASE_URL,
    });
    this.setupInterceptors();
  }

  private setupInterceptors() {
    const token = localStorage.getItem("access_token");

    this.httpClient.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers["Content-Type"] = "application/json";
      config.withCredentials = true;
      return config;
    });

    this.httpClient.interceptors.response.use(
      (res) => {
        console.log("", res);
        if (res.status === 200) {
          console.log("We are good to go");
        }
        return res;
      },
      (err) => {
        console.log("erroraxios", err);
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
          throw err;
        }
        throw err;
      }
    );
  }

  async postData<Trequest>(url: string, data: Trequest) {
    try {
      const response = await this.httpClient.post(url, data);
      return response.data;
    } catch (error) {
      console.log("Api service", error);
      if (axios.isAxiosError(error) && error.response && error.response.data && error.response.data.message) {
        throw error.response.data.message;
      } else {
        throw new Error("Failed to log in");
      }
    }
  }

  async getData(url: string) {
    try {
      const response = await this.httpClient.get(url);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default ApiService;
