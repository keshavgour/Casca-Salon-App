import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import SalonDataDisplay from "./SalonDataDisplay";
import axiosInstance from "lib/axios";

const NearByMakeup = () => {
  const [makeupData, setMakeupData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/salon/Makeup");
        console.log(response.data.salons);
        setMakeupData(response.data.salons);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Grid container direction="column" spacing={4} alignItems="center">
        <Grid item>
          <SalonDataDisplay dataTODisplay={makeupData} />
        </Grid>
      </Grid>
    </Container>
  );
};
export default NearByMakeup;
