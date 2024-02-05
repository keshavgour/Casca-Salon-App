import React from "react";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import TextsmsRoundedIcon from "@mui/icons-material/TextsmsRounded";
import {
  Box,
  Button,
  Typography,
  styled,
} from "@mui/material";

export default function NavBtnGrp() {
  // btntheme.palette.primary.main

  const NavButton = {
    width: 70,
    height: 70,
    "@media (max-width:600px)": {
      width: 60,
      height: 60,
    },
    borderRadius: 10,
    backgroundColor: "primary.light",
    "&:hover": {
      backgroundColor: "#FFCC80",
    },
  };
  const BtnContainer = {
    width: "inherit",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
  const BoxBtn = styled(Box)({
    width: 100,
    height: 100,
    "@media (max-width:600px)": {
      width: 80,
      height: 80,
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  });
  return (
    <Box sx={BtnContainer}>
      <BoxBtn>
        <Button sx={NavButton}>
          <ExploreRoundedIcon
            fontSize="large"
          />
        </Button>
        <Typography variant="h6" component="span">
          Website
        </Typography>
      </BoxBtn>
      <BoxBtn>
        <Button sx={NavButton}>
          <TextsmsRoundedIcon fontSize="large" />
        </Button>
        <Typography variant="h6" component="span">
          Message
        </Typography>
      </BoxBtn>
      <BoxBtn>
        <Button sx={NavButton}>
          <CallRoundedIcon fontSize="large"/>
        </Button>
        <Typography variant="h6" component="span">
          Call
        </Typography>
      </BoxBtn>
      <BoxBtn>
        <Button sx={NavButton}>
          <LocationOnRoundedIcon fontSize="large"/>
        </Button>
        <Typography variant="h6" component="span">
          Direction
        </Typography>
      </BoxBtn>
      <BoxBtn>
        <Button sx={NavButton}>
          <SendRoundedIcon fontSize="large"/>
        </Button>
        <Typography variant="h6" component="span">
          Share
        </Typography>
      </BoxBtn>
    </Box>
  );
}
