import React from "react";
import { Grid } from "@mui/material";

import SalonDataDisplay from "features/display/SalonDataDisplay";

const NearByManicure = () => {
  const nearbyManicureData = [
    {
      id: 1,
      shopName: "Barbarella",
      address: "88 Commercial Plaza",
      distance: 4.2,
      rating: 4.0,
      imageURL:
        "https://w7.pngwing.com/pngs/568/354/png-transparent-purple-nail-polish-nail-salon-manicure-day-spa-pedicure-pedicure-hand-cosmetics-hair.png",
    },
    {
      id: 2,
      shopName: "The Goodbarber",
      address: "813 Village Drive",
      distance: 3.4,
      rating: 4.6,
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbia6RVzBMILx79777-bksBo5dKazrG_uKmQ&usqp=CAU",
    },
    {
      id: 3,
      shopName: "By the Blade",
      address: "883 Jackson Hill",
      distance: 8.4,
      rating: 4.1,
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx-Br7r24jEHVRwxvv0Y0pTG34jc1cf4GSbw&usqp=CAU",
    },
    {
      id: 4,
      shopName: "Amnesia",
      address: "0093 Novick Parkway",
      distance: 1.2,
      rating: 4.8,
      imageURL:
        "https://img.favpng.com/0/19/11/pedicure-manicure-nail-salon-beauty-parlour-png-favpng-m7cTeGwQiEWL7MngGbTMyhkPL.jpg",
    },
    {
      id: 5,
      shopName: "Flo Cutters",
      address: "42 Fordem Avenue",
      distance: 1.4,
      rating: 4.9,
      imageURL:
        "https://img.freepik.com/free-photo/client-doing-hair-cut-barber-shop-salon_1303-20710.jpg",
    },
  ];

  return (
    <Grid>
      <SalonDataDisplay dataTODisplay={nearbyManicureData} />
    </Grid>
  );
};

export default NearByManicure;
