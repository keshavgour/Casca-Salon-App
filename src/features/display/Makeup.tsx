import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import Search from "features/Search";
import SalonDataDisplay from "features/display/SalonDataDisplay";
import { useNavigate } from "react-router-dom";
import BackButtonComponent from "components/BackButtonComponent";

export const Makeup = () => {
  const navigate = useNavigate();

  const makeupData = [
    {
      id: 1,
      shopName: "Addictive Beauty",
      address: "813 Village Drive",
      distance: 3.4,
      rating: 4.6,
      imageURL:
        "https://content.jdmagicbox.com/comp/def_content/beauty-parlours-for-facial/screenshot-85-beauty-parlours-for-facial-8-k7gdh.jpg",
    },
    {
      id: 2,
      shopName: "Beauty Unleashed",
      address: "88 Commercial Plaza",
      distance: 4.2,
      rating: 4.0,
      imageURL:
        "https://png.pngtree.com/thumb_back/fw800/background/20220930/pngtree-beauty-professionals-create-stunning-bridal-look-through-hair-and-makeup-at-salon-photo-image_49000926.jpg",
    },
    {
      id: 3,
      shopName: "Bangs on Target",
      address: "883 Jackson Hill",
      distance: 8.4,
      rating: 4.1,
      imageURL:
        "https://m.media-amazon.com/images/I/41nSOi3%2B1-L._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg",
    },
    {
      id: 4,
      shopName: "Choppers",
      address: "0093 Novick Parkway",
      distance: 1.2,
      rating: 4.8,
      imageURL:
        "https://img.favpng.com/6/13/23/beauty-parlour-cosmetics-permanent-makeup-hair-png-favpng-TBcjBkBGhwDnctrS3nnH2Yde9.jpg",
    },
    {
      id: 5,
      shopName: "Beauty Salon",
      address: "42 Fordem Avenue",
      distance: 1.4,
      rating: 4.9,
      imageURL:
        "https://img.freepik.com/free-photo/client-doing-hair-cut-barber-shop-salon_1303-20710.jpg",
    },
  ];

  const clickBack = () => {
    return navigate("/dashboard");
  };

  return (
    <Container>
      <Grid container direction="column" spacing={4} alignItems="center">
        <Grid item>
          <Grid container>
            <Grid item>
              <BackButtonComponent onClick={clickBack} />
            </Grid>
            <Grid item pt={0.4} pl={1}>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Makeup
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Search />
        </Grid>
        <Grid item>
          <SalonDataDisplay dataTODisplay={makeupData} />
        </Grid>
      </Grid>
    </Container>
  );
};
