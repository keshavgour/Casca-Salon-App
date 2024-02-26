import axiosInstance from "lib/axios";

const editProfile = async () => {
  try {
    const response = await axiosInstance.get(`/profile/getProfile`);
    console.log(response.data.userprofile);
    return response.data.userprofile;
  } catch (error) {
    console.error("Errro fetcing data :", error);
  }
};
export default editProfile;
