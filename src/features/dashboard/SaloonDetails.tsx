import React, { useState } from "react";
import { Button, Container, Divider, Typography, Grid } from "@mui/material";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import GradeIcon from "@mui/icons-material/Grade";
import Carousel from "components/MyCarousel";
import NavBtnGrp from "components/NavBtnGrp";
import CardsSpecialists from "components/CardsSpecialists";
import listSpecialist from "temp-object-file/specialist";
import ChipTabHeader from "components/TabHeader";
import AboutUs from "features/display/AboutUs";
import Services from "features/display/Services";
import Gallery from "features/display/Gallery";
import Packages from "features/display/Packages";
import Review from "features/display/Review";
import ChipTab from "components/ChipTab";
import { flexRowEnd, flexRowStart } from "sx/FlexStyles";

export default function SaloonDetails() {
  const [selectChip, setselectChip] = useState("About us");
  const chipLabels = ["About us", "Services", "Package", "Gallery", "Review"];
  const handleChipClick = (chipName: string) => {
    setselectChip(chipName);
  };
  const btnOpen = {
    width: 150,
    height: 50,
    backgroundColor: "primary.main",
    borderRadius: 10,
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "none",
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
    "@media (max-width:450px)": {
      width: 80,
      height: 25,
      fontSize: 11,
    },
  };
  return (
    <Container>
      <Carousel />
      <Grid container alignItems="center" rowSpacing={1}>
        <Grid item xs={8}>
          <Typography variant="h2" component="span">
            Galaxy Salon
          </Typography>
        </Grid>
        <Grid item xs={4} sx={flexRowEnd}>
          <Button variant="contained" sx={btnOpen}>
            Open
          </Button>
        </Grid>
        <Grid item xs={12} sx={flexRowStart}>
          <LocationOnRoundedIcon color="primary" sx={{ marginRight: 1 }} />
          <Typography variant="h5" component="span" sx={{ color: "secondary.light" }}>
            0992, Novik Parkway
          </Typography>
        </Grid>
        <Grid item xs={12} sx={flexRowStart}>
          <GradeIcon color="primary" sx={{ marginRight: 1 }} />
          <Typography variant="h5" component="span" sx={{ color: "secondary.light" }}>
            4.9 (3,279 reviews)
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <NavBtnGrp />
        </Grid>
      </Grid>
      <Divider sx={{ marginY: 2 }} />
      <ChipTabHeader isPage={false} heading="Our Specialists" linktext="See All" forward="/allspecialists" backward="" />
      <Grid container wrap="nowrap" sx={{ overflow: "hidden" }}>
        {listSpecialist.map((card, index) => {
          return (
            <Grid item key={index}>
              <CardsSpecialists image={card.image} title={card.title} subtitle={card.subtitle} />
            </Grid>
          );
        })}
      </Grid>
      <Grid container justifyContent="space-evenly" marginY={1}>
        {chipLabels.map((chiplabel, index) => {
          return (
            <Grid item key={index}>
              <ChipTab key={index} chipLabel={chiplabel} selectedChip={selectChip} clickFunction={() => handleChipClick(chiplabel)} />
            </Grid>
          );
        })}
      </Grid>
      {selectChip === "About us" && <AboutUs />}
      {selectChip === "Services" && <Services isPage={false} />}
      {selectChip === "Package" && <Packages isPage={false} />}
      {selectChip === "Gallery" && <Gallery isPage={false} />}
      {selectChip === "Review" && <Review isPage={false} />}
    </Container>
  );
}
