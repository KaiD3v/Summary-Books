import React, { useState } from "react";
import styles from "./Carousel.module.css";

const Carousel = () => {
  const urls = [
    "https://i.pinimg.com/originals/40/44/ee/4044eeb36d5096b29b19c8f1831d9997.jpg",
    "https://i.pinimg.com/originals/d7/69/ea/d769eaeb9fa5462b2df8087c55be551e.jpg",
    "https://images.squarespace-cdn.com/content/v1/619c039121371d019c7b3da0/1638314069042-90ALCXD5FK66ZKTROU0W/Resources-Banner.jpg?format=2500w",
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
