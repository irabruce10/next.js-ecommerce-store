import Link from 'next/link';
import { getProducts } from '../database/product';

export const metadata = {
  title: 'Product',
};

export default function productPage() {
  const products = getProducts();
  return (
    <div>
      <h1>Our top Products</h1>

      {products.map((product) => {
        return (
          <div
            key={`product-${product.id}`}
            data-test-id="product-<product id>"
          >
            <Link href={`/products/${product.id}`} data-test-id="products-link">
              <h2>{product.name}</h2>
              <img
                src={product.image}
                alt={product.title}
                width={300}
                height={300}
              />
            </Link>

            <p>Price: {product.price}</p>
          </div>
        );
      })}
    </div>
  );
}
