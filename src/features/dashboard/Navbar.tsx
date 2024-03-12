import React, { useEffect, useState } from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import logo from "../../assets/images/logo.png";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { useLocation, useNavigate } from "react-router-dom";
import BottomNavbar from "components/BottomNavbar";
import { Box } from "@mui/system";
import { flexColCenter } from "sx/FlexStyles";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setSelectedIcon(location.pathname.replace("/", "") || "");
  }, [location]);

  const handleIconClick = (icon: string) => {
    setSelectedIcon(icon);
    navigate(`/${icon}`);
  };
  return (
    <Grid container justifyContent="space-between">
      <Grid item lg={1} md={1} sm={2} xs={6} sx={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" width="55px" style={{ marginRight: 5 }} />
        <Typography variant="h4" component="span" color="black">
          Casca
        </Typography>
      </Grid>
      <Grid
        item
        lg={9}
        md={9}
        sm={9}
        xs={0}
        sx={{
          display: { xs: "none", sm: "block", md: "block", lg: "block" },
        }}
      >
        <BottomNavbar />
      </Grid>
      <Grid item lg={1} md={1} sm={1} xs={6} sx={{ textAlign: "end" }}>
        <Box sx={flexColCenter}>
          <IconButton onClick={() => handleIconClick("profile")} sx={{ ":hover": { backgroundColor: "#fff3e0" } }}>
            <PermIdentityIcon
              sx={selectedIcon === "profile" ? { color: "#ff9800" } : { "&:hover": { color: "#ff9800" } }}
              fontSize="large"
            />
          </IconButton>
          <Typography variant="button" sx={{ color: "black" }}>
            Profile
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
  {
    /* /////////////////////////////////////////////////////////////// */
  }

  {
    /* <Grid container pl={6} justifyContent="space-between">
        <Grid item lg={4} xs={3}>
          <Grid container>
            <Grid item>
              <img src={logo} alt="logo" width="55px" />
            </Grid>
            <Grid item>
              <Typography variant="h6" component="span">
                {pageHeading}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={6} xs={5}>
          <Grid container spacing={3} pl={5}>
            <Grid item>
              <IconButton
                onClick={() => handleIconClick("dashboard")}
                sx={{ ":hover": { backgroundColor: "#fff3e0" } }}
              >
                {selectedIcon === "dashboard" ? (
                  <HomeIcon sx={{ color: "#ff9800" }} fontSize="medium" />
                ) : (
                  <HomeIcon sx={{ ":hover": { color: "#ff9800" } }} fontSize="medium" />
                )}
              </IconButton>
              <Typography variant="body2" sx={{ color: "black" }}>
                Home
              </Typography>
            </Grid>
            <Grid item>
              <IconButton
                onClick={() => handleIconClick("explore")}
                sx={{ ":hover": { backgroundColor: "#fff3e0" } }}
              >
                {selectedIcon === "explore" ? (
                  <RoomIcon sx={{ color: "#ff9800" }} fontSize="medium" />
                ) : (
                  <RoomIcon sx={{ ":hover": { color: "#ff9800" } }} fontSize="medium" />
                )}
              </IconButton>
              <Typography variant="body2" sx={{ color: "black" }}>
                Explore
              </Typography>
            </Grid>
            <Grid item>
              <Grid container direction="column" alignItems="center">
                <Grid item>
                  <IconButton
                    onClick={() => handleIconClick("myBooking")}
                    sx={{ ":hover": { backgroundColor: "#fff3e0" } }}
                  >
                    {selectedIcon === "myBooking" ? (
                      <ListAltIcon fontSize="medium" sx={{ color: "#ff9800" }} />
                    ) : (
                      <ListAltIcon sx={{ ":hover": { color: "#ff9800" } }} />
                    )}
                  </IconButton>
                </Grid>
                <Grid item>
                  <Typography variant="body2" sx={{ whiteSpace: "nowrap", color: "black" }}>
                    My Booking
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <IconButton
                onClick={() => handleIconClick("inbox")}
                sx={{ ":hover": { backgroundColor: "#fff3e0" } }}
              >
                {selectedIcon === "inbox" ? (
                  <ChatBubbleIcon fontSize="medium" sx={{ color: "#ff9800" }} />
                ) : (
                  <ChatBubbleOutlineIcon sx={{ ":hover": { color: "#ff9800" } }} />
                )}
              </IconButton>
              <Typography variant="body2" sx={{ color: "black" }}>
                Inbox
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={1.7} xs={2}>
          <Grid container spacing={2}>
            <Grid item>
              <Grid container direction="column" alignItems="center">
                <Grid item>
                  <IconButton
                    onClick={() => handleIconClick("notifications")}
                    sx={{ ":hover": { backgroundColor: "#fff3e0" } }}
                  >
                    {selectedIcon === "notifications" ? (
                      <NotificationsIcon sx={{ color: "#ff9800" }} fontSize="medium" />
                    ) : (
                      <NotificationsNoneIcon
                        sx={{ ":hover": { color: "#ff9800" } }}
                        fontSize="medium"
                      />
                    )}
                  </IconButton>
                </Grid>
                <Grid item>
                  <Typography variant="body2" sx={{ color: "black" }}>
                    Notifications
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <IconButton
                onClick={() => handleIconClick("profile")}
                sx={{ ":hover": { backgroundColor: "#fff3e0" } }}
              >
                {selectedIcon === "profile" ? (
                  <PersonIcon sx={{ color: "#ff9800" }} fontSize="medium" />
                ) : (
                  <PermIdentityIcon fontSize="medium" sx={{ ":hover": { color: "#ff9800" } }} />
                )}
              </IconButton>
              <Typography variant="body2" sx={{ color: "black" }}>
                Profile
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid> */
  }
};

export default Navbar;
