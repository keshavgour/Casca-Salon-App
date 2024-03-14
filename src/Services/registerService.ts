import axiosInstance from "lib/axios";
import { RegistrationState } from "store/slices/registrationSlice";

type NewType = RegistrationState;

export const registerService = (formData: NewType) => {
  const response = axiosInstance.post("/auth/signup", formData);
  return response;
};

