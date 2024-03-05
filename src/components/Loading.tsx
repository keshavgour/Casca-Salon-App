import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Container, Typography } from "@mui/material";
import { FlexBoxCol } from "./FlexBox";

export default function Loading() {
  return (
    <Container sx={{ width: "100%" }}>
      <FlexBoxCol sx={{ height: "100vh" }}>
        <CircularProgress color="primary" />
        <Typography variant="h6" component="span">
          Loading...
        </Typography>
      </FlexBoxCol>
    </Container>
  );
}
