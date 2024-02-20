import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import BackBtn from "components/BackBtn";
import ToggleSwitch from "components/ToggleSwitch";

const Notification = () => {
  return (
    <Container
      sx={{
        minWidth: "320px",
        maxWidth: "1080px",
        boxSizing: "border-box",
        marginX: "auto",
      }}
    >
      <Grid container rowSpacing={3}>
        <Grid item xs={12}>
          <Typography variant="titleTypo" component="span">
            <BackBtn to="/profile" />
            Notification
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={11}>
              <Typography variant="infoTypo1" component="span">
                General Notification
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <ToggleSwitch />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={11}>
              <Typography variant="infoTypo1" component="span">
                Sound
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <ToggleSwitch />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={11}>
              <Typography variant="infoTypo1" component="span">
                Vibrate
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <ToggleSwitch />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={11}>
              <Typography variant="infoTypo1" component="span">
                Special Offers
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <ToggleSwitch />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={11}>
              <Typography variant="infoTypo1" component="span">
                Promo & Discount
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <ToggleSwitch />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={11}>
              <Typography variant="infoTypo1" component="span">
                Payments
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <ToggleSwitch />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={11}>
              <Typography variant="infoTypo1" component="span">
                Cashbacks
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <ToggleSwitch />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={11}>
              <Typography variant="infoTypo1" component="span">
                App Updates
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <ToggleSwitch />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={11}>
              <Typography variant="infoTypo1" component="span">
                New Service Available
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <ToggleSwitch />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={11}>
              <Typography variant="infoTypo1" component="span">
                New Tips Available
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <ToggleSwitch />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Notification;
