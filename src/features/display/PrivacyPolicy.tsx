import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import BackBtn from "components/BackBtn";
import { flexRowStart } from "sx/FlexStyles";

export const PrivacyPolicy = () => {
  return (
    <Container
      sx={{
        minWidth: "320px",
        maxWidth: "1080px",
        boxSizing: "border-box",
        marginX: "auto",
      }}
    >
      <Grid container rowSpacing={3}>
        <Grid item xs={12} sx={flexRowStart}>
          <BackBtn to="/profile" />
          <Typography variant="h4" component="span">
            Privacy Policy
          </Typography>
        </Grid>
      </Grid>
      <Grid container rowSpacing={2}>
        <Grid item xs={12}>
          <Typography variant="body1" component="span" sx={{ fontWeight: "bold" }}>
            1. Types of Data We Collect
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" component="span" sx={{ color: "secondary.light" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas facilis qui, doloribus id delectus laborum deleniti alias corrupti in? Sed
            eaque voluptates quis cumque in assumenda explicabo quam dolores nam suscipit sapiente et eos, repudiandae est, nemo temporibus odit alias
            ut dicta eius sit nostrum beatae natus. Harum, sed voluptatem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
            repellat sunt, delectus voluptate explicabo dicta eaque incidunt minus ipsa nam corrupti expedita suscipit fugiat illum.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" component="span" sx={{ fontWeight: "bold" }}>
            2. Use of Your Personal Data
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" component="span" sx={{ color: "secondary.light" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas facilis qui, doloribus id delectus laborum deleniti alias corrupti in? Sed
            eaque voluptates quis cumque in assumenda explicabo quam dolores nam suscipit sapiente et eos, repudiandae est, nemo temporibus odit alias
            ut dicta eius sit nostrum beatae natus. Harum, sed voluptatem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
            repellat sunt, delectus voluptate explicabo dicta eaque incidunt minus ipsa nam corrupti expedita suscipit fugiat illum.
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" component="span" sx={{ fontWeight: "bold" }}>
          3. Disclosure of Your Personal Data
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2" component="span" sx={{ color: "secondary.light" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas facilis qui, doloribus id delectus laborum deleniti alias corrupti in? Sed
          eaque voluptates quis cumque in assumenda explicabo quam dolores nam suscipit sapiente et eos, repudiandae est, nemo temporibus odit alias
          ut dicta eius sit nostrum beatae natus. Harum, sed voluptatem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
          repellat sunt, delectus voluptate explicabo dicta eaque incidunt minus ipsa nam corrupti expedita suscipit fugiat illum. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Voluptatem dicta vel consequatur cupiditate omnis reiciendis eius officia. Nulla error molestiae, rem
          accusamus inventore quas neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perferendis iste deleniti natus
          cupiditate? Facere dolorem accusantium earum vel deleniti quidem repudiandae dolores explicabo quo.
        </Typography>
      </Grid>
    </Container>
  );
};
