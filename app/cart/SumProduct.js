import { getCookie } from '../../lib/cookies';
import { parseJson } from '../../lib/json';
import { getProductInsecure } from '../database/product';

export default async function sumTotol() {
  const products = await getCookie('cart');

  let productCookies = products ? parseJson(products) : [];

  if (!Array.isArray(productCookies)) {
    productCookies = [];
  }

  let totalSum = 0;
  return productCookies.map(async (item) => {
    const product = await getProductInsecure(item.id);

    const totalPrice = product.price * item.quantity;

    product.totalPrice = totalPrice;

    totalSum += totalPrice;

    console.log('to', totalSum);
  });
}
