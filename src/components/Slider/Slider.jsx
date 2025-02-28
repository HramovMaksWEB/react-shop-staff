import React, { useState } from 'react';
import styles from './Slider.module.css'

const Slider = ({ images, text }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.slider}>
      <button className={styles.prev} onClick={prevSlide}>❮</button>
      <div className={styles["slide-container"]}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === currentIndex ? styles.active : styles[""]}`}
          >
            <img src={image} alt={`Slide ${index}`} />
            {index === currentIndex && (
              <div className={styles["slider-text"]}>{text[index]}</div>
            )}
          </div>
        ))}
      </div>
      <button className={styles.next} onClick={nextSlide}>❯</button>
    </div>
  );
};

export default Slider;