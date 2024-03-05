import axiosInstance from "lib/axios";
export interface profileData {
  email: string;
  fullName: string;
  nickname: string;
  dateOfBirth: string;
  gender: string;
  mobileNumber: string;
}

const editProfile = async () => {
  try {
    const response = await axiosInstance.get(`/profile/getProfile`);
    if (response.data.status === "success") {
      const userData: profileData = response.data.data.userprofile;
      return userData;
    }
  } catch (error) {
    console.error("Errro fetcing data :", error);
  }
};
export default editProfile;
