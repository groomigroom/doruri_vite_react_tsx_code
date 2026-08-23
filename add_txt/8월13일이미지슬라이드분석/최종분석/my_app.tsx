import { useState, useEffect, useRef } from 'react';
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
    timeoutRef.current = setTimeout(() => {
      //https://github.com/groomigroom/react_vite_study/blob/main/dictionary_web_parts/c/current.txt
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      //리액트 컴포넌트는 내부 상태(useState)가 바뀌면 화면을 다시 그립니다(리렌더링). 하지만 useRef의 .current 값을 변경할 때는 컴포넌트가 리렌더링되지 않습니다. [3, 4]  컴포넌트가 아무리 자주 리렌더링되어도, useRef가 반환한 객체의 주소값은 보존되며 오직.current 안의 값만 유지되거나 변경됩니다.즉, "화면은 바꾸지 않으면서 값만 안전하게 저장하고 싶을 때" 사용합니다. 
      //clearTimeout은 setTimeout으로 예약한 타이머(실행 대기 작업)를 취소(중지)하는 MDN Web Docs 전역 함수입니다. 핵심 역할은 타이머 취소, 메모리 누수 방지, 그리고 컴포넌트 생명주기 관리입니다.
    };

  }, [currentIndex]);

  const handleTransitionEnd = () => {
    if (currentIndex === SLIDES.length - 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
      //4번 인덱스에 갔을 때, 인덱스 1번으로 전환하기.
    }
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(SLIDES.length - 2);
      //0번 인덱스 일 때, 3번 인덱스로 바꾸기.
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      //isTransitioning이 false일 때
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timer);
      //return () => clearTimeout(timer); 코드는 React의 useEffect 훅 내부에서 컴포넌트가 사라지거나(언마운트) 의존성 배열의 값이 바뀔 때, 이전에 실행 중이던 타이머를 안전하게 취소(정리)하는 역할을 합니다.
    }
  }, [isTransitioning]);

  return (
    <>
      <div
        onTransitionEnd={handleTransitionEnd}
        style={{
          display: "flex",
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? "transform 0.6s ease 0s" : "none",
        }}
      >
        {/* onTransitionEnd는 React TSX에서 CSS Transition(애니메이션 효과)이 완전히 끝났을 때 특정 함수를 실행하도록 만드는 이벤트 핸들러입니다. */}
        <img src={IMAGES[0]} alt="" />
        <img src={IMAGES[1]} alt="" />
        <img src={IMAGES[2]} alt="" />
      </div>
    </>
  )
}

export default App
