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
import { flexColCenter } from "sx/FlexStyles";

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
      <Grid item xs={2.3} sx={flexColCenter}>
        <IconButton
          onClick={() => handleIconClick("dashboard")}
          sx={{ ":hover": { backgroundColor: "primary.light" }, fontSize: { xs: "30px", sm: "30px", md: "35px", lg: "35px" } }}
        >
          <HomeIcon sx={selected === "dashboard" ? { color: "primary.dark" } : { "&:hover": { color: "primary.dark" } }} fontSize="inherit" />
        </IconButton>
        <Typography variant="button" component="span" color="secondary">
          Home
        </Typography>
      </Grid>
      <Grid item xs={2.3} sx={flexColCenter}>
        <IconButton
          onClick={() => handleIconClick("explore")}
          sx={{ ":hover": { backgroundColor: "primary.light" }, fontSize: { xs: "30px", sm: "30px", md: "35px", lg: "35px" } }}
        >
          <RoomIcon sx={selected === "explore" ? { color: "primary.dark" } : { "&:hover": { color: "primary.dark" } }} fontSize="inherit" />
        </IconButton>
        <Typography variant="button" component="span" color="secondary">
          Explore
        </Typography>
      </Grid>
      <Grid item xs={2.3} sx={flexColCenter}>
        <IconButton
          onClick={() => handleIconClick("myBooking")}
          sx={{ ":hover": { backgroundColor: "primary.light" }, fontSize: { xs: "30px", sm: "30px", md: "35px", lg: "35px" } }}
        >
          <ListAltIcon sx={selected === "myBooking" ? { color: "primary.dark" } : { "&:hover": { color: "primary.dark" } }} fontSize="inherit" />
        </IconButton>
        <Typography variant="button" component="span" color="secondary">
          Booking
        </Typography>
      </Grid>
      <Grid item xs={2.3} sx={flexColCenter}>
        <IconButton
          onClick={() => handleIconClick("inbox")}
          sx={{ ":hover": { backgroundColor: "primary.light" }, fontSize: { xs: "30px", sm: "30px", md: "35px", lg: "35px" } }}
        >
          <ChatBubbleIcon sx={selected === "inbox" ? { color: "primary.dark" } : { "&:hover": { color: "primary.dark" } }} fontSize="inherit" />
        </IconButton>
        <Typography variant="button" component="span" color="secondary">
          Inbox
        </Typography>
      </Grid>
      <Grid item xs={2.3} sx={flexColCenter}>
        <IconButton
          onClick={() => handleIconClick("notifications")}
          sx={{ ":hover": { backgroundColor: "primary.light" }, fontSize: { xs: "30px", sm: "30px", md: "35px", lg: "35px" } }}
        >
          <NotificationsIcon
            sx={selected === "notifications" ? { color: "primary.dark" } : { "&:hover": { color: "primary.dark" } }}
            fontSize="inherit"
          />
        </IconButton>
        <Typography variant="button" component="span" color="secondary">
          Notifications
        </Typography>
      </Grid>
    </Grid>
  );
};
export default BottomNavbar;
