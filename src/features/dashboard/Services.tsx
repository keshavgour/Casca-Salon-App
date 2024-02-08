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
    <Grid container spacing={24}>
      <Grid item>
        <IconButton sx={{ backgroundColor: "#fff3e0" }} onClick={clickHaircuts}>
          <ContentCutIcon fontSize="large" sx={{ color: "#ff9800" }} />
        </IconButton>
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          Haircuts
        </Typography>
      </Grid>
      <Grid item>
        <IconButton sx={{ backgroundColor: "#fff3e0" }} onClick={clickMakeup}>
          <BrushIcon fontSize="large" sx={{ color: "#ff9800" }} />
        </IconButton>
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          Make up
        </Typography>
      </Grid>
      <Grid item>
        <IconButton sx={{ backgroundColor: "#fff3e0" }} onClick={clickManicure}>
          <SpaIcon fontSize="large" sx={{ color: "#ff9800" }} />
        </IconButton>
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          Manicure
        </Typography>
      </Grid>
      <Grid item>
        <IconButton sx={{ backgroundColor: "#fff3e0" }} onClick={clickMassage}>
          <FaceRetouchingNaturalIcon fontSize="large" sx={{ color: "#ff9800" }} />
        </IconButton>
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          Massage
        </Typography>
      </Grid>
    </Grid>
  );
};
