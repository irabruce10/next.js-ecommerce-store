import styles from './checkout.module.scss';

export default function checkoutPage() {
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
            <div className={styles.order_table}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Lorem ipsum furniture seven <span>x 5</span>
                    </td>
                    <td>$212.50</td>
                  </tr>
                  <tr>
                    <td>
                      Lorem ipsum fashion eight <span>x 1</span>
                    </td>
                    <td>$19.92</td>
                  </tr>
                  <tr>
                    <td>
                      Lorem ipsum fashion sev <span>x 3</span>
                    </td>
                    <td>$69.00</td>
                  </tr>
                  <tr>
                    <td>
                      Lorem ipsum furniture two <span>x 6</span>
                    </td>
                    <td>$540.00</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th>SubTotal</th>
                    <td>$841.42</td>
                  </tr>
                  <tr>
                    <th>Shipping</th>
                    <td>Free Shipping</td>
                  </tr>
                  <tr>
                    <th>Total</th>
                    <td>$841.42</td>
                  </tr>
                </tfoot>
              </table>
            </div>
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
                    value="option3"
                    checked=""
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
                    value="option4"
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
            <button
              data-test-id="checkout-confirm-order"
              className={styles.payment_btn}
            >
              Confirm Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}