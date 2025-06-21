// In-memory books data
const books = [
  { id: 1, title: "1984", author: "George Orwell", publishedYear: 1949 },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", publishedYear: 1960 },
];

// Get all books
const getAllBooks = () => books;

// Get book by id
const getBookById = (id) => books.find(book => book.id === id);

// Add a new book
const addBook = ({ title, author, publishedYear }) => {
  const newBook = {
    id: books.length ? books[books.length - 1].id + 1 : 1,
    title,
    author,
    publishedYear,
  };
  books.push(newBook);
  return newBook;
};

module.exports = { getAllBooks, getBookById, addBook };
