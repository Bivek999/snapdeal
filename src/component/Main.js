import React, { useContext, useEffect } from "react";
import ContextData from "../context/product-data";
import Left from "./Left";
import Right from "./Right";

const Main = () => {
  return (
    <div className="display-left-right">
      <Left />
      {/* <Right /> */}
      {/* <div></div> */}
    </div>
  );
};

export default Main;
