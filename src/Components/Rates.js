import React from "react";
import { getPrice } from "../Utils/ItemUtils";

export default function Rates({item, quantity}) {
  return (
    <div>
      <div>{`MRP: ${getPrice(item, quantity)}`}</div>
      <div>Quantity: {quantity}</div>
      <div>
        Price: 
        <span className="price">Rs. {getPrice(item, quantity) * quantity}</span>
      </div>
    </div>
  );
}
