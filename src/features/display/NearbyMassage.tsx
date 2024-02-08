import React from "react";
import { Grid } from "@mui/material";

import SalonDataDisplay from "features/display/SalonDataDisplay";

const NearByMassage = () => {
  const nearbyMassageData = [
    {
      id: 1,
      shopName: "Comb Together",
      address: "883 Jackson Hill",
      distance: 8.4,
      rating: 4.1,
      imageURL:
        "https://w7.pngwing.com/pngs/567/478/png-transparent-manual-therapy-massage-facial-physical-therapy-massage-miscellaneous-face-service-thumbnail.png",
    },
    {
      id: 2,
      shopName: "Hairbreak",
      address: "0093 Novick Parkway",
      distance: 1.2,
      rating: 4.8,
      imageURL:
        "https://banner2.cleanpng.com/20180816/tce/kisspng-green-spa-massage-spa-thai-massage-shear-eleganc-shear-elegance-salon-amp-spa-registered-massage-5b75835e981cd0.7498548915344279986231.jpg",
    },
    {
      id: 3,
      shopName: "Massage Parlor",
      address: "42 Fordem Avenue",
      distance: 1.4,
      rating: 4.9,
      imageURL: "https://i.pinimg.com/736x/0d/98/13/0d981340ef172234a2b0d6d50b480625.jpg",
    },
    {
      id: 4,
      shopName: "Dreadlocks",
      address: "813 Village Drive",
      distance: 3.4,
      rating: 4.6,
      imageURL:
        "https://www.heaventherapy.co.uk/files/2019/05/x22.jpg.pagespeed.gp+jp+pj+ws+js+rj+rp+ri+rm+cp+md+im=20.ic._V5xbe9rOT.jpg",
    },
    {
      id: 5,
      shopName: "Massage Salon",
      address: "88 Commercial Plaza",
      distance: 4.2,
      rating: 4.0,
      imageURL:
        "https://naomisheadmasters.com/wp-content/uploads/2023/07/Beauty-Salons-For-Men-In-Panchkula.jpg",
    },
  ];

  return (
    <Grid>
      <SalonDataDisplay dataTODisplay={nearbyMassageData} />
    </Grid>
  );
};

export default NearByMassage;
