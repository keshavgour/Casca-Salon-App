import React from "react";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";
import { Button, Container, Grid, Typography } from "@mui/material";
import CardsSpecialists from "components/CardsSpecialists";
import listSpecialist from "temp-object-file/specialist";
import BackBtn from "components/BackBtn";
export const BookAppointment = () => {
  return (
    <Container
      sx={{
        minWidth: "320px",
        maxWidth: "1080px",
        boxSizing: "border-box",
        marginX: "auto",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <BackBtn to="/allpackages" />
          <Typography variant="titleTypo" component="span">
            Book Appointment
          </Typography>
        </Grid>
        <Grid item xs={4} sx={{ border: 1 }}>
          {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDateTimePicker />
          </LocalizationProvider> */}
        </Grid>
        <Grid item xs={8}>
          <Grid container>
            {listSpecialist.map((card, index) => {
              return (
                <Grid xs={12} md={6} lg={3} key={index}>
                  <CardsSpecialists
                    image={card.image}
                    title={card.title}
                    subtitle={card.subtitle}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            variant="contained"
            sx={{
              "&:hover": {
                backgroundColor: "#ff9800",
              },
              backgroundColor: "primary.main",
              borderRadius: "100px",
              textTransform: "none",
              fontSize: 18,
              fontWeight: 600,
            }}
          >
            Continue
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
