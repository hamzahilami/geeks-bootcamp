SELECT rating, COUNT(*) AS film_count
FROM film
GROUP BY rating;

SELECT title, rating
FROM film
WHERE rating IN ('G', 'PG-13');

SELECT title, rating, length, rental_rate
FROM film
WHERE rating IN ('G', 'PG-13')
  AND length < 120
  AND rental_rate < 3.00
ORDER BY title ASC;


UPDATE customer
SET first_name = 'YourFirstName',
    last_name = 'YourLastName',
    email = 'your.email@example.com'
WHERE customer_id = 1;


UPDATE address
SET address = '1234 Cozy Lane',
    address2 = 'Apt B',
    district = 'Dreamville',
    city_id = 300,  -- Make sure this exists in the `city` table
    postal_code = '12345',
    phone = '555-123-4567'
WHERE address_id = 5;
