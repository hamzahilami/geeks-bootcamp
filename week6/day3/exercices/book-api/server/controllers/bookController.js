const BookModel = require('../models/bookModel');

const getAllBooks = (req, res) => {
  const books = BookModel.getAllBooks();
  res.json(books);
};

const getBookById = (req, res) => {
  const id = parseInt(req.params.bookId);
  const book = BookModel.getBookById(id);
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.json(book);
};

const createBook = (req, res) => {
  const { title, author, publishedYear } = req.body;

  if (!title || !author || !publishedYear) {
    return res.status(400).json({ message: "title, author, and publishedYear are required" });
  }

  const newBook = BookModel.addBook({ title, author, publishedYear });
  res.status(201).json(newBook);
};

module.exports = { getAllBooks, getBookById, createBook };
