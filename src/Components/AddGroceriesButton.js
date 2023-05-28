import React from "react";

export default function AddGroceriesButton(props) {
  return (
    <button
      type="button"
      className="addGroceries"
      onClick={() => {
        props.showForm(!props.show);
        props.setEditItem({name:'',price:""})
      }}
    >
      <div>+</div>
    </button>
  );
}
