import React from "react";
import { Grid, Typography } from "@mui/material";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import { useSelector } from "react-redux";
import { RootState } from "store/store";

export const WelcomeMessage = () => {
  const username = useSelector((state: RootState) => state.user.userName);
  return (
    <Grid container alignItems="center" justifyContent="center">
      <Typography variant="h3">Morning, {username}</Typography>
      <WavingHandIcon sx={{ color: "primary.main", marginX: 2 }} fontSize="large" />
    </Grid>
  );
};

// const access_token = localStorage.getItem("access_token");
//   console.log(access_token);

// {
//   headers: { Authorization: `Bearer ${access_token}`, "Content-Type": "application/json" },
//   withCredentials: true,
// }

// const headers = {
//   Authorization:
//     "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlOTdhYjc5OC04MzUxLTRmOTUtOWY1MS1hY2MxZWE1YWE5MjAiLCJpYXQiOjE3MDg1MTgwNDEsImV4cCI6MTcwODUxODk0MX0.j9yBAoogK3QRGuUNont7l9NMu4oaa1BmUxrixMpNJPCyO2ca_8h7NS1PqLbzeUgKMIdyV4XlKqULurzWJCK0KLS5v_JkFa11GOtnPvtw4P2s_TRBUuAgl1_MO8WJgLIlZCiIAX2kT7mzeb2MC7DNxGo5lUXuAI-m3AoOlrWpWgcq5zKO8Xvdv0GwYWK-eNnInwzymkDpxPTwCcCaM7y19LTsb1lL4dh7wjOXQq4TWKcS0YLfwSaKxYTe6Ry-fECXJ41AJMWGb78kG3kH2r0GdWv7P2GBAJQl2dFrN4D22ECOihM2KaK5Qgd_wxI4HH-THt6h1nLfBZav8MFlUKu_LA",
//   "Content-Type": "application/json",
//   //"Access-Control-Allow-Credentials": true,
//   withCredentials: true,
//   Accept: "*/*",
// };
