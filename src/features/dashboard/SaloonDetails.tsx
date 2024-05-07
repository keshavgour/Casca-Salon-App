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
import { buttonStyle } from "sx/SmallButton";
import { useLocation } from "react-router-dom";

export default function SaloonDetails() {
  const [selectChip, setselectChip] = useState("About us");
  const chipLabels = ["About us", "Services", "Package", "Gallery", "Review"];
  const handleChipClick = (chipName: string) => {
    setselectChip(chipName);
  };

  const location = useLocation();
  const salonDetails = location.state?.salonDetails;

  if (!salonDetails) {
    return <div>No salon details found</div>;
  }

  return (
    <Container>
      <Carousel />
      <Grid container alignItems="center" rowSpacing={1}>
        <Grid item xs={8}>
          <Typography variant="h2" component="span">
            {salonDetails.name}
          </Typography>
        </Grid>
        <Grid item xs={4} sx={flexRowEnd}>
          <Button variant="contained" sx={buttonStyle}>
            Open
          </Button>
        </Grid>
        <Grid item xs={12} sx={flexRowStart}>
          <LocationOnRoundedIcon color="primary" sx={{ marginRight: 1 }} />
          <Typography variant="h5" component="span" sx={{ color: "secondary.light" }}>
            {salonDetails.address[0].street}, {salonDetails.address[0].city}
          </Typography>
        </Grid>
        <Grid item xs={12} sx={flexRowStart}>
          <GradeIcon color="primary" sx={{ marginRight: 1 }} />
          <Typography variant="h5" component="span" sx={{ color: "secondary.light" }}>
            {salonDetails.rating} (3,279 reviews)
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <NavBtnGrp />
        </Grid>
      </Grid>
      <Divider sx={{ marginY: 2 }} />
      <ChipTabHeader
        isPage={false}
        heading="Our Specialists"
        linktext="See All"
        forward="/allspecialists"
        backward=""
      />
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
              <ChipTab
                key={index}
                chipLabel={chiplabel}
                selectedChip={selectChip}
                clickFunction={() => handleChipClick(chiplabel)}
              />
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
