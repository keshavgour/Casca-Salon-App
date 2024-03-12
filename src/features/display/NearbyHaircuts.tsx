import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import SalonDataDisplay from "./SalonDataDisplay";
import axiosInstance from "lib/axios";

const NearByHaircuts = () => {
  const [haircutData, setHaircutData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/salon/Haircuts");
        console.log(response.data.salons);
        setHaircutData(response.data.salons);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Grid container direction="column" spacing={4} alignItems="center">
      <Grid item>
        <SalonDataDisplay dataTODisplay={haircutData} />
      </Grid>
    </Grid>
  );
};

export default NearByHaircuts;
