import React from "react";
import Login from "./Login";

const PrivateRoute = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("token"));
  if (!token) {
    return <Login />;
  }
  return children;
};

export default PrivateRoute;
