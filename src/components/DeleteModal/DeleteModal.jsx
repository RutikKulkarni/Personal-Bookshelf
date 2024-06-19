import React from "react";
import styles from "./DeleteModal.module.css";

const DeleteModal = ({ books, onDelete, onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2>Delete Book</h2>
        <ul className={styles.bookList}>
          {books.map((book, index) => (
            <li key={index} className={styles.bookItem}>
              <span className={styles.bookTitle}>
                {book.title} by{" "}
                {book.author_name ? book.author_name.join(", ") : "Unknown"}
              </span>
              <button
                className={styles.deleteButton}
                onClick={() => onDelete(book)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
