import React, { useContext, useEffect, useState } from "react";
import Rating from "react-rating";
import ContextData from "../context/product-data";
import "../style/description.css";
import { FaRupeeSign } from "react-icons/fa";
import { Prev } from "react-bootstrap/esm/PageItem";
import { json } from "react-router-dom";
import formatAmount from "../context/constant";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";

const Description = () => {
  const [cart, setCart] = useState([]);
  const { select } = useContext(ContextData);
  const [src, setSrc] = useState(select.thumbnail);

  const dispatch = useDispatch();

  const cartData = useSelector((state) => state);
  console.log(cartData);

  // {
  //   id, title, quantity, price, totalPrice, thumbnail;
  // }
  function handleCart() {
    const { id, title, price, thumbnail, discountPercentage } = select;
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
        thumbnail,
        discountPercentage,
      })
    );
  }
  return (
    <div className="descriptions">
      <div className="img-left">
        <img src={src} className="main-img" />
        <div className="sort-img">
          {select.images.map((data) => {
            return <img src={data} onClick={() => setSrc(data)} />;
          })}
        </div>
        <h3>{select.title}</h3>
      </div>
      <div className="describe-right">
        <h2>{select.brand}</h2>
        <h4>{select.description}</h4>
        <div className="rating-style">
          <span>⭐{select.rating}&nbsp;&nbsp;&nbsp;Rating</span>
        </div>
        <div>
          <h4 style={{ float: "left", margin: "30px" }}>Special Price</h4>
        </div>
        <div className="price-discount">
          <span>
            <span>
              {formatAmount((select.price*80))}
              {/* //formatAmount( */}
                {/* select.price * 80 -
                  (select.price / 100) * select.discountPercentage * 80
              ) */}
            </span>
            {/* &nbsp;&nbsp;
            <span style={{ textDecorationLine: "line-through", color: "gray" }}>
              {formatAmount(select.price * 80)}
            </span> */}
          </span>
          <span>&nbsp;&nbsp;&nbsp;{select.discountPercentage}% off</span>
        </div>
        <div className="atc-btn">
          <button onClick={handleCart}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Description;
