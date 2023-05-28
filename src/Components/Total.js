import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { ItemContext } from "../Context/ItemsProvider";

export default function Total(props) {
  const { items } = useContext(ItemContext);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let newTotal = 0;
    items.forEach((item) => {
      newTotal += (item.quantity * item.price);
    });
    setTotal(newTotal);
  }, [items]);

  return <div className="item">Total : {total}</div>;
}
