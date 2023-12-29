import styles from "./Books.module.css";
import api from "../../axios/config";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    try {
      const response = await api.get("/books");
      const data = response.data;
      setBooks(data);
    } catch (err) {
      console.error(`Erro ao buscar livros: ${err}`);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className={styles.books_container}>
      <h1>Livros:</h1>
      {books.length === 0 ? (
        <p>Loading...</p>
      ) : (
        books.map((book) => (
          <div key={book.id} className={styles.book_item}>
            <Link to={`/books/${book.id}`}>
              <img src={book.imageurl} alt="" className={styles.book_image} />
            </Link>
            <div className={styles.book_content}>
              <h2>
                <Link to={`/books/${book.id}`}>{book.title}</Link>
                <button className={styles.delete_btn}>
                  <span class="material-symbols-outlined">delete</span>
                </button>
              </h2>
              <span>{book.author}</span>
              <p>{book.summary}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Books;
