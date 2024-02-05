import { Grid } from "@mui/material";
import React from "react";
import Carousels from "features/Carousels";

const CarouselData = () => {
  const items = [
    {
      name: "Shree Ram Mandir Pran Pratishta Mahotsav",
      description: "Get flat discount on every order!",
      validity: "Only valid for today!",
      discount: "90%",
    },
    {
      name: "Today's Special",
      description: "Get a discount for every service order!",
      validity: "Only valid for today!",
      discount: "30%",
    },
    {
      name: "Deepawali Special",
      description: "Please use the coupon to avail discount!",
      validity: "Only valid for today!",
      discount: "60%",
    },
  ];
  return (
    <Grid>
      <Carousels items={items} />
    </Grid>
  );
};

export default CarouselData;
