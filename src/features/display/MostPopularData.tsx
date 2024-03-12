import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import SalonDataDisplay from "./SalonDataDisplay";
import { useNavigate } from "react-router-dom";
import Search from "features/Search";
import BackButtonComponent from "components/BackButtonComponent";
import axiosInstance from "lib/axios";

export const MostPopularData = () => {
  const navigate = useNavigate();
  const [mostPopularData, setMostPopularData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/salon/Haircuts");
        console.log(response.data.salons);
        setMostPopularData(response.data.salons);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

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
          <SalonDataDisplay dataTODisplay={mostPopularData} />
        </Grid>
      </Grid>
    </Container>
  );
};
