import axiosInstance from "lib/axios";

const forgotPasswordService = async (email: string) => {
  const response = await axiosInstance.post("/auth/sendOTPByEmail", { email });
  return response;
};

export default forgotPasswordService;
