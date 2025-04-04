'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const image = [
  {
    id: '1',
    url: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg',
    alt: 'Product 1',
  },
  {
    id: '2',
    url: 'https://images.pexels.com/photos/31303658/pexels-photo-31303658/free-photo-of-serene-woman-sitting-by-green-water.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    alt: 'Product 2',
  },
  {
    id: '3',
    url: 'https://images.pexels.com/photos/31197584/pexels-photo-31197584/free-photo-of-elegant-portrait-of-young-woman-in-flowing-gown.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    alt: 'Product 3',
  },
  {
    id: '4',
    url: 'https://images.pexels.com/photos/31278457/pexels-photo-31278457/free-photo-of-cozy-autumn-portrait-of-woman-in-knit-sweater.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    alt: 'Product 4',
  },
];

type ProductImagesProps = {
  images: string[]; // Explicitly expect string[]
};
export default function ProductImages({ images }: { images: string[] }) {
  console.log('Product image', images);
  const [index, setIndex] = useState(0);

  const image = [
    {
      id: '1',
      url: images[0],
      alt: 'Product 1',
    },
    {
      id: '2',
      url: images[1],
      alt: 'Product 2',
    },
    {
      id: '3',
      url: images[2],
      alt: 'Product 3',
    },
    {
      id: '4',
      url: images[3],
      alt: 'Product 4',
    },
  ];

  console.log(image);

  return (
    <div className="">
      <div className=" h-[500px] relative">
        <Image
          src={image[index]?.url ?? '/path/to/placeholder/image.jpg'}
          alt=""
          fill
          className=" object-cover rounded-md"
          sizes="50vw"
        />
      </div>
      <div className=" flex justify-between gap-4 mt-8 cursor-pointer ">
        {image.map((img, index) => (
          <div
            key={img.id}
            className=" w-1/4 h-32 relative gap-4 mt-8"
            onClick={() => setIndex(index)}
          >
            <Image
              src={img.url ?? '/path/to/placeholder/image.jpg'}
              alt=""
              fill
              className=" object-cover rounded-md"
              sizes="30vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
