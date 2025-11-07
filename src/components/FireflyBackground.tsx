import { useEffect, useRef } from 'react';

interface Firefly {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  fadeDirection: number;
  phase: number;
}

export default function FireflyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const firefliesRef = useRef<Firefly[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const createFireflies = () => {
      const count = 25;
      const fireflies: Firefly[] = [];

      for (let i = 0; i < count; i++) {
        fireflies.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 3 + 2,
          opacity: Math.random() * 0.5 + 0.3,
          fadeDirection: Math.random() > 0.5 ? 1 : -1,
          phase: Math.random() * Math.PI * 2,
        });
      }

      return fireflies;
    };

    firefliesRef.current = createFireflies();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      firefliesRef.current.forEach((firefly) => {
        firefly.x += firefly.vx;
        firefly.y += firefly.vy;

        if (firefly.x < 0) firefly.x = canvas.width;
        if (firefly.x > canvas.width) firefly.x = 0;
        if (firefly.y < 0) firefly.y = canvas.height;
        if (firefly.y > canvas.height) firefly.y = 0;

        firefly.opacity += firefly.fadeDirection * 0.005;
        if (firefly.opacity >= 0.8) {
          firefly.fadeDirection = -1;
        } else if (firefly.opacity <= 0.2) {
          firefly.fadeDirection = 1;
        }

        const gradient = ctx.createRadialGradient(
          firefly.x,
          firefly.y,
          0,
          firefly.x,
          firefly.y,
          firefly.size * 3
        );

        gradient.addColorStop(0, `rgba(255, 223, 100, ${firefly.opacity})`);
        gradient.addColorStop(0.4, `rgba(255, 200, 80, ${firefly.opacity * 0.6})`);
        gradient.addColorStop(1, 'rgba(255, 180, 50, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(firefly.x, firefly.y, firefly.size * 3, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
