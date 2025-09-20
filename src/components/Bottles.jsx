import React, { use, useEffect, useState } from "react";
import Bottle from "./Bottle";
import Cart from "./Cart";
import { addToCart, getStoreCart } from "../utils/bottle";

const Bottles = ({ bottleData }) => {
  const [carts, setCarts] = useState([]);
  const bottles = use(bottleData);

  useEffect(() => {
    const storeCartIds = getStoreCart();
    const storeCart = [];

    for (const id of storeCartIds) {
      const cartBottle = bottles.find((bottle) => bottle.id === id);

      if (cartBottle) {
        storeCart.push(cartBottle);
      }
    }
    setCarts(storeCart);
  }, [bottles]);

  const handleAddToCart = (bottle) => {
    const bottles = [...carts, bottle];
    setCarts(bottles);
    addToCart(bottle.id);
  };

  const handleRemove = (id) => {
    const removeData = carts.filter((cartData) => cartData.id !== id);
    setCarts(removeData);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div>
        {carts.length > 0 ? (
          <>
            <h2>Add to cart : {carts.length}</h2>
            <Cart cart={carts} handleRemove={handleRemove} />
          </>
        ) : (
          <></>
        )}
      </div>
      <h4>Total Bottles: {bottles.length}</h4>
      <div className="grid grid-cols-4 gap-5">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Bottles;
