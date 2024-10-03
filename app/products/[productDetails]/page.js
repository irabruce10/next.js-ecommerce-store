import React from 'react';
import { getProduct } from '../../database/product';
import AddToCart from '../../components/AddToCart';

export async function generateMetadata({ params }) {
  const singleProduct = getProduct(Number((await params).productDetails));
  return {
    title: `${singleProduct.name} - E-soko`,
    description: singleProduct.description,
  };
}

export default async function productDetailsPage(props) {
  const singleProduct = getProduct(Number((await props.params).productDetails));

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
        <p data-test-id="product-quantity">
          Quantity: {singleProduct.quantity}
        </p>
      </div>
      <input type="number" id="tentacles" name="tentacles" min="1" max="100" />
      <AddToCart
        increasePerClick={true}
        redirect={false}
        showQty={false}
        product={singleProduct}
      />
    </div>
  );
}
