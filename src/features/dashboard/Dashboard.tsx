import React from "react";
import { AppBar, Container, Grid } from "@mui/material";
import { Navbar } from "./Navbar";
import Search from "features/Search";
import { Services } from "features/dashboard/Services";
import CarouselData from "features/dashboard/CarouselData";
import { Nearby } from "features/dashboard/Nearby";
import { WelcomeMessage } from "features/dashboard/WelcomeMessage";
import BottomNavbar from "components/BottomNavbar";

export const Dashboard = () => {
  return (
    <Container>
      <AppBar position="fixed" sx={{ backgroundColor: "white", px: 2 }}>
        <Navbar />
      </AppBar>
      <Grid container rowSpacing={2} sx={{ marginTop: 12, p: 1 }}>
        <Grid item xs={12}>
          <WelcomeMessage />
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Search />
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <CarouselData />
        </Grid>
        <Grid item xs={12}>
          <Services />
        </Grid>
        <Grid item xs={12}>
          <Nearby typographyData="Nearby Your Location" />
        </Grid>
        <Grid item xs={12}>
          <Nearby typographyData="Most Popular" />
        </Grid>
        {/* <Grid item> 
        <MostPopularData />
        </Grid> */}
      </Grid>
      <AppBar
        position="fixed"
        sx={{
          display: { xs: "block", sm: "none", md: "none", lg: "none" },
          top: "auto",
          bottom: 0,
          backgroundColor: "white",
        }}
      >
        <BottomNavbar />
      </AppBar>
    </Container>
  );
};
