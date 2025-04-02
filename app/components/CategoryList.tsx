import Link from 'next/link';
import Image from 'next/image';

export default function CategoryList() {
  return (
    <div className=" px-4 overflow-x-scroll scrollbar-hide   ">
      <div className=" flex gap-4 md:gap-8">
        <Link
          href="/list?category=test"
          className=" flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6  "
        >
          <div className=" relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/31224767/pexels-photo-31224767.jpeg"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className=" mt-8  font-light text-xl tracking-wide">
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
      </div>
    </div>
  );
}
