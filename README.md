
# Personal Bookshelf

The React Bookshelf App is a simple web application that allows users to search for books using the Open Library API, add books to their personal bookshelf, and delete books from their bookshelf. The application uses React for the frontend and localStorage to persist the bookshelf data.

## Live URL

You can access the live application [here](https://your-live-app-url.com).

## Features

- **Search Books**: Users can search for books by title, author, or keyword.
- **Add to Bookshelf**: Users can add books to their personal bookshelf.
- **Delete from Bookshelf**: Users can delete books from their bookshelf.
- **Persist Data**: Bookshelf data is stored in the browser's localStorage, so it persists across page reloads.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/RutikKulkarni/Personal-Bookshelf.git
   cd react-bookshelf-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000`.

## Project Structure

```
react-bookshelf-app/
│
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── BookCard/
│   │   │   ├── BookCard.jsx
│   │   │   └── BookCard.module.css
│   │   ├── Bookshelf/
│   │   │   ├── Bookshelf.jsx
│   │   │   └── Bookshelf.module.css
│   │   ├── DeleteModal/
│   │   │   ├── DeleteModal.jsx
│   │   │   └── DeleteModal.module.css
│   │   ├── SearchBar/
│   │   │   ├── SearchBar.jsx
│   │   │   └── SearchBar.module.css
│   ├── pages/
│   │   ├── BookSearchPage/
│   │   │   ├── BookSearchPage.jsx
│   │   │   └── BookSearchPage.module.css
│   │   ├── BookshelfPage/
│   │   │   ├── BookshelfPage.jsx
│   │   │   └── BookshelfPage.module.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Components

### BookSearchPage

- **Description**: Main page for searching books.
- **Props**:
  - `query`: Current search query.
  - `setQuery`: Function to update the search query.
  - `addBook`: Function to add a book to the bookshelf.
- **File**: `src/pages/BookSearchPage/BookSearchPage.jsx`

### BookshelfPage

- **Description**: Page displaying the user's bookshelf.
- **File**: `src/pages/BookshelfPage/BookshelfPage.jsx`

### BookCard

- **Description**: Component to display individual book details and add to bookshelf functionality.
- **Props**:
  - `book`: Book details.
  - `onAdd`: Function to add the book to the bookshelf.
- **File**: `src/components/BookCard/BookCard.jsx`

### Bookshelf

- **Description**: Component to display the list of books in the user's bookshelf.
- **Props**:
  - `books`: Array of books in the bookshelf.
- **File**: `src/components/Bookshelf/Bookshelf.jsx`

### DeleteModal

- **Description**: Modal component for deleting books from the bookshelf.
- **Props**:
  - `books`: Array of books in the bookshelf.
  - `onDelete`: Function to delete a book from the bookshelf.
  - `onClose`: Function to close the modal.
- **File**: `src/components/DeleteModal/DeleteModal.jsx`

### SearchBar

- **Description**: Input component for entering search queries.
- **Props**:
  - `query`: Current search query.
  - `setQuery`: Function to update the search query.
- **File**: `src/components/SearchBar/SearchBar.jsx`

## Usage

1. **Search for Books**: Enter a keyword in the search bar to search for books.
2. **Add to Bookshelf**: Click the "Add to Bookshelf" button to add a book to your bookshelf. The button will change to "Added to Bookshelf" with a check icon.
3. **View Bookshelf**: Click the "Go to My Bookshelf" button to view the books you have added.
4. **Delete from Bookshelf**: Click the delete button next to a book in the bookshelf to remove it. A modal will appear to confirm the deletion.
