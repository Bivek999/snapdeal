import React, { useContext, useEffect, useState } from "react";
import "../style/searchbar.css";
import { BsSearch } from "react-icons/bs";
import ContextData from "../context/product-data";

const Searchbar = () => {
  const { search,setSearch } = useContext(ContextData);
  
  return (
    <>
      <div className="second-nav">
        <div className="snap-logo">
          <img src="https://logos-download.com/wp-content/uploads/2016/10/SnapDeal_logo_logotype.png" />
        </div>
        <div className="input-search">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="magnifine"><BsSearch  /></div>
        </div>
        <div className="nav2">
          cart
        </div>
        <div className="userName">
          User
        </div>
      </div>
    </>
  );
};

export default Searchbar;
