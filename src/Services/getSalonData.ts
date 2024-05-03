import ApiService from "lib/ApiService";

const getSalonData = async (category: string) => {
  const apiServiceInstance = new ApiService();
  const response = await apiServiceInstance.getData(`/salon/${category}`);
  return response.data.salons;
};
export default getSalonData;

// import axiosInstance from "lib/axios";

// const getSalonData = async (url: string) => {
//   try {
//     const response = await axiosInstance.get(`/salon/${url}`);
//     return response.data.salons;
//   } catch (error) {
//     console.log(error);
//   }
// };
// export default getSalonData;
