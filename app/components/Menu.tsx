'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <Image
        src="/menu.png"
        alt="menu"
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />

      {open && (
        <div className=" absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col justify-center gap-8 text-xl z-10 text-center ">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/products">Products</Link>
          <Link href="/cart">Cart (1)</Link>
          {/* <Link href="/contact">Contact</Link>
          <Link href="/logout">Logout</Link> */}
        </div>
      )}
    </div>
  );
}
