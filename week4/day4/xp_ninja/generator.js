const quotes = [
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon", likes: 0 },
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde", likes: 0 },
  { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson", likes: 0 },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill", likes: 0 }
];

let currentIndex = 0;

const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const quoteLikes = document.getElementById("quoteLikes");

const generateBtn = document.getElementById("generateQuoteBtn");
const likeBtn = document.getElementById("likeBtn");

function showQuote(index) {
  const q = quotes[index];
  quoteText.textContent = `"${q.text}"`;
  quoteAuthor.textContent = `— ${q.author}`;
  quoteLikes.textContent = `Likes: ${q.likes}`;
}

generateBtn.addEventListener("click", () => {
  currentIndex = Math.floor(Math.random() * quotes.length);
  showQuote(currentIndex);
});

likeBtn.addEventListener("click", () => {
  quotes[currentIndex].likes++;
  quoteLikes.textContent = `Likes: ${quotes[currentIndex].likes}`;
});

// Show the first quote on load
showQuote(currentIndex);
