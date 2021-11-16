import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-1-box">
          <p className="footer-1-large"> Clean, skin-centric beauty.</p>
          <p className="footer-1-small">
            We challenge the conventions of clean beauty to create something
            radically new—through safe, potent formulas that protect and revive
            your skin.
          </p>
        </div>
        <div className="footer-2-box">
          <p className="sign-up-header">10% OFF YOUR FIRST ORDER</p>
          <p className="sign-up-content">
            Be the first to hear about product launches, exclusive sales, and
            more news.
          </p>
          <form action="">
            <input type="email" className="email" placeholder="Email" />
            <button className="submit-button" type="submit">
              SEND
            </button>
          </form>
          <div className="sm-container">
            <div className="sm-icons">
              <img src="../Assets/instagram-icon.svg" alt="insta-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
