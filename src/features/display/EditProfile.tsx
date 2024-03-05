import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import TextFieldComponent from "components/TextFieldComponent";
import BackBtn from "components/BackBtn";
import BlockBtn from "components/BlockBtn";
import editProfile from "Services/editProfileService";
import { useQuery } from "@tanstack/react-query";
import Loading from "components/Loading";

export const EditProfile = () => {
  const { isLoading, error, data: profileData } = useQuery({ queryKey: ["profile"], queryFn: editProfile });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleChange = () => {};

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  if (error) {
    return (
      <>
        <h1>Error</h1>
      </>
    );
  }

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
          <Typography variant="body2" component="span">
            Edit Profile
          </Typography>
        </Grid>
      </Grid>
      {/* </Grid> */}
      <Box sx={{ width: "80%", marginX: "auto" }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextFieldComponent label="Email" name="email" type="email" value={profileData?.email} onChange={handleChange} fullWidth />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextFieldComponent label="Full Name" type="text" name="fullName" value={profileData?.fullName} onChange={handleChange} fullWidth />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextFieldComponent label="Nickname" type="text" name="nickname" value={profileData?.nickname} onChange={handleChange} fullWidth />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextFieldComponent label="" name="dateOfBirth" type="date" value={profileData?.dateOfBirth} onChange={handleChange} fullWidth />
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
              <TextFieldComponent label="Gender" name="gender" type="text" value={profileData?.gender} onChange={handleChange} fullWidth />
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
