# Design and develop an ecommerce store using Next.js. It should have the following:

-[] A Products page (where all the products are listed)

- Minimum of 4 different products
- The page should have a relevant `h1` element
- Each product (incl. product name and image) needs to be contained in an anchor element (a link) with an attribute of `data-test-id="product-<product id>"`
  - This link will lead to its single product page
- The header (described below) needs to have a link to the products page with the HTML attribute `data-test-id="products-link"`
- A page for each single product (when you click on the product it goes to this page) with ability to add a quantity to the cart
  - The single product URL needs to contain the `id` (eg. `/products/<product id>`)
  - The product name needs to be directly inside an `h1` element (it should be the only `h1`)
  - The product image needs to be in an `img` element with the HTML attribute `data-test-id="product-image"`
  - The product price (without any currency symbol or thousands separator) needs to be directly inside an element with the HTML attribute `data-test-id="product-price"`
  - The quantity input needs to have the HTML attribute `data-test-id="product-quantity"`
    - The starting quantity should be `1`
  - The add to cart button needs to have the HTML attribute `data-test-id="product-add-to-cart"`
    - Clicking this button will add the amount from the product quantity input to any quantity of this product already in the cart
      - For example, if the amount in the product quantity input is `2` and the existing quantity of this product in the cart is `3`, then after clicking the button, the quantity of this product in the cart will become `5`
  - Negative quantity values should not be possible to enter
- A Cart page (containing a list where products appear when you click on the "Add to cart" button on the single product page), which also shows the total price of all products
