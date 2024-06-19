import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ query, setQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search for books..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className={styles.input}
    />
  );
};

export default SearchBar;
