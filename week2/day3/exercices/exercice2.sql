SELECT * FROM language;

UPDATE film
SET language_id = 5  
WHERE title IN ('Airport Pollock', 'Bright Encounters');
SELECT film_id, title, language_id
FROM film
WHERE title IN ('Airport Pollock', 'Bright Encounters');
SELECT * FROM film;


-- it's need extra checking cuz we have some foring keys  Dependencies but 
-- but we can use  IF EXISTS to be safe

DROP TABLE IF EXISTS customer_review CASCADE;

SELECT COUNT(*) AS outstanding_rentals
FROM rental
WHERE return_date IS NULL;
SELECT 
    film.film_id,
    film.title,
    film.rental_rate,
    rental.rental_date,
    customer.first_name || ' ' || customer.last_name AS customer_name
FROM rental
JOIN inventory ON rental.inventory_id = inventory.inventory_id
JOIN film ON inventory.film_id = film.film_id
JOIN customer ON rental.customer_id = customer.customer_id
WHERE rental.return_date IS NULL
ORDER BY film.rental_rate DESC
LIMIT 30;

SELECT DISTINCT film.title, film.description
FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE actor.first_name = 'Penelope' AND actor.last_name = 'Monroe'
  AND (film.description ILIKE '%sumo%' OR film.title ILIKE '%sumo%' OR film.description ILIKE '%wrestler%' OR film.title ILIKE '%wrestler%');


SELECT film.title, film.length, film.rating
FROM film
JOIN film_category ON film.film_id = film_category.film_id
JOIN category ON film_category.category_id = category.category_id
WHERE category.name = 'Documentary'
  AND film.length < 60
  AND film.rating = 'R';


SELECT DISTINCT film.title, payment.amount, rental.return_date
FROM payment
JOIN customer ON payment.customer_id = customer.customer_id
JOIN rental ON payment.rental_id = rental.rental_id
JOIN inventory ON rental.inventory_id = inventory.inventory_id
JOIN film ON inventory.film_id = film.film_id
WHERE customer.first_name = 'Matthew' AND customer.last_name = 'Mahan'
  AND payment.amount > 4.00
  AND rental.return_date BETWEEN '2005-07-28' AND '2005-08-01';










