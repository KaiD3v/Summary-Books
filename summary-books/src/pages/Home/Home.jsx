import styles from "./Home.module.css";
import Carousel from "../../components/Carousel";

const Home = () => {
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
        <form className={styles.form}>
          <div className="form_config">
            <label htmlFor="title">Título:</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Insira um título"
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
              required
            />
          </div>
          <div className="form_config">
            <input type="text" name="imageUrl" id="imageUrl" placeholder="Url de Imagem (Capa)"/>
            <textarea name="summary" id="summary" required></textarea>
            <button onClick={''}>Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
