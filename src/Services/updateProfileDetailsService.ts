import ProfileState from "interfaces/profileStateInterface";
import axiosInstance from "lib/axios";

const updateProfileDetails = async (id: string, updatedDetails: ProfileState) => {
  try {
    const response = await axiosInstance.patch(`/profile/${id}`, updatedDetails);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
};
export default updateProfileDetails;
