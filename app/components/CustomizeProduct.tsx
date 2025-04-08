'use client';

import React, { useState } from 'react';
import Add from './Add';

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

  const handleOptionSelect = (option: string, type: 'color' | 'size') => {
    setSelectOptions((prev) => ({ ...prev, [type]: option }));
  };

  console.log('xsmiz', selectedOptions);

  return (
    <div className=" flex flex-col gap-6">
      {product.colors.length > 0 && (
        <div className=" flex flex-col gap-4">
          <h4 className=" font-medium ">Choose a Color</h4>
          <ul className=" flex items-center gap-3">
            {product.colors.map((col: any) => (
              <li
                key={col}
                onClick={() => handleOptionSelect(col, 'color')}
                className=" w-8 h-8 rounded-full ring-1 ring-gray-300 relative cursor-pointer "
                style={{ backgroundColor: col }}
              >
                {selectedOptions.color === col && (
                  <div
                    className="absolute w-10 h-10 rounded-full ring-2 top-1/2
          left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
                    style={{ color: selectedOptions.color }}
                  ></div>
                )}
              </li>
            ))}
            <li className=" w-8 h-8 rounded-full ring-1 ring-gray-300 relative cursor-not-allowed bg-gray-500">
              <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "></div>
            </li>
          </ul>
        </div>
      )}

      {product.sizes.length > 0 && (
        <>
          <h4 className="font-medium">Choose a Size</h4>{' '}
          <ul className=" flex items-center gap-3">
            {product.sizes.map((size: any) => (
              <div key={size} onClick={() => handleOptionSelect(size, 'size')}>
                <li
                  className=" ring-1 ring-[#F35C7A] text-[#F35C7A] rounded-md py-1 px-4 text-sm cursor-pointer "
                  style={{
                    backgroundColor:
                      selectedOptions.size === size ? '#F35C7A' : '',
                    color: selectedOptions.size === size ? 'white' : '',
                  }}
                >
                  {size}
                </li>
              </div>
            ))}
            <li className=" ring-1 ring-[#F35C7A] text-white bg-pink-200 rounded-md py-1 px-4 text-sm cursor-not-allowed  ">
              large
            </li>
          </ul>
        </>
      )}

      <Add
        stock={stock}
        selectedColor={selectedOptions.color}
        selectedSize={selectedOptions.size}
        product={product}
      />
    </div>
  );
}
