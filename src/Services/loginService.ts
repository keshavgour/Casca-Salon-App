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

// const login = (formData: NewType) => {
//   const navigate = useNavigate();
//   return axiosInstance
//     .post("/auth/login", formData)
//     .then((response) => {
//       if (response.data.access_token && response.status === 200) {
//         localStorage.setItem("access_token", JSON.stringify(response.data.access_token));
//         navigate("/dashboard");
//       }
//       return response.data;
//     })
//     .catch((error) => {
//       return error;
//     });
// };
// export default login;
