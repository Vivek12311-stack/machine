import React, { useEffect, useState } from "react";

// Sample quotes array (replace with API if desired)
const quotes = [
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    text: "So many books, so little time.",
    author: "Frank Zappa"
  },
  {
    text: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero"
  }
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

export default function App() {
  const [quote, setQuote] = useState(getRandomQuote());

  const handleNewQuote = () => {
    let newQuote;
    do {
      newQuote = getRandomQuote();
    } while (newQuote.text === quote.text);
    setQuote(newQuote);
  };

  useEffect(() => {
    setQuote(getRandomQuote());
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f5f5f5"
      }}
    >
      <div
        id="quote-box"
        style={{
          background: "white",
          padding: "2rem",
          borderRadius: "1rem",
          maxWidth: "400px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          textAlign: "center"
        }}
      >
        <div id="text" style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
          "{quote.text}"
        </div>
        <div id="author" style={{ marginBottom: "1.5rem" }}>
          - {quote.author}
        </div>
        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            `"${quote.text}" - ${quote.author}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginRight: "1rem",
            textDecoration: "none",
            color: "#1da1f2"
          }}
        >
          Tweet
        </a>
        <button
          id="new-quote"
          onClick={handleNewQuote}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "5px",
            border: "none",
            background: "#333",
            color: "white",
            cursor: "pointer"
          }}
        >
          New Quote
        </button>
      </div>
    </div>
  );
}
