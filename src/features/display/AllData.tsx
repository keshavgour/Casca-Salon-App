import React from "react";
import { Container, Grid } from "@mui/material";
import SalonDataDisplay from "./SalonDataDisplay";
import Loading from "components/Loading";
import { useQuery } from "@tanstack/react-query";
import getSalonData from "Services/getSalonData";

const AllData = () => {
  const { isLoading, error, data } = useQuery({ queryKey: ["allData"], queryFn: () => getSalonData("All") });

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

export default AllData;
