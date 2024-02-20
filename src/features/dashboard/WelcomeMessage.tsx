// import React from "react";
// import { Grid, Typography } from "@mui/material";
// import WavingHandIcon from "@mui/icons-material/WavingHand";

// export const WelcomeMessage = () => {
//   console.log();
//   return (
//     <Grid container>
//       <Grid item>
//         <Typography variant="h4">Morning, </Typography>
//       </Grid>
//       <Grid item pl={1.6}>
//         <WavingHandIcon sx={{ color: "#ff9800" }} fontSize="large" />
//       </Grid>
//     </Grid>
//   );
// };

import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import axiosInstance from "lib/axios";

export const WelcomeMessage = () => {
  const [nickName, setNickName] = useState("");

  useEffect(() => {
    axiosInstance
      .get("/users/me", {
        headers: {
          authorization:
            "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2M2VlNzVkMi0xZDlhLTRiMmItOTk1OS0wNzQ4NDIyYmZkM2EiLCJpYXQiOjE3MDgzNDc0OTksImV4cCI6MTcwODM0ODM5OX0.cesF6EKWOgvZr6zf1S3zuT6jFz8wTwNwPGPZ4vqeT2w6edg24Z5gYiTNKoKBf4RjV9ujOcv-rjNQ2ojDBdO5Uxk7oK78gSs5NPI6rYG9nWrZ4CuYqn2F6rypX-ZwAPNaiYJm4eg00pQyNcmwUBtx6AthwCdNvtXqGkULgIsvVDZTi8KmYyqbvXCzW1daB0U-OSSdxSkYz7vSHNX4FndtbOL6yhY5gD5MTU1EfllRtJtxzXi4Kxa0pQRsXyVYnXT-n2BkNtpu1O_x489GcKSHbjA6pidmkCWozCGY0mntiVfk0xxoUPxDrRAHlIjIpJKK-zPwfzQcOC0rnJ6vWHezlQ",
          "Content-Type": "application/json",
          Accept: "*/*",
        },
      })
      .then((response) => {
        console.log(response);
        setNickName(response.data.nickname);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Grid container>
      <Grid item>
        <Typography variant="h4">Morning, {nickName}</Typography>
      </Grid>
      <Grid item pl={1.6}>
        <WavingHandIcon sx={{ color: "#ff9800" }} fontSize="large" />
      </Grid>
    </Grid>
  );
};
