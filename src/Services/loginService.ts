import axiosInstance from "lib/axios";
import { LoginState } from "interfaces/auth_state";

export const loginService = async (formData: LoginState) => {
  try {
    const res = await axiosInstance.post("/auth/login", formData);
    return res.data;
  } catch (error) {
    throw new Error("Failed to log in");
  }
};
