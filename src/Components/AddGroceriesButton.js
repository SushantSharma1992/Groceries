import React from "react";

export default function AddGroceriesButton(props) {
  return (
    <button
      type="button"
      className="addGroceries_button"
      onClick={() => {
        props.showForm(!props.show);
      }}
    >
      <div>+</div>
    </button>
  );
}
