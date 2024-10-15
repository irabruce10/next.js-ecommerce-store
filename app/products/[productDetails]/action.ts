'use server';

import { getCookie } from '../../../lib/cookies';
import { parseJson } from '../../../lib/json';

import { cookies } from '../../../node_modules/next/headers';

export type Product = {
  id: number;
  quantity: number;
};
export default async function createOrUpdateCookie(
  productId: number,
  quantity: number,
) {
  // 1. get current cookie!
  const products = await getCookie('cart');

  // // // 2. parse the cookie value
  const productCookies: Product[] = !products
    ? // Case A: cookie undefined
      []
    : parseJson(products)!;

  // 3. edit the cookie value
  const updateProductCookie = productCookies.find((product) => {
    return product.id === productId;
  });

  // Case B: cookie set, id doesn't exist

  if (!updateProductCookie) {
    productCookies.push({ id: productId, quantity: quantity });
  } else {
    updateProductCookie.quantity += quantity;
    // Case C: cookie set, id exists already
  }

  // 4. we override the cookie
  (await cookies()).set('cart', JSON.stringify(productCookies));
}
