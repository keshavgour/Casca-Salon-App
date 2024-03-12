import React from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import RoomIcon from "@mui/icons-material/Room";
import ListAltIcon from "@mui/icons-material/ListAlt";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedLabel } from "store/slices/selectLabelSlice";
import { RootState } from "store/store";
import { useNavigate } from "react-router-dom";

const BottomNavbar = () => {
  const navigate = useNavigate();
  const selected = useSelector((state: RootState) => state.selectedLabel.selectedLabel);
  const dispatch = useDispatch();
  const handleIconClick = (label: string) => {
    dispatch(setSelectedLabel(label));
    navigate(`/${label}`);
  };
  return (
    <Grid container justifyContent="space-around" spacing={2}>
      <Grid item xs={2.3} sx={{ textAlign: "center" }}>
        <IconButton onClick={() => handleIconClick("dashboard")} sx={{ ":hover": { backgroundColor: "#fff3e0" } }}>
          <HomeIcon sx={selected === "dashboard" ? { color: "#ff9800" } : { "&:hover": { color: "#ff9800" } }} fontSize="large" />
        </IconButton>
        <Typography variant="body2" sx={{ color: "black" }}>
          Home
        </Typography>
      </Grid>
      <Grid item xs={2.3} sx={{ textAlign: "center" }}>
        <IconButton onClick={() => handleIconClick("explore")} sx={{ ":hover": { backgroundColor: "#fff3e0" } }}>
          <RoomIcon sx={selected === "explore" ? { color: "#ff9800" } : { "&:hover": { color: "#ff9800" } }} fontSize="large" />
        </IconButton>
        <Typography variant="body2" sx={{ color: "black" }}>
          Explore
        </Typography>
      </Grid>
      <Grid item xs={2.3} sx={{ textAlign: "center" }}>
        <IconButton onClick={() => handleIconClick("myBooking")} sx={{ ":hover": { backgroundColor: "#fff3e0" } }}>
          <ListAltIcon sx={selected === "myBooking" ? { color: "#ff9800" } : { "&:hover": { color: "#ff9800" } }} fontSize="large" />
        </IconButton>
        <Typography variant="body2" sx={{ color: "black" }}>
          My Booking
        </Typography>
      </Grid>
      <Grid item xs={2.3} sx={{ textAlign: "center" }}>
        <IconButton onClick={() => handleIconClick("inbox")} sx={{ ":hover": { backgroundColor: "#fff3e0" } }}>
          <ChatBubbleIcon sx={selected === "inbox" ? { color: "#ff9800" } : { "&:hover": { color: "#ff9800" } }} fontSize="large" />
        </IconButton>
        <Typography variant="body2" sx={{ color: "black" }}>
          Inbox
        </Typography>
      </Grid>
      <Grid item xs={2.3} sx={{ textAlign: "center" }}>
        <IconButton onClick={() => handleIconClick("notifications")} sx={{ ":hover": { backgroundColor: "#fff3e0" } }}>
          <NotificationsIcon sx={selected === "notifications" ? { color: "#ff9800" } : { "&:hover": { color: "#ff9800" } }} fontSize="large" />
        </IconButton>
        <Typography variant="body2" sx={{ color: "black" }}>
          Notifications
        </Typography>
      </Grid>
    </Grid>
  );
};
export default BottomNavbar;
