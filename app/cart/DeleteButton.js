'use client';

import removeProductFromCookie from './action';

export default function DeleteButton({ product }) {
  return (
    <div>
      {/* <button onClick={() => removeFromCartHandler(item.id)}>Remove</button> */}
      <button onClick={() => removeProductFromCookie(product)}>Remove</button>
    </div>
  );
}
