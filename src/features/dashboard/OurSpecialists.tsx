import React from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Typography,
  IconButton,
  Grid,
} from "@mui/material";
import { SearchOutlined } from "@mui/icons-material/";
import listSpecialist from "../../temp-object-file/specialist";
import BackBtn from "../../components/BackBtn";
export default function OurSpecialists() {
  return (
    <Container
      sx={{
        minWidth: "320px",
        maxWidth: "1080px",
        boxSizing: "border-box",
        marginX: "auto",
      }}
    >
      <Grid container sx={{ py: 1 }}>
        <Grid xs={8}>
          <BackBtn to="/saloondetails" />
          <Typography variant="titleTypo" component="span">
            Our Specialists
          </Typography>
        </Grid>
        <Grid xs={4} sx={{ textAlign: "end" }}>
          <IconButton aria-label="menu">
            <SearchOutlined fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
      {listSpecialist.map((card) => {
        return (
          <>
            <Box
              sx={{
                width: "inherit",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginX: "auto",
                marginY: 2,
                paddingX: 2,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  src={card.image}
                  alt={card.title}
                  sx={{ width: 50, height: 50, marginRight: 3 }}
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="infoTypo2" component="span">
                    {card.title}
                  </Typography>
                  <Typography variant="infoTypo1" component="span">
                    {card.subtitle}
                  </Typography>
                </Box>
              </Box>
              <Button variant="contained" sx={{ borderRadius: 5 }}>
                Message
              </Button>
            </Box>
            <Divider />
          </>
        );
      })}
    </Container>
  );
}
