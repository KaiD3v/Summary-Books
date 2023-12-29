import React, { useState } from "react";
import styles from "./Carousel.module.css";

const Carousel = () => {
  const urls = [
    "https://classic.exame.com/wp-content/uploads/2021/12/leitura.jpg?quality=70&strip=info&w=1024",
    "https://super.abril.com.br/wp-content/uploads/2020/08/14-08_livros_SITE.jpg?quality=90&strip=info&w=1024&resize=1200,800",
    "https://res.cloudinary.com/printstore/image/upload/v1690296291/g%C3%AAneros-de-livros.jpg",
  ];

  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const handleNext = () => {
    setCurrentImgIndex((nextIndex) => (nextIndex + 1) % urls.length);
  };

  const handlePrev = () => {
    setCurrentImgIndex(
      (prevIndex) => (prevIndex - 1 + urls.length) % urls.length
    );
  };

  return (
    <div className={styles.carousel}>
      <button className={styles.prev_btn} onClick={handlePrev}>
        <span className="material-symbols-outlined">arrow_back_ios</span>
      </button>
      <img src={urls[currentImgIndex]} alt={`Imagem ${currentImgIndex + 1}`} />

      <button className={styles.next_btn} onClick={handleNext}>
        <span className="material-symbols-outlined">arrow_forward_ios</span>
      </button>
    </div>
  );
};

export default Carousel;
