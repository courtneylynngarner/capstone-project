import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="header-whitespace"></div>
      <div className="promotion">
        <p className="promotion-text">
          PICK A FREE MINI ON ORDERS $125+ AT CHECKOUT. <u>SHOP NOW</u>
        </p>
      </div>
      <div className="top-header">
        <div className="top-part-header">
          <div className="left-ilia"></div>
          <div className="ilia-container">
            <p className="ilia-header">ILIA</p>
          </div>
          <div className="log-in">
            <p className="log-in-text">LOG IN</p>
            <div className="purse-container">
              <img
                src="./assets/checkout.svg"
                className="filter-default-color purse-icon"
                alt=""
              />
              <span className="checkout-items">0</span>
            </div>
          </div>
        </div>
        <div className="top-links-container">
          <div className="top-links">
            {/* <Link to="./Face">FACE</Link>
            <Link to="./Multi">MULTI</Link>
            <Link to="./Lip">LIP</Link>
            <Link to="./Eye">EYE</Link>
            <Link to="./My-shade">MY SHADE</Link> */}
            <p>FACE</p>
            <p>MULTI</p>
            <p>LIP</p>
            <p>EYE</p>
            <p>TOOLS</p>
            <p>MY SHADE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
