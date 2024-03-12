import React from "react";
import { AppBar, Avatar, Button, Container, Grid, IconButton, Paper, Typography } from "@mui/material";
import { Navbar } from "features/dashboard";
import ShriRam from "assets/images/ShriRam.png";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PaymentIcon from "@mui/icons-material/Payment";
import GppGoodIcon from "@mui/icons-material/GppGood";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LockIcon from "@mui/icons-material/Lock";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ForwardArrowBtn from "components/ForwardArrowBtn";
import logout from "Services/logoutService";
import { useNavigate } from "react-router-dom";
import ToggleSwitch from "components/ToggleSwitch";
import { useQuery } from "@tanstack/react-query";
import getProfileData from "Services/profileDataService";
import Loading from "components/Loading";
import { Error } from "./Error";

const Profile = () => {
  const { isLoading, error, data: userDetails } = useQuery({ queryKey: ["profile"], queryFn: getProfileData });
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }
  if (error) {
    console.log(error.message);
    return (
      <>
        <Error />
      </>
    );
  }
  return (
    <Container>
      <Grid container spacing={4} direction={"column"} alignItems="center">
        <Grid item>
          <AppBar position="fixed" sx={{ backgroundColor: "white" }}>
            <Navbar />
          </AppBar>
        </Grid>
        <Grid item sx={{ mt: "64px" }}>
          <Grid container direction="column" alignItems={"center"}>
            <Grid item>
              <Avatar src={ShriRam} alt="profile photo" sx={{ width: "120px", height: "120px" }} />
            </Grid>
            <Grid item>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {userDetails?.name}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">{userDetails?.email}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Paper>
            <Grid container direction="column" spacing={2.5}>
              <Grid item>
                <Grid container justifyContent="space-between" alignItems="center">
                  <Grid item>
                    <Grid container alignItems="center">
                      <Grid item>
                        <IconButton sx={{ ":hover": { backgroundColor: "#fff3e0" } }}>
                          <PermIdentityIcon fontSize="large" sx={{ ":hover": { color: "#ff9800" } }} />
                        </IconButton>
                      </Grid>
                      <Grid item pl={1}>
                        <Typography variant="h6">Edit Profile</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container>
                      <ForwardArrowBtn to="/editprofile" />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container justifyContent="space-between" alignItems="center">
                  <Grid item>
                    <Grid container alignItems="center">
                      <Grid item>
                        <IconButton sx={{ ":hover": { backgroundColor: "#fff3e0" } }}>
                          <NotificationsNoneIcon fontSize="large" sx={{ ":hover": { color: "#ff9800" } }} />
                        </IconButton>
                      </Grid>
                      <Grid item pl={1}>
                        <Typography variant="h6">Notification</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container>
                      <ForwardArrowBtn to="/notification" />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container justifyContent="space-between" alignItems="center">
                  <Grid item>
                    <Grid container alignItems="center">
                      <Grid item>
                        <IconButton sx={{ ":hover": { backgroundColor: "#fff3e0" } }}>
                          <PaymentIcon fontSize="large" sx={{ ":hover": { color: "#ff9800" } }} />
                        </IconButton>
                      </Grid>
                      <Grid item pl={1}>
                        <Typography variant="h6">Payment</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container>
                      <IconButton sx={{ ":hover": { backgroundColor: "#fff3e0" } }}>
                        <ArrowForwardIosIcon sx={{ ":hover": { color: "#ff9800" } }} />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container justifyContent="space-between" alignItems="center">
                  <Grid item>
                    <Grid container alignItems="center">
                      <Grid item>
                        <IconButton sx={{ ":hover": { backgroundColor: "#fff3e0" } }}>
                          <GppGoodIcon fontSize="large" sx={{ ":hover": { color: "#ff9800" } }} />
                        </IconButton>
                      </Grid>
                      <Grid item pl={1}>
                        <Typography variant="h6">Security</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container>
                      <ForwardArrowBtn to="/security" />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container justifyContent="space-between" alignItems="center">
                  <Grid item>
                    <Grid container alignItems="center">
                      <Grid item>
                        <IconButton sx={{ ":hover": { backgroundColor: "#fff3e0" } }}>
                          <LanguageIcon fontSize="large" sx={{ ":hover": { color: "#ff9800" } }} />
                        </IconButton>
                      </Grid>
                      <Grid item pl={1}>
                        <Typography variant="h6">Language</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container alignItems="center" pl={50}>
                      <Grid item>
                        <Typography variant="h6">English (India)</Typography>
                      </Grid>
                      <Grid item>
                        <ForwardArrowBtn to="/language" />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container justifyContent="space-between" alignItems="center">
                  <Grid item>
                    <Grid container alignItems="center">
                      <Grid item>
                        <IconButton sx={{ ":hover": { backgroundColor: "#fff3e0" } }}>
                          <DarkModeIcon fontSize="large" sx={{ ":hover": { color: "#ff9800" } }} />
                        </IconButton>
                      </Grid>
                      <Grid item pl={1}>
                        <Typography variant="h6">Dark Mode</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container>
                      <ToggleSwitch />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container justifyContent="space-between" alignItems="center">
                  <Grid item>
                    <Grid container alignItems="center">
                      <Grid item>
                        <IconButton sx={{ ":hover": { backgroundColor: "#fff3e0" } }}>
                          <LockIcon fontSize="large" sx={{ ":hover": { color: "#ff9800" } }} />
                        </IconButton>
                      </Grid>
                      <Grid item pl={1}>
                        <Typography variant="h6">Privacy Policy</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container>
                      <ForwardArrowBtn to="/privacy_policy" />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container justifyContent="space-between" alignItems="center">
                  <Grid item>
                    <Grid container alignItems="center">
                      <Grid item>
                        <IconButton sx={{ ":hover": { backgroundColor: "#fff3e0" } }}>
                          <PeopleOutlineIcon fontSize="large" sx={{ ":hover": { color: "#ff9800" } }} />
                        </IconButton>
                      </Grid>
                      <Grid item pl={1}>
                        <Typography variant="h6">Invite Friends</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container>
                      <IconButton sx={{ ":hover": { backgroundColor: "#fff3e0" } }}>
                        <ArrowForwardIosIcon sx={{ ":hover": { color: "#ff9800" } }} />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Button onClick={handleLogout}>
                  <LogoutIcon fontSize="large" sx={{ color: "red" }} />
                  <Typography variant="h6" sx={{ textTransform: "none", color: "red", marginLeft: 2 }}>
                    Logout
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Profile;
