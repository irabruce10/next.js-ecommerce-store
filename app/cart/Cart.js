import { getCookie } from '../../lib/cookies';
import { parseJson } from '../../lib/json';
import { getProductInsecure } from '../database/product';

import styles from './cart.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import DeleteButton from './DeleteButton';
import SelectForm from './SelectForm';
import SumProduct from './SumProduct';

export default async function CartPage() {
  const products = await getCookie('cart');

  let productCookies = products ? parseJson(products) : [];

  if (!Array.isArray(productCookies)) {
    productCookies = [];
  }

  return (
    <div className={styles.cart_container}>
      <h1 className={styles.cart_title}>Shopping Cart</h1>

      {/* loading ? (
          <div>Loading...</div>
        ) : */}

      {productCookies.length === 0 ? (
        <h1 className={styles.cart_title}>
          Your Cart is Empty Now.Start Adding some Products
          <Link href="/products"> Go To The Products</Link>
        </h1>
      ) : (
        <div>
          <table className={styles.cart_table}>
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            {productCookies.map(async (item) => {
              const product = await getProductInsecure(item.id);

              const totalPrice = product.price * item.quantity;

              product.totalPrice = totalPrice;

              // totalSum += totalPrice;

              // console.log('toto', totalSum);

              return (
                <tbody
                  data-test-id={`cart-product-${item.id}`}
                  key={`item-${Math.random()}`}
                >
                  <tr>
                    <td>
                      <div>
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={50}
                          height={50}
                        />
                      </div>
                    </td>
                    <td data-title="Product">
                      <p>{product.name}</p>
                    </td>
                    <td data-title="Price">
                      <p>€{product.price}</p>
                    </td>
                    <td data-title="Quantity">
                      <div data-test-id={`cart-product-quantity-${item.id}`}>
                        <SelectForm item={item.id} product={product}>
                          <button
                            data-test-id={`cart-product-quantity-${item.quantity}`}
                          >
                            {item.quantitgy}
                          </button>
                        </SelectForm>
                      </div>
                    </td>
                    <td data-title="Total" data-test-id="cart-total">
                      €{totalPrice}
                    </td>
                    <td>
                      <DeleteButton
                        product={product.id}
                        data-test-id={`cart-product-remove-${product.id}`}
                      />
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>

          <table>
            <tbody>
              <tr>
                <th colSpan="4">Total</th>

                <td data-test-id="cart-total">
                  <SumProduct />
                  {/* {productCookies.reduce(async (sum, item) => {
                    const product = await getProductInsecure(item.id);
                    console.log('productoo', product);
                    return sum + product.price * item.quantity;
                    }, 0)} */}
                  {/* {productCookies.map(async (itecm) => {
                    const producct = await getProductInsecure(itecm.id);
                    const totalPrice = producct.price * itecm.quantity;

                    console.log('producct', producct);
                    return totalPrice;
                  })} */}
                </td>
              </tr>
            </tbody>
          </table>

          <div className={styles.checkout_btn}>
            <Link
              className={styles.link}
              data-test-id="cart-checkout"
              href="/checkout"
            >
              Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
