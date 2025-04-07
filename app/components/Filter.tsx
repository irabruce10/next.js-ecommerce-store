'use client';

import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Router } from 'next/router';

export default function Filter({ categoryId }) {
  console.log('Filter', categoryId);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const router = useRouter();

  const handleFilter = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    // const newUrl = `${pathname}?${params.toString()}`;
    // router.replace(newUrl as any);
    replace(`/list?${params.toString()}`);
  };

  return (
    <div className=" m-12 flex justify-between ">
      <div className="flex gap-6 flex-wrap">
        <select
          name="type"
          id=""
          onChange={handleFilter}
          className=" py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Type</option>
          <option value="physical">Physical</option>
          <option value="gigital">Digital</option>
        </select>
        <input
          type="text"
          min="min"
          name="min"
          placeholder="min Price"
          onChange={handleFilter}
          className=" text-xs rounded-2xl pl-2 w-24  ring-1 ring-gray-400"
        />

        <input
          type="text"
          max="max"
          name="max"
          placeholder="max Price"
          onChange={handleFilter}
          className=" text-xs rounded-2xl pl-2 w-24  ring-1 ring-gray-400"
        />

        <select
          name="type"
          id=""
          onChange={handleFilter}
          className=" py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Category</option>
          <option value="physical">Physical</option>
          <option value="gigital">Digital</option>
        </select>
        <select
          name="type"
          id=""
          onChange={handleFilter}
          className=" py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>All Filters</option>
        </select>
      </div>
      <div className="">
        <select
          name="sort"
          id=""
          className=" py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400"
          onChange={handleFilter}
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
