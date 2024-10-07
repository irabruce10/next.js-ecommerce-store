// import Link from 'next/link';

import React from 'react';
import { useSelector } from 'react-redux';

export default function CartCount() {
  const { loading, cartItems } = useSelector((state) => state.cart);

  return (
    <div>
      <span>
        {loading ? '' : cartItems.reduce((a, c) => a + c.quantity, 0)}
      </span>
      <p>Cart</p>
    </div>
  );
}
