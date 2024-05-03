import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import SalonDataDisplay from "./SalonDataDisplay";
import { useNavigate } from "react-router-dom";
import Search from "features/Search";
import BackButtonComponent from "components/BackButtonComponent";
import Loading from "components/Loading";
import { useManicureDataService } from "hooks/useManicureDataService";

export const Manicure = () => {
  const navigate = useNavigate();

  const { isLoading, error, data } = useManicureDataService();

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
                Manicure
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

// const manicureData = [
//   {
//     id: 1,
//     name: "Barbarella",
//     address: "88 Commercial Plaza",
//     distance: 4.2,
//     rating: 4.0,
//     image:
//       "https://w7.pngwing.com/pngs/568/354/png-transparent-purple-nail-polish-nail-salon-manicure-day-spa-pedicure-pedicure-hand-cosmetics-hair.png",
//   },
//   {
//     id: 2,
//     name: "The Goodbarber",
//     address: "813 Village Drive",
//     distance: 3.4,
//     rating: 4.6,
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbia6RVzBMILx79777-bksBo5dKazrG_uKmQ&usqp=CAU",
//   },
//   {
//     id: 3,
//     name: "By the Blade",
//     address: "883 Jackson Hill",
//     distance: 8.4,
//     rating: 4.1,
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx-Br7r24jEHVRwxvv0Y0pTG34jc1cf4GSbw&usqp=CAU",
//   },
//   {
//     id: 4,
//     name: "Amnesia",
//     address: "0093 Novick Parkway",
//     distance: 1.2,
//     rating: 4.8,
//     image:
//       "https://img.favpng.com/0/19/11/pedicure-manicure-nail-salon-beauty-parlour-png-favpng-m7cTeGwQiEWL7MngGbTMyhkPL.jpg",
//   },
//   {
//     id: 5,
//     name: "Flo Cutters",
//     address: "42 Fordem Avenue",
//     distance: 1.4,
//     rating: 4.9,
//     image: "https://img.freepik.com/free-photo/client-doing-hair-cut-barber-shop-salon_1303-20710.jpg",
//   },
// ];
