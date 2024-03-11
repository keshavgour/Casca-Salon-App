import React from "react";
import packagelist from "../../temp-object-file/Packages";
import { Button, Container, Divider, Grid, Paper, Typography } from "@mui/material";
import ChipTabHeader from "../../components/TabHeader";
import { Link as RouterLink } from "react-router-dom";
import { ImageBox } from "components/ImageBox";
import { buttonStyle } from "sx/SmallButton";
interface PackageProps {
  isPage: boolean;
}
const Packages: React.FC<PackageProps> = ({ isPage }) => {
  return (
    <Container>
      <ChipTabHeader isPage={isPage} heading="Our Packages" linktext="See all" forward="/allpackages" backward="/saloondetails" />
      <Divider />
      <Grid container spacing={2}>
        {packagelist.map((pack, index) => {
          return (
            <Grid item xs={12} key={index}>
              <Paper key={pack.id} elevation={2} sx={{ p: 2, my: 1 }}>
                <Grid container sx={{ marginX: "auto" }}>
                  <Grid item xs={4} lg={2}>
                    <ImageBox>
                      <img src={pack.image} alt={pack.packagename} style={{ width: "100%", height: "100%", borderRadius: 25 }} />
                    </ImageBox>
                  </Grid>
                  <Grid item xs={7} lg={9}>
                    <Grid container rowSpacing={2} sx={{ pl: 1 }}>
                      <Grid item xs={12}>
                        <Typography variant="h4" component="span">
                          {pack.packagename}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h6" component="span" sx={{ color: "secondary.light" }}>
                          {pack.description}
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="h4" component="span" sx={{ color: "primary.main" }}>
                          {pack.price}
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Button component={RouterLink} to="/packagedetails" variant="contained" sx={buttonStyle}>
                          Book Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
export default Packages;
