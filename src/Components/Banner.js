import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="banner-container">
        <p className="banner">BANNER HERE</p>
        <p className="banner-text-large">Lorem ipsum dolor sit amet.</p>
        <p className="banner-text-small">
          Nobis nisi dolorem! Possimus similique.
        </p>
        <button className="banner-button">SHOP NOW</button>
        <div className="banner-whitespace"></div>
      </div>
    </div>
  );
};

export default Banner;
