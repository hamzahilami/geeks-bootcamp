const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

const peakFiction = [
    {
        "id": 1,
        "title": "fire and blood",
        "author": "george r. r. martin",
        "year published": 2018
    },
    {
        "id": 2,
        "title": "dune",
        "author": "frank herbert",
        "year published": 1965
    },
    {
        "id": 3,
        "title": "the wheel of time",
        "author": "robert jordan",
        "year published": 1990
    }
];

app.get('/api/books', (req, res) => {
    res.send(peakFiction);
});

app.get('/api/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const book = peakFiction.find(b => b.id === id);
    if (book) {
        res.send(book);
    } else {
        res.status(404).send('Book not found');
    }
});

app.post('/api/books', (req, res) => {
    const { title, author, year_published } = req.body;
    if (!title || !author || !year_published) {
        return res.status(400).json({ error: 'Title, author, and year_published are required' });
    }
    const newBook = {
        id: peakFiction.length + 1,
        title,
        author,
        year_published
    };
    peakFiction.push(newBook);
    res.status(201).send(newBook);
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
