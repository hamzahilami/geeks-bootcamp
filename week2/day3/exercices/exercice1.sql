SELECT name FROM language;
SELECT film.title, film.description, language.name AS language
FROM film
JOIN language ON film.language_id = language.language_id;


CREATE TABLE new_film (
    id INT PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,  -- Auto-incrementing primary key
    film_id INT NOT NULL,
    language_id INT NOT NULL,
    title VARCHAR(100),
    score INT CHECK (score BETWEEN 1 AND 10),
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    -- Foreign key constraints
    CONSTRAINT fk_film
        FOREIGN KEY (film_id)
        REFERENCES new_film(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_language
        FOREIGN KEY (language_id)
        REFERENCES language(language_id)
);
INSERT INTO new_film (id, name) VALUES
(101, 'The Time Traveler'),
(102, 'Ocean Secrets');
INSERT INTO customer_review (
    film_id, language_id, title, score, review_text, last_update
) VALUES
-- Review 1
(101, 1, 'Amazing Time Twist!', 9, 'Time travel plots are usually messy, but this one nailed it.', CURRENT_TIMESTAMP),

-- Review 2
(102, 2, 'Deep Dive into Mystery', 8, 'Really enjoyed the pacing and the oceanic secrets.', CURRENT_TIMESTAMP);











