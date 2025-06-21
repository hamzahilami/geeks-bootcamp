const express = require('express');
const bookRoutes = require('./server/routes/bookRoutes');

const app = express();
const PORT = 5000;

app.use(express.json()); // parse JSON bodies

app.use('/api/books', bookRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
