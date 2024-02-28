import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

interface CardProps {
  image: string;
  title: string;
  subtitle: string;
}
const cardStyle = {
  minWidth: 150,
  height: 180,
  m: 1,
  p: 1,
  "@media (max-width:450px)": {
    minWidth: 120,
    height: 150,
  },
};
const mediaStyle = {
  width: "75%",
  height: "60%",
  border: 1,
  borderRadius: 5,
  marginX: "auto",
};
const CardsSpecialists: React.FC<CardProps> = ({ image, title, subtitle }) => {
  return (
    <>
      <Card sx={cardStyle}>
        <CardMedia sx={mediaStyle} image={image} title={title} />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography gutterBottom variant="body2" component="div">
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {subtitle}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};
export default CardsSpecialists;
