import Fuse from "fuse.js";
import React, { useState } from "react";
import { ReactComponent as BarcodeLogo } from "../assets/barcode.svg";
import SearchResults from "./SearchResults";

export default function Search({ list, actionOnResult }) {
  const [searchResults, setSearchResults] = useState([]);
  let fuse;
  const options = {
    includeScore: true,
    keys: ["name", "brand", "barcode", "weight"],
  };
  fuse = new Fuse(list, options);

  const findQuery = (e) => {
    let query = e.target.value;
    const searchResult = fuse.search(query);
    setSearchResults(searchResult);
  };
  return (
    <div className="search_container">
      <SearchResults items={searchResults} onClickAction={actionOnResult} />
      <div className="search_bar_container">
        <input
          className="searchComp"
          type="search"
          placeholder="Search"
          onChange={findQuery}
        ></input>
        <BarcodeLogo className="barcode_image" />
      </div>
    </div>
  );
}
