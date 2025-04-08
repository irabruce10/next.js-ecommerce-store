import React from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import type { RooterState } from '../redux/Store';
import { useDispatch } from 'react-redux';
import {
  addItem,
  deleteFromCart,
  removeFromCart,
  type CartItem,
} from '../redux/CartSlide';

export default function CartModal() {
  // const items = useSelector((state: RooterState) => state.cart);
  // console.log('items', items);
  const dispatch = useDispatch();

  // const items = useSelector((state: RooterState) => state.cart.items);
  // const removeCartHandler = (id: number) => dispatch(removeFromCart({ id }));
  // const addCartHandler = (item: CartItem) => dispatch(addItem(item));
  // console.log('items', items);

  const items = useSelector((state: RooterState) => state.cart.items);
  const removeCartHandler = (id: number) => dispatch(removeFromCart({ id }));
  const addCartHandler = (item: CartItem) => {
    if (item.quantity < item.stock) {
      dispatch(addItem({ ...item, quantity: item.quantity + 1 }));
    } else {
      alert('Cannot add more items. Stock limit reached.');
    }
    // dispatch(addItem(items));
    console.log('items', items);
  };

  const deleteCartHandler = (id: number) => dispatch(deleteFromCart({ id }));

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
                      <div className=" flex items-center">
                        <div className=" bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
                          <button
                            className=" cursor-pointer  text-xl "
                            onClick={() => removeCartHandler(item.id)}
                          >
                            -
                          </button>
                          {item.quantity}
                          <button
                            className="cursor-pointer  text-xl"
                            onClick={() => addCartHandler(item)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => deleteCartHandler(item.id)}
                        className=" cursor-pointer text-blue-500"
                      >
                        Delete
                      </button>
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
