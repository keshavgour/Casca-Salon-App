import axiosInstance from "lib/axios";
import { RegistrationState } from "interfaces/auth_state";

const signup = (formData: RegistrationState) => {
  return axiosInstance.post("/auth/register", formData).then((response) => {
    if (response.data.access_token) {
      localStorage.setItem("userLogin", JSON.stringify(response.data));
    }
    return response.data;
  });
};
export default signup;
