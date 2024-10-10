import Link from 'next/link';
import { getProducts } from '../database/product';
import styles from './product.module.scss';
export const metadata = {
  title: 'Product',
};

export default function productPage() {
  const products = getProducts();
  return (
    <div className={styles.product_container}>
      <h1 className="title">Our top Products</h1>

      <div className={styles.product_card}>
        {products.map((product) => {
          return (
            <div
              key={`product-${product.id}`}
              data-test-id="product-<product id>"
            >
              <Link
                href={`/products/${product.id}`}
                data-test-id="products-link"
                className={styles.product_link}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  width={250}
                  height={300}
                />{' '}
                <h2>{product.name}</h2>
              </Link>

              <p className={styles.price}>Price: {product.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
