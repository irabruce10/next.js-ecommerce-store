import { getCookie } from '../../lib/cookies';
import { parseJson } from '../../lib/json';
import { getProductInsecure } from '../database/product';

// export default async function sumTotol() {
//   const products = await getCookie('cart');

//   let productCookies = products ? parseJson(products) : [];

//   if (!Array.isArray(productCookies)) {
//     productCookies = [];
//   }

//   return productCookies.map(async (item) => {
//     const product = await getProductInsecure(item.id);

//     const totalPrice = product.price * item.quantity;

//     console.log('to', totalPrice);
//   });
// }

// sumTotol();

import React from 'react';

export default async function SumProduct() {
  const products = await getCookie('cart');

  let productCookies = products ? parseJson(products) : [];

  if (!Array.isArray(productCookies)) {
    productCookies = [];
  }

  console.log('ies', productCookies);
  let totalSum = 0;

  const result = productCookies.map(async ({ id }) => {
    const product = await getProductInsecure(id);
    console.log('product', product);
    return (totalSum += product.totalPrice);
  });

  // const calculateTotalPrice = () => {
  //   return products.reduce((total, product) => total + product.price, 0);
  // };

  return <div>${result}</div>;
}
