import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SaloonDetails from "./features/dashboard/SaloonDetails";
import Services from "./features/display/Services";
import Haircut from "./features/display/Haircut";
import OurSpecialists from "./features/dashboard/OurSpecialists";
import Packages from "./features/display/Packages";
import Gallery from "./features/display/Gallery";
import Review from "./features/display/Review";
export default function RoutesSaloonDetail() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={SaloonDetails} />
        <Route path="/allspecialists" Component={OurSpecialists} />
        <Route path="/allservices" Component={(props) => <Services {...props} isPage={true} />} />
        <Route path="/allpackages" Component={(props) => <Packages {...props} isPage={true} />} />
        <Route path="/gallery" Component={(props) => <Gallery {...props} isPage={true} />} />
        <Route path="/allreviews" Component={(props) => <Review {...props} isPage={true} />} />
        <Route path="/haircut" Component={Haircut} />
      </Routes>
    </Router>
  );
}
