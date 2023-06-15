import React from "react";
import { getMiliUnit } from "../Utils/ItemUtils";

export default function RatesList({ item }) {
  const miliUnit = getMiliUnit(item);
  return item.rates.map((rate) => {
    return (
      <div key={Math.random()}>
        Quantity:
        <span className="price">{rate.quantity} </span>
        <span>
          Price: Rs.:
          <span className="price">{rate.price} </span>
        </span>
        <span>
          Value Per Rs.:
          <span className="price">{Math.floor(miliUnit / rate.price)}</span>
        </span>
      </div>
    );
  });
}
