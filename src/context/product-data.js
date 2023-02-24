import React, { createContext } from "react";

const ContextData = createContext({
  allProducts: [],
  categories: [],
  active: [],
  search: "",
  select: [],
  setSelect: (data) => {},
  setAllProducts: (data) => {},
  setCategories: (data) => {},
  setActive: (data) => {},
  setSearch: (data) => {},
});

export default ContextData;
