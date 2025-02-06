import React, { useContext } from "react";
import { ItemContext } from "../Context/ItemsProvider";
import Button from "./Button";

const AddToHistory = () => {
  const { cartList, setSavedHistory } = useContext(ItemContext);
  return (
    <div className="navItem">
      <Button
        onClick={() => {
          setSavedHistory((prev) => {
            const newEntry = {
              cartId: prev.length,
              name: `${prev.length + 1}-cart on ${new Date()}`,
              snapshot: cartList,
            };
            const index = prev.findIndex(
              (cart) => cart.cartId === cartList.cartId
            );
            if (index < 0) {
              return [...prev, newEntry];
            } else {
              const newArray = Array.of(...prev);
              newArray[index] = newEntry;
              return newArray;
            }
          });
        }}
      >
        Save to history
      </Button>
    </div>
  );
};

export default AddToHistory;
