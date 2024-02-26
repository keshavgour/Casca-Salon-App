import React, { useState } from "react";
import { Box, Button, Container, Divider, Typography, Chip, Grid } from "@mui/material";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import GradeIcon from "@mui/icons-material/Grade";
import Carousel from "components/MyCarousel";
import NavBtnGrp from "components/NavBtnGrp";
import CardsSpecialists from "components/CardsSpecialists";
import listSpecialist from "temp-object-file/specialist";
import ChipTabHeader from "components/ChipTabHeader";
import AboutUs from "features/display/AboutUs";
import Services from "features/display/Services";
import Gallery from "features/display/Gallery";
import Packages from "features/display/Packages";
import Review from "features/display/Review";
export default function SaloonDetails() {
  const [selectChip, setselectChip] = useState("About us");
  const handleChipClick = (chipName: string) => {
    setselectChip(chipName);
  };
  const textVCenter = { display: "flex", alignItems: "center" };
  const btnOpen = {
    width: 150,
    height: 50,
    "@media (max-width:900px)": {
      width: 140,
      height: 40,
    },
    "@media (max-width:600px)": {
      width: 120,
      height: 38,
      fontSize: 13,
    },
    "@media (max-width:510px)": {
      width: 100,
      height: 30,
      fontSize: 12,
    },
    "@media (max-width:400px)": {
      width: 80,
      height: 25,
      fontSize: 11,
    },
    backgroundColor: "primary.main",
    borderRadius: 10,
    fontSize: 15,
    fontWeight: "bold",
    textTransform: "none",
  };
  const chipStyle = {
    width: "150px",
    height: "50px",
    "@media (max-width:900px)": {
      width: 130,
      height: 40,
      fontSize: 15,
    },
    "@media (max-width:700px)": {
      width: 90,
      height: 30,
      fontSize: 12,
    },
    borderWidth: "2px",
    borderRadius: "25px",
    fontSize: "17px",
    fontWeight: "bold",
  };

  return (
    <>
      <Container
        sx={{
          minWidth: "320px",
          maxWidth: "1080px",
          boxSizing: "border-box",
          marginX: "auto",
        }}
      >
        <Carousel />
        <Box sx={{ boxSizing: "border-box", marginY: 3, p: 2 }}>
          <Grid container rowSpacing={1}>
            <Grid item xs={6} sx={textVCenter}>
              <Typography variant="h2" component="span">
                Galaxy Salon
              </Typography>
            </Grid>
            <Grid item xs={6} sx={{ display: "flex", alignItems: "center", justifyContent: "end" }}>
              <Button variant="contained" sx={btnOpen}>
                Open
              </Button>
            </Grid>
            <Grid item xs={12} sx={textVCenter}>
              <LocationOnRoundedIcon sx={{ color: "primary.main", marginRight: 1 }} />
              <Typography variant="body1" component="span">
                0992, Novik Parkway
              </Typography>
            </Grid>
            <Grid item xs={12} sx={textVCenter}>
              <GradeIcon sx={{ color: "primary.main", marginRight: 1 }} />
              <Typography variant="body1" component="span">
                4.9 (3,279 reviews)
              </Typography>
            </Grid>
          </Grid>
          <Box sx={{ marginY: 3 }}>
            <NavBtnGrp />
          </Box>
          <Divider />
          <ChipTabHeader
            isPage={false}
            heading="Our Specialists"
            linktext="See All"
            forward="/allspecialists"
            backward=""
          />
          <Box
            sx={{
              width: "inherit",
              display: "flex",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            {listSpecialist.map((card, index) => {
              return (
                <CardsSpecialists
                  key={index}
                  image={card.image}
                  title={card.title}
                  subtitle={card.subtitle}
                />
              );
            })}
          </Box>
          <Box
            sx={{
              width: "inherit",
              my: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Chip
              label="About us"
              variant={selectChip === "About us" ? "filled" : "outlined"}
              color="primary"
              sx={chipStyle}
              onClick={() => handleChipClick("About us")}
            />
            <Chip
              label="Services"
              variant={selectChip === "Services" ? "filled" : "outlined"}
              color="primary"
              sx={chipStyle}
              onClick={() => handleChipClick("Services")}
            />
            <Chip
              label="Package"
              variant={selectChip === "Package" ? "filled" : "outlined"}
              color="primary"
              sx={chipStyle}
              onClick={() => handleChipClick("Package")}
            />
            <Chip
              label="Gallery"
              variant={selectChip === "Gallery" ? "filled" : "outlined"}
              color="primary"
              sx={chipStyle}
              onClick={() => handleChipClick("Gallery")}
            />
            <Chip
              label="Review"
              variant={selectChip === "Review" ? "filled" : "outlined"}
              color="primary"
              sx={chipStyle}
              onClick={() => handleChipClick("Review")}
            />
          </Box>
          {selectChip === "About us" && <AboutUs />}
          {selectChip === "Services" && <Services isPage={false} />}
          {selectChip === "Package" && <Packages isPage={false} />}
          {selectChip === "Gallery" && <Gallery isPage={false} />}
          {selectChip === "Review" && <Review isPage={false} />}
        </Box>
      </Container>
    </>
  );
}
