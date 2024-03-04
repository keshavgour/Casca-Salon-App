import React from "react";
import { Chip } from "@mui/material";

interface chipProp {
  chipLabel: string;
  selectedChip: string;
  clickFunction: (param: string) => void;
}
const chipStyle = {
  width: 180,
  height: 50,
  marginY: 1,
  borderWidth: "2px",
  borderRadius: "25px",
  fontSize: 20,
  fontWeight: 700,
  "@media (max-width:900px)": {
    width: 150,
    height: 40,
    fontSize: 18,
  },
  "@media (max-width:600px)": {
    width: 100,
    height: 35,
    fontSize: 14,
  },
};
const ChipTab: React.FC<chipProp> = ({ chipLabel, selectedChip, clickFunction }) => {
  return (
    <Chip
      label={chipLabel}
      variant={selectedChip === chipLabel ? "filled" : "outlined"}
      color="primary"
      sx={chipStyle}
      onClick={() => clickFunction(chipLabel)}
    />
  );
};
export default ChipTab;
