import React from "react";
import styles from "./Bookshelf.module.css";

const Bookshelf = ({ books }) => {
  return (
    <div className={styles.bookshelf}>
      {books.map((book, index) => (
        <div key={index} className={styles.book}>
          <h3>{book.title}</h3>
          <p>
            Author: {book.author_name ? book.author_name.join(", ") : "Unknown"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Bookshelf;
