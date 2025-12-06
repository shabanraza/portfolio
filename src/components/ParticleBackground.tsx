import { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    // Determine colors based on theme - Emerald Teal
    const isDark = theme === 'dark';
    // Teal-400 (Hex: #2dd4bf -> RGB: 45, 212, 191) for dark mode
    // Teal-600 (Hex: #0d9488 -> RGB: 13, 148, 136) for light mode
    const particleColor = isDark ? 'rgba(45, 212, 191, 0.25)' : 'rgba(13, 148, 136, 0.3)'; 
    const lineColorBase = isDark ? '45, 212, 191' : '13, 148, 136';

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 1.5 + 0.5; // Smaller, more subtle particles
        this.speedX = Math.random() * 0.3 - 0.15; // Slower, floating movement
        this.speedY = Math.random() * 0.3 - 0.15;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas!.width) this.x = 0;
        if (this.x < 0) this.x = canvas!.width;
        if (this.y > canvas!.height) this.y = 0;
        if (this.y < 0) this.y = canvas!.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = particleColor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      // Moderate density for clean look
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 15000); 
      
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        
        // Draw connections
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 130) { 
            ctx.beginPath();
            // Very subtle lines to not distract from text
            const opacity = 0.15 * (1 - distance / 130); 
            ctx.strokeStyle = `rgba(${lineColorBase}, ${opacity})`;
            ctx.lineWidth = 0.5; 
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]); 

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ background: 'var(--bg-gradient)' }}
    />
  );
};
