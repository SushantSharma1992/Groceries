import React, { useContext, useState } from "react";
import { ItemContext } from "../Context/ItemsProvider";
import AddGroceriesButton from "./AddGroceriesButton";
import AddItemForm from "./Addform/AddItemForm";
import Total from "./Total";
import CartItem from "../Unit/CartItem";
import { initObject } from "../Utils/Constants";

export default function CartList() {
  const [show, setShow] = useState(false);
  const [editItem, setEditItem] = useState(initObject)
  const { items } = useContext(ItemContext);

  const editItemFunc = (item) => { 
    setShow(true);
    setEditItem(item);
   }

  return (
    <div>
      {show && <AddItemForm item={editItem} setShow={setShow}/>}
      {items.map((value) => {
        return (
          <div key={value.id}>
            <CartItem item={value} editFunc={editItemFunc}/>
          </div>
        );
      })}
      <Total />
      <AddGroceriesButton show={show} showForm={setShow} setEditItem={setEditItem} />
    </div>
  );
}
