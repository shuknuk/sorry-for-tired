"use client";

import { useEffect, useState } from "react";

const Heart = () => {
  const [hearts, setHearts] = useState<{ id: number; x: number; y: number; size: number; duration: number; }[]>([]);

  useEffect(() => {
    const explosion = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
    }));
    setHearts(explosion);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-red-500"
          style={{
            left: heart.x,
            top: heart.y,
            transform: `scale(${heart.size})`,
            animation: `explode ${heart.duration}s ease-out forwards`,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24"
            fill="currentColor"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      ))}
      <style jsx>{`
        @keyframes explode {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(3);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Heart;
