import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Haircut from "features/display/Haircut";
import SaloonDetailPage from "pages/SaloonDetailPage";
import { ServicesPage } from "pages/ServicesPage";
import { PackagesPage } from "pages/PackagesPage";
import { GalleryPage } from "pages/GalleryPage";
import { ReviewPage } from "pages/ReviewPage";
import { SpecialistsPage } from "pages/SpecialistsPage";
import PackageDetails from "features/display/PackageDetails";

export default function RoutesSaloonDetail() {
  return (
    <Router>
      <Routes>
        <Route path="/saloondetails" Component={SaloonDetailPage} />
        <Route path="/allspecialists" Component={SpecialistsPage} />
        <Route path="/allservices" Component={ServicesPage} />
        <Route path="/allpackages" Component={PackagesPage} />
        <Route path="/gallery" Component={GalleryPage} />
        <Route path="/allreviews" Component={ReviewPage} />
        <Route path="/haircut" Component={Haircut} />
        <Route path="/packagedetails" Component={PackageDetails} />
      </Routes>
    </Router>
  );
}
