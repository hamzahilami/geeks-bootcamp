CREATE TABLE students(
student_id SERIAL PRIMARY KEY,
 first_name VARCHAR (50) NOT NULL,
 last_name VARCHAR (100) NOT NULL,
 birth_date DATE NOT NULL
);

INSERT INTO students (first_name, last_name, birth_date)
VALUES
    ('Marc', 'Benichou', '1998-11-02'),
    ('Yoan', 'Cohen', '2010-12-03'),
    ('Lea', 'Benichou', '1987-07-27'),
    ('Amelia', 'Dux', '1996-04-07'),
    ('David', 'Grez', '2003-06-14'),
    ('Omer', 'Simpson', '1980-10-03');
    ('hamza', 'hilami', '2002-02-26');


SELECT * FROM students;
SELECT first_name,last_name FROM students;
SELECT first_name,last_name FROM students;
SELECT first_name,last_name FROM students WHERE student_id =2;
SELECT first_name,last_name FROM students WHERE first_name = 'Marc' and last_name = 'Benichou';
SELECT first_name,last_name FROM students WHERE first_name = 'Marc' or last_name = 'Benichou';
SELECT first_name,last_name FROM students WHERE first_name LIKE '%a%';
SELECT first_name,last_name FROM students WHERE LOWER(first_name) LIKE 'a%';
SELECT first_name,last_name FROM students WHERE LOWER(first_name) LIKE '%a_';
SELECT first_name,last_name FROM students WHERE student_id =1 or student_id =3;
SELECT * FROM students WHERE birth_date >= '2000-01-01';



