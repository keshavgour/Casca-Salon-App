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

// import axiosInstance from "lib/axios";
// import { RegistrationState } from "interfaces/auth_state";

// const signup = (formData: RegistrationState) => {
//   return axiosInstance.post("/auth/register", formData).then((response) => {
//     if (response.data.access_token) {
//       localStorage.setItem("userLogin", JSON.stringify(response.data));
//     }
//     return response.data;
//   });
// };
// export default signup;
