import { useEffect, useState } from "react";
import styles from "./BookUpdate.module.css";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../axios/config";

const BookUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bookDetails, setBookDetails] = useState({
    title: "",
    author: "",
    imageUrl: "",
    summary: "",
  });

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await api.get(`/books/${id}`);
        setBookDetails(response.data);
      } catch (err) {
        console.error(`Erro ao buscar detalhes do livro: ${err}`);
      }
    };

    if (id) {
      fetchBookDetails();
    }
  }, [id]);

  const handleUpdate = async (e) => {

    e.preventDefault()

    try {
      await api.put(`/books/updatebook/${id}`, bookDetails);

      navigate(`/books`);
    } catch (err) {
      console.error(`Erro ao editar livro: ${err}`);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className={styles.bookupdate_container}>
        <h1>
          Editar Livro <span>{bookDetails.title}</span>
        </h1>
        <p>Edite o resumo do seu livro!</p>
        <form className={styles.form}>
          <div className="form_config">
            <label htmlFor="title">Título:</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Insira um título"
              value={bookDetails.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form_config">
            <label htmlFor="author">Autor:</label>
            <input
              type="text"
              name="author"
              id="author"
              placeholder="Insira o nome do autor"
              value={bookDetails.author}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form_config">
            <label htmlFor="imageUrl">Url de Imagem (Capa):</label>
            <input
              type="text"
              name="imageUrl"
              id="imageUrl"
              placeholder="Url de Imagem (Capa)"
              value={bookDetails.imageUrl}
              onChange={handleInputChange}
            />
          </div>
          <div className="form_config">
            <label htmlFor="summary">Resumo:</label>
            <textarea
              name="summary"
              id="summary"
              value={bookDetails.summary}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <button onClick={handleUpdate}>Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default BookUpdate;
