import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Loader = ({ initial = "A", onComplete }) => {
  const [progress, setProgress] = useState(0);
  const canvasRef = useRef(null);

  // Smooth percentage counter loop over 1.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          if (onComplete) setTimeout(onComplete, 300); // trigger exit after hitting 100%
          return 100;
        }
        return prev + 1;
      });
    }, 15);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Background Interactive Particles Canvas Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: Math.random() * 2 + 1,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 171, 240, 0.35)";
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 171, 240, ${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#081b29] overflow-hidden select-none"
    >
  

  

      {/* 🔄 5. MAIN SPINNER RING & CENTER DISPLAY */}
      <div className="relative flex items-center justify-center z-10">
        {/* Outer Pulsing Particle Ring */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.6, 0.15] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-56 h-56 rounded-full border border-[var(--main-color,#00abf0)] shadow-[0_0_35px_var(--main-color,#00abf0)]"
        />

        {/* Orbiting Particle Dots */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute w-48 h-48 rounded-full"
        >
          <span className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[var(--main-color,#00abf0)] rounded-full shadow-[0_0_12px_var(--main-color,#00abf0)]" />
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[var(--main-color,#00abf0)] rounded-full shadow-[0_0_12px_var(--main-color,#00abf0)]" />
        </motion.div>

        {/* Middle Counter-Rotating Neon Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
          className="absolute w-44 h-44 rounded-full border-[3px] border-t-transparent border-b-[var(--main-color,#00abf0)] border-l-transparent border-r-[var(--main-color,#00abf0)] drop-shadow-[0_0_10px_var(--main-color,#00abf0)]"
        />

        {/* Inner Fast Spinning Gradient Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-36 h-36 rounded-full border-[5px] border-t-[var(--main-color,#00abf0)] border-r-transparent border-b-[var(--main-color,#00abf0)] border-l-transparent shadow-[0_0_20px_var(--main-color,#00abf0)]"
        />

        {/* Center Monogram / Logo Initial */}
        <div className="absolute flex flex-col items-center justify-center">
          <span className="text-6xl font-black text-[var(--main-color,#00abf0)] tracking-wider drop-shadow-[0_0_15px_var(--main-color,#00abf0)] uppercase">
            {initial}
          </span>
        </div>
      </div>

      {/* 📊 6. PERCENTAGE & STATUS DISPLAY */}
      <div className="mt-10 flex flex-col items-center z-10">
        <motion.p
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          className="mt-14 text-lg font-extrabold tracking-[0.25em] text-[var(--main-color,#00abf0)] drop-shadow-[0_0_6px_var(--main-color,#00abf0)] uppercase"
        >
          {progress < 100 ? `Loading... ${progress}%` : "Welcome!"}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loader;