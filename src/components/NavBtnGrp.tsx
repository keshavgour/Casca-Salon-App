import React from "react";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import TextsmsRoundedIcon from "@mui/icons-material/TextsmsRounded";
import { Grid, IconButton, Typography } from "@mui/material";
import { iconButton } from "sx/IconButton";
import { flexColCenter } from "sx/FlexStyles";

const NavBtnGrp = () => {
  return (
    <Grid container spacing={2} marginY={1}>
      <Grid item xs={2.4} sx={flexColCenter}>
        <IconButton sx={iconButton}>
          <ExploreRoundedIcon fontSize="medium" />
        </IconButton>
        <Typography variant="button" component="span">
          Website
        </Typography>
      </Grid>
      <Grid item xs={2.4} sx={flexColCenter}>
        <IconButton sx={iconButton}>
          <TextsmsRoundedIcon fontSize="medium" />
        </IconButton>
        <Typography variant="button" component="span">
          Message
        </Typography>
      </Grid>
      <Grid item xs={2.4} sx={flexColCenter}>
        <IconButton sx={iconButton}>
          <CallRoundedIcon fontSize="medium" />
        </IconButton>
        <Typography variant="button" component="span">
          Call
        </Typography>
      </Grid>
      <Grid item xs={2.4} sx={flexColCenter}>
        <IconButton sx={iconButton}>
          <LocationOnRoundedIcon fontSize="medium" />
        </IconButton>
        <Typography variant="button" component="span">
          Direction
        </Typography>
      </Grid>
      <Grid item xs={2.4} sx={flexColCenter}>
        <IconButton sx={iconButton}>
          <SendRoundedIcon fontSize="medium" />
        </IconButton>
        <Typography variant="button" component="span">
          Share
        </Typography>
      </Grid>
    </Grid>
  );
};
export default NavBtnGrp;
