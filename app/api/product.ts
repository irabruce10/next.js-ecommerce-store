import { NextResponse } from 'next/server';
import { getProductInsecure } from '../database/product';

export async function GET(request: Request) {
  // Extract the productId from the URL
  // const url = new URL(request.url);
  // const productId = url.pathname.split('/').pop();

  // // Validate productId (ensure it's a number)
  // if (!productId || isNaN(Number(productId))) {
  //   return NextResponse.json(
  //     { message: 'Invalid product ID' },
  //     { status: 400 },
  //   );
  // }

  // Fetch the product using the validated productId
  const product = await getProductInsecure(Number('1'));

  // Check if the product was found
  if (!product) {
    return NextResponse.json({ message: 'Product not found' }, { status: 404 });
  }

  // Return the product as JSON
  return NextResponse.json(product);
}
