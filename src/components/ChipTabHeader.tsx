import React from "react";
import { Grid, Link, Typography, IconButton } from "@mui/material";
import BackBtn from "./BackBtn";
import { PendingOutlined } from "@mui/icons-material";
interface BarProp {
  isPage: boolean;
  heading: string;
  linktext: string;
  backward: string;
  forward: string;
}
const ChipTabHeader: React.FC<BarProp> = ({
  isPage,
  heading,
  linktext,
  backward,
  forward,
}) => {
  return (
    <Grid container sx={{ py: 1 }}>
      <Grid xs={8}>
        {isPage && <BackBtn to={backward} />}
        <Typography variant="titleTypo" component="span">
          {heading}
        </Typography>
      </Grid>
      <Grid xs={4} sx={{ textAlign: "end" }}>
        {isPage ? (
          <IconButton aria-label="search">
            <PendingOutlined fontSize="large" />
          </IconButton>
        ) : (
          <Link href={forward} underline="none" variant="linkTypo">
            {linktext}
          </Link>
        )}
      </Grid>
    </Grid>
  );
};
export default ChipTabHeader;
