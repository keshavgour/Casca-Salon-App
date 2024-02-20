import axiosInstance from "lib/axios";

const editProfile = () => {
  const response = axiosInstance.get("/user/me");
  return response;
};
export default editProfile;
