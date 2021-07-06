import React from "react";
import "font-awesome/css/font-awesome.min.css";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

function Header(props) {
  const cart = useSelector((state) => state.cart);

  const checkoutHandler = () => {
    props.history.push("/shipping");
  };
  return (
    <header id="header">
      {/* start header top  */}
      <div className="header-top">
        <ul className="head-top-nav-right">
          <li className="hidden-xs">
            {/* // eslint-disable-next-line */}
            <a href="#" style={{ textDecoration: "none" }}>
              Login
            </a>
          </li>

          <li className="hidden-xs">
            <Link to="/Checkout" style={{ textDecoration: "none" }}>
              Checkout
            </Link>
          </li>
          <li className="hidden-xs">
            <Link to="/cart" style={{ textDecoration: "none" }}>
              My-Cart
            </Link>
          </li>
        </ul>
      </div>
      {/* / header top  */}
      <br />
      {/* start header bottom  */}
      <div className="header-bottom">
        <ul className="head-bottom-nav-right">
          <li className="searchbar">
            <div className="logo">
              <a href="/" style={{ textDecoration: "none" }}>
                <span>
                  <i className="fa fa-2x fa-shopping-cart" />
                  Pizza<strong> Shop</strong>
                  <br />
                  <span>Get your pizzza on Door </span>
                </span>
              </a>
            </div>
          </li>
          <li className="searchbar">
            <div className="search-box">
              <form action>
                <input
                  className="input"
                  type="text"
                  name
                  id
                  placeholder="Search here..."
                />
                <button type="submit">
                  <span className="fa fa-2x fa-search" />
                </button>
              </form>
            </div>
          </li>
          <li className="searchbar">
            <div className="cartbox">
              <Link to="/cart" style={{ textDecoration: "none" }}>
                {/* // eslint-disable-next-line */}
                <a
                  className="cart-link"
                  href="#"
                  style={{ textDecoration: "none" }}
                  onClick={checkoutHandler}
                >
                  <span className="fa fa-shopping-basket" />
                  <span className="cart-title">FOOD CART</span>
                </a>
              </Link>
            </div>
          </li>
        </ul>
      </div>

      {/* / header bottom  */}
    </header>
  );
}
export default Header;
