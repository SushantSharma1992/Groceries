import React from "react";

export default function AddQuantityRow() {
  return (
    <div>
      <div className="form_row">
        <span>
          <div>
            <label>quantity:</label>
          </div>
          <input type="number" name="quantity" defaultValue=""></input>
        </span>
        <span>
          <div>
            <label>Price:</label>
          </div>
          <input type="number" name="price" defaultValue=""></input>
        </span>
      </div>
    </div>
  );
}
