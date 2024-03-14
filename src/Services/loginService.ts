import axiosInstance from "lib/axios";
import { LoginState } from "interfaces/auth_state";

type NewType = LoginState;

export const loginService = async (formData: NewType) => {
  try {
    const res = await axiosInstance.post("/auth/login", formData);
    return res.data;
  } catch (error) {
    throw new Error("Failed to log in");
  }
};
