import Link from 'next/link';
import React from 'react';
import Header from './Header';

export default function Navigation() {
  return (
    <div>
      <ul className="navigation">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/cart">
            <Header />
          </Link>
        </li>
      </ul>
    </div>
  );
}
