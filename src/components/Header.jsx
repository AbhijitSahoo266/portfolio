import React, { useEffect, useRef } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import ThemeSwitcher from "../config/ThemeSwitcher";

// Animation variants for individual letters
const letterContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
  hover: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const letterVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
  hover: {
    y: -8,
    scale: 1.15,
    color: "#ffffff",
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
};

const AnimatedLogoText = ({ text }) => {
  return (
    <motion.div
      className="flex items-center space-x-1 cursor-pointer select-none"
      variants={letterContainerVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      {text.split("").map((char, index) => {
        if (char === " ") {
          return <span key={index} className="w-2 sm:w-3" />;
        }
        return (
          <motion.span
            key={index}
            variants={letterVariants}
            className="inline-block text-[1.5rem] sm:text-[2rem] text-white font-extrabold"
          >
            {char}
          </motion.span>
        );
      })}
    </motion.div>
  );
};

const Header = ({ menuOpen, setMenuOpen, activeSection, setActiveSection }) => {
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setMenuOpen]);

  const sections = ["home", "about", "services", "projects", "education", "skills", "contact"];

  return (
    <header
      style={{
        backgroundColor: "color-mix(in srgb, var(--main-color) 90%, transparent)",
      }}
      className="fixed top-0 left-0 w-full flex justify-between items-center z-[100] px-[4%] py-[1.5rem] backdrop-blur-md shadow-md border-[var(--main-color)]/30 transition-colors duration-300"
    >
      {/* ANIMATED CARTOON/BOUNCY LOGO */}
      <a href="#home">
        <AnimatedLogoText text="ABHIJIT SAHOO" />
      </a>

      {/* RIGHT SIDE CONTAINER: DESKTOP NAVBAR + THEME SWITCHER + MOBILE ICON */}
      <div className="flex items-center gap-6">
        {/* DESKTOP NAVBAR */}
        <nav className="hidden md:flex items-center">
          {sections.map((sec) => {
            const isActive = activeSection === sec;
            return (
              <a
                key={sec}
                href={`#${sec}`}
                onClick={() => setActiveSection(sec)}
                className={`text-[1.7rem] font-medium ml-[2.5rem] transition-colors duration-300 relative ${
                  isActive ? "text-white" : "text-white/80 hover:text-white"
                }`}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
                {isActive && (
                  <motion.span
                    layoutId="activeSectionUnderline"
                    className="absolute left-0 -bottom-1 w-full h-[2px] bg-white"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* THEME SWITCHER */}
        <ThemeSwitcher />

        {/* MOBILE MENU ICON */}
        <motion.div
          whileTap={{ scale: 0.8 }}
          className="text-[2.2rem] sm:text-[2.6rem] text-white cursor-pointer md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </motion.div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            ref={navRef}
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              backgroundColor: "color-mix(in srgb, var(--main-color) 95%, black 20%)",
            }}
            className="absolute top-full left-0 w-full backdrop-blur-md shadow-lg md:hidden border-b border-[var(--main-color)]"
          >
            <div className="flex flex-col items-start p-6">
              {sections.map((sec) => {
                const isActive = activeSection === sec;
                return (
                  <a
                    key={sec}
                    href={`#${sec}`}
                    onClick={() => {
                      setMenuOpen(false);
                      setActiveSection(sec);
                    }}
                    className={`text-[1.6rem] font-medium my-[1rem] transition-colors duration-300 ${
                      isActive
                        ? "text-white font-bold underline underline-offset-8 decoration-2 decoration-white"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {sec.charAt(0).toUpperCase() + sec.slice(1)}
                  </a>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;