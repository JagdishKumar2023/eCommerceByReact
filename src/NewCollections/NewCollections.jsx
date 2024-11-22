import React, { useContext } from "react";
import "./NewCollections.css";
import { ShopContext } from "../Context/ShopContext"; // Import ShopContext
import new_collections from "../Assets/new_collections";
import Item from "../Items/Item";

const NewCollections = () => {
  const { addToCart } = useContext(ShopContext); // Get addToCart function from context

  return (
    <div className="new-collection">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collection">
        {new_collections.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
            addToCart={addToCart} // Pass addToCart function to Item
          />
        ))}
      </div>
    </div>
  );
};

export default NewCollections;
