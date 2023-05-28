import React, { useEffect, useState } from "react";
import { SavedData } from "../Utils/Constants";

const SavedItems = JSON.parse(localStorage.getItem(SavedData.GROCERIES));
let itemList;
if (SavedItems) {
  itemList = SavedItems;
} else {
  itemList = [];
}
// [
//     {
//         'id': 0,
//         'name':'Milk',
//         'quantity': 1,
//         'price':10,
//         'createdOn':new Date(),
//         'updateOn':new Date()
//     }
// ]
export const ItemContext = React.createContext();
export default function ItemsProvider({ children }) {
  const [items, setItems] = useState(itemList);
  useEffect(() => {
    localStorage.setItem(SavedData.GROCERIES, JSON.stringify(items));
  }, [items]);

  return (
    <ItemContext.Provider value={{ items, setItems }}>
      {children}
    </ItemContext.Provider>
  );
}
