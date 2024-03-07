import React from "react";
import { Grid, IconButton, Paper, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { ImageBox } from "components/ImageBox";

interface salonItem {
  id: number;
  name: string;
  address: string;
  distance: number;
  rating: number;
  imageURL: string;
}
interface salonProps {
  dataTODisplay: salonItem[];
}

const CardsSaloonData: React.FC<salonProps> = ({ dataTODisplay }) => {
  return (
    <>
      {dataTODisplay.map((data) => (
        <Paper key={data.id} elevation={2} sx={{ p: 1, my: 1 }}>
          <Grid container sx={{ marginX: "auto" }}>
            <Grid item xs={4} lg={2}>
              <ImageBox>
                <img src={data.imageURL} alt="salonImages" style={{ width: "100%", height: "100%", borderRadius: 25 }} />
              </ImageBox>
            </Grid>
            <Grid item xs={7} lg={9}>
              <Grid container rowSpacing={2} sx={{ pl: 1 }}>
                <Grid item xs={12}>
                  <Typography variant="h4" component="span">
                    {data.name}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6" component="span" sx={{ color: "secondary.light" }}>
                    {data.address}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid container columnGap={3}>
                    <Grid item sx={{ display: "flex", alignItems: "center" }}>
                      <LocationOnIcon fontSize="medium" sx={{ color: "primary.main" }} />
                      <Typography variant="h6" component="span">
                        {data.distance} km
                      </Typography>
                    </Grid>
                    <Grid item sx={{ display: "flex", alignItems: "center" }}>
                      <StarHalfIcon fontSize="medium" sx={{ color: "primary.main" }} />
                      <Typography variant="h6" component="span">
                        {data.rating}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1} lg={1} sx={{ textAlign: "end" }}>
              <IconButton sx={{ ":hover": { backgroundColor: "primary.light" } }}>
                <BookmarkBorderIcon sx={{ color: "primary.main" }} fontSize="medium" />
              </IconButton>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </>
  );
};
export default CardsSaloonData;
