import React from 'react';
import { getCookie } from '../../lib/cookies';
import { parseJson } from '../../lib/json';

export default async function crt() {
  let quantity = 0;
  const cookieCart = await getCookie('cart');
  if (cookieCart) {
    const parsedCart = parseJson(cookieCart);
    quantity = parsedCart.reduce((acc, item) => acc + item.quantity, 0);
  }
  return <div>{quantity}</div>;
}
