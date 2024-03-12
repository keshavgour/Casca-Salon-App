import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import SalonDataDisplay from "./SalonDataDisplay";
import { useNavigate } from "react-router-dom";
import Search from "features/Search";
import BackButtonComponent from "components/BackButtonComponent";
import axiosInstance from "lib/axios";

export const Makeup = () => {
  const navigate = useNavigate();
  const [makeupData, setMakeupData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/salon/Makeup");
        console.log(response.data.salons);
        setMakeupData(response.data.salons);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

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

// {
//   id: 1,
//   name: "Addictive Beauty",
//   address: "813 Village Drive",
//   distance: 3.4,
//   rating: 4.6,
//   image:
//     "https://content.jdmagicbox.com/comp/def_content/beauty-parlours-for-facial/screenshot-85-beauty-parlours-for-facial-8-k7gdh.jpg",
// },
// {
//   id: 2,
//   name: "Beauty Unleashed",
//   address: "88 Commercial Plaza",
//   distance: 4.2,
//   rating: 4.0,
//   image:
//     "https://png.pngtree.com/thumb_back/fw800/background/20220930/pngtree-beauty-professionals-create-stunning-bridal-look-through-hair-and-makeup-at-salon-photo-image_49000926.jpg",
// },
// {
//   id: 3,
//   name: "Bangs on Target",
//   address: "883 Jackson Hill",
//   distance: 8.4,
//   rating: 4.1,
//   image:
//     "https://m.media-amazon.com/images/I/41nSOi3%2B1-L._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg",
// },
// {
//   id: 4,
//   name: "Choppers",
//   address: "0093 Novick Parkway",
//   distance: 1.2,
//   rating: 4.8,
//   image:
//     "https://img.favpng.com/6/13/23/beauty-parlour-cosmetics-permanent-makeup-hair-png-favpng-TBcjBkBGhwDnctrS3nnH2Yde9.jpg",
// },
// {
//   id: 5,
//   name: "Beauty Salon",
//   address: "42 Fordem Avenue",
//   distance: 1.4,
//   rating: 4.9,
//   image: "https://img.freepik.com/free-photo/client-doing-hair-cut-barber-shop-salon_1303-20710.jpg",
// },
