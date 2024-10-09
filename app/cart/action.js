'use server';

import { cookies } from 'next/headers';
import setCookie, { getCookie } from '../../lib/cookies';
import { parseJson } from '../../lib/json';

export default async function removeProductFromCookie(productId) {
  // if (!Array.isArray(products)) {
  //   products = [];
  // }

  // products = products.filter((product) => product.id !== productId);

  const getProducts = await getCookie('cart');

  let products = !getProducts
    ? // Case A: cookie undefined
      []
    : parseJson(getProducts);

  console.log(Array.isArray(products));
  // if (!Array.isArray(products)) {
  //   products = [];
  // }
  // products = products.find((productCookie) => {
  //   return productCookie.id === productId;
  // });

  // await setCookie('cart', products);
}

export async function updateCookies(item, quantity) {
  const getProducts = await getCookie('cart');
  console.log('cookie', getProducts);
  const products = !getProducts
    ? // Case A: cookie undefined
      []
    : parseJson(getProducts);

  const productCookie = products.find((product) => {
    return product.id === item;
  });
  console.log('procoo', productCookie);

  // if (productCookie) {
  //   productCookie.quantity += quantity;
  //   (await cookies()).set('cart', JSON.stringify(products));
  // } else {
  //   console.log('Product not found in cart');
  // }

  if (!productCookie) {
    products.push({ id: item, quantity: quantity });
  } else {
    productCookie.quantity += quantity;
    console.log('qty', Number(quantity));
    // Case C: cookie set, id exists already
  }

  // 4. we override the cookie
  (await cookies()).set('cart', JSON.stringify(products));
}
