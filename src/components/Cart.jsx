import React from "react";

const Cart = ({ cart, handleRemove }) => {
  return (
    <div className="max-w-7xl mx-auto space-y-4 mb-10 mt-6 grid grid-cols-2">
      {cart.map((carts, index) => (
        <div key={index} className="flex gap-2 items-center ">
          <img className="h-[100px]" src={carts.img} alt="" />
          <h3 className="w-64">{carts.name}</h3>
          <p className="w-32">Price: ${carts.price}</p>
          <button
            className="px-6 py-1.5 bg-red-600 text-white  rounded-sm cursor-pointer"
            onClick={() => handleRemove(carts.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
