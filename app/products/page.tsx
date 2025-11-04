// import styles from './product.module.scss';
// import { getProductsInsecure } from '../database/product';
// import Link from '../../node_modules/next/link';
// import Image from '../../node_modules/next/image';
// import type { ReactElement, ReactNode, ReactPortal } from 'react';

// export const metadata = {
//   title: 'Product',
// };

// export default async function productPage() {
//   const products = await getProductsInsecure();

//   return (
//     <div className={styles.product_container}>
//       <h1 data-test-id="products-link" className="title">
//         Our top Products
//       </h1>

//       <div className={styles.product_card}>
//         {products.map(
//           (product: {
//             id: any;
//             image: string;
//             name: string | null | undefined;
//             price:
//               | number
//               | boolean
//               | ReactElement
//               | Iterable<ReactNode>
//               | ReactPortal
//               | null
//               | undefined;
//           }) => {
//             return (
//               <div
//                 key={`product-${product.id}`}
//                 data-test-id={`product-${product.id}`}
//               >
//                 <Link
//                   href={`/products/${product.id}`}
//                   data-test-id={`product-${product.id}`}
//                   className={styles.product_link}
//                 >
//                   <Image
//                     src={product.image}
//                     alt={product.id}
//                     width={200}
//                     height={200}
//                     data-test-id="product-image"
//                   />{' '}
//                   <h2>{product.name}</h2>
//                 </Link>

//                 <p className={styles.price}>{Number(product.price)}</p>
//               </div>
//             );
//           },
//         )}
//       </div>
//     </div>
//   );
// }

import React from 'react';
import ProductList from '../components/ProductList';
import Slider from '../components/Slider';

export default function ProductPage() {
  return (
    <div>
      {/* <Slider /> */}
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl md:text-3xl font-bold">All Products</h1>
        <ProductList />
      </div>
    </div>
  );
}
