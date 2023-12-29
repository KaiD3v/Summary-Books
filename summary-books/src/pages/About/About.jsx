// Importe o estilo da página "Sobre" (se houver)
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about_container}>
      <h1>Sobre Nós</h1>
      <p>
        Bem-vindo à nossa plataforma de resumos de livros, Summary Books! Aqui,
        acreditamos no poder das palavras e na capacidade transformadora da
        leitura. Nosso objetivo é proporcionar uma experiência única,
        conectando leitores, compartilhando ideias e inspirando o amor pelos
        livros.
      </p>
      <p>
        Na Summary Books, você encontrará resumos envolventes e informativos de
        diversos gêneros literários. Queremos facilitar o acesso à sabedoria
        contida nos livros, permitindo que você descubra novas histórias,
        aprenda com diferentes perspectivas e enriqueça sua jornada de
        conhecimento.
      </p>
      <p>
        Nossa comunidade é composta por amantes da leitura, escritores
        entusiastas e curiosos ávidos por explorar o universo literário. Junte-se
        a nós nessa jornada de descobertas e compartilhamento de ideias.
      </p>
      {/* Adicione mais informações sobre a equipe, missão, etc., conforme necessário */}
    </div>
  );
};

export default About;
