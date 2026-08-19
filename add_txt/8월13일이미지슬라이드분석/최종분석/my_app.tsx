import { useState, uesEffect, useRef } from 'react';
//https://github.com/groomigroom/react_vite_study/blob/main/dictionary_web_parts/u/useEffect.txt
//https://github.com/groomigroom/react_vite_study/blob/main/dictionary_web_parts/u/useRef.html

import groomi1 from './groomi_imgs/groomi1.jpg';
import groomi2 from './groomi_imgs/groomi2.jpg';
import groomi3 from './groomi_imgs/groomi3.jpg';

const IMAGES = [groomi1, groomi2, groomi3];

const SLIDES = [IMAGES[IMAGES.length - 1], ...IMAGES, IMAGES[0]];

function App() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  //https://github.com/groomigroom/react_vite_study/blob/main/dictionary_web_parts/r/ReturnType.txt

  useEffect(() => {
    timeoutRef.current
    //https://github.com/groomigroom/react_vite_study/blob/main/dictionary_web_parts/c/current.txt

  });

  return (
    <>
      <img src={IMAGES[0]} alt="" />
      <img src={IMAGES[1]} alt="" />
      <img src={IMAGES[2]} alt="" />
    </>
  )
}

export default App
