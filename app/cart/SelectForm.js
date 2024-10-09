'use client';

import { updateCookies } from './action';

export default function SelectForm({ item, product, quantity }) {
  // const dispatch = useDispatch();
  // const updateCartCookie = (productId, quantity) => {
  //   const cart = parseJson(getModifiedCookieValues('cart')) || [];
  //   const existingProduct = cart.find((item) => item.id === productId);

  //   if (existingProduct) {
  //     existingProduct.quantity = quantity;
  //   }
  // };
  // const addToCartHandler = async (productId, quantity) => {
  //   const products = await getCookie('cart');

  //   const productCookies = !products
  //     ? // Case A: cookie undefined
  //       []
  //     : parseJson(products);

  //   const updateProductCookie = productCookies.find((prod) => {
  //     return prod.id === productId;
  //   });

  //   // Case B: cookie set, id doesn't exist

  //   if (!updateProductCookie) {
  //     productCookies.push({ id: productId, quantity: quantity });
  //   } else {
  //     updateProductCookie.quantity += quantity;
  //     // Case C: cookie set, id exists already
  //   }
  //   (await cookies()).set('cart', JSON.stringify(productCookies));
  // };

  return (
    <div>
      <select
        value={quantity}
        // onChange={(e) => addToCartHandler(item, Number(e.target.value))}
        onChange={(e) =>
          updateCookies(item, (quantity = Number(e.target.value)))
        }
      >
        {[...Array(product.countInStock).keys()].map((x) => (
          <option key={`x-${Math.random()}`} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>
    </div>
  );
}
