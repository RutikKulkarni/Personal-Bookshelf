import React, { useState } from "react";
import styles from "./BookCard.module.css";
import { FaCheck } from "react-icons/fa";

const BookCard = ({ book, onAdd }) => {
  const [added, setAdded] = useState(false);

  const handleAddBook = () => {
    onAdd(book);
    setAdded(true);
  };

  return (
    <div className={styles.card}>
      <h3>{book.title}</h3>
      <p>
        <b>Author:</b>{" "}
        {book.author_name ? book.author_name.join(", ") : "Unknown"}
      </p>
      {book.edition_count && (
        <p>
          <b>Editions:</b> {book.edition_count}
        </p>
      )}
      {added ? (
        <button className={styles.addedButton}>
          <FaCheck /> Added to Bookshelf
        </button>
      ) : (
        <button onClick={handleAddBook}>Add to Bookshelf</button>
      )}
    </div>
  );
};

export default BookCard;
