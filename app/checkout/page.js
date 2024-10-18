import { getCookie } from '../../lib/cookies';
import { parseJson } from '../../lib/json';
import { getProductInsecure } from '../database/product';
import styles from './checkout.module.scss';
import ResetCookies from './ResetCookies';

export default async function checkoutPage() {
  const products = await getCookie('cart');

  let productCookies = products ? parseJson(products) : [];

  if (!Array.isArray(productCookies)) {
    productCookies = [];
  }
  return (
    <div className={styles.checkout_container}>
      <h1>Checkout</h1>

      <div className={styles.checkout_asides}>
        <div className={styles.aside1}>
          <h4>Billing Details</h4>
          <form>
            <div>
              <input
                data-test-id="checkout-first-name"
                required=""
                name="fname"
                placeholder="First name *"
              />
            </div>
            <div>
              <input
                data-test-id="checkout-last-name"
                required=""
                name="lname"
                placeholder="Last name *"
              />
            </div>
            <div>
              <input
                data-test-id="checkout-security-code"
                required=""
                name="email"
                placeholder="Password *"
                type="password"
              />
            </div>

            <div>
              <div>
                <select
                  className={styles.select_country}
                  data-test-id="checkout-country"
                >
                  <option value="">Select Country</option>
                  <option value="AT">Austria</option>
                  <option value="GM">Germany</option>
                  <option value="FR">France</option>
                  <option value="BE">Belgium</option>
                  <option value="DN">Denmark</option>
                  <option value="UR">Ukraine</option>
                  <option value="AI">Anguilla</option>
                  <option value="AR">Czech Republic</option>
                </select>
              </div>
            </div>
            <div>
              <input
                data-test-id="checkout-address"
                name="billing_address"
                placeholder="Address *"
              />
            </div>

            <div>
              <input
                data-test-id="checkout-city"
                required=""
                name="city"
                placeholder="City / Town *"
              />
            </div>
            <div>
              <input
                data-test-id="checkout-postal-code"
                required=""
                name="zipcode"
                placeholder="Postcode / ZIP *"
              />
            </div>
            <div>
              <input required="" name="phone" placeholder="Phone *" />
            </div>
            <div>
              <input
                data-test-id="checkout-email"
                required=""
                name="email"
                placeholder="Email address *"
              />
            </div>

            <div>
              <input
                required=""
                name="credit card"
                placeholder="Credit card *"
                type="card"
              />
            </div>
            <div>
              <input
                data-test-id="checkout-expiration-date"
                required=""
                name="expiration date"
                placeholder="expiration date *"
              />
            </div>
          </form>
        </div>

        <div className={styles.aside2}>
          <div>
            <div>
              <h4>Your Orders</h4>
            </div>

            <table className={styles.order_table}>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Total</th>
                </tr>
              </thead>
              {productCookies.map(async (item) => {
                const product = await getProductInsecure(item.id);

                const totalPrice = product.price * item.quantity;

                return (
                  <tbody className={styles.table} key={`item-${item.id}`}>
                    <tr>
                      <td>
                        {product.name} <span>x {product.quantity}</span>
                      </td>
                      <td>{totalPrice}</td>
                    </tr>
                  </tbody>
                );
              })}

              <tbody>
                <tr>
                  <th>SubTotal</th>€
                  {productCookies.map(async (itecm) => {
                    const producct = await getProductInsecure(itecm.id);
                    const totalPrice = producct.price * itecm.quantity;

                    console.log('producct', producct);
                    return totalPrice;
                  })}
                </tr>
                <tr>
                  <th>Shipping</th>
                  <td>Free Shipping</td>
                </tr>
                <tr>
                  <th>Total</th>€
                  {productCookies.map(async (itecm) => {
                    const producct = await getProductInsecure(itecm.id);
                    const totalPrice = producct.price * itecm.quantity;

                    console.log('producct', producct);
                    return totalPrice;
                  })}
                </tr>
              </tbody>
            </table>

            <div className={styles.payment}>
              <div>
                <h4>Payment</h4>
              </div>
              <div>
                <div>
                  <input
                    required=""
                    type="radio"
                    name="payment-option"
                    id="exampleRadios3"
                  />
                  <label htmlFor="exampleRadios3">Direct Bank Transfer</label>
                  <p data-method="option3">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration.{' '}
                  </p>
                </div>
                <div>
                  <input
                    type="radio"
                    name="payment-option"
                    id="exampleRadios4"
                  />
                  <label htmlFor="exampleRadios4">Check Payment</label>
                  <p data-method="option4">
                    Please send your cheque to Store Name, Store Street, Store
                    Town, Store State / County, Store Postcode.
                  </p>
                </div>
                <div>
                  <input
                    type="radio"
                    name="payment-option"
                    id="exampleRadios5"
                    value="option5"
                  />
                  <label htmlFor="exampleRadios5">Paypal</label>
                  <p data-method="option5">
                    Pay via PayPal; you can pay with your credit card if you
                    don't have a PayPal account.
                  </p>
                </div>
              </div>
            </div>

            <ResetCookies />

            {/*

            <Link
              href="#/"
              data-test-id="checkout-confirm-order"
              className={styles.payment_btn}
              onClick={deleteAllCheckout}
            >
              Confirm Order
            </Link>*/}
          </div>
        </div>
      </div>
    </div>
  );
}
