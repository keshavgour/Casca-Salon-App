import axios, { AxiosInstance } from "axios";
import { urlConstants } from "constants/urlConstants";

class ApiService {
  private httpClient: AxiosInstance;

  constructor() {
    this.httpClient = axios.create({
      baseURL: urlConstants.BASE_URL,
    });
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
}

export default ApiService;
