import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Social from "./Social";
import PrivateRoute from "../components/PrivateRoute";
import ProductDetails from "../components/ProductDetails";
import Products from "../components/Products";
import ProductList from "../components/ProductList";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Social />} />
        <Route path="/register" element={<Social />} />
        <Route path='/menproduct' element={<Products />}/>
        <Route path="/ProductDetails" element={<ProductDetails />} />
        <Route path='/ProductList' element={<ProductList />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
