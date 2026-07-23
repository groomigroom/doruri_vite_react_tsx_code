import { useState, useEffect, useRef } from "react";

const IMAGES = [
  "https://picsum.photos",
  "https://picsum.photos",
  "https://picsum.photos",
];

const SLIDES = [IMAGES[IMAGES.length - 1], ...IMAGES, IMAGES[0]];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex]);

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
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    // 💡 Tailwind와 무관하게 무조건 화면 중앙에 크게 보이도록 인라인 스타일을 먹였습니다.
    <div style={{
      position: "relative",
      width: "100%",
      maxWidth: "600px",
      margin: "50px auto",
      overflow: "hidden",
      borderRadius: "8px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
      background: "#eee"
    }}>
      {/* 슬라이드 컨테이너 */}
      <div
        onTransitionEnd={handleTransitionEnd}
        style={{
          display: "flex",
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
        }}
      >
        {SLIDES.map((src, index) => (
          <div key={index} style={{ width: "100%", flexShrink: 0 }}>
            <img
              src={src}
              alt={`Slide ${index}`}
              style={{ width: "100%", height: "300px", objectFit: "cover", display: "block" }}
            />
          </div>
        ))}
      </div>

      {/* 인디케이터 */}
      <div style={{
        position: "absolute",
        bottom: "15px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: "8px"
      }}>
        {IMAGES.map((_, index) => {
          let displayIndex = currentIndex;
          if (currentIndex === 0) displayIndex = IMAGES.length;
          if (currentIndex === SLIDES.length - 1) displayIndex = 1;

          return (
            <div
              key={index}
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                transition: "all 0.3s",
                background: displayIndex === index + 1 ? "#3b82f6" : "rgba(255,255,255,0.6)",
                transform: displayIndex === index + 1 ? "scale(1.2)" : "scale(1)"
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
