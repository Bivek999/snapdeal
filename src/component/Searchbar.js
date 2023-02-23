import React, { useState } from "react";
import "../style/searchbar.css";
import { BsSearch } from "react-icons/bs";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="second-nav">
        <div className="nav2 snap-logo">
          <img src="https://logos-download.com/wp-content/uploads/2016/10/SnapDeal_logo_logotype.png" />
        </div>
        <div className="input-search nav2">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <BsSearch />
        </div>
        <div className="nav2">
          cart
        </div>
        <div>
          User
        </div>
      </div>
    </>
  );
};

export default Searchbar;
