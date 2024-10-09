'use client';
import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/CartSlide';
import { useRouter } from 'next/navigation';
import createOrUpdateCookie from '../products/[productDetails]/action';

export default function AddToCart({
  product,
  productId,
  increasePerClick = false,
  redirect = false,
  showQty = true,
}) {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const router = useRouter();

  const [quantity, setQuantity] = useState(1);

  const addToCartHandler = async () => {
    let newQty = quantity;
    if (increasePerClick) {
      const existItem = cartItems.find((item) => item.id === product.id);

      if (existItem) {
        if (existItem.quantity + 1 <= product.countInStock) {
          newQty = existItem.quantity + 1;
        } else {
          return alert('No more ....');
        }
      }
    }
    dispatch(addToCart({ ...product, quantity: newQty }));
    if (redirect) router.push(`/cart`);
    await createOrUpdateCookie(productId, quantity);
  };

  return (
    <div>
      {product.countInStock > 0 && showQty && (
        <div>
          <div>quantity</div>
          <div>
            <select
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            >
              {[...Array(product.countInStock).keys()].map((x) => (
                <option key={`x-${Math.random()}`} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
      <div>
        {product.countInStock > 0 ? (
          <button onClick={addToCartHandler}>Add to cart</button>
        ) : (
          <button disabled>Out of stock</button>
        )}
      </div>
    </div>
  );
}
