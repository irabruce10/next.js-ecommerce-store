import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  getAllProductsInsecureWithChoices,
  getProductsInsecure,
} from '../database/product';

export default async function ProductList() {
  const products = await getProductsInsecure();

  return (
    <div className="flex mt-12 gap-x-8 gap-y-16 justify-between flex-wrap">
      {products.slice(0, 8).map((product: any) => (
        <Link
          key={product.id}
          href={`/products/${product.id}`}
          className=" w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        >
          <div className="relative w-full h-80">
            <Image
              src={product.images[0]}
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opaacity easy duration-500"
            />

            <Image
              src={product.images[1]}
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md "
            />
          </div>

          <div className="flex justify-between">
            <span className=" font-medium  text-left">
              {product.name.length > 20
                ? product.name.substring(0, 20) + '...'
                : product.name}
            </span>
            <span className=" font-semibold">€{product.price} </span>
          </div>
          <div className=" text-sm text-gray-500 text-left ">
            {product.description.length > 100
              ? product.description.substring(0, 100) + '...'
              : product.description}
          </div>
          <button className=" rounded-2xl ring-1 w-max ring-[#F35C7A] text-[#F35C7A] py-2 px-4 text-xs hover:bg-[#F35C7A] hover:text-white">
            Add to cart
          </button>
        </Link>
      ))}

      {/*  */}
      {/* <Link
        href="/test"
        className=" w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
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

        <div className="flex justify-between">
          <span className=" font-medium">Product Name</span>
          <span className=" font-semibold">$46</span>
        </div>
        <div className=" text-sm text-gray-500 text-left ">My Description</div>
        <button className=" rounded-2xl ring-1 w-max ring-[#F35C7A] text-[#F35C7A] py-2 px-4 text-xs hover:bg-[#F35C7A] hover:text-white">
          Add to cart
        </button>
      </Link>
      <Link
        href="/test"
        className=" w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
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

        <div className="flex justify-between">
          <span className=" font-medium">Product Name</span>
          <span className=" font-semibold">$46</span>
        </div>
        <div className=" text-sm text-gray-500 text-left ">My Description</div>
        <button className=" rounded-2xl ring-1 w-max ring-[#F35C7A] text-[#F35C7A] py-2 px-4 text-xs hover:bg-[#F35C7A] hover:text-white">
          Add to cart
        </button>
      </Link>
      <Link
        href="/test"
        className=" w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
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

        <div className="flex justify-between">
          <span className=" font-medium">Product Name</span>
          <span className=" font-semibold">$46</span>
        </div>
        <div className=" text-sm text-gray-500 text-left ">My Description</div>
        <button className=" rounded-2xl ring-1 w-max ring-[#F35C7A] text-[#F35C7A] py-2 px-4 text-xs hover:bg-[#F35C7A] hover:text-white">
          Add to cart
        </button>
      </Link>
      <Link
        href="/test"
        className=" w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
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

        <div className="flex justify-between">
          <span className=" font-medium">Product Name</span>
          <span className=" font-semibold">$46</span>
        </div>
        <div className=" text-sm text-gray-500 text-left ">My Description</div>
        <button className=" rounded-2xl ring-1 w-max ring-[#F35C7A] text-[#F35C7A] py-2 px-4 text-xs hover:bg-[#F35C7A] hover:text-white">
          Add to cart
        </button>
      </Link> */}
    </div>
  );
}
