import React, { useState } from "react";
import listReviews from "../../temp-object-file/Reviews";
import {
  Chip,
  Divider,
  IconButton,
  Typography,
  Container,
  Grid,
  Link,
} from "@mui/material";
import { Grade, PendingOutlined} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import BackBtn from "../../components/BackBtn";
import ReviewBox from "../../components/ReviewBox";
interface ReviewProps {
  isPage: boolean;
}
interface ReviewObj {
  id: number;
  image: string;
  customer: string;
  comment: string;
  rating: string;
  time: number;
}
const Review: React.FC<ReviewProps> = ({ isPage }) => {
  const rating = ["All", "5", "4", "3", "2", "1"];
  const [filteredReview, setFilteredReview] = useState<ReviewObj[]>(listReviews);
  const [isLiked, setIsLiked] = useState(false);
  const [count, setCount] = useState(0);
  const [selectedChip, setSelectedChip] = useState("All");

  const handleLike = () => {
    setIsLiked(!isLiked);
    setCount((count) => count + 1);
  };
  const handleDislike = () => {
    setIsLiked(!isLiked);
    setCount((count) => count - 1);
  };
  const handleChipClick = (label: string) => {
    const filtered = listReviews.filter((review) => review.rating === label);
    setFilteredReview(filtered);
    setSelectedChip(label);
  };
  return (
    <Container>
      <Grid container spacing={3} sx={{ my: 1 }}>
        <Grid item xs={8}>
          {isPage && <BackBtn to="/" />}
          <Typography variant="titleTypo" component="span">
            {isPage ? "Review" : `${(<Grade color="primary" />)} 4.8 (3,279 reviews)`}
          </Typography>
        </Grid>
        <Grid item xs={4} sx={{ textAlign: "end" }}>
          {isPage ? (
            <IconButton aria-label="search">
              <PendingOutlined fontSize="large" />
            </IconButton>
          ) : (
            <Link component={RouterLink} to="/allreviews" underline="none" variant="linkTypo">
              See all
            </Link>
          )}
        </Grid>
      </Grid>
      {isPage && (
        <Grid container spacing={3} sx={{ my: 1 }}>
          {rating.map((label, index) => {
            return (
              <Grid item xs={2}>
                <Chip
                  key={index}
                  icon={<Grade color="primary" />}
                  label={label}
                  color="primary"
                  variant={selectedChip === `${label}` ? "filled" : "outlined"}
                  onClick={() => handleChipClick(`${label}`)}
                  sx={{ width: 150 }}
                />
              </Grid>
            );
          })}
          <Grid item xs={12}>
            <Typography variant="titleTypo" component="span">
              <Grade color="primary" /> 4.8 (3,279 reviews)
            </Typography>
          </Grid>
        </Grid>
      )}
      <Divider sx={{ my: 1 }} />
      
      {filteredReview.map((review, index) => (
        <ReviewBox
          key={index}
          id={review.id}
          image={review.image}
          customer={review.customer}
          comment={review.comment}
          rating={review.rating}
          time={review.time}
          isLiked={isLiked}
          count={count}
          handleLike={handleLike}
          handleDislike={handleDislike}
        />
      ))}
    
    </Container>
  );
};
export default Review;
