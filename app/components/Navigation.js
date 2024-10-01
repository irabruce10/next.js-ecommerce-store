import Link from 'next/link';
import React from 'react';

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
          <Link href="/account">Account</Link>
        </li>
      </ul>
    </div>
  );
}
