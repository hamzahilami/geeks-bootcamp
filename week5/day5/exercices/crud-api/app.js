const express = require('express');
const { fetchPosts } = require('./data/dataService');

const app = express();
const port = 5000;

app.use(express.json());

app.get('/api/posts', async (req, res) => {
    try {
        const posts = await fetchPosts();
        console.log('Fetched posts successfully');
        res.status(200).json(posts);
    } catch (error) {
        console.error('Failed to fetch posts:', error.message);
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});