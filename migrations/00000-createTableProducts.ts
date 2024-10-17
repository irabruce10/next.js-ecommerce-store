import type { Sql } from 'postgres';

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE products (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      name varchar(50) NOT NULL,
      price numeric CHECK (price > 0) NOT NULL,
      description varchar(250) NOT NULL,
      category varchar(250),
      image varchar(250) NOT NULL,
      quantity integer NOT NULL,
      count_in_stock integer
    );
  `;
}

export async function down(sql: Sql) {
  await sql` DROP TABLE products; `;
}
