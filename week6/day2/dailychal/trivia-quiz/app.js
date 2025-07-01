const express = require('express');
const session = require('express-session');
const quizRoutes = require('./routes/quiz');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(session({
  secret: 'supersecretkey',
  resave: false,
  saveUninitialized: true,
}));

app.use(express.static('public'));

app.use('/quiz', quizRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
