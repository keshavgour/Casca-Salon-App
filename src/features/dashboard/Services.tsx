import React from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import BrushIcon from "@mui/icons-material/Brush";
import SpaIcon from "@mui/icons-material/Spa";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import { useNavigate } from "react-router-dom";
import { flexColCenter } from "sx/FlexStyles";

export const Services = () => {
  const navigate = useNavigate();

  const clickHaircuts = () => {
    return navigate("/haircuts");
  };
  const clickMakeup = () => {
    return navigate("/makeup");
  };

  const clickManicure = () => {
    return navigate("/manicure");
  };

  const clickMassage = () => {
    return navigate("/massage");
  };

  return (
    <Grid container>
      <Grid item xs={3} sx={flexColCenter}>
        <IconButton sx={{ backgroundColor: "primary.light" }} onClick={clickHaircuts}>
          <ContentCutIcon fontSize="large" sx={{ color: "primary.main" }} />
        </IconButton>
        <Typography variant="button" component="span">
          Haircuts
        </Typography>
      </Grid>
      <Grid item xs={3} sx={flexColCenter}>
        <IconButton sx={{ backgroundColor: "primary.light" }} onClick={clickMakeup}>
          <BrushIcon fontSize="large" sx={{ color: "primary.main" }} />
        </IconButton>
        <Typography variant="button" component="span">
          Make up
        </Typography>
      </Grid>
      <Grid item xs={3} sx={flexColCenter}>
        <IconButton sx={{ backgroundColor: "primary.light" }} onClick={clickManicure}>
          <SpaIcon fontSize="large" sx={{ color: "primary.main" }} />
        </IconButton>
        <Typography variant="button" component="span">
          Manicure
        </Typography>
      </Grid>
      <Grid item xs={3} sx={flexColCenter}>
        <IconButton sx={{ backgroundColor: "primary.light" }} onClick={clickMassage}>
          <FaceRetouchingNaturalIcon fontSize="large" sx={{ color: "primary.main" }} />
        </IconButton>
        <Typography variant="button" component="span">
          Massage
        </Typography>
      </Grid>
    </Grid>
  );
};
