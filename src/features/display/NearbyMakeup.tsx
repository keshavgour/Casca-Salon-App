import React from "react";
import { Container, Grid } from "@mui/material";
import SalonDataDisplay from "./SalonDataDisplay";
import Loading from "components/Loading";
import { useQuery } from "@tanstack/react-query";
import getSalonData from "Services/getSalonData";

const NearByMakeup = () => {
  // const [makeupData, setMakeupData] = useState([]);
  const { isLoading, error, data } = useQuery({ queryKey: ["makeup"], queryFn: () => getSalonData("Makeup") });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axiosInstance.get("/salon/Makeup");
  //       console.log(response.data.salons);
  //       setMakeupData(response.data.salons);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <Container>
      {isLoading && <Loading />}
      {error && console.log("Error_Msg :", error)}
      {data && (
        <Grid container direction="column" spacing={4} alignItems="center">
          <Grid item>
            <SalonDataDisplay dataTODisplay={data} />
          </Grid>
        </Grid>
      )}
    </Container>
  );
};
export default NearByMakeup;
