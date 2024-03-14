import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import SalonDataDisplay from "./SalonDataDisplay";
import { useNavigate } from "react-router-dom";
import Search from "features/Search";
import BackButtonComponent from "components/BackButtonComponent";
import { useQuery } from "@tanstack/react-query";
import { salonDataService } from "Services/salonDataService";
import Loading from "components/Loading";

export const MostPopularData = () => {
  const navigate = useNavigate();

  const { isLoading, error, data } = useQuery({
    queryKey: ["mostPopularData"],
    queryFn: () => salonDataService("Haircuts"),
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    console.log(error);
  }

  const clickBack = () => {
    return navigate("/dashboard");
  };

  return (
    <Container>
      <Grid container direction="column" spacing={4} alignItems="center">
        <Grid item>
          <Grid container>
            <Grid item>
              <BackButtonComponent onClick={clickBack} />
            </Grid>
            <Grid item pt={0.4} pl={1}>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Most Popular Data
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Search />
        </Grid>
        <Grid item>
          <SalonDataDisplay dataTODisplay={data} />
        </Grid>
      </Grid>
    </Container>
  );
};
