import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const { isAuth } = useSelector((store) => store.authManager.data);

  if (isAuth) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
