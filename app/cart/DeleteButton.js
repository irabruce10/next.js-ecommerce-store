'use client';

import removeProductFromCookie from './action';
import styles from './cart.module.scss';

export default function DeleteButton({ product }) {
  return (
    <div>
      <button
        data-test-id={`cart-product-remove-${product.id}`}
        className={styles.deleteCartBtn}
        onClick={() => removeProductFromCookie(product)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className={styles.deleteButtonSvg}
        >
          <path d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.7 23.7 0 0 0 -21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0 -16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z" />
        </svg>
      </button>
    </div>
  );
}
