import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { ItemContext } from "../Context/ItemsProvider";
import { getPrice } from "../Utils/ItemUtils";

export default function Total(props) {
  const { items } = useContext(ItemContext);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let newTotal = 0;
    items.forEach((item) => {
      newTotal += (item.purchaseQuantity * getPrice(item,item.purchaseQuantity));
    });
    setTotal(newTotal);
  }, [items]);

  return <div className="item">Total : {total}</div>;
}
