import axiosInstance from "lib/axios";
import { SignupState } from "store/slices/signupSlice";

type NewType = SignupState;

export const signupService = async (formData: NewType) => {
  try {
    const res = await axiosInstance.post("/auth/register", formData);
    return res.data;
  } catch (error) {
    throw new Error("Failed to register");
  }
};
