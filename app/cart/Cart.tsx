// import { getCookie } from '../../lib/cookies';
// import { parseJson } from '../../lib/json';
// import { getProductInsecure } from '../database/product';

// import styles from './cart.module.scss';
// import Link from 'next/link';
// import Image from 'next/image';
// import DeleteButton from './DeleteButton';
// import SelectForm from './SelectForm';
// import SumProduct from './SumProduct';

// export default async function CartPage() {
//   const products = await getCookie('cart');

//   let productCookies = products ? parseJson(products) : [];

//   if (!Array.isArray(productCookies)) {
//     productCookies = [];
//   }

//   return (
//     <div className="mt-24">
//       <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">
//         Shopping Cart
//       </h1>
//       <div className=" text-left px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
//         {/* loading ? (
//           <div>Loading...</div>
//         ) : */}

//         {productCookies.length === 0 ? (
//           <h1 className={styles.cart_title}>
//             Your Cart is Empty Now.Start Adding some Products
//             <Link href="/products"> Go To The Products</Link>
//           </h1>
//         ) : (
//           <div>
//             <table className={styles.cart_table}>
//               <thead>
//                 <tr>
//                   <th>&nbsp;</th>
//                   <th>Product</th>
//                   <th>Price</th>
//                   <th>Quantity</th>
//                   <th>Total</th>
//                   <th>Remove</th>
//                 </tr>
//               </thead>
//               {productCookies.map(async (item) => {
//                 const product = await getProductInsecure(item.id);

//                 const totalPrice = product.price * item.quantity;

//                 product.totalPrice = totalPrice;

//                 // totalSum += totalPrice;

//                 // console.log('toto', totalSum);

//                 return (
//                   <tbody
//                     data-test-id={`cart-product-${item.id}`}
//                     key={`item-${Math.random()}`}
//                   >
//                     <tr>
//                       <td>
//                         <div>
//                           <Image
//                             src={product.image}
//                             alt={product.name}
//                             width={50}
//                             height={50}
//                           />
//                         </div>
//                       </td>
//                       <td data-title="Product">
//                         <p>{product.name}</p>
//                       </td>
//                       <td data-title="Price">
//                         <p>€{product.price}</p>
//                       </td>
//                       <td data-title="Quantity">
//                         <div data-test-id={`cart-product-quantity-${item.id}`}>
//                           <SelectForm item={item.id} product={product}>
//                             <button
//                               data-test-id={`cart-product-quantity-${item.quantity}`}
//                             >
//                               {item.quantity}
//                             </button>
//                           </SelectForm>
//                         </div>
//                       </td>
//                       <td data-title="Total" data-test-id="cart-total">
//                         €{totalPrice}
//                       </td>
//                       <td>
//                         <DeleteButton
//                           product={product.id}
//                           data-test-id={`cart-product-remove-${product.id}`}
//                         />
//                       </td>
//                     </tr>
//                   </tbody>
//                 );
//               })}
//             </table>

//             <table>
//               <tbody>
//                 <tr>
//                   <th colSpan="4">Total</th>

//                   <td data-test-id="cart-total">
//                     <SumProduct />
//                     {/* {productCookies.reduce(async (sum, item) => {
//                     const product = await getProductInsecure(item.id);
//                     console.log('productoo', product);
//                     return sum + product.price * item.quantity;
//                     }, 0)} */}
//                     {/* {productCookies.map(async (itecm) => {
//                     const producct = await getProductInsecure(itecm.id);
//                     const totalPrice = producct.price * itecm.quantity;

//                     console.log('producct', producct);
//                     return totalPrice;
//                   })} */}
//                   </td>
//                 </tr>
//               </tbody>
//             </table>

