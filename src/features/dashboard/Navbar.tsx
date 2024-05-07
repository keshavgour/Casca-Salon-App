import React, { useEffect, useState } from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import RoomIcon from "@mui/icons-material/Room";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import ListAltIcon from "@mui/icons-material/ListAlt";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import PersonIcon from "@mui/icons-material/Person";
import { SvgIconComponent } from "@mui/icons-material";

interface NavItem {
  path: string;
  icon: SvgIconComponent;
  label: string;
}

const navItems: NavItem[] = [
  { path: "dashboard", icon: HomeIcon, label: "Home" },
  { path: "explore", icon: RoomIcon, label: "Explore" },
  { path: "myBooking", icon: ListAltIcon, label: "My Booking" },
  { path: "inbox", icon: ChatBubbleIcon, label: "Inbox" },
  { path: "notifications", icon: NotificationsIcon, label: "Notifications" },
  { path: "bookmark", icon: BookmarksIcon, label: "Bookmarks" },
  { path: "profile", icon: PersonIcon, label: "Profile" },
];

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedPath, setSelectedPath] = useState<string | null>(null);

  useEffect(() => {
    const currentPath = location.pathname.replace("/", "") || "";
    setSelectedPath(currentPath);
  }, [location]);

  const handleItemClick = (path: string) => {
    setSelectedPath(path);
    navigate(`/${path}`);
  };

  return (
    <Grid container pl={2} justifyContent="space-between">
      <Grid item lg={2} xs={3}>
        <Grid container alignItems="center">
          <Grid item pt={0.9}>
            <img src={logo} alt="logo" width="60px" />
          </Grid>
          <Grid item pl={1} pt={0.5}>
            <Typography variant="h4" component="span" color="black">
              Casca
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={10} xs={5} pl={4} textAlign={"center"}>
        <Grid container spacing={10}>
          {navItems.map((item) => (
            <Grid item key={item.path}>
              <IconButton
                onClick={() => handleItemClick(item.path)}
                sx={{
                  ":hover": { backgroundColor: "#fff3e0" },
                }}
              >
                {selectedPath === item.path ? (
                  <item.icon color="primary" fontSize="large" />
                ) : (
                  <item.icon sx={{ ":hover": { color: "#ff9800" } }} fontSize="large" />
                )}
              </IconButton>
              <Typography variant="body2" sx={{ color: "black" }}>
                {item.label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

// import React, { useEffect, useState } from "react";
// import { Grid, IconButton, Typography } from "@mui/material";
// import logo from "../../assets/images/logo.png";
// import PermIdentityIcon from "@mui/icons-material/PermIdentity";
// import { useLocation, useNavigate } from "react-router-dom";
// import HomeIcon from "@mui/icons-material/Home";
// import RoomIcon from "@mui/icons-material/Room";
// import ListAltIcon from "@mui/icons-material/ListAlt";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
// import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import PersonIcon from "@mui/icons-material/Person";

// export const Navbar: React.FC = () => {
//   const navigate = useNavigate();
//   const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
//   const location = useLocation();

//   useEffect(() => {
//     setSelectedIcon(location.pathname.replace("/", "") || "");
//   }, [location]);

//   const handleIconClick = (icon: string) => {
//     setSelectedIcon(icon);
//     navigate(`/${icon}`);
//   };
//   return (
//     <Grid container pl={2} justifyContent="space-between">
//       <Grid item lg={4} xs={3}>
//         <Grid container>
//           <Grid item pt={0.6}>
//             <img src={logo} alt="logo" width="55px" />
//           </Grid>
//           <Grid item pt={1.9} pl={1}>
//             <Typography variant="h4" component="span" color={"black"}>
//               Casca
//             </Typography>
//           </Grid>
//         </Grid>
//       </Grid>
//       <Grid item lg={6} xs={5}>
//         <Grid container spacing={3} pl={5}>
//           <Grid item>
//             <IconButton onClick={() => handleIconClick("dashboard")} sx={{ ":hover": { backgroundColor: "#fff3e0" } }}>
//               {selectedIcon === "dashboard" ? (
//                 <HomeIcon color="primary" fontSize="medium" />
//               ) : (
//                 <HomeIcon sx={{ ":hover": { color: "#ff9800" } }} fontSize="medium" />
//               )}
//             </IconButton>
//             <Typography variant="body2" sx={{ color: "black" }}>
//               Home
//             </Typography>
//           </Grid>
//           <Grid item>
//             <IconButton onClick={() => handleIconClick("explore")} sx={{ ":hover": { backgroundColor: "#fff3e0" } }}>
//               {selectedIcon === "explore" ? (
//                 <RoomIcon color="primary" fontSize="medium" />
//               ) : (
//                 <RoomIcon sx={{ ":hover": { color: "#ff9800" } }} fontSize="medium" />
//               )}
//             </IconButton>
//             <Typography variant="body2" sx={{ color: "black" }}>
//               Explore
//             </Typography>
//           </Grid>
//           <Grid item>
//             <Grid container direction="column" alignItems="center">
//               <Grid item>
//                 <IconButton
//                   onClick={() => handleIconClick("myBooking")}
//                   sx={{ ":hover": { backgroundColor: "#fff3e0" } }}
//                 >
//                   {selectedIcon === "myBooking" ? (
//                     <ListAltIcon fontSize="medium" color="primary" />
//                   ) : (
//                     <ListAltIcon sx={{ ":hover": { color: "#ff9800" } }} />
//                   )}
//                 </IconButton>
//               </Grid>
//               <Grid item>
//                 <Typography variant="body2" sx={{ whiteSpace: "nowrap", color: "black" }}>
//                   My Booking
//                 </Typography>
//               </Grid>
//             </Grid>
//           </Grid>
//           <Grid item>
//             <IconButton onClick={() => handleIconClick("inbox")} sx={{ ":hover": { backgroundColor: "#fff3e0" } }}>
//               {selectedIcon === "inbox" ? (
//                 <ChatBubbleIcon fontSize="medium" color="primary" />
//               ) : (
//                 <ChatBubbleOutlineIcon sx={{ ":hover": { color: "#ff9800" } }} />
//               )}
//             </IconButton>
//             <Typography variant="body2" sx={{ color: "black" }}>
//               Inbox
//             </Typography>
//           </Grid>
//         </Grid>
//       </Grid>
//       <Grid item lg={1.7} xs={2}>
//         <Grid container spacing={2}>
//           <Grid item>
//             <Grid container direction="column" alignItems="center">
//               <Grid item>
//                 <IconButton
//                   onClick={() => handleIconClick("notifications")}
//                   sx={{ ":hover": { backgroundColor: "#fff3e0" } }}
//                 >
//                   {selectedIcon === "notifications" ? (
//                     <NotificationsIcon color="primary" fontSize="medium" />
//                   ) : (
//                     <NotificationsNoneIcon sx={{ ":hover": { color: "#ff9800" } }} fontSize="medium" />
//                   )}
//                 </IconButton>
//               </Grid>
//               <Grid item>
//                 <Typography variant="body2" sx={{ color: "black" }}>
//                   Notifications
//                 </Typography>
//               </Grid>
//             </Grid>
//           </Grid>
//           <Grid item>
//             <IconButton onClick={() => handleIconClick("profile")} sx={{ ":hover": { backgroundColor: "#fff3e0" } }}>
//               {selectedIcon === "profile" ? (
//                 <PersonIcon color="primary" fontSize="medium" />
//               ) : (
//                 <PermIdentityIcon fontSize="medium" sx={{ ":hover": { color: "#ff9800" } }} />
//               )}
//             </IconButton>
//             <Typography variant="body2" sx={{ color: "black" }}>
//               Profile
//             </Typography>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// };

// export default Navbar;

//import BottomNavbar from "components/BottomNavbar";
//import { Box } from "@mui/system";
//import { flexColCenter } from "sx/FlexStyles";

/* */
//   <Grid container justifyContent="space-between">
//   <Grid item lg={1} md={1} sm={2} xs={6} sx={{ display: "flex", alignItems: "center" }}>
//     <img src={logo} alt="logo" width="55px" style={{ marginRight: 5 }} />
//     <Typography variant="h4" component="span" color="black">
//       Casca
//     </Typography>
//   </Grid>
//   <Grid
//     item
//     lg={9}
//     md={9}
//     sm={9}
//     xs={0}
//     sx={{
//       display: { xs: "none", sm: "block", md: "block", lg: "block" },
//     }}
//   >
//     <BottomNavbar />
//   </Grid>
//   <Grid item lg={1} md={1} sm={1} xs={6} sx={{ textAlign: "end" }}>
//     <Box sx={flexColCenter}>
//       <IconButton onClick={() => handleIconClick("profile")} sx={{ ":hover": { backgroundColor: "#fff3e0" } }}>
//         <PermIdentityIcon
//           sx={selectedIcon === "profile" ? { color: "#ff9800" } : { "&:hover": { color: "#ff9800" } }}
//           fontSize="large"
//         />
//       </IconButton>
//       <Typography variant="button" sx={{ color: "black" }}>
//         Profile
//       </Typography>
//     </Box>
//   </Grid>
// </Grid>
