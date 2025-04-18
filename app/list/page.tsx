import Image from 'next/image';
import Filter from '../components/Filter';
import ProductList from '../components/ProductList';
import ProductByCategory from '../components/ProductByCategory';
import { getAllProductByCategoryInsecure } from '../database/product';
import { useSearchParams } from 'next/navigation';

export default async function Listpage({
  searchParams,
}: {
  searchParams: any;
}) {
  // const categoryId = await getAllProductByCategoryInsecure(searchParams.cat);

  const { cat, min, max, sort } = searchParams;
  console.log('Search Params: ', searchParams);

  const { products, categoryId } = await getAllProductByCategoryInsecure(cat, {
    minPrice: min ? Number(min) : undefined,
    maxPrice: max ? Number(max) : undefined,
    sort: sort || undefined,
  });

  console.log('Category Id filter: ', categoryId);

  console.log('maxPrice: ' + max + ' minPrice: ' + min);
  return (
    <div className="  px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* campaign*/}
      <div className=" hidden sm:flex bg-pink-50 px-4  justify-between h-64">
        <div className=" w-2/3 flex flex-col items-center justify-center gap-8 ">
          <h1 className=" text-4xl font-semibold leading-[48px] text-gray-700">
            Grab Up to 50% off on
            <br /> Selected Products
          </h1>
          <button className=" rounded-3xl bg-[#F35C7A] w-max py-3 px-5 text-sm ">
            Buy Now
          </button>
        </div>
        <div className="relative w-1/3">
          <Image src="/woman.png" fill alt="" className=" object-contain" />
        </div>
      </div>

      {/* Filter */}
      <Filter categoryId={categoryId} />
      {/* Products */}
      <h1 className=" mt-12 text-xl font-semibold text-left capitalize ">
        {searchParams.cat}
      </h1>
      {/* <ProductList categoryId={categoryId} /> */}

      <ProductByCategory categoryId={categoryId} products={products} />
    </div>
  );
}
