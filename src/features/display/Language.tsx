import React from "react";
import { Container, Grid, Radio, Typography } from "@mui/material";
import BackBtn from "components/BackBtn";
import { flexRowStart } from "sx/FlexStyles";
const Language = () => {
  const languages = ["Hindi", "German", "Spanish", "French", "Italian", "Portugal", "Russian", "Persian"];
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
            Language
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" component="span">
            Suggested
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={11}>
              <Typography variant="body2" component="span" sx={{ color: "secondary.light" }}>
                English (US)
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Radio
                // checked={selectedValue === 'a'}
                // onChange={handleChange}
                value="a"
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={11}>
              <Typography variant="body2" component="span" sx={{ color: "secondary.light" }}>
                English (UK)
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Radio
                // checked={selectedValue === 'a'}
                // onChange={handleChange}
                value="a"
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" component="span">
            Language
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container rowSpacing={3}>
            {languages.map((item, index) => {
              return (
                <>
                  <Grid item xs={11} key={index}>
                    <Typography variant="body2" component="span" sx={{ color: "secondary.light" }}>
                      {item}
                    </Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Radio
                      // checked={selectedValue === 'a'}
                      // onChange={handleChange}
                      value="a"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "A" }}
                    />
                  </Grid>
                </>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Language;
