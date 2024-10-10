import Link from 'next/link';
import React from 'react';
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
        <li className="cart">
          <Link href="/cart">
            <CartCount />
          </Link>
        </li>
      </ul>
    </div>
  );
}
