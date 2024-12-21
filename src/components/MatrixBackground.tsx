"use client";
// components/MatrixBackground.tsx// components/MatrixBackground.tsx
import React, { useEffect, useRef } from "react";

const MatrixBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    let drops: number[] = Array(Math.floor(columns)).fill(1);

    function draw() {
      context!.fillStyle = "rgba(0, 0, 0, 0.1)";
      context!.fillRect(0, 0, canvas!.width, canvas!.height);
      context!.fillStyle = "#CEEC5F";
      context!.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = Math.floor(Math.random() * 10).toString();
        context!.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas!.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <canvas
        ref={canvasRef}
        className="matrix-bg fixed top-0 left-0 w-full h-full"
      ></canvas>
    </div>
  );
};

export default MatrixBackground;
