import styles from "./Books.module.css";
import api from "../../axios/config";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// ... (imports)

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

  const handleDelete = async (id) => {
    try {
      await api.delete(`/books/${id}`);
      getBooks();
    } catch (err) {
      console.error(`Erro ao deletar livro: ${err}`);
    }
  };

  return (
    <div className={styles.books_container}>
      <h1>Livros:</h1>
      {books.length === 0 ? (
        <p>Sem Livros...</p>
      ) : (
        books.map((book) => (
          <div key={book.id} className={styles.book_item}>
            <Link to={`/books/${book.id}`}>
              <img src={book.imageurl} alt="" className={styles.book_image} />
            </Link>
            <div className={styles.book_content}>
              <h2>
                <Link to={`/books/${book.id}`}>{book.title}</Link>
                <button
                  onClick={() => handleDelete(book.id)}
                  className={styles.span_btn}
                >
                  <span className="material-symbols-outlined">delete</span>
                </button>{" "}
                <Link to={`/books/bookupdate/${book.id}`}>
                  <span className="material-symbols-outlined">edit</span>
                </Link>
              </h2>
              <span>
                <b>Autor:</b> {book.author}
              </span>
              <p>{book.summary}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Books;