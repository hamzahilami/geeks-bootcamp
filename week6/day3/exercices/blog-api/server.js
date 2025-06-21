const express = require('express');
const postRoutes = require('./server/routes/postRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/posts', postRoutes);

// Handle invalid routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Global error handler (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Server error' });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
