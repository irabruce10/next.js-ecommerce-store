'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../lib/cookies';
import { parseJson } from '../../lib/json';

export default async function removeProductFromCookie(productId) {
  const products = await getCookie('cart');
  const productCookies = parseJson(products);
  const updatedProducts = productCookies.filter(
    (product) => product.id !== productId,
  );
  (await cookies()).set('cart', JSON.stringify(updatedProducts));

  return updatedProducts;
}

export async function updateCookiesPlus(item, quantity) {
  const getProducts = await getCookie('cart');

  const products = !getProducts ? [] : parseJson(getProducts);

  const productCookie = products.find((product) => {
    return product.id === item;
  });

  if (!productCookie) {
    products.push({ id: item, quantity: quantity });
  } else {
    productCookie.quantity += 1;
  }

  (await cookies()).set('cart', JSON.stringify(products));
}

export async function updateCookiesMinus(item, quantity) {
  const getProducts = await getCookie('cart');

  const products = !getProducts ? [] : parseJson(getProducts);

  const productCookie = products.find((product) => {
    return product.id === item;
  });

  if (!productCookie) {
    products.push({ id: item, quantity: quantity });
  } else {
    productCookie.quantity -= 1;
  }

  if (productCookie.quantity === 0) {
    products.splice(products.indexOf(productCookie), 1);
  }

  (await cookies()).set('cart', JSON.stringify(products));
}

export async function removeAllCookies(item) {
  const getProducts = await getCookie('cart');

  let products = !getProducts ? [] : parseJson(getProducts);
  if (item) {
    products = products.filter((product) => product.id !== item);
  } else {
    products = [];
  }

  (await cookies()).set('cart', JSON.stringify(products));
}
