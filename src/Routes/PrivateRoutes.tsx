import React from "react";
import getAccessToken from "Services/getAccessToken";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  return getAccessToken() ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoutes;
