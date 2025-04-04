import React from 'react';

export default function CustomizeProduct() {
  return (
    <div className=" flex flex-col gap-6">
      <h4 className=" font-medium ">Choose a Color</h4>
      <ul className=" flex items-center gap-3">
        <li className=" w-8 h-8 rounded-full ring-1 ring-gray-300 relative cursor-pointer bg-red-500">
          <div
            className="absolute w-10 h-10 rounded-full ring-2 top-1/2
          left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
          ></div>
        </li>

        <li className=" w-8 h-8 rounded-full ring-1 ring-gray-300 relative cursor-pointer bg-blue-500"></li>

        <li className=" w-8 h-8 rounded-full ring-1 ring-gray-300 relative cursor-not-allowed bg-gray-500">
          <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "></div>
        </li>
      </ul>
      <h4 className=" font-medium ">Choose a Size</h4>
      <ul className=" flex items-center gap-3">
        <li className=" ring-1 ring-[#F35C7A] text-[#F35C7A] rounded-md py-1 px-4 text-sm cursor-pointer ">
          small
        </li>
        <li className=" ring-1 ring-[#F35C7A] bg-[#F35C7A] text-white rounded-md py-1 px-4 text-sm cursor-pointer ">
          medium
        </li>
        <li className=" ring-1 ring-[#F35C7A] text-white bg-pink-200 rounded-md py-1 px-4 text-sm cursor-not-allowed ">
          large
        </li>
        <li className=" ring-1 ring-[#F35C7A] text-[#F35C7A] rounded-md py-1 px-4 text-sm cursor-pointer ">
          extra large
        </li>
      </ul>
    </div>
  );
}
