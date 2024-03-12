import axiosInstance from "lib/axios";

const getSalonData = async (url: string) => {
  try {
    const response = await axiosInstance.get(`/salon/${url}`);
    return response.data.salons;
  } catch (error) {
    console.log(error);
  }
};
export default getSalonData;
