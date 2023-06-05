import React from "react";
import Rates from "./Rates";

export default function ItemDetail({ item, quantity }) {
  return (
    <div className="item-left">
      <span className="product">{`${item.brand} ${item.name} ${item.weight} ${item.unit}`}</span>
      <Rates item={item} quantity={quantity} />
    </div>
  );
}
