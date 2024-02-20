import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import { axiosBaseURL } from "lib/axios"; // Adjust the path according to your file structure

export const WelcomeMessage = () => {
  const [nickName, setNickName] = useState("");

  useEffect(() => {
    // Add a response interceptor to handle successful responses
    const responseInterceptor = axiosBaseURL.interceptors.response.use(
      (response) => {
        console.log("Response:", response);
        // Extract and set the nickname from the response
        setNickName(response.data.nickname);
        return response;
      },
      (error) => {
        console.error("Response Error:", error);
        return Promise.reject(error);
      }
    );

    // Cleanup function to remove the response interceptor
    return () => {
      axiosBaseURL.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  useEffect(() => {
    axiosBaseURL.get("/users/me").catch((err) => console.log(err));
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

// import React, { useEffect, useState } from "react";
// import { Grid, Typography } from "@mui/material";
// import WavingHandIcon from "@mui/icons-material/WavingHand";
// import { axiosBaseURL } from "lib/axios";

// export const WelcomeMessage = () => {
//   const [nickName, setNickName] = useState("");

//   useEffect(() => {
//     axiosBaseURL
//       .get("/users/me")
//       .then((response) => {
//         console.log(response);
//         setNickName(response.data.nickname);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <Grid container>
//       <Grid item>
//         <Typography variant="h4">Morning, {nickName}</Typography>
//       </Grid>
//       <Grid item pl={1.6}>
//         <WavingHandIcon sx={{ color: "#ff9800" }} fontSize="large" />
//       </Grid>
//     </Grid>
//   );
// };
