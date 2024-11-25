import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2 style={{ color: "rgb(235,66,63)" }}>NEW ARRIVALS ONLY</h2>
        <div className="headingContainer">
          <div className="hero-hand-icon">
            <p style={{ color: "rgb(19,185,201)" }}>New</p>
            <img src={hand_icon} alt="" />
          </div>
          <p style={{ color: "rgb(19,185,201)" }}>Collection</p>
          <p style={{ color: "rgb(19,185,201)" }}>For everyone</p>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
