import axiosInstance from "lib/axios";
import ProfileState from "interfaces/profileStateInterface";

const getProfileDetails = async () => {
  try {
    const response = await axiosInstance.get(`/profile/getProfile`);
    if (response.data.status === "success") {
      const userData: ProfileState = response.data.data.userprofile;
      return userData;
    }
  } catch (error) {
    console.error("Errro fetcing data :", error);
  }
};
export default getProfileDetails;
