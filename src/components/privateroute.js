import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const authorised = localStorage.getItem("loggedInUser");
  return authorised ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
