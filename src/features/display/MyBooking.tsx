import React from "react";
import { AppBar, Container, Grid } from "@mui/material";
import { Navbar } from "features/dashboard";

const MyBooking = () => {
  return (
    <Container>
      s
      <Grid container>
        <Grid item>
          <AppBar position="fixed" sx={{ backgroundColor: "white" }}>
            <Navbar pageHeading="My Booking" />
          </AppBar>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MyBooking;
