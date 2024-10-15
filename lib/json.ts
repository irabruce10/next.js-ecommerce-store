import sjson from 'secure-json-parse';
import { Product } from '../app/cart/action';

export function parseJson(json: string | undefined) {
  if (!json) return undefined;
  try {
    return sjson(json) as Product;
  } catch {
    return undefined;
  }
}
