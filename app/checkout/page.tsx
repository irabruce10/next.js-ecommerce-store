import { getCookie } from '../../lib/cookies';
import { parseJson } from '../../lib/json';
import { getProductInsecure } from '../database/product';

import type { Product } from '../products/[productDetails]/action';
import ResetCookies from './ResetCookies';

export default async function CheckoutPage() {
  const cookieValue = await getCookie('cart');
  let cartItems: Product[] = [];
  try {
    cartItems = (cookieValue ? parseJson(cookieValue) : []) as Product[];
    if (!Array.isArray(cartItems)) cartItems = [];
  } catch {
    cartItems = [];
  }

  const products = await Promise.all(
    cartItems.map(async (item) => {
      const product = await getProductInsecure(item.id);
      if (!product) {
        throw new Error(`Product not found for item ${item.id}`);
      }
      return {
        ...product,
        quantity: item.quantity,
        total: product.price * item.quantity,
      };
    }),
  );

  const subTotal = products.reduce((sum, p) => sum + p.total, 0);
  const shipping = 0;
  const total = subTotal + shipping;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 ">
      <div className="mt-14 ">
        <h1 className="text-2xl md:text-3xl font-bold px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">
          Checkout
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Billing Details */}
        <section className="space-y-6">
          <h2 className="text-xl font-medium">Billing Details</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="firstName"
                placeholder="First name *"
                required
                className="border rounded-lg p-2 w-full"
                data-test-id="checkout-first-name"
              />
              <input
                name="lastName"
                placeholder="Last name *"
                required
                className="border rounded-lg p-2 w-full"
                data-test-id="checkout-last-name"
              />
            </div>

            <select
              name="country"
              required
              className="border rounded-lg p-2 w-full"
              data-test-id="checkout-country"
            >
              <option value="">Select Country</option>
              <option value="AT">Austria</option>
              <option value="DE">Germany</option>
              <option value="FR">France</option>
              <option value="BE">Belgium</option>
              <option value="DK">Denmark</option>
              <option value="UA">Ukraine</option>
              <option value="AI">Anguilla</option>
              <option value="CZ">Czech Republic</option>
            </select>
            <input
              name="address"
              placeholder="Address *"
              required
              className="border rounded-lg p-2 w-full"
              data-test-id="checkout-address"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="city"
                placeholder="City / Town *"
                required
                className="border rounded-lg p-2 w-full"
                data-test-id="checkout-city"
              />
              <input
                name="zipCode"
                placeholder="Postcode / ZIP *"
                required
                className="border rounded-lg p-2 w-full"
                data-test-id="checkout-postal-code"
              />
            </div>
            <input
              name="phone"
              placeholder="Phone *"
              required
              className="border rounded-lg p-2 w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email address *"
              required
              className="border rounded-lg p-2 w-full"
              data-test-id="checkout-email"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="creditCard"
                placeholder="XXXX XXXX XXXX XXXX *"
                type="text"
                required
                className="border rounded-lg p-2 w-full"
              />
              <input
                name="expirationDate"
                placeholder="MM/YY *"
                type="text"
                required
                className="border rounded-lg p-2 w-full"
                data-test-id="checkout-expiration-date"
              />
            </div>
          </form>
        </section>

        {/* Order Summary */}
        <section className="space-y-6">
          <h2 className="text-xl font-medium">Your Order</h2>
          <div className="overflow-x-auto bg-white shadow rounded-lg">
            <table className="min-w-full text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3">Product</th>
                  <th className="p-3">Total</th>
                </tr>
              </thead>
              <tbody>
                {products.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="p-3">
                      <span className="block sm:inline">{item.name}</span>
                      <span className="text-gray-600"> x {item.quantity}</span>
                    </td>
                    <td className="p-3">€{item.total.toFixed(2)}</td>
                  </tr>
                ))}
                <tr className="border-t">
                  <th className="p-3 text-gray-800">Subtotal</th>
                  <td className="p-3">€{subTotal.toFixed(2)}</td>
                </tr>
                <tr>
                  <th className="p-3 text-gray-800">Shipping</th>
                  <td className="p-3">Free Shipping</td>
                </tr>
                <tr className="bg-gray-50">
                  <th className="p-3 text-lg font-semibold">Total</th>
                  <td className="p-3 text-lg font-semibold">
                    €{total.toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Payment Method */}
          <div className="space-y-4">
            <h2 className="text-xl font-medium">Payment Method</h2>
            <div className=" flex flex-wrap gap-2">
              {[
                {
                  id: 'discover',
                  label: 'Direct Bank Transfer',
                  logo: 'discover.png',
                },
                {
                  id: 'visa',
                  label: 'Visa',
                  logo: '/visa.png',
                },
                {
                  id: 'MasterCard',
                  label: 'MasterCard',
                  logo: 'mastercard.png',
                },

                {
                  id: 'paypal',
                  label: 'PayPal',
                  logo: 'paypal.png',
                },
                {
                  id: 'skrill',
                  label: 'Skrill',
                  logo: 'skrill.png',
                },
              ].map((opt, idx) => (
                <label
                  key={opt.id}
                  className="flex items-center space-x-4 border rounded-lg p-2.5 cursor-pointer hover:shadow transition"
                >
                  <input
                    type="radio"
                    name="paymentOption"
                    id={`payment-${opt.id}`}
                    className="mt-1 accent-[#F35C7A]"
                    defaultChecked={idx === 0}
                  />
                  <img
                    src={opt.logo}
                    alt={`${opt.label} logo`}
                    className="w-8 h-8 object-contain"
                  />
                  {/* <span className="font-medium">{opt.label}</span> */}
                </label>
              ))}
            </div>
          </div>

          <ResetCookies item={0} />
        </section>
      </div>
    </div>
  );
}
