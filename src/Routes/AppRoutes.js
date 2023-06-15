import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddItemFormPage from "../Components/Addform/AddItemFormPage";
import Cart from "../Pages/Cart";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Settings from "../Pages/Settings";
import { routerPath } from "./Urls";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<AllItems />} /> */}
        {/* <Route path={routerPath.home} element={<Home />} /> */}
        <Route path={routerPath.products} element={<Products />} />
        <Route path={routerPath.cart} element={<Cart />} />
        <Route path={routerPath.settings} element={<Settings />} />
        <Route path={routerPath.add} element={<AddItemFormPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Home/>
    </BrowserRouter>
  );
}
