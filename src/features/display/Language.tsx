import React from "react";
import { Container, Grid, Radio, Typography } from "@mui/material";
import BackBtn from "components/BackBtn";
const Language = () => {
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
        <Grid item xs={12}>
          <Typography variant="titleTypo" component="span">
            <BackBtn to="/profile" />
            Language
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="infoTypo2" component="span">
            Suggested
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={11}>
              <Typography variant="infoTypo1" component="span">
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
              <Typography variant="infoTypo1" component="span">
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
          <Typography variant="infoTypo2" component="span">
            Language
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={11}>
              <Typography variant="infoTypo1" component="span">
                Hindi
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
              <Typography variant="infoTypo1" component="span">
                German
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
              <Typography variant="infoTypo1" component="span">
                Spanish
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
              <Typography variant="infoTypo1" component="span">
                French
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
              <Typography variant="infoTypo1" component="span">
                Italian
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
              <Typography variant="infoTypo1" component="span">
                Portugal
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
              <Typography variant="infoTypo1" component="span">
                Russian
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
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={11}>
            <Typography variant="infoTypo1" component="span">
              Persian
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
    </Container>
  );
};
export default Language;
