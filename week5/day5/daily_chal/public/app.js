let score = 0;
let currentEmoji = null;

async function loadQuestion() {
  const res = await fetch('/api/question');
  const data = await res.json();
  currentEmoji = data.emoji;
  document.getElementById('emoji-display').textContent = currentEmoji;

  const form = document.getElementById('guess-form');
  form.innerHTML = '';
  data.options.forEach(option => {
    const label = document.createElement('label');
    label.innerHTML = `<input type="radio" name="guess" value="${option}" required> ${option}`;
    form.appendChild(label);
  });

  const submit = document.createElement('button');
  submit.type = 'submit';
  submit.textContent = 'Submit Guess';
  form.appendChild(submit);
}

document.getElementById('guess-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const guess = document.querySelector('input[name="guess"]:checked').value;
  const res = await fetch('/api/guess', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ emoji: currentEmoji, guess, score })
  });
  const data = await res.json();
  score = data.newScore;
  document.getElementById('score').textContent = `Score: ${score}`;
  document.getElementById('feedback').textContent = data.correct ? 'Correct! ✅' : 'Wrong ❌';

  if (score >= 5) {
    document.getElementById('save-score').style.display = 'block';
  } else {
    setTimeout(() => {
      document.getElementById('feedback').textContent = '';
      loadQuestion();
    }, 1000);
  }
});

document.getElementById('submit-score').addEventListener('click', async () => {
  const name = document.getElementById('player-name').value;
  if (!name) return;
  const res = await fetch('/api/leaderboard', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, score })
  });
  const data = await res.json();
  renderLeaderboard(data.leaderboard);
});

document.getElementById('reset-game').addEventListener('click', () => {
  score = 0;
  document.getElementById('score').textContent = 'Score: 0';
  document.getElementById('feedback').textContent = '';
  document.getElementById('save-score').style.display = 'none';
  document.getElementById('player-name').value = '';
  loadQuestion();
});

async function renderLeaderboard(leaderboard) {
  const list = document.getElementById('leaderboard-list');
  list.innerHTML = '';
  leaderboard.forEach(entry => {
    const li = document.createElement('li');
    li.textContent = `${entry.name}: ${entry.score}`;
    list.appendChild(li);
  });
}

async function loadLeaderboard() {
  const res = await fetch('/api/leaderboard');
  const data = await res.json();
  renderLeaderboard(data.leaderboard);
}

loadQuestion();
loadLeaderboard();
