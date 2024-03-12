import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import SalonDataDisplay from "./SalonDataDisplay";
import axiosInstance from "lib/axios";

const NearByManicure = () => {
  const [manicureData, setManicureData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/salon/Manicure");
        console.log(response.data.salons);
        setManicureData(response.data.salons);
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
          <SalonDataDisplay dataTODisplay={manicureData} />
        </Grid>
      </Grid>
    </Container>
  );
};
export default NearByManicure;
