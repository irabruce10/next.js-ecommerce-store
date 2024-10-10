import { useState } from 'react';
import { getCookie } from '../../lib/cookies';
import { parseJson } from '../../lib/json';

export default function CartCount() {
  const [cartQuantity, setCartQuantity] = useState(0);

  async function c() {
    const cookieCart = await getCookie('cart');
    if (cookieCart) {
      const parsedCart = parseJson(cookieCart);
      const quantity = parsedCart.reduce((acc, item) => acc + item.quantity, 0);
      setCartQuantity(quantity);
    }
  }
  console.log(c());

  return (
    <div>
      <span>{cartQuantity}</span>
      <span>🛒</span>
    </div>
  );
}
