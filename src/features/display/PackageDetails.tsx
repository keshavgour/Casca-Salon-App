import React, { useState } from "react";
import {
  Container,
  Typography,
  Link,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Grid,
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
      <Grid container>
        <FlexBoxRow>
          <BackBtn to="/saloondetails" />
          <PendingActions />
        </FlexBoxRow>
      </Grid>
      <Grid container direction="row" spacing={2} wrap="wrap">
        <Grid item xs={12} md={6} lg={6}>
          <img
            src="https://c1.wallpaperflare.com/preview/62/1002/511/model-businessman-corporate-handsome.jpg"
            alt="Haircut & HairStyling"
            style={{
              display: "block",
              width: "100%",
              height: "400px",
              margin: "auto",
              borderRadius: "25px",
            }}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Grid container rowSpacing={1}>
            <Grid item xs={12}>
              <Typography variant="h2" component="h4">
                Haircut & HairStyle
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="infoTypo1" component="span">
                Special Offers Package, valid until Dec 10, 2024
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="infoTypo1" component="span">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nulla rem illo error
                eaque, sit sequi unde perspiciatis quae, est provident consequatur ipsam!
                Cupiditate, omnis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                consectetur enim, obcaecati omnis pariatur quos.
                {isExpand && (
                  <Typography variant="infoTypo1" component="span">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quo! Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Quod unde repudiandae sint
                    similique maxime nemo?
                  </Typography>
                )}
                <Link
                  variant="linkTypo"
                  underline="none"
                  sx={{ cursor: "pointer" }}
                  onClick={handleExpand}
                >
                  {isExpand ? "" : " Read more..."}
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="titleTypo" component="span">
                Services
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <FlexBoxRow>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox color="primary" defaultChecked />}
                    label="Haircut"
                  />
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
                  <FormControlLabel
                    control={<Checkbox color="primary" defaultChecked />}
                    label="Facial"
                  />
                </FormGroup>
              </FlexBoxRow>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <BlockBtn btnText="Book Now - " btnSubText="$125" />
    </Container>
  );
}
