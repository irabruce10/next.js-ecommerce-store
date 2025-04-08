'use client';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/CartSlide';

import type { RooterState } from '../redux/Store';

type Props = {
  product: {
    name: string;
    sizes: string;
    colors: string;
  };
};

export default function Add({
  colors,
  sizes,
  stock,
  productImage,
  selectedColor,
  selectedSize,
  product,
}: {
  colors: string[];
  sizes: string[];
  productImage: string[];
  selectedColor?: string;
  selectedSize?: string;
  product: any;

  stock: number;
}) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type: 'i' | 'd') => {
    if (type === 'd' && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === 'i' && quantity < stock) {
      setQuantity((prev) => prev + 1);
    }
  };

  console.log('pr redux', product);

  const items = useSelector((state: RooterState) => state.cart);
  console.log('items', items);

  // console.log('slx', selectionOptions);
  const dispatch = useDispatch();

  const handleAdd = (product: any) => {
    console.log('Hello');
    console.log('selectedOp', selectedColor, selectedSize);

    dispatch(addItem({ ...product, selectedColor, selectedSize }));
  };
  return (
    <div className=" flex flex-col gap-4">
      <h4 className=" font-medium">Choose a Quantity</h4>
      <div className=" flex justify-between ">
        <div className=" flex items-center">
          <div className=" bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button
              className=" cursor-pointer  text-xl "
              onClick={() => handleQuantity('d')}
            >
              -
            </button>
            {quantity}
            <button
              className="cursor-pointer  text-xl"
              onClick={() => handleQuantity('i')}
            >
              +
            </button>
          </div>
          <div className="text-xs ml-2">
            Only <span className="  text-orange-500">{stock} items</span> left!{' '}
            <br />
            {`Don't`} miss it
          </div>
        </div>
        <button
          className=" w-36 text-sm ring-[#F35C7A]  text-[#F35C7A] hover:bg-[#F35C7A] hover:text-white  rounded-3xl ring-1 py-2 px-4 disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-none"
          onClick={() => handleAdd(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
