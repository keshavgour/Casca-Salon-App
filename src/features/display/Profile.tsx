import React from "react";
import { AppBar, Avatar, Container, Grid, IconButton, Paper, Typography } from "@mui/material";
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
import Switch from "@mui/material/Switch";
import ForwardArrowBtn from "components/ForwardArrowBtn";
import logout from "Services/logoutService";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <Container>
      <Grid container spacing={4} direction={"column"} alignItems="center">
        <Grid item>
          <AppBar position="fixed" sx={{ backgroundColor: "white" }}>
            <Navbar pageHeading="Profile" />
          </AppBar>
        </Grid>
        <Grid item sx={{ mt: "64px" }}>
          <Grid container direction="column" alignItems={"center"}>
            <Grid item>
              <Avatar src={ShriRam} alt="profile photo" sx={{ width: "120px", height: "120px" }} />
            </Grid>
            <Grid item>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Jay
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">jay@email.com</Typography>
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
                          <PermIdentityIcon
                            fontSize="large"
                            sx={{ ":hover": { color: "#ff9800" } }}
                          />
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
                          <NotificationsNoneIcon
                            fontSize="large"
                            sx={{ ":hover": { color: "#ff9800" } }}
                          />
                        </IconButton>
                      </Grid>
                      <Grid item pl={1}>
                        <Typography variant="h6">Notification</Typography>
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
                        <IconButton sx={{ ":hover": { backgroundColor: "#fff3e0" } }}>
                          <ArrowForwardIosIcon sx={{ ":hover": { color: "#ff9800" } }} />
                        </IconButton>
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
                      <Switch />
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
                          <PeopleOutlineIcon
                            fontSize="large"
                            sx={{ ":hover": { color: "#ff9800" } }}
                          />
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
                <Grid container alignItems="center" spacing={1} sx={{ color: "red" }}>
                  <Grid item>
                    <IconButton
                      sx={{ ":hover": { backgroundColor: "#fff3e0" } }}
                      onClick={handleLogout}
                    >
                      <LogoutIcon fontSize="large" sx={{ color: "red" }} />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">Logout</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
