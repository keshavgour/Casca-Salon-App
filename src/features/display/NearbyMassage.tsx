import React from "react";
import { Container, Grid } from "@mui/material";
import SalonDataDisplay from "./SalonDataDisplay";
import { useQuery } from "@tanstack/react-query";
import getSalonData from "Services/getSalonData";
import Loading from "components/Loading";

const NearByMassage = () => {
  // const [massageData, setMassageData] = useState([]);
  const { isLoading, error, data } = useQuery({ queryKey: ["makeup"], queryFn: () => getSalonData("Massage") });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axiosInstance.get("/salon/Massage");
  //       console.log(response.data.salons);
  //       setMassageData(response.data.salons);
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

export default NearByMassage;
