import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Carousel.css';

const Slide = ({ imageSrc, title, link }) => (
  <Link to={link}>
    <div className="carousel-slide-content">
      <img src={imageSrc} alt={title} />
      <div className="carousel-caption">
        <h3 className="carousel-caption-title">{title}</h3>
      </div>
    </div>
  </Link>
);

const Carousel = ({
  autoPlay = false,
  activeSlideDuration = 3000,
  useRightLeftTriangles = false,
  leftTriangleColor = '#ffffff',
  rightTriangleColor = '#ffffff',
  slides = [],
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoSlide = useRef(null);

  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides.length]);

  const startAutoSliding = useCallback(() => {
    if (autoPlay) {
      autoSlide.current = setInterval(nextSlide, activeSlideDuration);
    }
  }, [autoPlay, activeSlideDuration, nextSlide]);

  const stopAutoSliding = useCallback(() => {
    clearInterval(autoSlide.current);
  }, []);

  useEffect(() => {
    startAutoSliding();
    return () => stopAutoSliding();
  }, [startAutoSliding, stopAutoSliding]);

  return (
    <div className="carousel-slider-wrapper">
      {slides.map((el, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === activeIndex ? 'active-slide' : ''}`}
        >
          <Slide imageSrc={el.image} title={el.title} link={el.link} />
        </div>
      ))}
      <div className="carousel-controls">
        <button onClick={() => setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)}>
          &lt;
        </button>
        <button onClick={nextSlide}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
