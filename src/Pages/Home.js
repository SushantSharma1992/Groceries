import React from "react";
import ItemList from "../Components/ItemList";
import ItemsProvider from "../Context/ItemsProvider";

export default function Home() {
  return (
    <ItemsProvider>
      <ItemList />
    </ItemsProvider>
  );
}
