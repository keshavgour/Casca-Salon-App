import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import BackBtn from "components/BackBtn";
import ToggleSwitch from "components/ToggleSwitch";
import ForwardArrowBtn from "components/ForwardArrowBtn";
import BlockBtn from "components/BlockBtn";

export const Security = () => {
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
            Security
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={11}>
              <Typography variant="infoTypo1" component="span">
                Remember me
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
                Face ID
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
                Biometric ID
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
                Google Authenticator
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <ForwardArrowBtn to="" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <BlockBtn btnText="Change Password" btnSubText="" />
    </Container>
  );
};
