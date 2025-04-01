// import Link from 'next/link';
// import CartCount from './CardCount';

// export default function Navigation() {
//   return (
//     <div className="nav-container">
//       <ul className="nav-ul">
//         <li>
//           <Link href="/">Home</Link>
//         </li>
//         <li>
//           <Link href="/about">About</Link>
//         </li>
//         <li>
//           <Link href="/products" data-test-id="products-link">
//             Products
//           </Link>
//         </li>
//         <li className="cart">
//           <Link href="/cart" data-test-id="cart-link">
//             <CartCount />
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// }

import Link from 'next/link';

import Menu from './Menu';

export default function Navigation() {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative">
      <div className="flex  items-center justify-between h-full ">
        {/* Mobile */}
        <Link href="/">
          <div className=" text-2xl tracking-wide">BuyNow</div>
        </Link>

        <Menu />
      </div>
    </div>
  );
}
