import React, { useContext, useState } from "react";
import { ItemContext } from "../Context/ItemsProvider";
import AddGroceriesButton from "./AddGroceriesButton";
import AddItemForm from "./Addform/AddItemForm";
import ProductItem from "./ProductItem";
import { initObject } from "../Utils/Constants";

export default function ProductList() {
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
        console.log(value)
        return (
          <div key={value.id}>
            <ProductItem item={value} editFunc={editItemFunc}/>
          </div>
        );
      })}
      <AddGroceriesButton show={show} showForm={setShow} setEditItem={setEditItem} />
    </div>
  );
}
