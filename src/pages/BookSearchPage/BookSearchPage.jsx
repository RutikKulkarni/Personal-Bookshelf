import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";
import BookCard from "../../components/BookCard/BookCard";
import styles from "./BookSearchPage.module.css";

const BookSearchPage = ({ addBook }) => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query.length > 2) {
      setLoading(true);
      axios
        .get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
        .then((response) => {
          if (response.data && response.data.docs) {
            setBooks(response.data.docs);
          } else {
            setBooks([]);
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setError("Error fetching data");
          setLoading(false);
        });
    }
  }, [query]);

  return (
    <div className={styles.container}>
      <h1>Book Search</h1>
      <SearchBar query={query} setQuery={setQuery} />
      {loading ? (
        <div className={styles.loader}></div>
      ) : error ? (
        <div className={styles.error}>{error}</div>
      ) : books.length === 0 ? (
        <div className={styles.noResults}>
          No results found. Please enter at least 3 letters to search
        </div>
      ) : (
        <div className={styles.results}>
          {books.map((book) => (
            <BookCard key={book.key} book={book} onAdd={addBook} />
          ))}
        </div>
      )}
      <button onClick={() => (window.location.href = "/bookshelf")}>
        Go to My Bookshelf
      </button>
    </div>
  );
};

export default BookSearchPage;
