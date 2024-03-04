import React from "react";
import { BaseTextFieldProps, IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SortIcon from "@mui/icons-material/Sort";

const InputComponent: React.FC<BaseTextFieldProps> = ({ type, placeholder }) => {
  return (
    <>
      <TextField
        fullWidth
        type={type}
        placeholder={placeholder}
        variant="outlined"
        sx={{ width: "80%", backgroundColor: "#fafafa" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton sx={{ ":hover": { backgroundColor: "#fff3e0" } }}>
                <SearchIcon sx={{ ":hover": { color: "#ff9800" } }} />
              </IconButton>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton sx={{ ":hover": { backgroundColor: "#fff3e0" } }}>
                <SortIcon sx={{ color: "#ff9800" }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      ></TextField>
    </>
  );
};

export default InputComponent;
