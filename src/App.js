import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./Pages/Cart";
import React from "react";
import AllItems from "./Pages/AllItems";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<AllItems />} /> */}
          <Route path="/" element={<Cart />} />
          <Route path="/all-items" element={<AllItems />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
