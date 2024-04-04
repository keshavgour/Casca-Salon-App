import axiosInstance from "lib/axios";

const otpVerificationService = async (email: string, otp: string) => {
  const response = await axiosInstance.post("/auth/verifyOTPSendByEmail", { email, otp });
  return response;
};

export default otpVerificationService;
