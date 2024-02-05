import React from "react";
import { Box, Paper, Radio, Typography } from "@mui/material";
interface HaircutBoxProps {
  hid: number;
  image: string;
  haircut: string;
  booking: number;
  price: number;
}
const HaircutBox : React.FC<HaircutBoxProps>=({hid, image, haircut, booking, price})=>{
  return (
    <Paper
      elevation={2}
      sx={{
        width: "90%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 5,
        mx: "auto",
        my: 3,
        p: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <img src={image} alt={haircut} style={{width:100, height:100, border:"2px solid red", borderRadius:15, marginRight:10}}/>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="infoTypo2" component="span">
            {haircut}
          </Typography>
          <Typography variant="infoTypo1" component="span">
            {booking} booked
          </Typography>
          <Typography variant="linkTypo" component="span" color="primary.main">
            ${price}
          </Typography>
        </Box>
      </Box>
      <Radio
        value={hid}
        name="radio-buttons"
        inputProps={{ "aria-label": "A" }}
        sx={{ color: "primary.main" }}
      />
    </Paper>
  );
}
export default HaircutBox;