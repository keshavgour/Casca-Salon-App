import ApiService from "lib/ApiService";

export const salonDataService = async (category: string) => {
  const apiServiceInstance = new ApiService();
  const response = await apiServiceInstance.getData(`/salon/${category}`);
  return response.data.salons;
};

// import axiosInstance from "lib/axios";

// export const salonDataService = async (category: string) => {
//   const response = await axiosInstance.get(`/salon/${category}`);
//   console.log(response);
//   return response.data.salons;
// };
