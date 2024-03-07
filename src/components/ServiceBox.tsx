import React from "react";
import { Grid, IconButton, Paper, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Link as RouterLink } from "react-router-dom";
import { flexRowEnd, flexRowStart } from "sx/FlexStyles";
interface boxProp {
  title: string;
  types: number;
  to: string;
}
const ServiceBox: React.FC<boxProp> = ({ title, types, to }) => {
  return (
    <Paper elevation={2} sx={{ padding: 3, borderRadius: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} sx={flexRowStart}>
          <Typography variant="body2" component="span" color="secondary.light">
            {title}
          </Typography>
        </Grid>
        <Grid item xs={6} sx={flexRowEnd}>
          <Typography variant="body1" component="span">
            {types} types
          </Typography>
          <IconButton aria-label="back" size="small" component={RouterLink} to={to}>
            <ArrowRightIcon fontSize="large" color="primary" />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default ServiceBox;
