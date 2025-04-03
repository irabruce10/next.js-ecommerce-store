import type { Sql } from 'postgres';

const products = [
  {
    id: 1,
    name: 'Fjallraven - Foldsack No. 1 Backpack ',
    price: 109.95,

    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: 'men_s clothing',
    image:
      'https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imagesec:
      'https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',

    quantity: 1,
    countInStock: 10,
  },
  {
    id: 2,
    name: 'Mens Casual Premium Slim Fit T-Shirts ',
    price: 22.3,

    description:
      'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.',
    category: 'men_s clothing',
    image:
      'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    imagesec:
      'https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',

    quantity: 1,
    countInStock: 8,
  },
  {
    id: 3,
    name: 'Mens Cotton Jacket',
    price: 55.99,

    description:
      'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors.',
    category: 'men_s clothing',
    image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    imagesec:
      'https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quantity: 1,
    countInStock: 10,
  },
  {
    id: 4,
    name: 'Mens Casual Slim Fit',
    price: 15.99,
    description:
      'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below',
    category: 'men_s clothing',
    image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    imagesec:
      'https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quantity: 1,
    countInStock: 5,
  },
  {
    id: 5,
    name: "John Hardy Women's Legends Naga Gold & Silver ",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance",
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
    imagesec:
      'https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quantity: 1,
    countInStock: 0,
  },
  {
    id: 6,
    name: 'Solid Gold Petite Micropave ',
    price: 168,
    description:
      'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
    imagesec:
      'https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quantity: 1,
    countInStock: 1,
  },
  {
    id: 7,
    name: 'White Gold Plated Princess',
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
    imagesec:
      'https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quantity: 1,
    countInStock: 3,
  },
  {
    id: 8,
    name: 'Pierced Owl Rose Gold Plated Stainless Steel',
    price: 10.99,
    description:
      'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel',
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
    imagesec:
      'https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quantity: 1,
    countInStock: 14,
  },
  {
    id: 9,
    name: 'WD 2TB Elements Portable External Hard Drive ',
    price: 64,
    description:
      'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7 ',
    category: 'electronics',
    image:
      'https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imagesec:
      'https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quantity: 1,
    countInStock: 4,
  },
  {
    id: 10,
    name: 'SanDisk SSD PLUS 1TB Internal SSD ',
    price: 109,
    description:
      'Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) ',
    category: 'electronics',
    image: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
    imagesec:
      'https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quantity: 1,
    countInStock: 0,
  },
];

// type Product = {
//   id: number;
//   name: string;
//   price: string;
//   description: string;
//   category: string | null;
//   image: string;
//   quantity: number;
//   countInStock: number | null;
// };

export async function up(sql: Sql) {
  for (const product of products) {
    await sql`
      INSERT INTO
        products (
          name,
          price,
          description,
          category,
          image,
          imagesec,
          quantity,
          count_in_stock
        )
      VALUES
        (
          ${product.name},
          ${product.price},
          ${product.description},
          ${product.category},
          ${product.image},
          ${product.imagesec},
          ${product.quantity},
          ${product.countInStock}
        )
    `;
  }
}

export async function down(sql: Sql) {
  for (const product of products) {
    await sql`
      DELETE FROM products
      WHERE
        id = ${product.id}
    `;
  }
}
