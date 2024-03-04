import React from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import BrushIcon from "@mui/icons-material/Brush";
import SpaIcon from "@mui/icons-material/Spa";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import { useNavigate } from "react-router-dom";

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
      <Grid item xs={3} sx={{ textAlign: "center" }}>
        <IconButton sx={{ backgroundColor: "primary.light" }} onClick={clickHaircuts}>
          <ContentCutIcon fontSize="large" sx={{ color: "primary.main" }} />
        </IconButton>
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          Haircuts
        </Typography>
      </Grid>
      <Grid item xs={3} sx={{ textAlign: "center" }}>
        <IconButton sx={{ backgroundColor: "primary.light" }} onClick={clickMakeup}>
          <BrushIcon fontSize="large" sx={{ color: "primary.main" }} />
        </IconButton>
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          Make up
        </Typography>
      </Grid>
      <Grid item xs={3} sx={{ textAlign: "center" }}>
        <IconButton sx={{ backgroundColor: "primary.light" }} onClick={clickManicure}>
          <SpaIcon fontSize="large" sx={{ color: "primary.main" }} />
        </IconButton>
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          Manicure
        </Typography>
      </Grid>
      <Grid item xs={3} sx={{ textAlign: "center" }}>
        <IconButton sx={{ backgroundColor: "primary.light" }} onClick={clickMassage}>
          <FaceRetouchingNaturalIcon fontSize="large" sx={{ color: "primary.main" }} />
        </IconButton>
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          Massage
        </Typography>
      </Grid>
    </Grid>
  );
};
