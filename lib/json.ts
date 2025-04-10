import sjson from 'secure-json-parse';

export type Product = {
  id: number;
  quantity: number;
  stock: number;
  selectedColor: string;
  selectedSize: string;
};

export function parseJson(json: string | undefined) {
  if (!json) return undefined;
  try {
    return sjson(json) as Product[];
  } catch {
    return undefined;
  }
}
