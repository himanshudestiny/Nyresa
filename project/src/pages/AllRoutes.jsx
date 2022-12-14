import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Social from "./Social";
import PrivateRoute from "../components/PrivateRoute";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Social />} />
        <Route path="/register" element={<Social />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
