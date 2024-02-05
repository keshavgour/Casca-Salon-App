import React from "react";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import {Link as RouterLink} from "react-router-dom";
interface boxProp {
  title: string;
  types: number;
  to : string;
}
const ServiceBox: React.FC<boxProp> = ({ title, types, to }) => {
  return (
    <Paper
      elevation={2}
      sx={{
        width: "95%",
        height: "100px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginX:"auto",
        marginY:3,
        paddingX: 2,
        borderRadius:5
      }}
    >
      <Typography variant="infoTypo1" component="span">
        {title}
      </Typography>
      <Box
        sx={{
          width: "50%",
          height: "inherit",
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
        }}
      >
        <Typography variant="infoTypo2" component="span">
          {types} types
        </Typography>
        <IconButton aria-label="back" size="small" component={RouterLink} to={to}>
          <ArrowRightIcon fontSize="large" sx={{ color: "primary.main" }} />
        </IconButton>
      </Box>
    </Paper>
  );
};
export default ServiceBox;
