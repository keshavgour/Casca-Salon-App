import React from "react";
import { Grid } from "@mui/material";
import SalonDataDisplay from "./SalonDataDisplay";
import { useQuery } from "@tanstack/react-query";
import Loading from "components/Loading";
import getSalonData from "Services/getSalonData";

const NearByHaircuts = () => {
  // const [haircutData, setHaircutData] = useState([]);
  const { isLoading, error, data } = useQuery({ queryKey: ["haircuts"], queryFn: () => getSalonData("Haircuts") });
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axiosInstance.get("/salon/Haircuts");
  //       console.log(response.data.salons);
  //       setHaircutData(response.data.salons);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  return (
    <>
      {isLoading && <Loading />}
      {error && console.log("Error_Msg :", error)}
      {data && (
        <Grid container direction="column" spacing={4} alignItems="center">
          <Grid item>
            <SalonDataDisplay dataTODisplay={data} />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default NearByHaircuts;
