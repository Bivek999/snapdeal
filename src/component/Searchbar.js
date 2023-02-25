import React, { useContext, useEffect, useState } from "react";
import "../style/searchbar.css";
import { BsSearch } from "react-icons/bs";
import ContextData from "../context/product-data";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import formatAmount from "../context/constant";
import { Button } from "@mui/material";
import { FaUser } from "react-icons/fa";

const Searchbar = () => {
  const { search, setSearch, setOpen, isUserLogin, setIsUserLogin } =
    useContext(ContextData);
  const navigate = useNavigate();
  const navii=!isUserLogin?'/login':'/cart';
  const { totalQuantity, totalCartPrice } = useSelector((state) => state);
  return (
    <>
      <div className="second-nav">
        <div className="snap-logo">
          <img
            src="https://logos-download.com/wp-content/uploads/2016/10/SnapDeal_logo_logotype.png"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="input-search">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="magnifine">
            <BsSearch />
          </div>
        </div>
        <div className="nav2">
          <Link
            style={{
              textDecoration: "none",
              color: "#fff",
              backgroundColor: "green",
            }}
            onClick={() => {
              setOpen(true);
              // navigate("/login");
            }}
            to={navii}
          >
            Cart&nbsp;&nbsp;
            <span style={{ paddingBottom: "10px", marginBottom: "10px" }}>
              {totalQuantity}
            </span>
            &nbsp;&nbsp;<span>{formatAmount(totalCartPrice * 80)}</span>
          </Link>
        </div>
        <div className="userName">
          {!isUserLogin ? (
            <Button
              variant="contained"
              onClick={() => {
                setOpen(true);
                navigate("/login");
              }}
            >
              <FaUser />
              Login
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={() => {
                setIsUserLogin(false);
                // setOpen(true);
                localStorage.clear();
              }}
            >
              <FaUser />
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Searchbar;
