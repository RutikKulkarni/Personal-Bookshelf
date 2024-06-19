import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookSearchPage from "./pages/BookSearchPage/BookSearchPage";
import BookshelfPage from "./pages/BookshelfPage/BookshelfPage";
import styles from "./App.module.css";

const App = () => {
  const [bookshelf, setBookshelf] = useState(
    JSON.parse(localStorage.getItem("bookshelf")) || []
  );

  const addBook = (book) => {
    const updatedBookshelf = [...bookshelf, book];
    setBookshelf(updatedBookshelf);
    localStorage.setItem("bookshelf", JSON.stringify(updatedBookshelf));
  };

  return (
    <Router>
      <div className={styles.App}>
        <Routes>
          <Route path="/" element={<BookSearchPage addBook={addBook} />} />
          <Route
            path="/bookshelf"
            element={<BookshelfPage bookshelf={bookshelf} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
