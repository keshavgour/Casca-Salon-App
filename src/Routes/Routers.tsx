import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashboardPage, ForgotPasswordPage, LoginPage } from "pages";
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
import { RegisterPage } from "pages";
import { EditProfile } from "features/display/EditProfile";
import PrivateRoutes from "Routes/PrivateRoutes";
import Notification from "features/display/Notification";
import { Security } from "features/display/Security";
import Language from "features/display/Language";
import { PrivacyPolicy } from "features/display/PrivacyPolicy";
import VerifyOtpPage from "pages/VerifyOtpPage";
import UpdatePasswordPage from "pages/UpdatePasswordPage";
import Haircut from "features/display/Haircut";
import SaloonDetailPage from "pages/SaloonDetailPage";
import { ServicesPage } from "pages/ServicesPage";
import { PackagesPage } from "pages/PackagesPage";
import { GalleryPage } from "pages/GalleryPage";
import { ReviewPage } from "pages/ReviewPage";
import { SpecialistsPage } from "pages/SpecialistsPage";
import PackageDetails from "features/display/PackageDetails";
import { BookAppointment } from "features/display/BookAppointment";
import { BookmarkPage } from "pages/BookmarkPage";

export const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/haircuts" element={<HaircutPage />} />
          <Route path="/makeup" element={<MakeupPage />} />
          <Route path="/manicure" element={<ManicurePage />} />
          <Route path="/massage" element={<MassagePage />} />
          <Route path="/notifications" element={<NotificationPage />} />
          <Route path="/nearbyLocation" element={<NearbyLocationPage />} />
          <Route path="/inbox" element={<InboxPage />} />
          <Route path="/myBooking" element={<MyBookingPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/bookmark" element={<BookmarkPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
          <Route path="/verifyOtp" element={<VerifyOtpPage />} />
          <Route path="/updatePassword" element={<UpdatePasswordPage />} />
          <Route path="/" element={<RegisterPage />}></Route>
          {
            <Route element={<PrivateRoutes />}>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/editprofile" element={<EditProfile />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/security" element={<Security />} />
              <Route path="/language" element={<Language />} />
              <Route path="/privacy_policy" element={<PrivacyPolicy />} />
            </Route>
          }
          <Route path="/saloondetails" Component={SaloonDetailPage} />
          <Route path="/allspecialists" Component={SpecialistsPage} />
          <Route path="/allservices" Component={ServicesPage} />
          <Route path="/allpackages" Component={PackagesPage} />
          <Route path="/gallery" Component={GalleryPage} />
          <Route path="/allreviews" Component={ReviewPage} />
          <Route path="/haircut" Component={Haircut} />
          <Route path="/packagedetails" Component={PackageDetails} />
          <Route path="/book_appointment" element={<BookAppointment />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
