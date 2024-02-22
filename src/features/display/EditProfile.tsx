import React, { useEffect } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import TextFieldComponent from "components/TextFieldComponent";
import BackBtn from "components/BackBtn";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import BlockBtn from "components/BlockBtn";
import axiosInstance from "lib/axios";

export const EditProfile = () => {
  const formData = useSelector((state: RootState) => state.signup);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  useEffect(() => {
    const getProfileData = async () => {
      try {
        const response = await axiosInstance.get(`/users/me`);
        console.log(response.data);
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
      {/* <Grid container={true} sx={{ height: "100px", marginBottom: 2, border: 1 }}> */}
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
                value={formData.email}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextFieldComponent
                label="Full Name"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextFieldComponent
                label="Nickname"
                type="text"
                name="nickname"
                value={formData.nickname}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextFieldComponent
                label=""
                name="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextFieldComponent
                label="Mobile Number"
                name="mobileNumber"
                type="number"
                value={formData.mobileNumber}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextFieldComponent
                label="Gender"
                name="gender"
                type="text"
                value={formData.gender}
                onChange={handleChange}
                fullWidth
              />
              {/* <FormControl fullWidth variant="outlined">
              <InputLabel id="gender-label">Gender</InputLabel>
              <Select
                labelId="gender-label"
                id="gender"
                label="gender"
                name="gender"
                value={formData.gender}
                onChange={(event) => handleChange}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </Select>
            </FormControl> */}
            </Grid>

            <Grid item xs={12}>
              {/* <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{
                  "&:hover": {
                    backgroundColor: "#ff9800",
                    color: "white",
                    border: "1px solid #ff9800",
                  },
                  color: "white",
                  backgroundColor: "#ff9800",
                  border: "1px solid #ff9800",
                  borderRadius: "100px",
                }}
              >
                Continue
              </Button> */}
              <BlockBtn btnText="Update" btnSubText="" />
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};
