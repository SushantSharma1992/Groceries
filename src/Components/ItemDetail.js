import React from "react";

export default function ItemDetail({ item, quantity }) {
  return (
    <div className="item-left">
      <span className="product">{item.name}</span>x{quantity}
      <div>MRP: {item.price}</div>
      <div>
        Price: Rs.
        <span className="price">{item.price * quantity}</span>
      </div>
    </div>
  );
}
