import React from "react";
import { FaHistory } from "react-icons/fa";
import { Link } from "react-router-dom";
import { routerPath } from "../Routes/Urls";
import { ReactComponent as CartLogo } from "../assets/cart.svg";
import { ReactComponent as ProductLogo } from "../assets/productList.svg";
import "../styles/navigation.css";

export default function Home() {
  return (
    <div>
      <div className="navigationPanel">
        <div className="navMenu disable-select">
          <Link className="navItem" to={routerPath.cart}>
            <CartLogo className="navImage" />
            <div>Cart</div>
          </Link>
          <Link className="navItem" to={routerPath.products}>
            <ProductLogo className="navImage" />
            <div>Products</div>
          </Link>
          <Link className="navItem" to={routerPath.history}>
            <FaHistory />
            <div>History</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
