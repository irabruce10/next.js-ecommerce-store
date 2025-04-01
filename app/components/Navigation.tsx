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

import Image from 'next/image';

import Menu from './Menu';
import SearchBar from './SearchBar';
import NavIcons from './NavIcons';

export default function Navigation() {
  return (
    <div className=" h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative">
      <div className="h-full flex  items-center justify-between md:hidden  ">
        {/* Mobile */}
        <Link href="/">
          <div className=" text-2xl tracking-wide">BuyNow</div>
        </Link>

        <Menu />
      </div>
      {/* Bigger Screen */}
      <div className="hidden md:flex items-center justify-between h-full gap-8">
        {/* left */}
        <div className=" w-1/3">
          <Link href="/" className="flex items-center gap-3 ">
            <Image src="/logo.png" alt="Logo Image" width={24} height={24} />
            <div className=" text-2xl tracking-wide">BuyNow</div>
          </Link>
        </div>

        {/* right */}
        <div className=" w-2/3 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
}
