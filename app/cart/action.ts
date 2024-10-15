'use server';
import { getCookie } from '../../lib/cookies';
import { parseJson } from '../../lib/json';
import { cookies } from '../../node_modules/next/headers';

export type Product = {
  id: number;
  quantity: number;
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

export async function updateCookiesPlus(item: number, quantity: number) {
  const getProducts = await getCookie('cart');

  const products: Product[] = !getProducts ? [] : parseJson(getProducts)!;

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

export async function updateCookiesMinus(item: number, quantity: number) {
  const getProducts = await getCookie('cart');

  const products: Product[] = !getProducts ? [] : parseJson(getProducts)!;

  const productCookie = products.find((product) => {
    return product.id === item;
  });

  if (!productCookie) {
    products.push({ id: item, quantity: quantity });
  } else {
    productCookie.quantity -= 1;
  }

  if (productCookie?.quantity === 0) {
    products.splice(products.indexOf(productCookie), 1);
  }

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
