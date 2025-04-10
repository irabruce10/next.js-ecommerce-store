'use client';
import { useState } from 'react';
import { getCookie } from '../../lib/cookies';
import { parseJson } from '../../lib/json';
import styles from './CartCount.module.scss';
import Image from 'next/image';

export default function CartCount() {
  const [cartQuantity, setCartQuantity] = useState(0);

  async function c() {
    const cookieCart = await getCookie('cart');
    if (cookieCart) {
      const parsedCart = parseJson(cookieCart);
      if (parsedCart) {
        const quantity = parsedCart.reduce(
          (acc, item) => acc + item.quantity,
          0,
        );
        setCartQuantity(quantity);
      } else {
        console.error('Invalid JSON in cookie cart');
      }
    }
  }
  console.log(c());

  return (
    <div>
      <div className="relative cursor-pointer">
        <Image src="/cart.png" alt="cart" width={22} height={22} />
        <div className=" absolute -top-4 -right-4 w-6 h-6 bg-primary bg-[#F35C7A] text-white justify-center rounded-full text-center text-sm ">
          {cartQuantity}
        </div>
      </div>
    </div>
  );
}
