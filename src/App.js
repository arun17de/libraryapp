import React, { useState } from 'react';
import BookList from './components/BookList';
import AddBook from './components/AddBook';

const App = () => {
  const [books, setBooks] = useState([
    { id: 1, title: '1984', author: 'George Orwell' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  ]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  return (
    <div>
      <h1>Library App</h1>
      <AddBook addBook={addBook} />
      <BookList books={books} />
    </div>
  );
};

export default App;
