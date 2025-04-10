'use server';
import { getCookie } from '../../lib/cookies';
import { parseJson } from '../../lib/json';
import { cookies } from '../../node_modules/next/headers';

export type Product = {
  id: number;
  quantity: number;
  stock: number;
};
export default async function removeProductFromCookie(productId: number) {
  const products = await getCookie('cart');
  const productCookies: Product[] = parseJson(products)!;
  const updatedProducts = productCookies.filter(
    (product) => product.id !== productId,
  );
  (await cookies()).set('cart', JSON.stringify(updatedProducts));

  return updatedProducts;
}

export async function updateCookiesPlus(
  itemId: number,
  quantity: number,
  stock: number,
) {
  const cookieData = await getCookie('cart');
  const products: Product[] = !cookieData ? [] : parseJson(cookieData)!;

  const product = products.find((p) => p.id === itemId);

  if (!product) {
    // If the product doesn't exist, add it with initial quantity (but not more than stock)
    products.push({
      id: itemId,
      quantity: quantity > stock ? stock : quantity,
      stock,
    });
  } else {
    // Update quantity only if it doesn't exceed stock
    if (product.quantity < product.stock) {
      product.quantity += 1;
    }
  }

  (await cookies()).set('cart', JSON.stringify(products));
}

export async function updateCookiesMinus(
  itemId: number,
  quantity: number,
  stock: number,
) {
  const cookieData = await getCookie('cart');
  const products: Product[] = !cookieData ? [] : parseJson(cookieData)!;

  const product = products.find((p) => p.id === itemId);

  if (!product) {
    // If the product doesn't exist, return early (nothing to update)
    return;
  } else {
    // Decrease quantity only if it's greater than 1 (to avoid negative quantities)
    if (product.quantity > 1) {
      product.quantity -= 1;
    } else {
      // Optionally: Remove the product from the cart if quantity is 1 or less
      products.splice(products.indexOf(product), 1);
    }
  }

  // Save the updated cart to the cookie
  (await cookies()).set('cart', JSON.stringify(products));
}

export async function removeAllCookies(item: number) {
  const getProducts = await getCookie('cart');

  let products: Product[] = !getProducts ? [] : parseJson(getProducts)!;
  if (item) {
    products = products.filter((product) => product.id !== item);
  } else {
    products = [];
  }

  (await cookies()).set('cart', JSON.stringify(products));
}
