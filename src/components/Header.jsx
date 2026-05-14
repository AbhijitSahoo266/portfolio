import React, { useEffect, useRef } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const menuVariant = {
  hidden: { x: "-100%", opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: "easeOut",
      staggerChildren: 0.08,
    },
  },
  exit: {
    x: "-100%",
    opacity: 0,
    transition: { duration: 0.25 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0 },
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

  const sections = [
    "home",
    "about",
    "services",
    "portfolio",
    "education",
    "skills",
    "contact",
  ];

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center z-[100] px-[4%] py-[2rem] bg-[#00abf0]/50 backdrop-blur-md shadow-md">

      {/* MENU ICON (mobile only) */}
      <motion.div
        whileTap={{ scale: 0.8 }}
        className="text-[2.6rem] text-white cursor-pointer md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </motion.div>

      {/* LOGO */}
      <motion.a
        href="#home"
        whileHover={{ scale: 1.1 }}
        className="text-[2rem] text-white font-bold"
      >
        ABHIJIT SAHOO
      </motion.a>

      {/* NAVBAR (DESKTOP ALWAYS + MOBILE ANIMATED) */}

      {/* Desktop Menu */}
      <nav className="hidden md:flex md:items-center">
        {sections.map((sec) => {
          const isActive = activeSection === sec;

          return (
            <a
              key={sec}
              href={`#${sec}`}
              onClick={() => setActiveSection(sec)}
              className={`text-[1.7rem] font-medium ml-[3.5rem] transition-colors duration-300 relative ${
                isActive ? "text-[#ffff00]" : "text-white"
              }`}
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}

              {isActive && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#ffff00]" />
              )}
            </a>
          );
        })}
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            ref={navRef}
            variants={menuVariant}
            initial="hidden"
            animate="show"
            exit="exit"
            className="absolute top-full left-0 w-full bg-[#00abf0]/40 backdrop-blur-md shadow-lg md:hidden"
          >
            <motion.div className="flex flex-col items-start p-6">
              {sections.map((sec) => {
                const isActive = activeSection === sec;

                return (
                  <motion.a
                    key={sec}
                    variants={itemVariant}
                    href={`#${sec}`}
                    onClick={() => {
                      setMenuOpen(false);
                      setActiveSection(sec);
                    }}
                    className={`text-[1.7rem] font-medium my-[1rem] transition-colors ${
                      isActive ? "text-[#ffff00]" : "text-white"
                    }`}
                  >
                    {sec.charAt(0).toUpperCase() + sec.slice(1)}
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;