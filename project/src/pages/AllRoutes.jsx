import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Social from "./Social";

import ProductDetails from "../components/ProductDetails";
import PrivateRoute from "../components/PrivateRoute";
import Products from "../components/Products";

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
