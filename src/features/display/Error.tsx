import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import SentimentVeryDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentVeryDissatisfiedOutlined";
import HomeIcon from "@mui/icons-material/Home";
import { Link as RouterLink } from "react-router-dom";
import { flexRowCenter } from "sx/FlexStyles";
export const Error = () => {
  return (
    <Container sx={flexRowCenter}>
      <Grid container width="50%">
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Typography variant="h2" component="span">
            404 Error
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Typography variant="h4" component="span">
            <SentimentVeryDissatisfiedOutlinedIcon sx={{ fontSize: "inherit" }} /> Sorry, Page Not Found
          </Typography>
        </Grid>
        <Grid item xs={12} sx={flexRowCenter}>
          <Button variant="contained" component={RouterLink} startIcon={<HomeIcon />} to="/login">
            Go Back To Login
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
