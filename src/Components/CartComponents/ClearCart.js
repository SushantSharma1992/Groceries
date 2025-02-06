import React, { useContext } from "react";
import { ItemContext } from "../../Context/ItemsProvider";
import Button from "../Button";

const ClearCart = () => {
  const { setCartList } = useContext(ItemContext);
  return (
    <div className="navItem">
      <Button
        onClick={() => {
          setCartList([]);
        }}
      >
        Clear
      </Button>
    </div>
  );
};

export default ClearCart;
