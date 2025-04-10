import { getCookie } from '../../lib/cookies';
import { parseJson } from '../../lib/json';
import { getProductInsecure } from '../database/product';
import Link from 'next/link';
import Image from 'next/image';
import DeleteButton from './DeleteButton';
import SelectForm from './SelectForm';

export default async function CartPage() {
  const cookie = await getCookie('cart');
  let productCookies = cookie ? parseJson(cookie) : [];

  if (!Array.isArray(productCookies)) {
    productCookies = [];
  }

  const productsWithData = await Promise.all(
    productCookies.map(async (item) => {
      const product = await getProductInsecure(item.id);

      if (product) {
        const totalPrice = product?.price * item.quantity;
        return {
          ...product,
          quantity: item.quantity,
          totalPrice,
          selectedColor: (item as any).selectedColor,
          selectedSize: (item as any).selectedSize,
          stock: item.stock,
        };
      }
    }),
  );

  const totalSum = productsWithData.reduce(
    (acc, item) => acc + (item?.totalPrice ?? 0),
    0,
  );

  const validProducts = productsWithData.filter(Boolean) as Array<{
    id: number;
    name: string;
    price: number;
    images: string;
    quantity: number;
    totalPrice: number;
    selectedColor: any;
    selectedSize: any;
    stock: number;
  }>;

  return (
    <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <h1 className="text-3xl font-semibold mb-12">Shopping Cart</h1>

      {productsWithData.length === 0 ? (
        <div className="text-center text-lg">
          Your cart is empty. Start adding some products.
          <Link href="/products" className="ml-2 text-blue-500 underline">
            Go to Products
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left">Image</th>
                <th className="px-4 py-2 text-left">Product</th>
                <th className="px-4 py-2 text-center">Quantity</th>
                <th className="px-4 py-2 text-left">Total</th>
                <th className="px-4 py-2 text-left">Remove</th>
              </tr>
            </thead>
            <tbody>
              {validProducts.map((product) => (
                <tr key={product.id} className="border-t">
                  <td className="p-2 sm:p-4">
                    <Image
                      src={product.images[0] || ''}
                      alt={product.name}
                      width={80}
                      height={80}
                      className="object-cover rounded-md"
                    />
                  </td>
                  <td className="p-2 sm:p-4 text-left text-sm sm:text-base">
                    {product.name}
                    <div className="text-xs text-gray-500 mt-1">
                      Color:{' '}
                      <span className="font-medium">
                        {product.selectedColor}
                      </span>
                      <br />
                      Size:{' '}
                      <span className="font-medium">
                        {product.selectedSize}
                      </span>
                    </div>
                  </td>
                  <td className="p-2 sm:p-4 text-center">
                    <SelectForm item={product.id} product={product}>
                      <button className="px-2 py-1 border rounded bg-white text-gray-800">
                        {product.quantity}
                      </button>
                    </SelectForm>
                  </td>

                  <td className="p-2 sm:p-4 text-left text-sm sm:text-base">
                    €{product.totalPrice.toFixed(2)}
                  </td>

                  <td className="p-2 sm:p-4 text-center">
                    {/* Ensuring the "Remove" button is visible on mobile devices */}
                    <DeleteButton product={product.id} id={undefined} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-6 flex justify-end">
            <div className="text-xl font-semibold">
              Total: €{totalSum.toFixed(2)}
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <Link
              href="/checkout"
              className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition"
              data-test-id="cart-checkout"
            >
              Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
