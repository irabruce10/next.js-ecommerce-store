import {
  getProductInsecure,
  getProductInsecures,
} from '../../database/product';
import AddToCart from '../../components/AddToCart';
import styles from './productDetail.module.scss';
import CustomizeProduct from '../../components/CustomizeProduct';
import Add from '../../components/Add';
import ProductImages from '../../components/ProductImages';

// import { cookies } from 'next/headers';
type Props = {
  params: Promise<{
    productDetails: string;
    name: string;
  }>;
};
export async function generateMetadata(props: Props) {
  const singleProduct = await getProductInsecure(
    Number((await props.params).productDetails),
  );

  // const singleProduct = (await props.params).productDetails;

  return {
    title: `${singleProduct?.name} - E-soko`,
    description: singleProduct?.description,

    // title: `Product ${singleProduct} - E-soko`,
    // description: `productDetails${singleProduct}`,
  };
}

export default async function productDetailsPage(props: Props) {
  const product = await getProductInsecures(
    Number((await props.params).productDetails),
  );

  console.log('pro oage', product);

  return (
    <div className=" text-left px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* Image  */}
      <div className=" w-full  lg:w-1/2 lg:sticky top-20 h-max ">
        <ProductImages images={product?.images || []} />
      </div>
      {/* text */}
      <div className=" w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className=" text-4xl font-medium ">{product?.name}</h1>
        <p className=" text-gray-500">{product?.description}</p>
        <div className=" h-[2px] bg-gray-100" />
        <div className=" flex items-center gap-4">
          <h3 className=" text-xl text-gray-500 line-through">€200</h3>
          <h2 className=" font-medium text-2xl">€{product?.price}</h2>
        </div>
        <div className=" h-[2px] bg-gray-100" />

        {product?.colors && product?.sizes ? (
          <CustomizeProduct
            colors={product?.colors}
            sizes={product?.sizes}
            stock={product?.stock}
            product={product}
          />
        ) : (
          <Add
            colors={product?.colors}
            sizes={product?.sizes}
            stock={product?.stock}
            product={product}
            productId={product?.productId}
          />
        )}

        <div className=" h-[2px] bg-gray-100" />
        <div className=" text-sm  ">
          <h4 className="mb-4 font-medium">Title</h4>
          <p>{product?.description}</p>
        </div>

        <div className=" text-sm  ">
          <h4 className="mb-4 font-medium">Title</h4>
          <p>{product?.description}</p>
        </div>

        <div className=" text-sm  ">
          <h4 className="mb-4 font-medium">Title</h4>
          <p>{product?.description}</p>
        </div>
      </div>
    </div>
  );
}
