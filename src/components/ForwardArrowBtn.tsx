import React from "react";
import { IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link as RouterLink } from "react-router-dom";

interface ForwardArrowBtnProps {
  to: string;
}

const ForwardArrowBtn: React.FC<ForwardArrowBtnProps> = ({ to }) => {
  return (
    <IconButton
      component={RouterLink}
      to={to}
      sx={{ ":hover": { backgroundColor: "primary.secondary" } }}
    >
      <ArrowForwardIosIcon sx={{ ":hover": { color: "primary.secondary" } }} />
    </IconButton>
  );
};
export default ForwardArrowBtn;
