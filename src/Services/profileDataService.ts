import axiosInstance from "lib/axios";

const getProfileData = async () => {
  try {
    const response = await axiosInstance.get("/users/me");
    const profileData = response.data.data;
    return profileData;
  } catch (error) {
    throw new Error("Failed to fetch data.");
  }
};
export default getProfileData;
