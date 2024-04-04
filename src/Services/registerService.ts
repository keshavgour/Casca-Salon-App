import axiosInstance from "lib/axios";
import { RegistrationState } from "store/slices/registrationSlice";

export const registerService = (formData: RegistrationState) => {
  const response = axiosInstance.post("/auth/signup", formData);
  return response;
};
