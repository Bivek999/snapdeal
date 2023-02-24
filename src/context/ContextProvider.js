import React, { useState } from "react";
import ContextData from "./product-data";
const ContextProvider = (props) => {
  const [allProducts, setProducts] = useState([]);
  const [categories, setCategory] = useState([]);
  const [active, setActive] = useState([]);
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");
  
  return (
    <ContextData.Provider
      value={{
        allProducts,
        categories,
        active,
        search,
        select,
        setAllProducts: (data) => {
          setProducts(data);
        },
        setCategories: (data) => {
          setCategory(data);
        },
        setActive: (data) => {
          setActive(data);
        },
        setSearch: (data) => {
          setSearch(data);
        },
        setSelect: (data) => {
          setSelect(data);
        },
      }}
    >
      {props.children}
    </ContextData.Provider>
  );
};

export default ContextProvider;
