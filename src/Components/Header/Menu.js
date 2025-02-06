import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { ReactComponent as SettingsLogo } from "../../assets/settings.svg";
import { routerPath } from "../../Routes/Urls";
import AddToHistory from "../AddToHistory";
import ClearCart from "../CartComponents/ClearCart";

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="menu_container">
      <div
        className="menubutton"
        onClick={() => {
          setOpenMenu((prev) => !prev);
        }}
      >
        <CgMenuRight />
      </div>
      <div
        className="right_panel"
        style={{ width: `${openMenu ? "255px" : "0"}` }}
        onFocus={(e) => {
          console.log("focus");
          console.log({ e });
        }}
        onBlur={(e) => {
          console.log("blue");
          console.log({ e });
        }}
      >
        <div
          className="menubutton"
          onClick={() => {
            setOpenMenu((prev) => !prev);
          }}
        >
          <RxCross1 />
        </div>
        <AddToHistory />
        <ClearCart />
        <Link className="navItem" to={routerPath.settings}>
          <SettingsLogo className="navImage" />
          <div>Settings</div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
