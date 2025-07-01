const startBtn = document.getElementById('start-quiz');
const questionSection = document.getElementById('question-section');
const questionEl = document.getElementById('question');
const answerInput = document.getElementById('answer');
const submitBtn = document.getElementById('submit-answer');
const feedbackEl = document.getElementById('feedback');
const finalScoreEl = document.getElementById('final-score');

let quizEnded = false;

startBtn.addEventListener('click', async () => {
  startBtn.style.display = 'none';
  finalScoreEl.textContent = '';
  feedbackEl.textContent = '';
  answerInput.value = '';
  quizEnded = false;

  const res = await fetch('/quiz');
  const data = await res.json();
  showQuestion(data.question, data.questionNumber);
});

submitBtn.addEventListener('click', async () => {
  if (quizEnded) return;

  const answer = answerInput.value.trim();
  if (!answer) {
    feedbackEl.textContent = 'Please enter an answer.';
    return;
  }

  const res = await fetch('/quiz', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ answer })
  });

  const data = await res.json();

  feedbackEl.textContent = data.message;
  answerInput.value = '';

  if (data.quizEnded) {
    questionSection.style.display = 'none';
    quizEnded = true;
    showFinalScore();
  } else {
    showQuestion(data.nextQuestion, data.nextQuestionNumber);
  }
});

function showQuestion(question, number) {
  questionEl.textContent = `Q${number}: ${question}`;
  questionSection.style.display = 'block';
  feedbackEl.textContent = '';
  answerInput.focus();
}

async function showFinalScore() {
  const res = await fetch('/quiz/score');
  const data = await res.json();
  finalScoreEl.textContent = `Quiz finished! Your score: ${data.score} / ${data.totalQuestions}`;
  startBtn.style.display = 'inline-block';
}
