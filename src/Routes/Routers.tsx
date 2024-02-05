import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashboardPage, LoginPage } from "pages";
import { HaircutPage } from "pages";
import { MakeupPage } from "pages";
import { ManicurePage } from "pages";
import { MassagePage } from "pages";
import { NotificationPage } from "pages";
import { NearbyLocationPage } from "pages";
import { ProfilePage } from "pages";
import { InboxPage } from "pages";
import { MyBookingPage } from "pages";
import { ExplorePage } from "pages";
import { SignupPage } from "pages";

export const Routers = () => {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/haircuts" element={<HaircutPage />} />
          <Route path="/makeup" element={<MakeupPage />} />
          <Route path="/manicure" element={<ManicurePage />} />
          <Route path="/massage" element={<MassagePage />} />
          <Route path="/notifications" element={<NotificationPage />} />
          <Route path="/nearbyLocation" element={<NearbyLocationPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/inbox" element={<InboxPage />} />
          <Route path="/myBooking" element={<MyBookingPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
};
