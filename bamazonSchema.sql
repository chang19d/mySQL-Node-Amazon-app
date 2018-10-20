DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("lip balm", "beauty", 12, 28);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("mascara", "beauty", 10, 21);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("hammock", "camping", 40, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("tent", "camping", 55, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("macbook pro", "electronics", 1200, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("smart tv", "electronics", 200, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("creatine", "nutrition", 25, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("whey protein", "nutrition", 20, 14);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("flashlight", "utilities", 10, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("hammer", "utilities", 8, 20);







