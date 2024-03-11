import React from "react";
import { Avatar, Button, Container, Divider, Typography, IconButton, Grid } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material/";
import listSpecialist from "../../temp-object-file/specialist";
import BackBtn from "../../components/BackBtn";
import { flexColStart, flexRowCenter, flexRowStart } from "sx/FlexStyles";
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
        <Grid xs={8} sx={flexRowStart}>
          <BackBtn to="/saloondetails" />
          <Typography variant="h4" component="span">
            Our Specialists
          </Typography>
        </Grid>
        <Grid xs={4} sx={{ textAlign: "end" }}>
          <IconButton aria-label="menu">
            <SearchOutlined fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {listSpecialist.map((card, index) => {
          return (
            <Grid item xs={12} key={index}>
              <Grid container>
                <Grid item xs={1} sx={flexRowCenter}>
                  <Avatar src={card.image} alt={card.title} sx={{ width: 50, height: 50, marginRight: 3 }} />
                </Grid>
                <Grid item xs={9} sx={flexColStart}>
                  <Typography variant="body1" component="span" sx={{ fontWeight: "bold" }}>
                    {card.title}
                  </Typography>
                  <Typography variant="caption" component="span">
                    {card.subtitle}
                  </Typography>
                </Grid>
                <Grid item xs={2} sx={flexRowCenter}>
                  <Button variant="contained" sx={{ borderRadius: 5 }}>
                    Message
                  </Button>
                </Grid>
              </Grid>
              <Divider sx={{ marginY: 1 }} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
