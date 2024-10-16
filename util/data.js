import { getCookie } from '../lib/cookies';
import { parseJson } from '../lib/json';

const products = await getCookie('cart');

let productCookies = products ? parseJson(products) : [];

if (!Array.isArray(productCookies)) {
  productCookies = [];
}

console.log(products);
