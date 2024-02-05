import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

interface CardProps{
    image : string;
    title : string;
    subtitle : string;
}
const cardStyle = {
  width : 150,
  minWidth: 100, 
  height: 180,
  minHeight : 120,
  m:1,
  p:1
}
const mediaStyle = {
  width : "80%",
  height: "65%",
  border:1, 
  borderRadius: 5, 
  marginX:"auto"
}
const CardsSpecialists : React.FC<CardProps> = ({image, title, subtitle}) => {
  return (
    <>
     <Card sx={cardStyle}>
      <CardMedia
        sx={mediaStyle}
        image={image}
        title={title}
      />
      <CardContent sx={{textAlign:"center"}}>
        <Typography gutterBottom variant="body1" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>
      </CardContent>
      </Card>
    </>
  );
}
export default CardsSpecialists;