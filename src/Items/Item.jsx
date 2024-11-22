import React, { useContext } from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const Item = (props) => {
  const { id, image, name, new_price, old_price } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="item">
      <Link to={`/product/${id}`}>
        <img onClick={window.scrollTo(0, 0)} src={image} alt={name} />
      </Link>
      <p>{name}</p>
      <div className="item-prices">
        <div className="item-price-new">₹{new_price}</div>
        <div className="item-price-old">₹{old_price}</div>
      </div>
      <button
        className="add-to-cart-button"
        onClick={() => addToCart(id)} // Call addToCart when button is clicked
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Item;
