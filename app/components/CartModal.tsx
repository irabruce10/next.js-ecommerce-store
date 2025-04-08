import React from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import type { RooterState } from '../redux/Store';

export default function CartModal() {
  // const items = useSelector((state: RooterState) => state.cart);
  // console.log('items', items);

  const items = useSelector((state: RooterState) => state.cart.items);
  console.log('items', items);

  return (
    <div className=" w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {items.length == 0 ? (
        <div className=""> Cart is Empty </div>
      ) : (
        <>
          <h2 className=" text-xl">Shopping Cart</h2>
          <div className="flex flex-col gap-8">
            {/* item */}

            {items.map((item) => (
              <div>
                <div className=" flex gap-4">
                  <Image
                    src={item.images[0] || ''}
                    alt="Baby rompers"
                    width={72}
                    height={93}
                    className=" object-cover rounded-md"
                  />
                  <div className=" flex flex-col justify-between w-full ">
                    {/* TOP */}

                    <div className="flex items-center justify-between gap-8">
                      <h3 className=" font-semibold ">
                        {item.name.length > 20
                          ? item.name.substring(0, 30) + '...'
                          : item.name}
                      </h3>
                      <div className="p-1 bg-gray-50 rounded-sm">
                        €{item?.price}
                      </div>
                    </div>
                    {/*
                    <div className="text-sm to-gray-50">Available</div> */}
                    <div className="text-sm to-gray-50">
                      color {item.selectedColor}
                    </div>
                    <div className="text-sm to-gray-50">
                      Size {item.selectedSize}
                    </div>
                    <div className="flex items-center justify-between font-semibold">
                      <span>sub</span>
                      <span> €{(item?.price * item.quantity).toFixed(2)}</span>
                    </div>
                    {/* bottom */}
                    <div className="flex justify-between text-sm">
                      <span className=" text-gray-500">
                        Qty.{item.quantity}
                      </span>

                      <span className=" text-blue-500">remove</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* bottom */}
          <div>
            <div className="flex items-center justify-between font-semibold">
              <span>sub</span>
              <span>49</span>
            </div>
            <p className=" text-gray-500 text-sm mt-2 mb-4 ">
              Lorem ipsum dolor sit amet consectetur,
            </p>
            <div className="flex justify-between text-sm">
              <button className=" px-4 rounded-md py-4 ring-1 ring-gray-300 ">
                View Cart
              </button>
              <button className=" rounded-md px-4 py-4 bg-black text-white  ">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
