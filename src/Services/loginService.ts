import { urlConstants } from "constants/urlConstants";
import { IRequestLogin } from "interfaces/interfaceLogin";
import ApiService from "lib/ApiService";

export const loginService = async (formData: IRequestLogin) => {
  const apiServiceInstance = new ApiService();

  const response = await apiServiceInstance.postData(urlConstants.LOGIN_URL, formData);
  return response;
};

// import axiosInstance from "lib/axios";
// import { LoginState } from "interfaces/auth_state";

// export const loginService = async (formData: LoginState) => {
//   const res = await axiosInstance.post("/auth/login", formData);
//   return res.data;
// };
