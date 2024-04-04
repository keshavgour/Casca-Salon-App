import axiosInstance from "lib/axios";

const updatePasswordService = (password: string, passwordConfirm: string) => {
  const resetToken = localStorage.getItem("resetToken");
  const response = axiosInstance.patch(`/auth/resetPassword/${resetToken}`, { password, passwordConfirm });
  return response;
};

export default updatePasswordService;
