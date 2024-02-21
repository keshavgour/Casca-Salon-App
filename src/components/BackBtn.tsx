import React from "react";
import { KeyboardBackspaceOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

interface BackBtnProps {
  to: string;
}
const BackBtn: React.FC<BackBtnProps> = ({ to }) => {
  return (
    <IconButton component={RouterLink} to={to} sx={{ marginRight: 2 }}>
      <KeyboardBackspaceOutlined fontSize="large" />
    </IconButton>
  );
};
export default BackBtn;
