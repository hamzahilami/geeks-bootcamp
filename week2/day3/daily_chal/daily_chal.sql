-- 
-- part1 
-- 

CREATE TABLE Customer (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL
);


CREATE TABLE Customer_profile (
    id SERIAL PRIMARY KEY,
    isLoggedIn BOOLEAN DEFAULT false,
    customer_id INTEGER UNIQUE NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES Customer(id)
);

INSERT INTO Customer (first_name, last_name) VALUES
('John', 'Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive');


INSERT INTO Customer_profile (isLoggedIn, customer_id)
VALUES (true, (SELECT id FROM Customer WHERE first_name = 'John'));


INSERT INTO Customer_profile (isLoggedIn, customer_id)
VALUES (false, (SELECT id FROM Customer WHERE first_name = 'Jerome'));

SELECT Customer.first_name
FROM Customer
INNER JOIN Customer_profile ON Customer.id = Customer_profile.customer_id
WHERE Customer_profile.isLoggedIn = true;

SELECT Customer.first_name, 
       CASE WHEN Customer_profile.isLoggedIn IS NULL THEN false 
            ELSE Customer_profile.isLoggedIn 
       END AS isLoggedIn
FROM Customer
LEFT JOIN Customer_profile ON Customer.id = Customer_profile.customer_id;

SELECT COUNT(*) AS number_of_customers_not_logged_in
FROM Customer
LEFT JOIN Customer_profile ON Customer.id = Customer_profile.customer_id
WHERE Customer_profile.isLoggedIn = false OR Customer_profile.id IS NULL;




-- 
-- part 2
-- 

CREATE TABLE Book (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    author VARCHAR(100) NOT NULL
);

INSERT INTO Book (title, author) VALUES
('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee');

CREATE TABLE Student (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    age INTEGER CHECK (age <= 15)
);


INSERT INTO Student (name, age) VALUES
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14);


CREATE TABLE Library (
    book_fk_id INTEGER REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
    student_fk_id INTEGER REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
    borrowed_date DATE,
    PRIMARY KEY (book_fk_id, student_fk_id)
);



