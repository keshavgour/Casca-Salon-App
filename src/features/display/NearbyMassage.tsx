import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import SalonDataDisplay from "./SalonDataDisplay";
import axiosInstance from "lib/axios";

const NearByMassage = () => {
  const [massageData, setMassageData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/salon/Massage");
        console.log(response.data.salons);
        setMassageData(response.data.salons);
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
          <SalonDataDisplay dataTODisplay={massageData} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default NearByMassage;
