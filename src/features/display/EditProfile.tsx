import React, { useEffect } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import TextFieldComponent from "components/TextFieldComponent";
import BackBtn from "components/BackBtn";
// import { useSelector } from "react-redux";
// import { RootState } from "store/store";
import BlockBtn from "components/BlockBtn";
import axiosInstance from "lib/axios";

export const EditProfile = () => {
  // const formData = useSelector((state: RootState) => state.signup);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  useEffect(() => {
    const getProfileData = async () => {
      try {
        const response = await axiosInstance.get(`/profile/getProfile`);
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error("Errro fetcing data :", error);
      }
    };
    getProfileData();
  }, []);
  const handleChange = () => {};
  return (
    <Container
      sx={{
        minWidth: "320px",
        maxWidth: "1080px",
        boxSizing: "border-box",
        marginX: "auto",
        marginTop: 0,
        padding: 0,
      }}
    >
      <Grid container sx={{ marginY: 1 }}>
        <Grid item xs={1} sx={{ textAlign: "end" }}>
          <BackBtn to="/profile" />
        </Grid>
        <Grid item xs={11} sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="titleTypo" component="span">
            Edit Profile
          </Typography>
        </Grid>
      </Grid>
      {/* </Grid> */}
      <Box sx={{ width: "80%", marginX: "auto" }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextFieldComponent
                label="Email"
                name="email"
                type="email"
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextFieldComponent
                label="Full Name"
                type="text"
                name="fullName"
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextFieldComponent
                label="Nickname"
                type="text"
                name="nickname"
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextFieldComponent
                label=""
                name="dateOfBirth"
                type="date"
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextFieldComponent
                label="Mobile Number"
                name="mobileNumber"
                type="number"
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextFieldComponent
                label="Gender"
                name="gender"
                type="text"
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <BlockBtn btnText="Update" btnSubText="" />
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};
