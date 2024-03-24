import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductPage from "../components/ProductPage";
import Login from "../components/Login";
import PrivateRoute from "../components/PrivateRoute";
import SingleProductPage from "../components/SingleProductPage";
import NotFound from "../components/NotFound";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <ProductPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/products/:id"
          element={
            <PrivateRoute>
              <SingleProductPage />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={
            <PrivateRoute>
              <NotFound />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default AllRoutes;
