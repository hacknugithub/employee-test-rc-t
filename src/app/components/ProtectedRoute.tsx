import * as React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("auth");
  console.log("Token: ", token);
  return <>{token ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default ProtectedRoute;
