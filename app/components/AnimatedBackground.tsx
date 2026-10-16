"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
};

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasElement = canvasRef.current;

    if (!canvasElement) return;

    const ctx = canvasElement.getContext("2d");

    if (!ctx) return;

    // Referências validadas para uso nas funções internas.
    const canvas: HTMLCanvasElement = canvasElement;
    const context: CanvasRenderingContext2D = ctx;

    let width = 0;
    let height = 0;
    let pixelRatio = 1;
    let particles: Particle[] = [];
    let animationFrame = 0;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const pointer = {
      x: -1000,
      y: -1000,
      active: false,
    };

    const colors = ["163, 230, 53", "56, 189, 248"];

    function createParticles() {
      const area = width * height;
      const count = Math.max(22, Math.min(85, Math.floor(area / 18000)));

      particles = Array.from({ length: count }, () => {
        const color = colors[Math.floor(Math.random() * colors.length)];

        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius: Math.random() * 1.5 + 1,
          color,
        };
      });
    }

    function resizeCanvas() {
      width = window.innerWidth;
      height = window.innerHeight;
      pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);

      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      createParticles();
      drawFrame(false);
    }

    function drawFrame(animate: boolean) {
      context.clearRect(0, 0, width, height);

      if (animate) {
        for (const particle of particles) {
          particle.x += particle.vx;
          particle.y += particle.vy;

          if (particle.x < -10) particle.x = width + 10;
          if (particle.x > width + 10) particle.x = -10;
          if (particle.y < -10) particle.y = height + 10;
          if (particle.y > height + 10) particle.y = -10;
        }
      }

      const connectionDistance = width < 640 ? 105 : 145;

      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];

        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance > connectionDistance) continue;

          const opacity = (1 - distance / connectionDistance) * 0.28;

          context.beginPath();
          context.moveTo(particle.x, particle.y);
          context.lineTo(other.x, other.y);
          context.strokeStyle = `rgba(${particle.color}, ${opacity})`;
          context.lineWidth = 0.7;
          context.stroke();
        }

        if (pointer.active) {
          const dx = particle.x - pointer.x;
          const dy = particle.y - pointer.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 190) {
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(pointer.x, pointer.y);
            context.strokeStyle = `rgba(163, 230, 53, ${
              (1 - distance / 190) * 0.35
            })`;
            context.lineWidth = 0.9;
            context.stroke();
          }
        }
      }

      for (const particle of particles) {
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);

        context.fillStyle = `rgba(${particle.color}, 0.85)`;
        context.shadowColor = `rgb(${particle.color})`;
        context.shadowBlur = 9;
        context.fill();
      }

      context.shadowBlur = 0;
    }

    function animate() {
      drawFrame(true);
      animationFrame = window.requestAnimationFrame(animate);
    }

    function startAnimation() {
      window.cancelAnimationFrame(animationFrame);

      if (reducedMotion.matches) {
        pointer.active = false;
        drawFrame(false);
        return;
      }

      animate();
    }

    function handlePointerMove(event: PointerEvent) {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
    }

    function handlePointerLeave() {
      pointer.active = false;
    }

    resizeCanvas();
    startAnimation();

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    window.addEventListener("blur", handlePointerLeave);
    reducedMotion.addEventListener("change", startAnimation);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("blur", handlePointerLeave);
      reducedMotion.removeEventListener("change", startAnimation);
    };
  }, []);

  return (
    <div className="site-background" aria-hidden="true">
      <canvas ref={canvasRef} className="site-background__canvas" />
    </div>
  );
}
