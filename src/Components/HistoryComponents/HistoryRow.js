import React, { useContext } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { ItemContext } from "../../Context/ItemsProvider";
import Button from "../Button";
import { Link, useNavigate } from "react-router-dom";
import { routerPath } from "../../Routes/Urls";
import { deleteFromArray } from "../../Utils/Utils";

const HistoryRow = ({ item }) => {
  const navigate = useNavigate();
  const { savedHistory, setSavedHistory, setCartList } =
    useContext(ItemContext);
  const loadIntoCart = (cart) => {
    setCartList(cart);
  };
  const redirectToCart = (params) => {
    navigate(routerPath.cart);
  };

  return (
    <div key={item.name} className="flex-row">
      <div
        onClick={() => {
          console.log({ item });
          loadIntoCart(item.snapshot);
          redirectToCart();
        }}
      >
        {item.name}
      </div>
      <Button
        onClick={() => {
          const newList = deleteFromArray(Array.of(...savedHistory), "cartId", item.cartId);
          setSavedHistory(newList);
        }}
      >
        <MdDeleteOutline />
      </Button>
    </div>
  );
};

export default HistoryRow;
