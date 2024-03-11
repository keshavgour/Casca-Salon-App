import React from "react";
import { getAccessToken } from "Services/getTokens";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  return getAccessToken() ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoutes;
