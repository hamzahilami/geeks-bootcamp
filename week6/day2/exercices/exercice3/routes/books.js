const express = require('express');
const router = express.Router();

let books = [{ id: 1, title: "1984", author: "George Orwell" },
{ id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
{ id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
{ id: 4, title: "Pride and Prejudice", author: "Jane Austen" },
{ id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger" }
];
let nextId = 6;

router.get('/', (req, res) => {
  res.json(books);
});

router.post('/', (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ error: 'Title and author are required.' });
  }
  const newBook = { id: nextId++, title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});

router.put('/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const { title, author } = req.body;
  const book = books.find(b => b.id === bookId);
  if (!book) return res.status(404).json({ error: 'Book not found.' });
  if (title) book.title = title;
  if (author) book.author = author;
  res.json(book);
});

router.delete('/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === bookId);
  if (index === -1) return res.status(404).json({ error: 'Book not found.' });
  books.splice(index, 1);
  res.status(204).send();
});

module.exports = router;
