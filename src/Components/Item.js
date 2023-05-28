import React, { useContext, useEffect, useRef, useState } from "react";
import Adder from "./Adder";
import Subtractor from "./Subtractor";
import { ItemContext } from "../Context/ItemsProvider";
import Delete from "./Delete";
import SlideForOption from "./SlideForOption";

export default function Item(props) {
  const [quantity, setQuantity] = useState(props.item.quantity);
  const { items, setItems } = useContext(ItemContext);
  const index = items.findIndex((item) => item.id === props.item.id);

  useEffect(() => {
    const newItems = Array.of(...items);
    if (index >= 0) {
      newItems[index] = { ...props.item, quantity };
      setItems(newItems);
    }

    // eslint-disable-next-line
  }, [quantity]);

  const increment = () => {
    setQuantity((prevState) => prevState + 1);
  };
  const decrement = () => {
    if (quantity > 0) {
      setQuantity((prevState) => prevState - 1);
    }
  };

  const deleteItem = () => {
    const newArray = Array.of(...items).filter(
      (item) => item.id !== props.item.id
    );
    setItems(newArray);
  };

  const editItem = () => { 
    props.editFunc(props.item)
   }

  const { item } = props;
  return (
    <div className="itemContainer">
      <button type="button" className="leftButton" onClick={editItem}>
        Edit
      </button>
        <SlideForOption>
          <div className="item-left">
            <span className="product">{item.name}</span>x{quantity}
            <div>MRP: {item.price}</div>
            <div>
              Price: Rs.
              <span className="price">{item.price * quantity}</span>
            </div>
          </div>
          <div className="item-right">
            <Subtractor onClick={decrement} />
            <Adder onClick={increment} />
          </div>
        </SlideForOption>

      <Delete deleteFunc={deleteItem} />
    </div>
  );
}
