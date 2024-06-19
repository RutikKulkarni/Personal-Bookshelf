import React, { useState } from "react";
import Bookshelf from "../../components/Bookshelf/Bookshelf";
import { Link } from "react-router-dom";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import styles from "./BookshelfPage.module.css";

const BookshelfPage = () => {
  const [storedBooks, setStoredBooks] = useState(
    JSON.parse(localStorage.getItem("bookshelf")) || []
  );
  const [showModal, setShowModal] = useState(false);

  const handleDeleteBook = (book) => {
    const updatedBooks = storedBooks.filter(
      (storedBook) => storedBook.key !== book.key
    );
    setStoredBooks(updatedBooks);
    localStorage.setItem("bookshelf", JSON.stringify(updatedBooks));
    setShowModal(false); // Close the modal after deletion
  };

  return (
    <div className={styles.container}>
      <h1>My Bookshelf</h1>
      <Bookshelf books={storedBooks} />
      <button
        onClick={() => setShowModal(true)}
        className={styles.deleteButton}
      >
        Delete a Book
      </button>
      <button className={styles.backButton}>
        <Link to="/" className={styles.linkButton}>
          Back to Search
        </Link>
      </button>
      {showModal && (
        <DeleteModal
          books={storedBooks}
          onDelete={handleDeleteBook}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default BookshelfPage;
