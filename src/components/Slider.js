import React, { useState } from 'react';

const Slider = ({ images, text }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider">
      <button className="prev" onClick={prevSlide}>❮</button>
      <div className="slide-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={image} alt={`Slide ${index}`} />
            {index === currentIndex && (
              <div className="slider-text">{text[index]}</div>
            )}
          </div>
        ))}
      </div>
      <button className="next" onClick={nextSlide}>❯</button>
    </div>
  );
};

export default Slider;