import React from "react";
import { Link } from "react-router-dom";
import Search from "../Components/Search";
import { routerPath } from "../Routes/Urls";
import "../styles/navigation.css";

export default function Home() {
  return (
      <div className="navigationPanel">
        <Search></Search>
        <div className="navMenu">
          <Link className="navItem" to={routerPath.cart}>
            Cart
          </Link>
          <Link className="navItem" to={routerPath.products}>
            Products
          </Link>
        </div>
      </div>
  );
}
