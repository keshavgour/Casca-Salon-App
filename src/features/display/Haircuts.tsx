import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import SalonDataDisplay from "./SalonDataDisplay";
import { useNavigate } from "react-router-dom";
import Search from "features/Search";
import BackButtonComponent from "components/BackButtonComponent";
import Loading from "components/Loading";
import { useAllDataService } from "hooks/useAllDataService";

export const Haircuts = () => {
  const navigate = useNavigate();

  const { isLoading, error, data } = useAllDataService("Haircuts");
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
                Haircuts
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Search />
        </Grid>
        <Grid item>
          <SalonDataDisplay dataTODisplay={data} />
        </Grid>
      </Grid>
    </Container>
  );
};

// const haircutData = [
//   {
//     id: 1,
//     shopName: "That's Cut",
//     address: "883 Jackson Hill",
//     distance: 8.4,
//     rating: 4.1,
//     imageURL:
//       "https://img.freepik.com/free-photo/female-hairdresser-using-hairbrush-hair-dryer_329181-1929.jpg",
//   },
//   {
//     id: 2,
//     shopName: "Belle Curls",
//     address: "0093 Novick Parkway",
//     distance: 1.2,
//     rating: 4.8,
//     imageURL:
//       "https://img.freepik.com/premium-photo/shooting-beauty-salon-barber-cuts-hair-little-boy-with-machine_137321-1649.jpg",
//   },
//   {
//     id: 3,
//     shopName: "Pretty Parlor",
//     address: "42 Fordem Avenue",
//     distance: 1.4,
//     rating: 4.9,
//     imageURL:
//       "https://img.freepik.com/free-photo/client-doing-hair-cut-barber-shop-salon_1303-20710.jpg",
//   },
//   {
//     id: 4,
//     shopName: "Hair Force",
//     address: "813 Village Drive",
//     distance: 3.4,
//     rating: 4.6,
//     imageURL: "https://imgmedia.lbb.in/media/2023/06/64880efb156ecf24a1e150bb_1686638331890.jpg",
//   },
//   {
//     id: 5,
//     shopName: "Serenity Salon",
//     address: "88 Commercial Plaza",
//     distance: 4.2,
//     rating: 4.0,
//     imageURL:
//       "https://naomisheadmasters.com/wp-content/uploads/2023/07/Beauty-Salons-For-Men-In-Panchkula.jpg",
//   },
// ];
