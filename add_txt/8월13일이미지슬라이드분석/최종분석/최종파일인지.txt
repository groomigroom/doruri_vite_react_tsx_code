import { useState, useEffect } from 'react';

import './App.css';

import groomi1 from './groomi_imgs/groomi1.jpg';
import groomi2 from './groomi_imgs/groomi2.jpg';
import groomi3 from './groomi_imgs/groomi3.jpg';

const IMAGES = [groomi1, groomi2, groomi3];

const SLIDES = [
  IMAGES[IMAGES.length - 1],
  ...IMAGES,
  IMAGES[0],
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    if (!isTransitioning) return;

    const timer = setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentIndex, isTransitioning]);

  const handleTransitionEnd = () => {
    if (currentIndex === SLIDES.length - 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
    }

    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(SLIDES.length - 2);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      const frame = requestAnimationFrame(() => {
        setIsTransitioning(true);
      });

      return () => cancelAnimationFrame(frame);
    }
  }, [isTransitioning]);

  return (
    <div
      style={{
        width: '300px',
        height: '500px',
        overflow: 'hidden',
      }}
    >
      <div
        onTransitionEnd={handleTransitionEnd}
        style={{
          display: 'flex',
          transform: `translateX(-${currentIndex * 300}px)`,
          transition: isTransitioning
            ? 'transform 0.6s ease'
            : 'none',
        }}
      >
        {SLIDES.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className="slide_image"
          />
        ))}
      </div>
    </div>
  );
}

export default App;
