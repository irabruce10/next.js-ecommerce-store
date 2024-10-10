import Link from 'next/link';
import Image from 'next/image';

import DeleteButton from './DeleteButton';
import SelectForm from './SelectForm';
import { getCookie } from '../../lib/cookies';
import { parseJson } from '../../lib/json';
import { getProductInsecure } from '../database/product';

export default async function CartPage() {
  const products = await getCookie('cart');

  let productCookies = products ? parseJson(products) : [];

  if (!Array.isArray(productCookies)) {
    productCookies = [];
  }

  return (
    <div>
      <div>
        <h1>Shopping Cart</h1>

        {/* loading ? (
          <div>Loading...</div>
        ) : */}

        {productCookies.length === 0 ? (
          <div>
            Your Cart is Empty Now.Start Adding some Products
            <Link href="/products"> Go To The Products</Link>
          </div>
        ) : (
          <div>
            <div>
              {productCookies.map(async (item) => {
                const product = await getProductInsecure(item.id);
                // {productCookies.reduce(
                //   (acc, item) => acc + item.price * item.quantity,
                //   0,
                // )}

                const totalPrice = product.price * item.quantity;

                return (
                  <div key={`item-${Math.random()}`}>
                    <Link href={`/product/${item.id}`}>
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={50}
                        height={50}
                      />
                    </Link>
                    <p>name:{product.name}</p>
                    <p>price: {product.price}</p>
                    <p>quantity: {item.quantity}</p>
                    <p>total price: {totalPrice}</p>
                    <SelectForm item={item.id} product={product} />
                    <DeleteButton product={product.id} />
                  </div>
                );
              })}
            </div>
            {/* <div>Total: $ ${totalPrice}</div> */}

            {/* <div>
              <button onClick={() => router.push('/shipping')}>checkout</button>
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
}
