'use client';
import Link from 'next/link';
import styles from './checkout.module.scss';
import { removeAllCookies } from '../cart/action';
export default function ResetCookies() {
  return (
    <div>
      <Link
        href="/thank_you"
        data-test-id="checkout-confirm-order"
        className={styles.payment_btn}
        onClick={() => removeAllCookies()}
      >
        Confirm Order
      </Link>
    </div>
  );
}
