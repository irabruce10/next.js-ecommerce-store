import React from 'react';
import { getProduct } from '../../database/product';

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
        <h2>{singleProduct.name}</h2>
        <img
          src={singleProduct.image}
          alt={singleProduct.title}
          width={300}
          height={300}
        />
        <p>{singleProduct.description}</p>
        <p>Price: {singleProduct.price}</p>
        <p>Rating: {singleProduct.rating.rate}</p>
        <p>Quantity: {singleProduct.quantity}</p>
      </div>
    </div>
  );
}
