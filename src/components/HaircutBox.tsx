import React from "react";
import { Grid, Paper, Radio, Typography } from "@mui/material";
import { flexColStart, flexRowCenter } from "sx/FlexStyles";
interface HaircutBoxProps {
  hid: number;
  image: string;
  haircut: string;
  booking: number;
  price: number;
}
const HaircutBox: React.FC<HaircutBoxProps> = ({ hid, image, haircut, booking, price }) => {
  return (
    <Paper elevation={2} sx={{ p: 2 }}>
      <Grid container>
        <Grid item xs={2} sx={flexRowCenter}>
          <img src={image} alt={haircut} style={{ width: 100, height: 100, borderRadius: 15, marginRight: 10 }} />
        </Grid>
        <Grid item xs={9} sx={flexColStart}>
          <Typography variant="h5" component="span" sx={{ fontWeight: "bold" }}>
            {haircut}
          </Typography>
          <Typography variant="h6" component="span" sx={{ color: "secondary.light" }}>
            {booking} booked
          </Typography>
          <Typography variant="h5" component="span" sx={{ fontWeight: "bold", color: "primary.main" }}>
            ${price}
          </Typography>
        </Grid>
        <Grid item xs={1} sx={flexRowCenter}>
          <Radio value={hid} name="radio-buttons" inputProps={{ "aria-label": "A" }} sx={{ color: "primary.main" }} />
        </Grid>
      </Grid>
    </Paper>
  );
};
export default HaircutBox;
