import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" replace />; // Redirect to login if not authenticated
  }

  return children; // If token present, allow to go inside
};

export default PrivateRoute;
