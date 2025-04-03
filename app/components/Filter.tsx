import React from 'react';

export default function Filter() {
  return (
    <div className=" m-12 flex justify-between ">
      <div className="flex gap-6 flex-wrap">
        <select
          name="type"
          id=""
          className=" py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Type</option>
          <option value="physical">Physical</option>
          <option value="gigital">Digital</option>
        </select>
        <input
          type="text"
          min="min"
          placeholder="min Price"
          className=" text-xs rounded-2xl pl-2 w-24  ring-1 ring-gray-400"
        />

        <input
          type="text"
          max="max"
          placeholder="max Price"
          className=" text-xs rounded-2xl pl-2 w-24  ring-1 ring-gray-400"
        />

        <select
          name="type"
          id=""
          className=" py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Size</option>
          <option value="physical">Physical</option>
          <option value="gigital">Digital</option>
        </select>

        <select
          name="type"
          id=""
          className=" py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Color</option>
          <option value="physical">Physical</option>
          <option value="gigital">Digital</option>
        </select>

        <select
          name="type"
          id=""
          className=" py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Category</option>
          <option value="physical">Physical</option>
          <option value="gigital">Digital</option>
        </select>
        <select
          name="type"
          id=""
          className=" py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>All Filters</option>
        </select>
      </div>
      <div className="">
        <select
          name=""
          id=""
          className=" py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400"
        >
          <option value="">Sort By</option>
          <option value="price_desc">Price: High to Low</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="newest">Newest Arrivals</option>
          <option value="most_popular">Most Popular</option>
          <option value="Oldest">Oldest</option>
        </select>
      </div>
    </div>
  );
}
