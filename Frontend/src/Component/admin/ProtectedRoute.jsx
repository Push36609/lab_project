import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AdminContext } from "../context/AdminContext";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useContext(AdminContext);

  return isAuthenticated ? children : <Navigate to="/admin-login" replace />;
}

export default ProtectedRoute;

