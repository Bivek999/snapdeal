import React, { createContext } from "react";

const ContextData = createContext({
  allProducts: [],
  categories: [],
  active:[],
  setAllProducts: (data) => {},
  setCategories: (data) => {},
  setActive: (data)=>{},
});

export default ContextData;
