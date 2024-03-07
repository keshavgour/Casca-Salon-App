import React from "react";
import { BaseTextFieldProps, Grid, IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SortIcon from "@mui/icons-material/Sort";

const InputComponent: React.FC<BaseTextFieldProps> = ({ type, placeholder }) => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={10} md={10} lg={10}>
        <TextField
          fullWidth
          type={type}
          placeholder={placeholder}
          variant="outlined"
          sx={{ width: "100%", backgroundColor: "#fafafa" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton sx={{ ":hover": { backgroundColor: "primary.light" } }}>
                  <SearchIcon color="primary" />
                </IconButton>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton sx={{ ":hover": { backgroundColor: "primary.light" } }}>
                  <SortIcon color="primary" />
                </IconButton>
              </InputAdornment>
            ),
          }}
        ></TextField>
      </Grid>
    </Grid>
  );
};
export default InputComponent;
