CREATE TABLE items (
  item_id SERIAL PRIMARY KEY,
  item_name VARCHAR(50) NOT NULL,
  price FLOAT NOT NULL
);

INSERT INTO items (item_name, price)
VALUES
  ('Small Desk', 100),
  ('Large desk', 300),
  ('fan', 80);

CREATE TABLE customers (
  customers_id SERIAL PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL
);

INSERT INTO customers (first_name, last_name)
VALUES
  ('greg', 'jones'),
  ('sandra', 'jones'),
  ('scott', 'scott'),
  ('trevor', 'green');



SELECT * FROM items;
SELECT * FROM customers;
SELECT * FROM items where price > 80;
SELECT * FROM items where price <= 300;
SELECT * FROM customers where last_name = 'Smith';
SELECT * FROM customers where last_name = 'jones';
SELECT * FROM customers where first_name != 'scott';




  
