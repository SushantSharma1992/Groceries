import React from "react";
import { Link } from "react-router-dom";
import { routerPath } from "../Routes/Urls";
import { ReactComponent as CartLogo } from "../assets/cart.svg";
import { ReactComponent as ProductLogo } from "../assets/productList.svg";
import { ReactComponent as SettingsLogo } from "../assets/settings.svg";
import "../styles/navigation.css";

export default function Home() {
  return (
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
        <Link className="navItem" to={routerPath.settings}>
          <SettingsLogo className="navImage" />
          <div>Settings</div>
        </Link>
        {/* <Link className="navItem" to={routerPath.barcode}>
            Barcode
          </Link> */}
      </div>
    </div>
  );
}
