import React, { useEffect } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import TextFieldComponent from "components/TextFieldComponent";
import BackBtn from "components/BackBtn";
import { useActions } from "hooks/useActions";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import { flexRowStart } from "sx/FlexStyles";
import getProfileDetails from "Services/getProfileDetailsService";
import updateProfileDetails from "Services/updateProfileDetailsService";

export const EditProfile = () => {
  const profileData = useSelector((state: RootState) => state.editprofile);
  const { setProfileDetails } = useActions();
  useEffect(() => {
    try {
      getProfileDetails().then((response) => {
        if (response) {
          setProfileDetails(response);
          console.log(profileData);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    setProfileDetails({ ...profileData, [name]: value });
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await updateProfileDetails(profileData.id, profileData);
    } catch (error) {
      console.log(error);
    }
  };
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
        <Grid item xs={12} sx={flexRowStart}>
          <BackBtn to="/profile" />
          <Typography variant="h4" component="span">
            Edit Profile
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ width: "80%", marginX: "auto" }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextFieldComponent
                label="Email"
                name="email"
                type="email"
                value={profileData?.email}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextFieldComponent
                label="Full Name"
                type="text"
                name="fullName"
                value={profileData?.fullName}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextFieldComponent
                label="Nickname"
                type="text"
                name="nickname"
                value={profileData?.nickname}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextFieldComponent
                label=""
                name="dateOfBirth"
                type="date"
                value={profileData?.dateOfBirth}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextFieldComponent
                label="Mobile Number"
                name="mobileNumber"
                type="number"
                value={profileData?.mobileNumber}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextFieldComponent
                label="Gender"
                name="gender"
                type="text"
                value={profileData?.gender}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth variant="contained" color="primary" type="submit" sx={{ borderRadius: 25 }}>
                Update
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};
