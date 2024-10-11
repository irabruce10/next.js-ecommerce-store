export default function checkoutPage() {
  return (
    <div>
      <h1>Billing Details</h1>

      <div>
        <div>
          <div>
            <h4>Billing Details</h4>
          </div>
          <form>
            <div>
              <input required="" name="fname" placeholder="First name *" />
            </div>
            <div>
              <input required="" name="lname" placeholder="Last name *" />
            </div>
            <div>
              <input required="" name="cname" placeholder="Company Name" />
            </div>
            <div>
              <div>
                <select>
                  <option value="">Select an option...</option>
                  <option value="AX">Aland Islands</option>
                  <option value="AF">Afghanistan</option>
                  <option value="AL">Albania</option>
                  <option value="DZ">Algeria</option>
                  <option value="AD">Andorra</option>
                  <option value="AO">Angola</option>
                  <option value="AI">Anguilla</option>
                  <option value="AQ">Antarctica</option>
                </select>
              </div>
            </div>
            <div>
              <input name="billing_address" placeholder="Address *" />
            </div>
            <div>
              <input name="billing_address2" placeholder="Address line2" />
            </div>
            <div>
              <input required="" name="city" placeholder="City / Town *" />
            </div>
            <div>
              <input
                required=""
                name="zipcode"
                placeholder="Postcode / ZIP *"
              />
            </div>
            <div>
              <input required="" name="phone" placeholder="Phone *" />
            </div>
            <div>
              <input required="" name="email" placeholder="Email address *" />
            </div>
            <div>
              <h4>Additional information</h4>
            </div>
            <div>
              <textarea rows="5" placeholder="Order notes">
                f
              </textarea>
            </div>
          </form>
        </div>

        <div>
          <div>
            <div>
              <h4>Your Orders</h4>
            </div>
            <div>
              <table>
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
            <div>
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
            <button>Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}
