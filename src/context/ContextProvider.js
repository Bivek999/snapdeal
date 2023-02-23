import React, { useState } from 'react'
import ContextData from './product-data'
const ContextProvider = (props) => {
    const [allProducts,setProducts]=useState([]);
    const [categories,setCategory]=useState([]);
    const [active,setActive]=useState([]);
  return (
    <ContextData.Provider value={{
        allProducts,
        categories,
        active,
        setAllProducts:(data)=>{
            setProducts(data);
        },
        setCategories:(data)=>{
            setCategory(data);
        },
        setActive:(data)=>{
            setActive(data);
        }
    }}>
        {props.children}
    </ContextData.Provider>
  )
}

export default ContextProvider;