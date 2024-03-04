import React from "react";
import { Grid } from "@mui/material";
import allSalon from "temp-object-file/AllSalon";
// import SalonDataDisplay from "features/display/SalonDataDisplay";
import CardsSaloonData from "components/CardsSaloonData";

const AllData = () => {
  return (
    <Grid container spacing={2}>
      {/* <SalonDataDisplay dataTODisplay={allSalon} /> */}
      {allSalon.map((item) => {
        return (
          <Grid item xs={12} key={item.id}>
            <CardsSaloonData
              id={item.id}
              imageURL={item.imageURL}
              shopName={item.shopName}
              address={item.address}
              distance={item.distance}
              rating={item.rating}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default AllData;
