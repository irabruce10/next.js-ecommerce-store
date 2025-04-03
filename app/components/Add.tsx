'use client';

import { useState } from 'react';

export default function Add() {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className=" flex flex-col gap-4">
      <h4 className=" font-medium">Choose a Quantity</h4>
      <div className=" flex justify-between ">
        <div className=" flex items-center">
          <div className=" bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button
              className=" cursor-pointer  text-xl "
              onClick={() => setQuantity(Math.max(quantity - 1, 1))}
            >
              -
            </button>
            {quantity}
            <button
              className="cursor-pointer  text-xl"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
          <div className="text-xs ml-2">
            Only <span className="  text-orange-500">4 items</span> left!{' '}
            {`Don't`} miss it
          </div>
        </div>
        <button className=" w-36 text-sm ring-[#F35C7A]  text-[#F35C7A] hover:bg-[#F35C7A] hover:text-white  rounded-3xl ring-1 py-2 px-4 disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-none">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
