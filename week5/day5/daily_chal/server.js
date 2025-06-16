import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const emojis = [
  { emoji: '😀', name: 'Smile' },
  { emoji: '🐶', name: 'Dog' },
  { emoji: '🌮', name: 'Taco' },
  { emoji: '🚀', name: 'Rocket' },
  { emoji: '🎉', name: 'Party' },
  { emoji: '🍕', name: 'Pizza' }
];

let leaderboard = [];

function getRandomEmojiQuestion() {
  const correct = emojis[Math.floor(Math.random() * emojis.length)];
  const options = new Set([correct.name]);
  while (options.size < 4) {
    const random = emojis[Math.floor(Math.random() * emojis.length)].name;
    options.add(random);
  }
  return { emoji: correct.emoji, correct: correct.name, options: Array.from(options).sort(() => 0.5 - Math.random()) };
}

app.get('/api/question', (req, res) => {
  const question = getRandomEmojiQuestion();
  res.json(question);
});

app.post('/api/guess', (req, res) => {
  const { emoji, guess, score } = req.body;
  const match = emojis.find(e => e.emoji === emoji);
  const isCorrect = match && match.name === guess;
  const newScore = isCorrect ? score + 1 : score;
  res.json({ correct: isCorrect, newScore });
});

app.post('/api/leaderboard', (req, res) => {
  const { name, score } = req.body;
  leaderboard.push({ name, score });
  leaderboard.sort((a, b) => b.score - a.score);
  leaderboard = leaderboard.slice(0, 10);
  res.json({ leaderboard });
});

app.get('/api/leaderboard', (req, res) => {
  res.json({ leaderboard });
});

app.listen(port, () => {
  console.log(`server running http://localhost:${port}`);
});
