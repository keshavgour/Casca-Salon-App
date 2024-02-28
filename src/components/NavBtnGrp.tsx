import React from "react";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import TextsmsRoundedIcon from "@mui/icons-material/TextsmsRounded";
import { Grid, IconButton, Typography } from "@mui/material";

export default function NavBtnGrp() {
  // btntheme.palette.primary.main

  const IconBtnStyle = {
    width: 65,
    height: 65,
    backgroundColor: "primary.light",
    color: "primary.main",
    "&:hover": {
      backgroundColor: "#FFCC80",
    },
    "@media (max-width:600px)": {
      width: 55,
      height: 55,
    },
    "@media (max-width:450px)": {
      width: 45,
      height: 45,
    },
  };
  const IconStyle = {
    fontSize: 30,
    "@media (max-width:600px)": {
      fontSize: 25,
    },
    "@media (max-width:400px)": {
      fontSize: 20,
    },
  };
  const IconBoxStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  };
  return (
    <Grid container columnSpacing={1}>
      <Grid item xs={2.4} sx={IconBoxStyle}>
        <IconButton sx={IconBtnStyle}>
          <ExploreRoundedIcon sx={IconStyle} />
        </IconButton>
        <Typography variant="h6" component="span">
          Website
        </Typography>
      </Grid>
      <Grid item xs={2.4} sx={IconBoxStyle}>
        <IconButton sx={IconBtnStyle}>
          <TextsmsRoundedIcon sx={IconStyle} />
        </IconButton>
        <Typography variant="h6" component="span">
          Message
        </Typography>
      </Grid>
      <Grid item xs={2.4} sx={IconBoxStyle}>
        <IconButton sx={IconBtnStyle}>
          <CallRoundedIcon sx={IconStyle} />
        </IconButton>
        <Typography variant="h6" component="span">
          Call
        </Typography>
      </Grid>
      <Grid item xs={2.4} sx={IconBoxStyle}>
        <IconButton sx={IconBtnStyle}>
          <LocationOnRoundedIcon sx={IconStyle} />
        </IconButton>
        <Typography variant="h6" component="span">
          Direction
        </Typography>
      </Grid>
      <Grid item xs={2.4} sx={IconBoxStyle}>
        <IconButton sx={IconBtnStyle}>
          <SendRoundedIcon sx={IconStyle} />
        </IconButton>
        <Typography variant="h6" component="span">
          Share
        </Typography>
      </Grid>
    </Grid>
  );
}
