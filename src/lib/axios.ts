import axios from "axios";

export const axiosBaseURL = axios.create({
  baseURL: "https://503b-163-53-201-67.ngrok-free.app/api/auth/",
});
