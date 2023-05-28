import React, { useContext, useState } from "react";
import Item from "./Item";
import { ItemContext } from "../Context/ItemsProvider";
import Total from "./Total";
import AddItemForm from "./AddItemForm";
import AddGroceriesButton from "./AddGroceriesButton";

export default function ItemList() {
  const [show, setShow] = useState(false);
  const [editItem, setEditItem] = useState({name:"",price:''})
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
            <Item item={value} editFunc={editItemFunc}/>
          </div>
        );
      })}
      <Total />
      <AddGroceriesButton show={show} showForm={setShow} setEditItem={setEditItem} />
    </div>
  );
}