//             <div className={styles.checkout_btn}>
//               <Link
//                 className={styles.link}
//                 data-test-id="cart-checkout"
//                 href="/checkout"
//               >
//                 Checkout
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

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

  console.log('prokkk', productCookies);

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
        <div className="text-center text-lg text-gray-600">
          Your cart is empty. Start adding some products.
          <Link href="/products" className="ml-2 text-blue-500 underline">
            Go to Products
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left">Image</th>
                <th className="px-4 py-2 text-left">Product</th>
                <th className="px-4 py-2 text-left">Price</th>
                <th className="px-4 py-2 text-left">Quantity</th>
                <th className="px-4 py-2 text-left">Total</th>
                <th className="px-4 py-2 text-left">Remove</th>
              </tr>
            </thead>
            <tbody>
              {validProducts.map((product) => (
                <tr key={product.id} className="border-t">
                  <td className="p-4">
                    <Image
                      src={product.images[0] || ''}
                      alt="Baby rompers"
                      width={100}
                      height={93}
                      className=" object-cover rounded-md"
                    />
                  </td>
                  <td className="p-4">
                    {product.name}

                    <div className="text-sm text-gray-500 mt-1">
                      Color:{' '}
                      <span className="font-medium">
                        {product.selectedColor}
                      </span>{' '}
                      <br />
                      Size:{' '}
                      <span className="font-medium">
                        {product.selectedSize}
                      </span>{' '}
                      <br />
                    </div>
                  </td>
                  {/* <td className="p-4">€{product?.price}</td> */}

                  <td className="p-4">
                    <SelectForm item={product.id} product={product}>
                      <button className="px-2 py-1 border rounded bg-white">
                        {product.quantity}
                      </button>
                    </SelectForm>
                  </td>
                  <td className="p-4">€{product.totalPrice.toFixed(2)}</td>
                  <td className="p-4">
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

// import { getCookie } from '../../lib/cookies';
// import { parseJson } from '../../lib/json';
// import { getProductInsecure } from '../database/product';
// import Link from 'next/link';
// import Image from 'next/image';
// import DeleteButton from './DeleteButton';
// import SelectForm from './SelectForm';

// interface CartItem {
//   id: number;
//   quantity: number;
// }

// export default async function CartPage() {
//   const cookie = await getCookie('cart');
//   let productCookies: CartItem[] = cookie ? parseJson(cookie) : [];

//   if (!Array.isArray(productCookies)) {
//     productCookies = [];
//   }

//   const productsWithData = await Promise.all(
//     productCookies.map(async (item) => {
//       const product = await getProductInsecure(item.id);
//       if (!product) return null;

//       const totalPrice = product.price * item.quantity;
//       return { ...product, quantity: item.quantity, totalPrice };
//     }),
//   );

//   const validProducts = productsWithData.filter(Boolean) as Array<
//     Awaited<ReturnType<typeof getProductInsecure>> & {
//       quantity: number;
//       totalPrice: number;
//     }
//   >;

//   const totalSum = validProducts.reduce(
//     (acc, item) => acc + item.totalPrice,
//     0,
//   );

//   return (
//     <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
//       <h1 className="text-3xl font-semibold mb-12">Shopping Cart</h1>

//       {validProducts.length === 0 ? (
//         <div className="text-center text-lg text-gray-600">
//           Your cart is empty. Start adding some products.
//           <Link href="/products" className="ml-2 text-blue-500 underline">
//             Go to Products
//           </Link>
//         </div>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="min-w-full border border-gray-200">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="px-4 py-2 text-left">Image</th>
//                 <th className="px-4 py-2 text-left">Product</th>
//                 <th className="px-4 py-2 text-left">Price</th>
//                 <th className="px-4 py-2 text-left">Quantity</th>
//                 <th className="px-4 py-2 text-left">Total</th>
//                 <th className="px-4 py-2 text-left">Remove</th>
//               </tr>
//             </thead>
//             <tbody>
//               {validProducts.map((product) => (
//                 <tr key={product.id} className="border-t">
//                   <td className="p-4">
//                     <Image
//                       src={product.images?.[0] || ''}
//                       alt={product.name}
//                       width={50}
//                       height={50}
//                       className="rounded"
//                     />
//                   </td>
//                   <td className="p-4">{product.name}</td>
//                   {/* <td className="p-4">€{product.price.toFixed(2)}</td> */}
//                   <td className="p-4">
//                     <SelectForm item={product.id} product={product}>
//                       <button className="px-2 py-1 border rounded bg-white">
//                         {product.quantity}
//                       </button>
//                     </SelectForm>
//                   </td>
//                   <td className="p-4">€{product.totalPrice.toFixed(2)}</td>
//                   <td className="p-4">
//                     {/* <DeleteButton product={product.id} /> */}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           <div className="mt-6 flex justify-end">
//             <div className="text-xl font-semibold">
//               Total: €{totalSum.toFixed(2)}
//             </div>
//           </div>

//           <div className="mt-8 flex justify-end">
//             <Link
//               href="/checkout"
//               className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition"
//               data-test-id="cart-checkout"
//             >
//               Checkout
//             </Link>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
