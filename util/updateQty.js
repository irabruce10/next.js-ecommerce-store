// type Product = {
//   id: number;
//   quantity: number;
// };
export default function createOrUpdateCookie(productId, quantity) {
  const products = [productId, quantity];
  const updateProductCookie = products.find((product) => {
    return product.id === productId;
  });

  if (!updateProductCookie) {
    products.push({ id: productId, quantity: quantity });
  } else {
    updateProductCookie.quantity += quantity;
  }

  return products;
}
