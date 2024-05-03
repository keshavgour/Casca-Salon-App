import { urlConstants } from "constants/urlConstants";
import { RegistrationState } from "interfaces/auth_state";
import ApiService from "lib/ApiService";

export const registerService = async (formData: RegistrationState) => {
  const apiServiceInstance = new ApiService();
  const response = await apiServiceInstance.postData(urlConstants.REGISTER_URL, formData);
  return response;
};

// import axiosInstance from "lib/axios";
// import { RegistrationState } from "store/slices/registrationSlice";

// export const registerService = (formData: RegistrationState) => {
//   const response = axiosInstance.post("/auth/signup", formData);
//   return response;
// };
