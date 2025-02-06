import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { ItemContext } from "../Context/ItemsProvider";
import { getPrice } from "../Utils/ItemUtils";

export default function Total(props) {
  const { cartList } = useContext(ItemContext);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let newTotal = 0;
    cartList.forEach((item) => {
      newTotal += (item.purchaseQuantity * getPrice(item,item.purchaseQuantity));
    });
    setTotal(newTotal);
  }, [cartList]);

  return <div className="item center font-xl sticky-top">Total : {total}</div>;
}
