import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FiArrowUpRight, FiAlertTriangle } from "react-icons/fi";

const CustomCursor = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth lag physics
  const springConfig = { damping: 28, stiffness: 350, mass: 0.3 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target;
      const clickable = target.closest("a, button, [role='button'], input, textarea, select, .cursor-pointer");
      const errorTarget = target.closest(".cursor-error, [data-cursor='error']");

      setIsPointer(!!clickable);
      setIsError(!!errorTarget);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      {/* 1. Trailing Transparent Ring (Text Clear Dekha Jiba) */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="fixed top-0 left-0 rounded-full border pointer-events-none flex items-center justify-center transition-colors duration-150"
        animate={{
          width: isPointer ? 48 : isError ? 44 : 32,
          height: isPointer ? 48 : isError ? 44 : 32,
          // Background pura transparent rahiba text dekha jiba pain
          backgroundColor: isError
            ? "rgba(239, 68, 68, 0.08)"
            : isPointer
            ? "rgba(255, 255, 255, 0.04)"
            : "transparent",
          borderColor: isError
            ? "#ef4444"
            : isPointer
            ? "var(--main-color, #00abf0)"
            : "rgba(255, 255, 255, 0.4)",
          borderWidth: isPointer ? "2px" : "1.5px",
        }}
        transition={{ type: "spring", stiffness: 450, damping: 28 }}
      >
        {/* Hover kale center icon hide heijiba text clear padhiba pain */}
        {isError ? (
          <FiAlertTriangle className="text-red-500 text-[1.4rem] animate-pulse" />
        ) : (
          <motion.div
            animate={{
              opacity: isPointer ? 0 : 0.8,
              scale: isPointer ? 0 : 0.85,
            }}
            transition={{ duration: 0.15 }}
          >
            <FiArrowUpRight className="text-[var(--main-color,#00abf0)] text-[1.2rem]" />
          </motion.div>
        )}
      </motion.div>

      {/* 2. Micro Dot Target (Hover kale expands softly with zero obstruction) */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="fixed top-0 left-0 rounded-full pointer-events-none"
        animate={{
          width: isPointer ? 6 : 4,
          height: isPointer ? 6 : 4,
          backgroundColor: isError ? "#ef4444" : "var(--main-color, #00abf0)",
          opacity: isPointer ? 0.7 : 1,
        }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
};

export default CustomCursor;