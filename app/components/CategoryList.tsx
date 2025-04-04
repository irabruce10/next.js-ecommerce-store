import Link from 'next/link';
import Image from 'next/image';
import { getProductsInsecure } from '../database/product';

export default async function CategoryList() {
  const category = await getProductsInsecure();

  return (
    <div className=" px-4 overflow-x-scroll scrollbar-hide   ">
      <div className=" flex gap-4 md:gap-8">
        <Link
          // href="/list?category=test"
          href={`/list`}
          className=" flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6  "
        >
          <div className=" relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className=" mt-8  font-light text-xl tracking-wide">
            All Products
          </h1>
        </Link>
        {category.map((cat) => (
          <Link
            // href="/list?category=test"
            href={`/list?cat=${cat?.category}`}
            className=" flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6  "
            key={cat.id}
          >
            <div className=" relative bg-slate-100 w-full h-96">
              <Image
                src={cat?.images[2] ?? ''}
                alt=""
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>
            <h1 className=" mt-8  font-light text-xl tracking-wide">
              {cat?.category}
            </h1>
          </Link>
        ))}

        {/* <Link
          href="/list?category"
          className=" flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6  "
        >
          <div className=" relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/31224767/pexels-photo-31224767.jpeg"
              alt=""
              sizes="20vw"
              fill
              className="object-cover"
            />
          </div>
          <h1 className=" mt-8  font-light text-center tracking-wide">
            Category name
          </h1>
        </Link>

        <Link
          href="/list?category"
          className=" flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6  "
        >
          <div className=" relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/31224767/pexels-photo-31224767.jpeg"
              alt=""
              sizes="20vw"
              fill
              className="object-cover"
            />
          </div>
          <h1 className=" mt-8  font-light text-center tracking-wide">
            Category name
          </h1>
        </Link>

        <Link
          href="/list?category"
          className=" flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6  "
        >
          <div className=" relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/31224767/pexels-photo-31224767.jpeg"
              alt=""
              sizes="20vw"
              fill
              className="object-cover"
            />
          </div>
          <h1 className=" mt-8  font-light text-center tracking-wide">
            Category name
          </h1>
        </Link>

        <Link
          href="/list?category"
          className=" flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6  "
        >
          <div className=" relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/31224767/pexels-photo-31224767.jpeg"
              alt=""
              sizes="20vw"
              fill
              className="object-cover"
            />
          </div>
          <h1 className=" mt-8  font-light text-center tracking-wide">
            Category name
          </h1>
        </Link>
        <Link
          href="/list?category"
          className=" flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6  "
        >
          <div className=" relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/31224767/pexels-photo-31224767.jpeg"
              alt=""
              sizes="20vw"
              fill
              className="object-cover"
            />
          </div>
          <h1 className=" mt-8  font-light text-center tracking-wide">
            Category name
          </h1>
        </Link>

        <Link
          href="/list?category"
          className=" flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6  "
        >
          <div className=" relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/31224767/pexels-photo-31224767.jpeg"
              alt=""
              sizes="20vw"
              fill
              className="object-cover"
            />
          </div>
          <h1 className=" mt-8  font-light text-center tracking-wide">
            Category name
          </h1>
        </Link> */}
      </div>
    </div>
  );
}
