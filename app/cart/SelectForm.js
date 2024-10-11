'use client';

import { updateCookiesMinus, updateCookiesPlus } from './action';

export default function SelectForm({ item, quantity, children }) {
  return (
    <div>
      <div className="selectCartBtn">
        <button
          value={quantity}
          type="round"
          onClick={(e) =>
            updateCookiesMinus(item, (quantity = Number(e.target.value)))
          }
        >
          -
        </button>

        {/* <input value={item.quantity} /> */}
        <div>{children}</div>
        <button
          value={quantity}
          type="round"
          onClick={(e) =>
            updateCookiesPlus(item, (quantity = Number(e.target.value)))
          }
        >
          +
        </button>
      </div>
      {/* <select
        value={quantity}
        // onChange={(e) => addToCartHandler(item, Number(e.target.value))}
        onChange={(e) =>
          updateCookies(item, (quantity = Number(e.target.value)))
        }
      >
        {[...Array(product.countInStock).keys()].map((x) => (
          <option key={`x-${Math.random()}`} value={x + 0}>
            {x + 0}
          </option>
        ))}
      </select> */}
    </div>
  );
}
