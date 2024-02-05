import React from "react";
import { Grid, Avatar, Typography, Chip, IconButton } from "@mui/material";
import { Favorite, FavoriteBorder, Grade, PendingOutlined } from "@mui/icons-material";

interface ReviewBoxProps {
  id: number;
  image: string;
  customer: string;
  comment: string;
  rating: string;
  time: number;
  isLiked: boolean;
  count: number;
  handleLike: () => void;
  handleDislike: () => void;
}

const ReviewBox: React.FC<ReviewBoxProps> = ({
  id,
  image,
  customer,
  comment,
  rating,
  time,
  isLiked,
  count,
  handleLike,
  handleDislike,
}) => {
  return (
    <Grid
      container
      rowSpacing={1}
      justifyItems={"center"}
      alignItems={"center"}
      key={id}
      sx={{ marginY: 2 }}
    >
      <Grid item xs={8}>
        <Grid container justifyContent={"flex-start"} alignItems={"center"}>
          <Avatar alt="Remy Sharp" src={image} sx={{ marginRight: 2 }} />
          <Typography variant="infoTypo2" component="span">
            {customer}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Grid container justifyContent={"flex-end"} alignItems={"center"}>
          <Chip
            icon={<Grade color="primary" />}
            label={rating}
            variant="outlined"
            color="primary"
          />
          <IconButton aria-label="delete" color="secondary">
            <PendingOutlined />
          </IconButton>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="infoTypo1" component="span">
          {comment}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent={"flex-start"} alignItems={"center"}>
          {isLiked ? (
            <IconButton onClick={handleLike}>
              <Favorite color="error" />
            </IconButton>
          ) : (
            <IconButton onClick={handleDislike}>
              <FavoriteBorder />
            </IconButton>
          )}
          <Typography variant="infoTypo2" component="span">
            {count}
          </Typography>
          <Typography variant="infoTypo1" component="span" sx={{ marginLeft: 5 }}>
            {time} months ago
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default ReviewBox;
