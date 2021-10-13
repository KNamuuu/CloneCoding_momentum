const quotes = [
  {
    quote: "No pain, No gain.",
    author: "Benjamin Franklin",
  },
  {
    quote: "I never dreamed about success, I worked for it.",
    author: "Estee Lauder",
  },
  {
    quote:
      "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    author: "Thomas Edison",
  },
  {
    quote: "The supreme happiness in life is the conviction that we are loved.",
    author: "Victor Hugo",
  },
];

const quote = document.getElementById("quote");
const author = document.getElementById("author");

const randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomQuotes.quote;
author.innerText = randomQuotes.author;