import React from "react";
import { AppBar, Container, Grid } from "@mui/material";
import { Navbar } from "features/dashboard";

export const Explore = () => {
  return (
    <Container>
      <Grid container>
        <Grid item>
          <AppBar position="fixed" sx={{ backgroundColor: "white" }}>
            <Navbar pageHeading="Explore" />
          </AppBar>
        </Grid>
      </Grid>
    </Container>
  );
};
