# Design and develop an ecommerce store using Next.js. It should have the following:

<!-- -[] A Products page (where all the products are listed)

- [x] Minimum of 4 different products
- [x] The page should have a relevant `h1` element
- [x] Each product (incl. product name and image) needs to be contained in an anchor element (a link) with an attribute of `data-test-id="product-<product id>"`
  - [x] This link will lead to its single product page
- [x] The header (described below) needs to have a link to the products page with the HTML attribute `data-test-id="products-link"`
- [x] A page for each single product (when you click on the product it goes to this page) with ability to add a quantity to the cart
  - [x] The single product URL needs to contain the `id` (eg. `/products/<product id>`)
  - [x] The product name needs to be directly inside an `h1` element (it should be the only `h1`)
  - [x] The product image needs to be in an `img` element with the HTML attribute `data-test-id="product-image"`
  - [x] The product price (without any currency symbol or thousands separator) needs to be directly inside an element with the HTML attribute `data-test-id="product-price"`
  - [x] The quantity input needs to have the HTML attribute `data-test-id="product-quantity"`
    - [x] The starting quantity should be `1`
  - [x] The add to cart button needs to have the HTML attribute `data-test-id="product-add-to-cart"`
    - [x] Clicking this button will add the amount from the product quantity input to any quantity of this product already in the cart
      - [x] For example, if the amount in the product quantity input is `2` and the existing quantity of this product in the cart is `3`, then after clicking the button, the quantity of this product in the cart will become `5`
  - [x] Negative quantity values should not be possible to enter
- [x] A Cart page (containing a list where products appear when you click on the "Add to cart" button on the single product page), which also shows the total price of all products
 -->

# Technologies

### Next.js

### Postgres.js

### Jest

### Playwright

# Database Setup

If you don't have PostgreSQL installed yet, follow the instructions from the PostgreSQL step in UpLeveled's System Setup Instructions.

Copy the .env.example file to a new file called .env (ignored from Git) and fill in the necessary information.

Then, connect to the built-in postgres database as administrator in order to create the database:

# Windows

If it asks for a password, use postgres.

psql -U postgres

# macOS

psql postgres

# Linux

sudo -u postgres psql

Once you have connected, run the following to create the database:

CREATE DATABASE <database name>;
CREATE USER <user name> WITH ENCRYPTED PASSWORD '<user password>';
GRANT ALL PRIVILEGES ON DATABASE <database name> TO <user name>;
\connect <database name>
CREATE SCHEMA <schema name> AUTHORIZATION <user name>;
Quit psql using the following command:

\q
On Linux, it is best practice to create an operating system user for each database, to ensure that the operating system user can only access the single database and no other system resources. A different password is needed on Linux because passwords of operating system users cannot contain the user name. First, generate a random password and copy it:

openssl rand -hex 16
Then create the user, using the database user name from the previous section above. When you are prompted to create a password for the user, paste in the generated password.

sudo adduser <user name>
Once you're ready to use the new user, reconnect using the following command.

# Windows and macOS:

psql -U <user name> <database name>

# Linux:

sudo -u <user name> psql -U <user name> <database name>

# Run Tests

# Jest

pnpm jest

# Playwright

pnpm playwright test
