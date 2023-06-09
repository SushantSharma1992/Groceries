import React, { useContext, useEffect, useState } from "react";
import { ItemContext } from "../Context/ItemsProvider";
import Item from "../Components/Item";
import ItemDetail from "../Components/ItemDetail";
import ItemQuantityChanger from "../Components/ItemQuantityChanger";

export default function CartItem(props) {
  const [quantity, setQuantity] = useState(1);
  const { cartList, setCartList } = useContext(ItemContext);
  const index = cartList.findIndex((item) => item.id === props.item.id);

  useEffect(() => {
    const newItems = Array.of(...cartList);
    if (index >= 0) {
      newItems[index] = { ...props.item, purchaseQuantity: quantity };
      setCartList(newItems);
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
    const newArray = Array.of(...cartList).filter(
      (item) => item.id !== props.item.id
    );
    setCartList(newArray);
  };

  const editItem = () => {
    props.editFunc(props.item);
  };

  const { item } = props;
  return (
    <Item editItem={editItem} deleteItem={deleteItem}>
      <ItemDetail item={item} quantity={quantity} />
      <ItemQuantityChanger decrement={decrement} increment={increment} />
    </Item>
  );
}
