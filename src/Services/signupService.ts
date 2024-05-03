import { urlConstants } from "constants/urlConstants";
import ApiService from "lib/ApiService";
import { SignupState } from "store/slices/signupSlice";

export const signupService = (formData: SignupState) => {
  const apiServiceInstance = new ApiService();
  const response = apiServiceInstance.postData(urlConstants.SIGNUP_URL, formData);
  return response;
};

// import axiosInstance from "lib/axios";
// import { SignupState } from "store/slices/signupSlice";

// export const signupService = async (formData: SignupState) => {
//   try {
//     const res = await axiosInstance.post("/auth/register", formData);
//     return res.data;
//   } catch (error) {
//     throw new Error("Failed to register");
//   }
// };
