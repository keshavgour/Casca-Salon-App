import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import Image1 from "assets/IMG_1.jpg";
import Image2 from "assets/IMG_2.jpg";
import Image3 from "assets/IMG_3.jpg";
import Image4 from "assets/IMG_4.jpg";
import Image5 from "assets/IMG_5.jpg";
const MyCarousel = () => {
  const images = [Image1, Image2, Image3, Image4, Image5];
  return (
    <Carousel
      animation="slide"
      navButtonsAlwaysVisible
      navButtonsProps={{
        style: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderRadius: 0,
        },
      }}
      autoPlay
      interval={5000}
    >
      {images.map((image, index) => {
        return (
          <Paper elevation={2}>
            <img
              src={image}
              alt={`${index}`}
              style={{ width: "100%", height: "70vh", margin: "20px auto" }}
            />
          </Paper>
        );
      })}
    </Carousel>
  );
};
export default MyCarousel;
