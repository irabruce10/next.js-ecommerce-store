import { getProduct } from '../../database/product';
import AddToCart from '../../components/AddToCart';
import { getCookie } from '../../../lib/cookies';
import { parseJson } from '../../../lib/json';

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

  const fruitCommentsCookie = await getCookie('cart');

  let fruitComments = parseJson(fruitCommentsCookie) || [];
  console.log(fruitComments);

  if (!Array.isArray(fruitComments)) {
    fruitComments = [];
  }
  const fruitCommentToDisplay = fruitComments.find((fruitComment) => {
    return fruitComment.id === singleProduct.id;
  });

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
        redirect={false}
      />
    </div>
  );
}
