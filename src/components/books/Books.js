import "./Books.css";

import BookItem from "./BookItem";
import { useState } from "react";
import BooksFilter from "../filter/BookFilter";

const Books = ({ books, children }) => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const onYearChanged = (newYear) => {
    setSelectedYear(newYear);
  };

  const booksMapped = books
    .filter((book) => book.dateRead.getFullYear().toString() === selectedYear)
    .map((book) => (
      <BookItem
        key={book.id}
        title={book.title}
        dateRead={book.dateRead}
        author={book.author}
        pageCount={book.pageCount}
      />
    ));

  return (
    <div>
      <BooksFilter onYearChanged={onYearChanged} year={selectedYear} />
      <div className="books-container">
        {booksMapped.length === 0 ? (
          <p>No leíste libros en el {selectedYear}</p>
        ) : (
          booksMapped
        )}
      </div>
    </div>
  );
};

export default Books;
