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
  console.log('Updated products:', updatedProducts);
  return updatedProducts;
}

export async function updateCookiesPlus(item, quantity) {
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
    productCookie.quantity += 1;
    console.log('qty', Number(quantity));
    // Case C: cookie set, id exists already
  }

  // 4. we override the cookie
  (await cookies()).set('cart', JSON.stringify(products));
}

export async function updateCookiesMinus(item, quantity) {
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
    productCookie.quantity -= 1;

    console.log('qty', Number(quantity));
    // Case C: cookie set, id exists already
  }

  if (productCookie.quantity === 0) {
    products.splice(products.indexOf(productCookie), 1);
  }

  // 4. we override the cookie
  (await cookies()).set('cart', JSON.stringify(products));
}
