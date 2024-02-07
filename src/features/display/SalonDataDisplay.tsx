import React from "react";
import { Avatar, Grid, IconButton, Paper, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
interface salonItem {
  id: number;
  shopName: string;
  address: string;
  distance: number;
  rating: number;
  imageURL: string;
}

interface salonProps {
  dataTODisplay: salonItem[];
}

const SalonDataDisplay: React.FC<salonProps> = ({ dataTODisplay }) => {
  return (
    <Grid pt={2}>
      {dataTODisplay.map((data) => (
        <Paper key={data.id}>
          <Grid container spacing={4} justifyContent="space-between">
            <Grid item mb={2} ml={2}>
              <Grid container>
                <Grid item>
                  <Avatar
                    src={data.imageURL}
                    alt="salonImages"
                    sx={{ width: 150, height: 150, borderRadius: "20%" }}
                  ></Avatar>
                </Grid>
                <Grid item>
                  <Grid container direction={"column"} spacing={3} pl={2}>
                    <Grid item>
                      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                        {data.shopName}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h6">{data.address}</Typography>
                    </Grid>
                    <Grid item>
                      <Grid container>
                        <Grid item pt={0.3}>
                          <LocationOnIcon fontSize="medium" sx={{ color: "#ff9800" }} />
                        </Grid>
                        <Grid item>
                          <Typography variant="h6">{data.distance} km</Typography>
                        </Grid>

                        <Grid item pl={4} pt={0.3}>
                          <StarHalfIcon fontSize="medium" sx={{ color: "#ff9800" }} />
                        </Grid>
                        <Grid item>
                          <Typography variant="h6">{data.rating}</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item mr={2} ml={48}>
              <IconButton>
                <BookmarkBorderIcon sx={{ color: "#ff9800" }} />
              </IconButton>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Grid>
  );
};

export default SalonDataDisplay;
