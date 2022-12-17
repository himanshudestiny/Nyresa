import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Social from "./Social";
import PrivateRoute from "../components/PrivateRoute";
import ProductDetails from "../components/ProductDetails";
import Products from "../components/Products";
import ProductList from "../components/ProductList";
import Payment from './../components/Payment/Payment';
import Delivery from './../components/Delivery/Delivery';
import Confirm from './../components/Confirm/Confirm';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Social />} />
        <Route path="/register" element={<Social />} />
        <Route path='/menproduct' element={<Products category="Mens" />}/>
        <Route path="/womenproduct" element={<Products category="Womens"/>}/>
        <Route path="/kidproduct" element={<Products category="Kids"/>}/>
        <Route path="/ProductDetails" element={<ProductDetails />} />
        <Route path='/ProductList' element={<ProductList />} />
        <Route path='/delivery' element={<Delivery />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/confirm' element={<Confirm />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
