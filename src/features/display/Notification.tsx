import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import ToggleSwitch from "components/ToggleSwitch";
import BackBtn from "components/BackBtn";
import { flexRowStart } from "sx/FlexStyles";

const Notification = () => {
  const notificationlist = [
    "General Notification",
    "Sound",
    "Vibrate",
    "Special Offers",
    "Promo & Discount",
    "Payments",
    "Cashbacks",
    "App Updates",
    "New Service Available",
    "New Tips Available",
  ];
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
        <Grid item xs={12} sx={flexRowStart}>
          <BackBtn to="/profile" />
          <Typography variant="h4" component="span">
            Notifications
          </Typography>
        </Grid>
        {notificationlist.map((item, index) => {
          return (
            <Grid item xs={12} key={index} sx={{ marginX: "auto" }}>
              <Grid container spacing={3}>
                <Grid item xs={11}>
                  <Typography variant="body2" component="span" sx={{ color: "secondary.light" }}>
                    {item}
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <ToggleSwitch />
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
export default Notification;
