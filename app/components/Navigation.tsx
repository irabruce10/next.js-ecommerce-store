import Link from 'next/link';
import CartCount from './CardCount';

export default function Navigation() {
  return (
    <div className="nav-container">
      <ul className="nav-ul">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li className="cart" data-test-id="products-link">
          <Link href="/cart" data-test-id="cart-link">
            <CartCount />
          </Link>
        </li>
      </ul>
    </div>
  );
}
