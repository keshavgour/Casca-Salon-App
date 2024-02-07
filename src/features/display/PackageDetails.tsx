import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Link,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { FlexBoxRow } from "components/FlexBox";
import BackBtn from "components/BackBtn";
import { PendingActions } from "@mui/icons-material";
import BlockBtn from "components/BlockBtn";

export default function PackageDetails() {
  const [isExpand, setIsExpand] = useState(false);
  const handleExpand = () => {
    setIsExpand(!isExpand);
  };
  return (
    <Container>
      <Box sx={{ width: "inherit" }}>
        <FlexBoxRow>
          <BackBtn to="/saloondetails" />
          <PendingActions />
        </FlexBoxRow>
      </Box>
      <Box sx={{ width: "50%", height: "50%", marginX: "auto", marginY: 2 }}>
        <img
          src="https://c1.wallpaperflare.com/preview/62/1002/511/model-businessman-corporate-handsome.jpg"
          alt="Haircut & HairStyling"
          style={{ width: "inherit", height: "inherit" }}
        />
      </Box>
      <Typography variant="h2" component="span">
        Haircut & HairStyle
      </Typography>
      <Typography variant="infoTypo1" component="span">
        Special Offers Package, valid until Dec 10, 2024
      </Typography>
      <Typography variant="infoTypo1" component="span">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nulla rem illo error eaque,
        sit sequi unde perspiciatis quae, est provident consequatur ipsam! Cupiditate, omnis! Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Aut consectetur enim, obcaecati omnis
        pariatur quos.
        {isExpand && (
          <Typography variant="infoTypo1" component="span">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quo! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quod unde repudiandae sint similique maxime
            nemo?
          </Typography>
        )}
        <Link variant="linkTypo" underline="none" onClick={handleExpand}>
          {isExpand ? "" : " Read more..."}
        </Link>
      </Typography>
      <Typography variant="titleTypo" component="span">
        Services
      </Typography>
      <FlexBoxRow>
        <FormGroup>
          <FormControlLabel control={<Checkbox color="primary" defaultChecked />} label="Haircut" />
          <FormControlLabel
            control={<Checkbox color="primary" defaultChecked />}
            label="Hairstyling"
          />
          <FormControlLabel
            control={<Checkbox color="primary" defaultChecked />}
            label="Hair Coloring"
          />
        </FormGroup>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox color="primary" defaultChecked />}
            label="Shave Mustache"
          />
          <FormControlLabel
            control={<Checkbox color="primary" defaultChecked />}
            label="Shave Beard"
          />
          <FormControlLabel control={<Checkbox color="primary" defaultChecked />} label="Facial" />
        </FormGroup>
      </FlexBoxRow>
      <BlockBtn btnText="Book Now - " btnSubText="$125" />
    </Container>
  );
}
