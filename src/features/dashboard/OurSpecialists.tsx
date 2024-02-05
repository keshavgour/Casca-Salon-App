import React from "react";
import { Avatar, Box, Button, Container, Divider, Typography, IconButton } from "@mui/material";
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
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <BackBtn to="/"/>
          <Typography variant="titleTypo" component="span">
            Our Specialists
          </Typography>
        </Box>
        <Box>
          <IconButton aria-label="search">
            <SearchOutlined fontSize="large" />
          </IconButton>
        </Box>
      </Box>
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
                paddingX: 2
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
