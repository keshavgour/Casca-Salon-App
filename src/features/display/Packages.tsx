import React from "react";
import packagelist from "../../temp-object-file/Packages";
import { Box, Button, Container, Divider, Grid, Paper, Typography } from "@mui/material";
import ChipTabHeader from "../../components/ChipTabHeader";
import { Link as RouterLink } from "react-router-dom";
interface PackageProps {
  isPage: boolean;
}
const Packages: React.FC<PackageProps> = ({ isPage }) => {
  const boxStyle = {
    width: "90%",
    height: 120,
    padding: 1,
    margin: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };
  const imgStyle = {
    width: 100,
    height: 80,
    marginRight: 10,
    border: "1px solid black",
    borderRadius: 15,
  };
  const btnStyle = {
    width: 100,
    height: 35,
    borderRadius: 10,
    fontSize: 12,
    fontWeight: "bold",
    backgroundColor: "primary.main",
    color: "white",
    textTransform: "none",
  };
  return (
    <Container>
      <ChipTabHeader
        isPage={isPage}
        heading="Our Packages"
        linktext="See all"
        forward="/allpackages"
        backward="/saloondetails"
      />
      <Divider />
      <Grid container>
        {packagelist.map((pack) => {
          return (
            <Grid xs={12} md={6} lg={4}>
              <Paper elevation={3} sx={boxStyle} key={pack.id}>
                <img src={pack.image} alt={pack.packagename} style={imgStyle} />
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography variant="subtitle1" component="span">
                    {pack.packagename}
                  </Typography>
                  <Typography variant="body2" component="span">
                    {pack.description}
                  </Typography>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="linkTypo" component="span">
                      {pack.price}
                    </Typography>
                    <Button
                      component={RouterLink}
                      to="/packagedetails"
                      variant="contained"
                      sx={btnStyle}
                    >
                      Book Now
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
export default Packages;
