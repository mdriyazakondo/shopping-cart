import React from "react";

const Bottle = ({ bottle, handleAddToCart }) => {
  // console.log(bottle);
  return (
    <div>
      <div className="shadow rounded-md p-4 mt-8 space-y-2">
        <img
          className="w-full h-[300px] p-2 rounded-md"
          src={bottle.img}
          alt=""
        />
        <h2 className="text-[18px] font-semibold text-gray-600 ">
          {bottle.name}
        </h2>
        <p className="text-gray-600 text-sm font-medium">
          Price: ${bottle.price}
        </p>
        <h4 className="text-gray-600 font-semibold">
          Available: {bottle.stock}
        </h4>
        <button
          onClick={() => handleAddToCart(bottle)}
          className="px-6 py-1.5 rounded-md bg-green-600 text-white  cursor-pointer mt-2"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Bottle;
