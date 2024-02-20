import axiosInstance from "lib/axios";

interface ProfileState {
  profilePic: string;
  nikname: string;
  emailId: string;
}
const fetchProfileData = async (): Promise<ProfileState> => {
  try {
    const token = localStorage.getItem("access_token");
    const response = await axiosInstance.get<ProfileState>(`users/me/${token}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch data.");
  }
};
export default fetchProfileData;
