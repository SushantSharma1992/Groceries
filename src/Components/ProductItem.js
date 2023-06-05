import React, { useContext } from "react";
import ItemDetail from "./ItemDetail";
import ValuePerRs from "./ValuePerRs";
import Item from "./Item";
import { ItemContext } from "../Context/ItemsProvider";

export default function ProductItem(props) {
  const { items, setItems } = useContext(ItemContext);
  const { item } = props;

  const deleteItem = () => {
    const newArray = Array.of(...items).filter(
      (item) => item.id !== props.item.id
    );
    setItems(newArray);
  };

  const editItem = () => {
    props.editFunc(props.item);
  };

  return (
    <div>
      <Item editItem={editItem} deleteItem={deleteItem}>
        <ItemDetail item={item} />
        <ValuePerRs item={item} />
      </Item>
    </div>
  );
}
