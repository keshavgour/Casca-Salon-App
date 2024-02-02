import { Box } from "@mui/material"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import DashboardPage from "./pages/DashboardPage"
import HaircutPage from "./pages/HaircutPage"
import MakeupPage from "./pages/MakeupPage"
import ManicurePage from "./pages/ManicurePage"
import MassagePage from "./pages/MassagePage"
import NotificationPage from "./pages/NotificationPage"
import NearbyLocationPage from "./pages/NearbyLocationPage"
import ProfilePage from "./pages/ProfilePage"
import InboxPage from "./pages/InboxPage"
import MyBookingPage from "./pages/MyBookingPage"
import ExplorePage from "./pages/ExplorePage"

export const Routers = () => {
    return (
        <Box>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<DashboardPage />}/>
                    <Route path="/haircuts" element={<HaircutPage />}/>
                    <Route path="/makeup" element={<MakeupPage />} />
                    <Route path="/manicure" element={<ManicurePage />} />
                    <Route path="/massage" element={<MassagePage />} />
                    <Route path="/notifications" element={<NotificationPage />}/>
                    <Route path="/nearbylocation" element={<NearbyLocationPage />}/>
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/inbox" element={<InboxPage />} />
                    <Route path="/myBooking" element={<MyBookingPage />}/>
                    <Route path="/explore" element={<ExplorePage />}/>
                </Routes>
            </BrowserRouter>
        </Box>
    )
}