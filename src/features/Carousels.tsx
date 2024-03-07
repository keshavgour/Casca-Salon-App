import React from "react";
import Carousel from "react-material-ui-carousel";
import { Grid, Typography } from "@mui/material";

interface CarouselItem {
  name: string;
  description: string;
  discount: string;
  validity: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const Carousels: React.FC<CarouselProps> = ({ items }) => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={10} md={10} lg={10}>
        <Carousel
          sx={{
            width: "inherit",
            height: "180px",
            boxSizing: "border-box",
            backgroundColor: "primary.main",
            borderRadius: "30px",
            padding: 1,
          }}
        >
          {items.map((item, index) => (
            <Item key={index} item={item} />
          ))}
        </Carousel>
      </Grid>
    </Grid>
  );
};

interface ItemProps {
  item: CarouselItem;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  const { name, description, discount, validity } = item;

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container margin="1rem 0 0 1rem" justifyContent="space-between">
          <Grid item lg={10} xs={9}>
            <Typography variant="body1" color="white">
              {discount} OFF
            </Typography>
            <Typography variant="h4" color="white">
              {name}
            </Typography>
          </Grid>
          <Grid item lg={2} xs={3} sx={{ textAlign: "center" }}>
            <Typography variant="h2" color="white">
              {discount}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item margin="0.5rem 0 1rem 1rem" xs={12}>
        <Typography variant="body1" color="white">
          {description}
        </Typography>
        <Typography variant="body1" color="white">
          {validity}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Carousels;
