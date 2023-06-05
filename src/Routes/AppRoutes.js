import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "../Pages/Products";
import Cart from "../Pages/Cart";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import { routerPath } from "./Urls";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<AllItems />} /> */}
        {/* <Route path={routerPath.home} element={<Home />} /> */}
        <Route path={routerPath.products} element={<Products />} />
        <Route path={routerPath.cart} element={<Cart />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Home/>
    </BrowserRouter>
  );
}
