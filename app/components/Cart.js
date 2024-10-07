'use client';
// import { useRouter } from 'next/navigation';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/CartSlide';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function CartPage() {
  const dispatch = useDispatch();

  const router = useRouter();
  const addToCartHandler = (product, quantity) => {
    dispatch(addToCart({ ...product, quantity: quantity }));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  const { cartItems, loading } = useSelector((state) => state.cart);

  return (
    <div>
      <div>
        <h1>Shopping Cart</h1>

        {loading ? (
          <div>Loading...</div>
        ) : cartItems.length === 0 ? (
          <div>
            Cart empty <Link href="/products">Go back</Link>
          </div>
        ) : (
          <div>
            <div>
              {cartItems.map((item) => (
                <div key={`item-${item.id}`}>
                  <Link href={`/product/${item.id}`}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={50}
                      height={50}
                    />
                  </Link>
                  <p>Price: {item.price}</p>
                  {item.name} - {item.quantity}
                  <select
                    value={item.quantity}
                    onChange={(e) =>
                      addToCartHandler(item, Number(e.target.value))
                    }
                  >
                    {[...Array(item.countInStock).keys()].map((x) => (
                      <option key={`x-${x.id}`} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                  <button onClick={() => removeFromCartHandler(item.id)}>
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div>
              Total: $
              {cartItems.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0,
              )}
            </div>

            <div>
              <button onClick={() => router.push('/shipping')}>checkout</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
