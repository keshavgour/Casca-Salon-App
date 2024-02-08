import React from "react";
import { Grid, TextField, StandardTextFieldProps } from "@mui/material";



const TextFieldComponent: React.FC<StandardTextFieldProps> = ({
  label,
  name,
  type,
  value,
  onChange,
  fullWidth,
}) => {
  return (
    <Grid>
      <TextField
        variant="outlined"
        label={label}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        fullWidth={fullWidth}
        required
      />
    </Grid>
  );
};

export default TextFieldComponent;
