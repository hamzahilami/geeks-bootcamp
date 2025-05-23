const allBooks = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        image: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
        alreadyRead: true
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        image: "https://covers.openlibrary.org/b/id/8228691-L.jpg",
        alreadyRead: false
    }
];

const section = document.querySelector(".listBooks");

allBooks.forEach(book => {
    const bookDiv = document.createElement("div");

    const bookDetails = document.createElement("p");
    bookDetails.textContent = `${book.title} written by ${book.author}`;
    if (book.alreadyRead) {
        bookDetails.style.color = "red";
    }

    const bookImage = document.createElement("img");
    bookImage.src = book.image;
    bookImage.style.width = "100px";

    bookDiv.appendChild(bookDetails);
    bookDiv.appendChild(bookImage);
    section.appendChild(bookDiv);
});
