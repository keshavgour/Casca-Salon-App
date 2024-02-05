import React, { useState } from "react";
import { Box, Typography, Link } from "@mui/material";
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

      <Box
        sx={{
          width: "inherit",
          height: "100px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          my: 2,
        }}
      >
        <Typography variant="titleTypo" component="h6">
          Working Hours
        </Typography>
        <Typography variant="infoTypo1" component="span">
          Monday - Friday
          <Typography variant="infoTypo2" component="span" marginLeft={4}>
            : 08:00 AM - 21:00 PM
          </Typography>
        </Typography>
        <Typography variant="infoTypo1" component="span">
          Saturday - Sunday
          <Typography variant="infoTypo2" component="span" marginLeft={2}>
            : 10:00 AM - 20:00 PM
          </Typography>
        </Typography>
      </Box>
      <Box
        sx={{
          width: "inherit",
          height: "80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          my: 2,
        }}
      >
        <Typography variant="titleTypo" component="h6">
          Contact us
        </Typography>
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
      </Box>
      <ChipTabHeader
        isPage={false}
        heading="Our Address"
        linktext="See on Maps"
        forward="/"
        backward=""
      />
      <Typography variant="infoTypo1" component="span">
        <LocationOnRoundedIcon sx={{ color: "primary.main", marginRight: 2 }} />
        6993 Meadow Valley Terrace, New York
      </Typography>
      <Box sx={{ maxWidth: "lg", height: "400px", my: 2, border: 1 }}></Box>
      <BlockBtn btnText="Book Now" btnSubText="" />
    </Box>
  );
}
