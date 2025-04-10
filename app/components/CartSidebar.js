// import { useDispatch, useSelector } from 'react-redux';
// import { addToCart, removeFromCart } from '../redux/CartSlide';
// import Image from 'next/image';
// import Link from 'next/link';

// export default function CartSidebar() {
//   const dispatch = useDispatch();

//   const addToCartHandler = (product, quantity) => {
//     dispatch(addToCart({ ...product, quantity: quantity }));
//   };

//   const removeFromCartHandler = (id) => {
//     dispatch(removeFromCart(id));
//   };
//   const { cartItems, loading, itemsPrice } = useSelector((state) => state.cart);
//   return (
//     <div>
//       {loading ? (
//         <div>Loading...</div>
//       ) : cartItems.length === 0 ? (
//         <div>Cart empty</div>
//       ) : (
//         <div>
//           <div>total</div>
//           <div>euro {itemsPrice}</div>
//           <div>
//             {cartItems.map((item) => (
//               <div key={`item-${item.id}`}>
//                 <Link href={`/product/${item.id}`}>
//                   <Image
//                     src={item.image}
//                     alt={item.name}
//                     width={50}
//                     height={50}
//                   />
//                 </Link>
//                 <p>price{item.price}</p>
//                 {item.name} - {item.quantity}
//                 <select
//                   value={item.quantity}
//                   onChange={(e) =>
//                     addToCartHandler(item, Number(e.target.value))
//                   }
//                 >
//                   {[...Array(item.countInStock).keys()].map((x) => (
//                     <option key={`x-${x.id}`} value={x + 1}>
//                       {x + 1}
//                     </option>
//                   ))}
//                 </select>
//                 <button onClick={() => removeFromCartHandler(item.id)}>
//                   Remove
//                 </button>
//               </div>
//             ))}
//           </div>
//           <div>
//             Total: $
//             {cartItems.reduce(
//               (acc, item) => acc + item.price * item.quantity,
//               0,
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
