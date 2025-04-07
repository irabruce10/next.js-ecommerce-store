'use client';

import React, { useState } from 'react';

export default function CustomizeProduct({
  sizes,
  colors,
  stock,
  product,
}: {
  sizes: string[];
  colors: string[];
  stock: number;
  product: any;
}) {
  const [selectedOptions, setSelectOptions] = useState<{
    [key: string]: string;
  }>({});

  // const handleOptionSelect = () => {
  //   setSelectOptions((prev) => ({ ...prev, color }));
  //   // get  selected color one element
  // };

  const handleOptionSelect = (option: string, type: 'color' | 'size') => {
    setSelectOptions((prev) => ({ ...prev, [type]: option }));
  };

  console.log('select option', selectedOptions);

  const isVariantInStock = () => {
    const selectedColor = selectedOptions.color;
    const selectedSize = selectedOptions.size;

    if (selectedColor && selectedSize) {
      const variant = product.variants.find(
        (variant: any) =>
          variant.color === selectedColor && variant.size === selectedSize,
      );
      console.log('variant', variant);
      return variant && variant.stock > 0;
    }

    return false;
  };

  return (
    <div className=" flex flex-col gap-6">
      {/* <h4 className=" font-medium ">Choose a Color</h4> */}
      {/* <ul className=" flex items-center gap-3">
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
      </ul> */}
      {product.colors.length > 0 && (
        <>
          <h4 className="font-medium">Choose a Color</h4>
          {product.colors.map((col: any) => (
            <div key={col} onClick={() => handleOptionSelect(col, 'color')}>
              {col}{' '}
              {selectedOptions.color === col && (
                <span className="text-xs font-bold">Selected</span>
              )}
            </div>
          ))}
        </>
      )}

      {product.sizes.length > 0 && (
        <>
          <h4 className="font-medium">Choose a Size</h4>
          {product.sizes.map((size: any) => (
            <div key={size} onClick={() => handleOptionSelect(size, 'size')}>
              {size}
              {selectedOptions.size === size && (
                <span className="text-xs font-bold"> Selected</span>
              )}
            </div>
          ))}
        </>
      )}
      {/* {sizes.map((size) => (
        <li className=" ring-1 ring-[#F35C7A] text-[#F35C7A] rounded-md py-1 px-4 text-sm cursor-pointer " key={size[0]}>
          {size[0]}
        </li>
      ))} */}
      {/* {colors.map((color) => (
        <div className=" flex  flex-col gap-4" key={color[0]}>
          {colors[0]}
        </div>
      ))} */}
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
