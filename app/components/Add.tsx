import React from 'react';

export default function Add() {
  return (
    <div className=" flex flex-col gap-4">
      <h4 className=" font-medium">Choose a Quantity</h4>
      <div></div>
      <button className=" w-36 text-sm ring-[#F35C7A]  text-[#F35C7A] hover:bg-[#F35C7A] hover:text-white  rounded-3xl ring-1 py-2 px-4 disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-none">
        Add to Cart
      </button>
    </div>
  );
}
