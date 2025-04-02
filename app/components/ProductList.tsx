import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductList() {
  return (
    <div className="flex mt-12 gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link href="/test" className=" w-full flex flex-col gap-4 sm:w-[45%]">
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opaacity easy duration-500"
          />

          <Image
            src="https://images.pexels.com/photos/31224767/pexels-photo-31224767.jpeg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md "
          />
        </div>
      </Link>
    </div>
  );
}
