const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const posts = [
    { id: 1, title: 'Post 1', content: 'Content of Post 1' },
    { id: 2, title: 'Post 2', content: 'Content of Post 2' },
    { id: 3, title: 'Post 3', content: 'Content of Post 3' },
    { id: 4, title: 'Post 4', content: 'Content of Post 4' },
    { id: 5, title: 'Post 5', content: 'Content of Post 5' },
];

// Get all posts
app.get('/posts', (req, res) => {
    res.send(posts);
});

// Get a specific post
app.get('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);
    if (post) {
        res.send(post);
    } else {
        res.status(404).send('Post not found');
    }
});

// Create a new post
app.post('/posts', (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ error: 'Title and content are required' });
    }
    const newPost = {
        id: posts.length + 1,
        title,
        content
    };
    posts.push(newPost);
    res.status(201).send(newPost);
});

// Update a post
app.put('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);
    if (!post) {
        return res.status(404).send('Post not found');
    }
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ error: 'Title and content are required' });
    }
    post.title = title;
    post.content = content;
    res.send(post);
});

// Delete a post
app.delete('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = posts.findIndex(p => p.id === id);
    if (index !== -1) {
        posts.splice(index, 1);
        res.status(200).send('Post deleted');
    } else {
        res.status(404).send('Post not found');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
