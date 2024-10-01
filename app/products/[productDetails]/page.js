import React from 'react';
import { getProduct } from '../../database/product';

export default async function productDetailsPage(props) {
  const singleProduct = getProduct(Number((await props.params).productDetails));
  return (
    <div>
      productDetails Page
      <div>
        <h2>{singleProduct.title}</h2>
        <img
          src={singleProduct.image}
          alt={singleProduct.title}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
