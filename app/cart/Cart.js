import Link from 'next/link';
import Image from 'next/image';
import DeleteButton from './DeleteButton';
import SelectForm from './SelectForm';
import { getCookie } from '../../lib/cookies';
import { parseJson } from '../../lib/json';
import { getProductInsecure } from '../database/product';

import styles from './cart.module.scss';

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
        <div className={styles.cart_table_container}>
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
              console.log('prog', item);
              // {productCookies.reduce(
              //   (acc, item) => acc + item.price * item.quantity,
              //   0,
              // )}

              const totalPrice = product.price * item.quantity;
              console.log('leng', item.quantity);
              // const a = await productCookies.reduce(
              //   (acc, product) => acc + totalPrice,
              //   0,
              // );

              // const a = productCookies.reduce((acc, item) => {
              //   const productz = productCookies.find((p) => p.id === item.id);

              //   console.log('ttt', productz);
              //   return totalPrice + acc;
              // }, 0);

              // console.log('ttt', a);
              // const a = productCookies.reduce(
              //   (acc, itemw) => acc + product.price * itemw.quantity,
              //   0,
              // );

              return (
                <tbody key={`item-${Math.random()}`}>
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
                      <div className={styles.select_form}>
                        <SelectForm item={item.id} product={product}>
                          <input value={item.quantity} />
                        </SelectForm>
                      </div>
                    </td>
                    <td data-title="Total">€{totalPrice}</td>
                    <td>
                      <DeleteButton product={product.id} />
                    </td>
                    {/* <td>Total: $ ${a}</td> */}
                  </tr>
                </tbody>
              );
            })}
          </table>

          {/* <div>
              <button onClick={() => router.push('/shipping')}>checkout</button>
            </div> */}
        </div>
      )}
    </div>
  );
}
