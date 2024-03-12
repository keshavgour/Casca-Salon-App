import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import SalonDataDisplay from "./SalonDataDisplay";
import axiosInstance from "lib/axios";

const AllData = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/salon/All");
        console.log(response.data.salons);
        setAllData(response.data.salons);
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
          <SalonDataDisplay dataTODisplay={allData} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AllData;
