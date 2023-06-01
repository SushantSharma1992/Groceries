import React from "react";
import ItemList from "../Components/ItemList";
import ItemsProvider from "../Context/ItemsProvider";

export default function Cart() {
  return (
    <ItemsProvider>
      <ItemList />
    </ItemsProvider>
  );
}
