'use client';
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/CartSlide';
import { useRouter } from 'next/navigation';
import createOrUpdateCookie from '../products/[productDetails]/action';
import { updateCookiesMinus, updateCookiesPlus } from '../cart/action';
import styles from './AddToCart.module.scss';

// type Props = {
//   product;
//   productId;
//   productQty;
//   increasePerClick?: boolean;
//   redirect?: boolean;
//   showQty?: boolean;
// };

export default function AddToCart({
  product,
  productId,
  productQty,
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
          setQuantity();
          return alert('No more ....');
        }
      }
    }
    dispatch(addToCart({ ...product, quantity: newQty }));
    if (redirect) router.push(`/cart`);
    await createOrUpdateCookie(productId, quantity);
  };

  return (
    <div className={styles.addToCart_container}>
      {product.countInStock > 0 && showQty && (
        <div>
          <div className={styles.stockQuantity}>
            Quantity in stock {product.countInStock}
          </div>
          <div>
            <button
              className={styles.addToCart_btn}
              value={productQty}
              disabled={product.countInStock <= 0}
              type="round"
              onClick={(e) =>
                updateCookiesMinus(productId, Number(e.target.value))
              }
            >
              -
            </button>

            <input
              className={styles.proQuantity}
              data-test-id="product-quantity"
              value={quantity}
              onChange={(event) => Number(event.currentTarget.value)}
            />

            {/* <span>{product.quantity}</span> */}
            <button
              className={styles.addToCart_btn}
              value={quantity}
              type="round"
              onClick={(e) =>
                updateCookiesPlus(productId, Number(e.target.value))
              }
            >
              +
            </button>
          </div>

          <div>
            {/* <select
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            >
              {[...Array(product.countInStock).keys()].map((x) => (
                <option key={`x-${Math.random()}`} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </select> */}
          </div>
        </div>
      )}
      <div>
        {product.countInStock > 0 ? (
          <button
            className={styles.addBtn}
            onClick={addToCartHandler}
            data-test-id="product-add-to-cart"
          >
            Add to cart
          </button>
        ) : (
          <button className={styles.countOutStock_btn} disabled>
            Out of stock
          </button>
        )}
      </div>
    </div>
  );
}
