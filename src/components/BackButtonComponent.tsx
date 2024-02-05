import { ArrowBack } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import React from "react";

interface iprops {
  onClick: () => void;
}

const BackButtonComponent: React.FC<iprops> = ({ onClick }) => {
  return (
    <Grid>
      <IconButton onClick={onClick} sx={{ ":hover": { backgroundColor: "#fff3e0" } }}>
        <ArrowBack sx={{ ":hover": { color: "#ff9800" } }} />
      </IconButton>
    </Grid>
  );
};

export default BackButtonComponent;
