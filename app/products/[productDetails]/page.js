import { getProductInsecure } from '../../database/product';
import AddToCart from '../../components/AddToCart';
import styles from './productDetail.module.scss';

// import { cookies } from 'next/headers';

export async function generateMetadata({ params }) {
  const singleProduct = await getProductInsecure(
    Number((await params).productDetails),
  );

  return {
    title: `${singleProduct.name} - E-soko`,
    description: singleProduct.description,
  };
}

export default async function productDetailsPage(props) {
  const singleProduct = await getProductInsecure(
    Number((await props.params).productDetails),
  );

  return (
    <div className={styles.productDetail_container}>
      <h1> Product Details</h1>
      <div className={styles.productDetail_card}>
        <div className={styles.aside1}>
          <img
            src={singleProduct.image}
            alt={singleProduct.name}
            width={400}
            height={550}
            data-test-id="product-image"
          />
        </div>

        <div className={styles.aside2}>
          <h1>{singleProduct.name}</h1>
          <p className={styles.price} data-test-id="product-price">
            Price: € {singleProduct.price}
          </p>
          <p className={styles.description}>{singleProduct.description}</p>
          {/* <p>Rating: {singleProduct.rating.rate}</p> */}
          <AddToCart
            // increasePerClick={true}
            // showQty={false}
            product={singleProduct}
            productId={singleProduct.id}
            productQty={singleProduct.countInStock}
            pro={singleProduct.quantity}
            redirect={false}
          />
        </div>
      </div>
    </div>
  );
}
