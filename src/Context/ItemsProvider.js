import React, { useEffect, useState } from "react";
import {
  SavedData,
  defaultObject
} from "../Utils/Constants";

const savedItemsList = JSON.parse(localStorage.getItem(SavedData.GROCERIES));
let savedCartItems = JSON.parse(localStorage.getItem(SavedData.CART_DATA));
let itemList;
if(!savedCartItems){
  savedCartItems=[]
}
if (savedItemsList) {
  itemList = savedItemsList;
} else {
  itemList = [defaultObject];
}
//,defaultObject3,defaultObject4,defaultObject5,defaultObject5,defaultObject5,defaultObject5
export const ItemContext = React.createContext();
export default function ItemsProvider({ children }) {
  const [items, setItems] = useState(itemList);
  const [cartList, setCartList] = useState(savedCartItems);
  useEffect(() => {
    localStorage.setItem(SavedData.GROCERIES, JSON.stringify(items));
    localStorage.setItem(SavedData.CART_DATA, JSON.stringify(cartList));
  }, [items, cartList]);

  return (
    <ItemContext.Provider value={{ items, setItems, cartList, setCartList }}>
      {children}
    </ItemContext.Provider>
  );
}
