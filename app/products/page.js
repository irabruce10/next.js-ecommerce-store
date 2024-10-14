import Link from 'next/link';
import styles from './product.module.scss';
import { getProductsInsecure } from '../database/product.ts';
import Image from 'next/image';
export const metadata = {
  title: 'Product',
};

export default async function productPage() {
  const products = await getProductsInsecure();

  return (
    <div className={styles.product_container}>
      <h1 className="title">Our top Products</h1>

      <div className={styles.product_card}>
        {products.map((product) => {
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
                  alt={product.title}
                  width={250}
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
        })}
      </div>
    </div>
  );
}
