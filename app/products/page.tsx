import styles from './product.module.scss';
import { getProductsInsecure } from '../database/product';
import Link from '../../node_modules/next/link';
import Image from '../../node_modules/next/image';
import type { ReactElement, ReactNode, ReactPortal } from 'react';

export const metadata = {
  title: 'Product',
};

export default async function productPage() {
  const products = await getProductsInsecure();

  return (
    <div className={styles.product_container}>
      <h1 data-test-id="products-link" className="title">
        Our top Products
      </h1>

      <div className={styles.product_card}>
        {products.map(
          (product: {
            id: any;
            image: string;
            name: string | null | undefined;
            price:
              | string
              | number
              | boolean
              | ReactElement
              | Iterable<ReactNode>
              | ReactPortal
              | null
              | undefined;
          }) => {
            return (
              <div
                key={`product-${product.id}`}
                data-test-id={`product-${product.id}`}
              >
                <Link
                  href={`/products/${product.id}`}
                  data-test-id="products-link"
                  className={styles.product_link}
                >
                  <Image
                    src={product.image}
                    alt={product.id}
                    width={300}
                    height={300}
                    data-test-id="product-image"
                  />{' '}
                  <h2>{product.name}</h2>
                </Link>

                <p data-test-id="product-price" className={styles.price}>
                  Price: {product.price}
                </p>
              </div>
            );
          },
        )}
      </div>
    </div>
  );
}
