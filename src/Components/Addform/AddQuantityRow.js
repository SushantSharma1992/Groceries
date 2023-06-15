import React from "react";

export default function AddQuantityRow({value}) {
  return (
    <div className="form_row center">
      <span className="resetDefaultWidth direction_column">
        <div>
          <label>quantity:</label>
        </div>
        <input
          className="form_input"
          type="number"
          name="quantity"
          defaultValue={value.quantity}
        ></input>
      </span>
      <span className="resetDefaultWidth direction_column">
        <div>
          <label>Price:</label>
        </div>
        <input
          className="form_input"
          type="number"
          name="price"
          defaultValue={value.price}
        ></input>
      </span>
    </div>
  );
}
