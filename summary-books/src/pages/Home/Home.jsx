import styles from "./Home.module.css";
import Carousel from "../../components/Carousel";
import api from "../../axios/config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate()

  const[title, setTitle] = useState('')
  const[author, setAuthor] = useState('')
  const[summary, setSummary] = useState('')
  const[imageUrl, setImageUrl] = useState('')

  const handleSubmit = async(e) => {
    e.preventDefault()

    try {
      const newBook = {
        title,
        author,
        summary,
        imageUrl
      }
      const response = await api.post('/postbook', newBook);
      console.log('Resposta do servidor:', response.data);
      navigate('/books')
    } catch (err) {
      console.error(`Erro ao enviar livro: ${err}`)
    }
  }

  return (
    <div className={styles.home_container}>
      <div className={styles.container}>
        <Carousel />
      </div>
      <div className={styles.home_content}>
        <h1>
          Summary <span>Books</span>
        </h1>
        <p>Poste os resumos sobre seu livro!</p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className="form_config">
            <label htmlFor="title">Título:</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Insira um título"
              onChange={(e) => setTitle(e.target.value)}
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
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <div className="form_config">
            <input type="text" name="imageUrl" id="imageUrl" placeholder="Url de Imagem (Capa)" onChange={(e) => setImageUrl(e.target.value)}/>
            <textarea name="summary" id="summary" onChange={(e) => setSummary(e.target.value)} required></textarea>
            <button onClick={handleSubmit}>Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
