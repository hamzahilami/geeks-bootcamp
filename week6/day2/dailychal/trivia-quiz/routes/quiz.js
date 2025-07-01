const express = require('express');
const router = express.Router();

const triviaQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "What is the largest mammal in the world?", answer: "Blue whale" },
];

router.get('/', (req, res) => {
  req.session.currentQuestion = 0;
  req.session.score = 0;
  res.json({
    questionNumber: 1,
    question: triviaQuestions[0].question,
    message: "Quiz started! Good luck!"
  });
});

router.post('/', (req, res) => {
  const { answer } = req.body;
  const current = req.session.currentQuestion;

  if (current === undefined) {
    return res.status(400).json({ error: "Quiz not started. Call GET /quiz first." });
  }

  const correctAnswer = triviaQuestions[current].answer.toLowerCase();
  const userAnswer = (answer || '').toLowerCase();

  let feedback;
  if (userAnswer === correctAnswer) {
    req.session.score++;
    feedback = "Correct!";
  } else {
    feedback = `Wrong! The correct answer was: ${triviaQuestions[current].answer}`;
  }

  req.session.currentQuestion++;

  if (req.session.currentQuestion >= triviaQuestions.length) {
    return res.json({
      message: feedback,
      quizEnded: true,
      finalScore: req.session.score,
      totalQuestions: triviaQuestions.length,
      next: "/quiz/score"
    });
  }

  res.json({
    message: feedback,
    nextQuestionNumber: req.session.currentQuestion + 1,
    nextQuestion: triviaQuestions[req.session.currentQuestion].question
  });
});

router.get('/score', (req, res) => {
  if (req.session.score === undefined) {
    return res.status(400).json({ error: "Quiz not started." });
  }

  res.json({
    message: "Quiz finished!",
    score: req.session.score,
    totalQuestions: triviaQuestions.length
  });
});

module.exports = router;
