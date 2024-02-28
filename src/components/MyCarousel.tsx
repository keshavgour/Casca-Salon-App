import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box } from "@mui/material";

const MyCarousel = () => {
  const images = [
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1484291150605-0860ed671f04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1622296089780-1aba6f53dbb9?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1596728325488-58c87691e9af?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  const imageBox = {
    width: "100%",
    height: "70vh",
    margin: "10px auto",
    "@media (max-width:450px)": {
      height: "35vh",
    },
  };
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
          <Box key={index} sx={imageBox}>
            <img src={image} alt={`${index}`} style={{ width: "100%", height: "100%" }} />
          </Box>
        );
      })}
    </Carousel>
  );
};
export default MyCarousel;
