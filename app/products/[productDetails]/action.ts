// // 'use server';

// // import { getCookie } from '../../../lib/cookies';
// // import { parseJson } from '../../../lib/json';

// // import { cookies } from '../../../node_modules/next/headers';

// // export type Product = {
// //   id: number;
// //   quantity: number;
// //   stock: number;
// //   selectedColor: string;
// //   selectedSize: string;
// // };
// // export default async function createOrUpdateCookie(
// //   productId: number,
// //   quantity: number,
// //   stock,
// //   selectedColor,
// //   selectedSize,
// // ) {
// //   // 1. get current cookie!
// //   const products = await getCookie('cart');

// //   // // // 2. parse the cookie value
// //   const productCookies: Product[] = !products
// //     ? // Case A: cookie undefined
// //       []
// //     : parseJson(products)!;

// //   // 3. edit the cookie value
// //   const updateProductCookie = productCookies.find((product) => {
// //     return product.id === productId;
// //   });

// //   // Case B: cookie set, id doesn't exist

// //   if (!updateProductCookie) {
// //     productCookies.push({ id: productId, quantity: quantity, stock });
// //   } else {
// //     updateProductCookie.quantity += quantity;
// //     // Case C: cookie set, id exists already
// //   }

// //   // 4. we override the cookie
// //   (await cookies()).set('cart', JSON.stringify(productCookies));
// // }

'use server';

import { getCookie } from '../../../lib/cookies';
import { parseJson } from '../../../lib/json';
import { cookies } from 'next/headers';

export type Product = {
  id: number;
  quantity: number;
  stock: number;
  selectedColor: string;
  selectedSize: string;
};

export default async function createOrUpdateCookie(
  productId: number,
  quantity: number,
  stock: number,
  selectedColor: string,
  selectedSize: string,
) {
  // 1. get current cookie
  const products = await getCookie('cart');

  // 2. parse the cookie value
  const productCookies: Product[] = !products ? [] : parseJson(products)!;

  // 3. check if the same product with same color and size exists
  const existingProduct = productCookies.find(
    (product) =>
      product.id === productId &&
      product.selectedColor === selectedColor &&
      product.selectedSize === selectedSize,
  );

  if (!existingProduct) {
    // Case: Not found – add as new item
    productCookies.push({
      id: productId,
      quantity,
      stock,
      selectedColor,
      selectedSize,
    });
  } else {
    // Case: Found – update quantity
    existingProduct.quantity += quantity;

    // Optionally: enforce stock limit
    if (existingProduct.quantity > stock) {
      existingProduct.quantity = stock;
    }
  }

  // 4. save the updated cookie
  (await cookies()).set('cart', JSON.stringify(productCookies));
}
