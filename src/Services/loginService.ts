import axiosInstance from "lib/axios";
import { LoginState } from "interfaces/auth_state";

type NewType = LoginState;

const login = (formData: NewType) => {
  return axiosInstance
    .post("/auth/login", formData)
    .then((response) => {
      if (response.data.access_token) {
        localStorage.setItem("access_token", JSON.stringify(response.data.access_token));
      }
      // return response.data;
    })
    .catch((error) => {
      return error;
    });
};
export default login;
