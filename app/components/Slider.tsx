'use client';

import Link from 'next/link';
import { useState } from 'react';

const slides = [
  {
    id: 1,
    title: 'Summer Sale Collections',
    description: 'Sale! Up to 50% off!',
    img: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: '/',
    bg: 'bg-gradient-to-r from-yellow-50 to-pink-50',
  },
  {
    id: 2,
    title: 'Winter Sale Collections',
    description: 'Sale! Up to 50% off!',
    img: 'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: '/',
    bg: 'bg-gradient-to-r from-pink-50 to-blue-50',
  },
  {
    id: 3,
    title: 'Spring Sale Collections',
    description: 'Sale! Up to 50% off!',
    img: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: '/',
    bg: 'bg-gradient-to-r from-blue-50 to-yellow-50',
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);
  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div className="w-max h-full flex transition-all ease-in-out duration-1000">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`w-full h-full relative ${current === index ? 'opacity-100' : 'opacity-0'} ${slide.bg}`}
          >
            {/* text */}
            <div className="">
              <h2>{slide.description}</h2>
              <h1>{slide.title}</h1>
              <Link
                href={slide.url}
                className=" font-semibold py-4 px-8 rounded-md"
              >
                <button>Shop Now</button>
              </Link>
            </div>

            {/* image */}
            <div className="flex justify-center items-center h-full">
              <img
                src={slide.img}
                alt={slide.title}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
