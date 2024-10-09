import { getProduct } from '../../database/product';
import AddToCart from '../../components/AddToCart';
import { parseJson } from '../../../lib/json';
import { getCookie } from '../../../lib/cookies';
import { cookies } from 'next/headers';

// import { cookies } from 'next/headers';

export async function generateMetadata({ params }) {
  const singleProduct = getProduct(Number((await params).productDetails));
  return {
    title: `${singleProduct.name} - E-soko`,
    description: singleProduct.description,
  };
}

export default async function productDetailsPage(props) {
  const singleProduct = getProduct(Number((await props.params).productDetails));
  console.log(singleProduct);

  return (
    <div>
      productDetails Page
      <div>
        <h1>{singleProduct.name}</h1>
        <img
          src={singleProduct.image}
          alt={singleProduct.title}
          width={300}
          height={300}
          data-test-id="product-image"
        />
        <p>{singleProduct.description}</p>
        <p data-test-id="product-price">Price: {singleProduct.price}</p>
        <p>Rating: {singleProduct.rating.rate}</p>
      </div>
      <AddToCart
        // increasePerClick={true}
        // showQty={false}
        product={singleProduct}
        productId={singleProduct.id}
        redirect={false}
      />
    </div>
  );
}
