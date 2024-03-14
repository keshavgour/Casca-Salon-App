import React from "react";
import { Box, Grid, IconButton, Paper, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

interface salonProps {
  id: number;
  name: string;
  address: string;
  distance: number;
  rating: number;
  imageURL: string;
}

const CardsSaloonData: React.FC<salonProps> = ({ id, name, address, distance, rating, imageURL }) => {
  return (
    <>
      <Paper elevation={2} sx={{ p: 1 }}>
        <Grid container key={id} justifyContent="space-evenly">
          <Grid item xs={3}>
            <Box
              sx={{
                width: 150,
                height: 150,
                "@media (max-width:450px)": {
                  width: 85,
                  height: 85,
                },
                "@media (max-width:600px)": {
                  width: 100,
                  height: 100,
                },
                marginX: "auto",
              }}
            >
              <img src={imageURL} alt="salonImages" style={{ width: "100%", height: "100%", borderRadius: 25 }} />
            </Box>
            {/* <Avatar
              src={imageURL}
              alt="salonImages"
              sx={{borderRadius: "20%", marginX: "auto" }}
            ></Avatar> */}
          </Grid>
          <Grid item xs={6}>
            <Grid container rowSpacing={1} sx={{ pl: 2 }}>
              <Grid item xs={12}>
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  {name}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">{address}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Grid container columnGap={3}>
                  <Grid item sx={{ display: "flex", alignItems: "center" }}>
                    <LocationOnIcon fontSize="medium" sx={{ color: "primary.main" }} />
                    <Typography variant="h6" component="span">
                      {distance} km
                    </Typography>
                  </Grid>
                  <Grid item sx={{ display: "flex", alignItems: "center" }}>
                    <StarHalfIcon fontSize="medium" sx={{ color: "primary.main" }} />
                    <Typography variant="h6" component="span">
                      {rating}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1} sx={{ textAlign: "end" }}>
            <IconButton>
              <BookmarkBorderIcon sx={{ color: "primary.main" }} />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};
export default CardsSaloonData;
