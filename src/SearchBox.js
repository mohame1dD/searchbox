import React, { useState } from "react";

const articles = [
  {
    id: 1,
    title: "Java session",
    date: "june 10, 2025",
    content: "Chapter 1: Introduction to Java Objects\nLearn about the basics of Java objects, classes, and how they are used to structure programs. Understand object-oriented principles such as encapsulation and inheritance.\n"
  },
  {
    id: 2,
    title: "C Programming Language",
    date: "Dec 20, 2025",
    content: "Chapter 1: Basics of C Syntax\nLearn about variables, data types, and how to write simple programs in C.\n\nChapter 2: Working with Pointers\nUnderstand how pointers work in C and how they are used for memory management and efficient programming."
  },
  {
   id: 3,
    title: "JavaScript Essentials",
    date: "Nov 05, 2025",
    content: "Learn about variables and functions in JavaScript. Get started with basic syntax and simple DOM manipulation."
  }
];

// function for highlighting the matched search terms
function highlightText(originalArticles, searchTerm) {
  if (!searchTerm) return originalArticles;

  const regExpr = new RegExp(`(${searchTerm})`, "gi");

  const parts = originalArticles.split(regExpr);

  return parts.map((part, i) =>
    regExpr.test(part) ? (
      <mark key={i} style={{ backgroundColor: "yellow" }}>
        {part}
      </mark>
    ) : (
      part
    )
  );
}


export default function App() {
  const [search, setSearch] = useState("");

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(search.toLowerCase()) ||
      article.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Search</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Type to search..."
      />
      <p>
        {filteredArticles.length} posts were found.
      </p>
      <div>
        {filteredArticles.map((article) => (
          <div key={article.id}>
            <h2>
              {highlightText(article.title, search)}
            </h2>
            <p>{article.date}</p>
            <p>
              {highlightText(article.content, search)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}