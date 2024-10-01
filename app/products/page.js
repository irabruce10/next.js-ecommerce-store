import Link from 'next/link';
import { getProducts } from '../database/product';

export default function productPage() {
  const products = getProducts();
  return (
    <div>
      <h1>Our top Products</h1>

      {products.map((product) => {
        return (
          <div key={`product-${product.id}`}>
            <Link href={`/products/${product.id}`}>
              <h2>{product.title}</h2>
              <img
                src={product.image}
                alt={product.title}
                width={300}
                height={300}
              />
            </Link>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <p>
              Rating: {product.rating.rate} ({product.rating.count} votes)
            </p>
          </div>
        );
      })}
    </div>
  );
}
