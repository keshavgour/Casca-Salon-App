import React from "react";
import { Grid, Avatar, Typography, Chip, IconButton } from "@mui/material";
import { Favorite, FavoriteBorder, Grade, PendingOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
// import { RootState } from "store/store";
import { setLikeStatus, removeLikeStatus } from "store/slices/reviewSlice";
interface ReviewBoxProps {
  id: number;
  image: string;
  customer: string;
  comment: string;
  rating: string;
  time: number;
  likeStatus: boolean;
  likeCount: number;
  // handleLike: (param: number) => {};
}

const ReviewBox: React.FC<ReviewBoxProps> = ({ id, image, customer, comment, rating, time, likeStatus, likeCount }) => {
  const dispatch = useDispatch();
  // const { liked } = useSelector((state: RootState) => state.like);
  const handleClick = (id: number) => {
    dispatch(setLikeStatus(id));
    dispatch(removeLikeStatus(id));
  };

  return (
    <Grid container rowSpacing={1} justifyItems={"center"} alignItems={"center"} key={id} sx={{ marginY: 2 }}>
      <Grid item xs={8}>
        <Grid container justifyContent={"flex-start"} alignItems={"center"}>
          <Avatar src={image} alt={customer} sx={{ marginRight: 2 }} />
          <Typography variant="body1" component="span" sx={{ fontWeight: "bold" }}>
            {customer}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Grid container justifyContent={"flex-end"} alignItems={"center"}>
          <Chip icon={<Grade color="primary" />} label={rating} variant="outlined" color="primary" />
          <IconButton aria-label="delete" color="secondary">
            <PendingOutlined />
          </IconButton>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2" component="span" sx={{ color: "secondary.light" }}>
          {comment}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent={"flex-start"} alignItems={"center"}>
          <IconButton onClick={() => handleClick}>{likeStatus ? <Favorite color="error" /> : <FavoriteBorder />}</IconButton>
          <Typography variant="body2" component="span" sx={{ color: "secondary.light" }}>
            {likeCount}
          </Typography>
          <Typography variant="body2" component="span" sx={{ marginLeft: 5, color: "secondary.light" }}>
            {time} months ago
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default ReviewBox;
