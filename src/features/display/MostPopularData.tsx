import React from "react";
import { Grid } from "@mui/material";
import SalonDataDisplay from "features/display/SalonDataDisplay";

const MostPopularData = () => {
  const mostPopularSalon = [
    {
      id: 1,
      shopName: "Hair Force",
      address: "813 Village Drive",
      distance: 3.4,
      rating: 4.6,
      imageURL: "https://imgmedia.lbb.in/media/2023/06/64880efb156ecf24a1e150bb_1686638331890.jpg",
    },
    {
      id: 2,
      shopName: "Serenity Salon",
      address: "88 Commercial Plaza",
      distance: 4.2,
      rating: 4.0,
      imageURL:
        "https://naomisheadmasters.com/wp-content/uploads/2023/07/Beauty-Salons-For-Men-In-Panchkula.jpg",
    },
    {
      id: 3,
      shopName: "The Razor's Edge",
      address: "54 Artisan Avenue",
      distance: 4.5,
      rating: 4.6,
      imageURL: "https://www.anitasmakeover.com/images/salon.JPG",
    },
  ];

  return (
    <Grid>
      <SalonDataDisplay dataTODisplay={mostPopularSalon} />
    </Grid>
  );
};

export default MostPopularData;
