import { Button, Grid } from "@mui/material";
import React from "react";

interface iprops {
  label: string;
  selected: boolean;
  onClick: () => void;
}

const ButtonComponent: React.FC<iprops> = ({ label, selected, onClick }) => {
  return (
    <Grid>
      <Button
        fullWidth
        variant="outlined"
        onClick={onClick}
        sx={{
          "&:hover": { backgroundColor: "#ff9800", color: "white", border: "1px solid #ff9800" },
          color: selected ? "white" : "#ff9800",
          backgroundColor: selected ? "#ff9800" : "white",
          border: "1px solid #ff9800",
          borderRadius: "100px",
        }}
      >
        {label}
      </Button>
    </Grid>
  );
};

export default ButtonComponent;
