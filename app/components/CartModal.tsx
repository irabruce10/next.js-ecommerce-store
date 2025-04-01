import React from 'react';
import Image from 'next/image';

export default function CartModal() {
  const cartItems = true;
  return (
    <div className="absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div className=""> Cart is Empty </div>
      ) : (
        <div className="">
          {/* <Image
            src="https://www.pexels.com/photo/baby-rompers-on-hangers-under-a-shelf-with-framed-pictures-and-an-old-camera-19265679/"
            alt=""
            className=" object-cover rounded-md"
            width={72}
            height={93}
          /> */}

          <Image
            src="https://images.pexels.com/photos/31224767/pexels-photo-31224767.jpeg"
            alt="Baby rompers"
            width={100}
            height={90}
            className=" object-cover rounded-md"
          />
          <div className="">
            {/* TOP */}

            <div>
              <h3>Prduct Name</h3>
              <div>49</div>
            </div>

            {/* bottom */}
          </div>
        </div>
      )}
    </div>
  );
}
