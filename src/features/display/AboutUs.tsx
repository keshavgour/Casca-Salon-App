import React, { useState } from "react";
import { Box, Typography, Link, Grid } from "@mui/material";
import ChipTabHeader from "../../components/ChipTabHeader";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import BlockBtn from "../../components/BlockBtn";
export default function AboutUs() {
  const [isExpand, setIsExpand] = useState(false);
  const handleExpand = () => {
    setIsExpand(!isExpand);
  };
  return (
    <Box sx={{ width: "inherit", boxSizing: "border-box" }}>
      <Grid container rowSpacing={2}>
        <Grid item xs={12}>
          <Typography variant="body1" component="span">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nulla rem illo error
            eaque, sit sequi unde perspiciatis quae, est provident consequatur ipsam! Cupiditate,
            omnis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut consectetur enim,
            obcaecati omnis pariatur quos.
            {isExpand && (
              <Typography variant="body1" component="span">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quo! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Quod unde repudiandae sint similique
                maxime nemo?
              </Typography>
            )}
            <Link variant="linkTypo" underline="none" onClick={handleExpand}>
              {isExpand ? "" : " Read more..."}
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container rowSpacing={1}>
            <Grid item xs={12}>
              <Typography variant="h4" component="h6">
                Working Hours
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" component="span">
                Monday - Friday
              </Typography>
              <Typography variant="body2" component="span" sx={{ marginLeft: "24px" }}>
                : 08:00 AM - 21:00 PM
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" component="span">
                Saturday - Sunday
              </Typography>
              <Typography variant="body2" component="span" sx={{ marginLeft: "9px" }}>
                : 10:00 AM - 20:00 PM
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" component="h6">
            Contact us
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h6"
            component="span"
            sx={{
              fontSize: "22px",
              fontWeight: "bolder",
              color: "primary.main",
            }}
          >
            (406) 555-0120
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <ChipTabHeader
            isPage={false}
            heading="Our Address"
            linktext="See on Maps"
            forward="/"
            backward=""
          />
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
          <LocationOnRoundedIcon sx={{ color: "primary.main", marginRight: 2 }} />
          <Typography variant="body1" component="span">
            0992, Novik Parkway
          </Typography>
        </Grid>
        <Box sx={{ width: "100%", height: "400px", my: 2, border: 1 }}></Box>
      </Grid>
      <BlockBtn btnText="Book Now" btnSubText="" />
    </Box>
  );
}
