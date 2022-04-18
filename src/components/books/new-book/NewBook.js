import "./NewBook.css";

import BookForm from "./BookForm";

const NewBook = ({ onBookAdded }) => {
  // const [bookData, setBookData] = useState(null)
  // console.log(bookData);

  const saveBookDataHandler = (bookData) => {
    const bookDataWithId = {
      ...bookData,
      id: Math.random().toString(),
    };
    // console.log(bookDataWithId);
    onBookAdded(bookDataWithId);
  };

  return (
    <div className="new-book">
      <BookForm onBookDataSaved={saveBookDataHandler} />
    </div>
  );
};

export default NewBook;
