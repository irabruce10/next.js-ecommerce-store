import type { Sql } from 'postgres';

const products: Product[] = [
  {
    id: 1,
    name: 'Fjallraven - Foldsack No. 1 Backpack ',
    price: 109.95,

    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: 'bags',
    image: [
      'https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/12123466/pexels-photo-12123466.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/11773705/pexels-photo-11773705.jpeg?auto=compress&cs=tinysrgb&w=600',

      'https://images.pexels.com/photos/12123466/pexels-photo-12123466.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/31391382/pexels-photo-31391382/free-photo-of-tattooed-woman-relaxing-in-urban-setting.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],

    quantity: 1,
    countInStock: 10,
    choices: {
      colors: ['Black', 'Gold'],
      sizes: ['Small', 'Medium', 'Large'],
      stock: 1,
    },
  },

  {
    id: 2,
    name: 'Mens Casual Premium Slim Fit T-Shirts ',
    price: 22.3,

    description:
      'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.',
    category: 'T-Shirts',
    image: [
      'https://images.pexels.com/photos/3799283/pexels-photo-3799283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3799648/pexels-photo-3799648.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      'https://images.pexels.com/photos/3799246/pexels-photo-3799246.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      'https://images.pexels.com/photos/3799268/pexels-photo-3799268.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    ],

    quantity: 1,
    countInStock: 8,
    choices: {
      colors: ['Black', 'Navy', 'White'],
      sizes: ['Medium', 'XLarge'],
      stock: 2,
    },
  },
  {
    id: 3,
    name: 'Mens Cotton Jacket',
    price: 55.99,

    description:
      'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors.',
    category: 'jacket',
    image: [
      'https://images.pexels.com/photos/20627154/pexels-photo-20627154/free-photo-of-part-of-a-mans-body-holding-hands-on-his-chest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/13662420/pexels-photo-13662420.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      'https://images.pexels.com/photos/16428589/pexels-photo-16428589/free-photo-of-denim-jacket-with-pockets.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      'https://images.pexels.com/photos/19419813/pexels-photo-19419813/free-photo-of-denim-jacket-and-shirt.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    ],
    quantity: 1,
    countInStock: 10,
    choices: {
      colors: ['Black', 'Blue', 'Green', 'Yellow'],
      sizes: ['Small', 'Medium', 'XLarge'],
      stock: 4,
    },
  },
  {
    id: 4,
    name: 'Basic Cotton Pullover',
    price: 15.0,
    description:
      'Classic  Pullover made from 100% cotton. Comfortable, breathable, and perfect for layering or everyday wear.',
    category: 'T-Shirts',
    image: [
      'https://images.pexels.com/photos/6995880/pexels-photo-6995880.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/6995898/pexels-photo-6995898.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/7691251/pexels-photo-7691251.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/6996067/pexels-photo-6996067.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    quantity: 1,
    countInStock: 20,
    choices: {
      colors: ['Beige', 'Maroon'],
      sizes: ['Small', 'Medium'],
      stock: 3,
    },
  },
  {
    id: 5,
    name: "John Hardy Women's Legends Naga Gold & Silver ",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance",
    category: 'jewelery',
    image: [
      'https://images.pexels.com/photos/8184250/pexels-photo-8184250.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/8182269/pexels-photo-8182269.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/7130033/pexels-photo-7130033.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/8182311/pexels-photo-8182311.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    ],
    quantity: 1,
    countInStock: 0,
    choices: {
      colors: ['Black', 'Navy'],
      sizes: ['Small', 'Medium'],
      stock: 5,
    },
  },
  {
    id: 6,
    name: 'Mens Casual pant ',
    price: 168,
    description:
      'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
    category: 'pant',
    image: [
      'https://images.pexels.com/photos/5369429/pexels-photo-5369429.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      'https://images.pexels.com/photos/5369409/pexels-photo-5369409.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      'https://images.pexels.com/photos/5369439/pexels-photo-5369439.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      'https://images.pexels.com/photos/5369416/pexels-photo-5369416.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    ],
    quantity: 1,
    countInStock: 1,
    choices: {
      colors: ['Yellow', 'Navy'],
      sizes: ['Small', 'Medium'],
      stock: 5,
    },
  },
  {
    id: 7,
    name: 'WD 2TB Elements Portable External Hard Drive ',
    price: 64,
    description:
      'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7 ',
    category: 'electronics',
    image: [
      'https://images.pexels.com/photos/2942361/pexels-photo-2942361.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/27691024/pexels-photo-27691024/free-photo-of-home-studio-equipment-data-storage-backup.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/15882042/pexels-photo-15882042/free-photo-of-portable-laptop-power-bank.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/20076002/pexels-photo-20076002/free-photo-of-portable-hard-disk.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    quantity: 1,
    countInStock: 4,
    choices: {
      colors: ['red', 'Navy'],
      sizes: ['Small', 'Medium'],
      stock: 5,
    },
  },
  {
    id: 8,
    name: 'White Dress Princess',
    price: 499.99,
    description:
      'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel',
    category: 'jewelery',
    image: [
      'https://images.pexels.com/photos/157757/wedding-dresses-fashion-character-bride-157757.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/2085521/pexels-photo-2085521.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=279.825&fit=crop&h=453.05',
      'https://images.pexels.com/photos/291738/pexels-photo-291738.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/291759/pexels-photo-291759.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    quantity: 1,
    countInStock: 14,
    choices: {
      colors: ['White', 'Navy'],
      sizes: ['Small', 'Medium'],
      stock: 5,
    },
  },

  {
    id: 10,
    name: 'SanDisk SSD PLUS 1TB Internal SSD ',
    price: 109,
    description:
      'Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) ',
    category: 'electronics',
    image: [
      'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
      'https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/18166725/pexels-photo-18166725/free-photo-of-memory-cards.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/11185190/pexels-photo-11185190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],

    quantity: 1,
    countInStock: 0,
    choices: {
      colors: ['Black'],
      sizes: ['1T', '512G', '256G', '128'],
      stock: 5,
    },
  },

  {
    id: 11,
    name: 'Leather Handbag - Classic Style',
    price: 89.99,
    description:
      'Elegant and timeless leather handbag perfect for daily use or formal events. Spacious and durable with multiple compartments.',
    category: 'bags',
    image: [
      'https://images.pexels.com/photos/842959/pexels-photo-842959.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      'https://images.pexels.com/photos/2452345/pexels-photo-2452345.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      'https://images.pexels.com/photos/9321607/pexels-photo-9321607.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      'https://images.pexels.com/photos/2263819/pexels-photo-2263819.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    ],
    quantity: 1,
    countInStock: 7,
    choices: {
      colors: ['Black', 'Navy'],
      sizes: ['Small', 'Medium'],
      stock: 5,
    },
  },
  {
    id: 12,
    name: 'Canvas Tote Bag - Eco Friendly',
    price: 29.95,
    description:
      'Lightweight and durable canvas tote bag made from eco-friendly materials. Ideal for groceries, beach days, or everyday errands.',
    category: 'bags',
    image: [
      'https://images.pexels.com/photos/1094084/pexels-photo-1094084.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1486838/pexels-photo-1486838.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1036744/pexels-photo-1036744.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1667586/pexels-photo-1667586.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    quantity: 1,
    countInStock: 15,
    choices: {
      colors: ['Black', 'Navy'],
      sizes: ['Small', 'Medium'],
      stock: 5,
    },
  },
];

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string | null;
  image: string;
  quantity: number;
  countInStock: number | null;
  choices: {
    colors: string[];
    sizes: string[];
    stock: number;
  };
};

export async function up(sql: Sql) {
  for (const product of products) {
    const [productRow] = await sql`
      INSERT INTO
        products (
          name,
          price,
          description,
          category,
          images,
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
          ${product.quantity},
          ${product.countInStock}
        )
      RETURNING
        id
    `;

    // const productId = productRow?.id;

    for (const color of product.choices.colors) {
      for (const size of product.choices.sizes) {
        await sql`
          INSERT INTO
            choices (
              product_id,
              color,
              size,
              stock
            )
          VALUES
            (
              ${productRow?.id},
              ${color},
              ${size},
              ${product.choices.stock}
            )
        `;
      }
    }
  }
}

export async function down(sql: Sql) {
  for (const product of products) {
    await sql`
      DELETE FROM products
      WHERE
        id = ${product.id}
    `;
    await sql`
      DELETE FROM choices
      WHERE
        product_id = ${product.id}
    `;
  }
}
