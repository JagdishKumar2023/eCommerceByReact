import React from "react";
import "./Description.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An eCommerce website allows visitors to find their product(s), add
          them to their “cart,” and securely enter their payment information to
          complete their purchase. Since the advent of credit card processing on
          the internet, eCommerce has permeated society and into our daily
          lives. With Covid and recent events, eCommerce has growth has exploded
          and is expected to hit $8.1 trillion in 2026 according to Shopify.{" "}
        </p>
        <p>
          {" "}
          Today, just about any product or service imaginable is for sale sold
          on the web, whether through a dedicated eCommerce website or other
          means. In the last several decades, more and more people are buying
          online and enjoying the benefits that eCommerce provides, such as
          increased convenience, lower prices, and sales tax exemptions.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
