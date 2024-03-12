import React from "react";
import { Container, Grid } from "@mui/material";
import SalonDataDisplay from "./SalonDataDisplay";
import { useQuery } from "@tanstack/react-query";
import Loading from "components/Loading";
import { getAllDataService } from "Services/getAllDataService";

const AllData = () => {
  const { isLoading, error, data: allData } = useQuery({ queryKey: ["allData"], queryFn: getAllDataService });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    console.log(error);
  }

  return (
    <Container>
      <Grid container direction="column" spacing={4} alignItems="center">
        <Grid item>
          <SalonDataDisplay dataTODisplay={allData} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AllData;
