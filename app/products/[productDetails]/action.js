'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../lib/cookies.js';
import { parseJson } from '../../../lib/json.js';

export default async function createOrUpdateCookie(productId, quantity) {
  // 1. get current cookie!
  let getProductCookie = await getCookie('cart');

  // // 2. parse the cookie value
  // const productCookies =
  //   getProductCookie === undefined
  //     ? // Case A: cookie undefined
  //       []
  //     : parseJson(getProductCookie);

  if (!Array.isArray(getProductCookie)) {
    getProductCookie = [];
  }

  // 3. edit the cookie value
  const updateProductCookie = getProductCookie.find((productCookie) => {
    return productCookie.id === productId;
  });

  // Case B: cookie set, id doesn't exist

  if (!updateProductCookie) {
    getProductCookie.push({ id: productId, quantity: quantity });
  } else {
    updateProductCookie.quantity += quantity;
    // Case C: cookie set, id exists already
  }

  // 4. we override the cookie
  (await cookies()).set('cart', JSON.stringify(getProductCookie));
}
