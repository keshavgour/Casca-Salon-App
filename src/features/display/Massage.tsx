import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import SalonDataDisplay from "./SalonDataDisplay";
import { useNavigate } from "react-router-dom";
import Search from "features/Search";
import BackButtonComponent from "components/BackButtonComponent";
import axiosInstance from "lib/axios";
import { useQuery } from "@tanstack/react-query";
import Loading from "components/Loading";

export const getMassageData = async () => {
  const response = await axiosInstance.get("/salon/Massage");
  return response.data.salons;
};

export const Massage = () => {
  const navigate = useNavigate();

  const { isLoading, error, data: massageData } = useQuery({ queryKey: ["massageData"], queryFn: getMassageData });

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    console.log(error.message);
  }

  const clickBack = () => {
    return navigate("/dashboard");
  };

  return (
    <Container>
      <Grid container direction="column" spacing={4} alignItems="center">
        <Grid item>
          <Grid container>
            <Grid item>
              <BackButtonComponent onClick={clickBack} />
            </Grid>
            <Grid item pt={0.4} pl={1}>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Massage
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Search />
        </Grid>
        <Grid item>
          <SalonDataDisplay dataTODisplay={massageData} />
        </Grid>
      </Grid>
    </Container>
  );
};

//const massageData = [
//   {
//     id: 1,
//     name: "Comb Together",
//     address: "883 Jackson Hill",
//     distance: 8.4,
//     rating: 4.1,
//     image:
//       "https://w7.pngwing.com/pngs/567/478/png-transparent-manual-therapy-massage-facial-physical-therapy-massage-miscellaneous-face-service-thumbnail.png",
//   },
//   {
//     id: 2,
//     name: "Hairbreak",
//     address: "0093 Novick Parkway",
//     distance: 1.2,
//     rating: 4.8,
//     image:
//       "https://banner2.cleanpng.com/20180816/tce/kisspng-green-spa-massage-spa-thai-massage-shear-eleganc-shear-elegance-salon-amp-spa-registered-massage-5b75835e981cd0.7498548915344279986231.jpg",
//   },
//   {
//     id: 3,
//     name: "Massage Parlor",
//     address: "42 Fordem Avenue",
//     distance: 1.4,
//     rating: 4.9,
//     image: "https://i.pinimg.com/736x/0d/98/13/0d981340ef172234a2b0d6d50b480625.jpg",
//   },
//   {
//     id: 4,
//     name: "Dreadlocks",
//     address: "813 Village Drive",
//     distance: 3.4,
//     rating: 4.6,
//     image:
//       "https://www.heaventherapy.co.uk/files/2019/05/x22.jpg.pagespeed.gp+jp+pj+ws+js+rj+rp+ri+rm+cp+md+im=20.ic._V5xbe9rOT.jpg",
//   },
//   {
//     id: 5,
//     name: "Massage Salon",
//     address: "88 Commercial Plaza",
//     distance: 4.2,
//     rating: 4.0,
//     image: "https://naomisheadmasters.com/wp-content/uploads/2023/07/Beauty-Salons-For-Men-In-Panchkula.jpg",
//   },
// ];
