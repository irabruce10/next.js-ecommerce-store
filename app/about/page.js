import styles from './about.module.scss';

export const metadata = {
  title: 'About',
};

export default function aboutPage() {
  return (
    <div className={styles.about_container}>
      <h1>About Us</h1>
      <p>
        Welcome to our e-commerce store, where we offer a wide range of products
        at competitive prices. Our mission is to provide you with the best
        shopping experience possible.
      </p>
      {/* <Image src={aboutImage} alt="About Us" width={500} height={300} /> */}
      <h2>Mission Statement</h2>
      <p>
        We are dedicated to providing high-quality products, excellent customer
        service, and a seamless shopping experience. Our team is constantly
        working on improving our offerings and expanding our product range.
      </p>
      <h2>Our Products</h2>
      <ul>
        <li>Electronics</li>
        <li>Clothing</li>
        <li>Home & Garden</li>
        <li>Books</li>
        {/* Add more products as needed */}
      </ul>
      <p>
        If you have any questions or need assistance, please don't hesitate to
        contact us.
      </p>
    </div>
  );
}
