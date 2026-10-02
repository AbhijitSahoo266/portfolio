import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaExpand, FaCompress } from "react-icons/fa";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion } from "framer-motion";

const letterContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.1 },
  },
  hover: {
    transition: { staggerChildren: 0.02 },
  },
};

const letterVariants = {
  hidden: { y: -15, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
  hover: {
    y: -4,
    scale: 1.1,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
};

const AnimatedLogoText = ({ isDark }) => {
  const firstName = "ABHIJIT";
  const lastName = "SAHOO";

  return (
    <motion.div
      className="flex items-center space-x-1 cursor-pointer select-none text-[1.6rem] sm:text-[1.9rem] font-black tracking-tight"
      variants={letterContainerVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <div className="flex">
        {firstName.split("").map((char, index) => (
          <motion.span
            key={`first-${index}`}
            variants={letterVariants}
            className={`inline-block font-extrabold ${
              isDark ? "text-[#ededed]" : "text-white"
            }`}
          >
            {char}
          </motion.span>
        ))}
      </div>

      <span className="w-2" />

      <div className="flex">
        {lastName.split("").map((char, index) => (
          <motion.span
            key={`last-${index}`}
            variants={letterVariants}
            className={`inline-block font-extrabold ${
              isDark ? "text-[var(--main-color)]" : "text-white/90"
            }`}
          >
            {char}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const Header = ({ isSidebarOpen, setSidebarOpen, isDark, setIsDark }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleThemeMode = () => {
    const nextMode = isDark ? "light" : "dark";
    setIsDark(!isDark);
    document.documentElement.setAttribute("data-theme", nextMode);
    localStorage.setItem("portfolioColorMode", nextMode);
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error entering fullscreen: ${err.message}`);
      });
    } else if (document.exitFullscreen) {
      document.exitFullscreen().catch((err) => {
        console.error(`Error exiting fullscreen: ${err.message}`);
      });
    }
  };

  const headerStyle = isDark
    ? {
        backgroundColor: "rgba(8, 27, 41, 0.85)",
        borderColor: "rgba(255, 255, 255, 0.1)",
        color: "#ededed",
      }
    : {
        backgroundColor: "var(--main-color)",
        borderColor: "rgba(0, 0, 0, 0.08)",
        color: "#ffffff",
      };

  return (
    <header
      style={headerStyle}
      className="w-full backdrop-blur-md rounded-2xl shadow-md border px-5 h-[52px] flex items-center justify-between shrink-0"
    >
      {/* LEFT: MOBILE TOGGLE & ANIMATED LOGO */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          className={`md:hidden text-[2rem] p-1.5 rounded-lg cursor-pointer transition-colors ${
            isDark
              ? "text-[var(--text-color)] hover:bg-white/10"
              : "text-white hover:bg-black/15"
          }`}
          aria-label="Toggle Navigation"
        >
          <FaBars />
        </button>

        <Link to="/">
          <AnimatedLogoText isDark={isDark} />
        </Link>
      </div>

      {/* RIGHT: THEME SWITCH, FULLSCREEN & PROFILE AVATAR */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* THEME TOGGLE */}
        <motion.button
          type="button"
          whileTap={{ scale: 0.9 }}
          onClick={toggleThemeMode}
          title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          aria-label="Toggle theme mode"
          className={`w-10 h-10 rounded-xl flex items-center justify-center text-[1.8rem] transition-colors cursor-pointer ${
            isDark
              ? "bg-white/5 text-[var(--text-color)] hover:bg-[var(--main-color)] hover:text-white"
              : "bg-black/15 text-white hover:bg-black/25"
          }`}
        >
          {isDark ? <FiSun className="text-amber-400" /> : <FiMoon className="text-white" />}
        </motion.button>

        {/* FULLSCREEN */}
        <motion.button
          type="button"
          whileTap={{ scale: 0.9 }}
          onClick={toggleFullscreen}
          title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
          aria-label="Toggle Fullscreen"
          className={`hidden sm:flex w-10 h-10 rounded-xl items-center justify-center text-[1.6rem] transition-colors cursor-pointer ${
            isDark
              ? "bg-white/5 text-[var(--text-color)] hover:bg-[var(--main-color)] hover:text-white"
              : "bg-black/15 text-white hover:bg-black/25"
          }`}
        >
          {isFullscreen ? <FaCompress /> : <FaExpand />}
        </motion.button>

        {/* USER PROFILE AVATAR */}
        <div className="flex items-center gap-2 pl-1">
          <div
            className={`relative w-10 h-10 rounded-xl font-bold text-[1.4rem] flex items-center justify-center transition-colors ${
              isDark
                ? "bg-[var(--main-color)]/20 text-[var(--main-color)] border border-[var(--main-color)]/30"
                : "bg-white/20 text-white border border-white/30 backdrop-blur-sm shadow-sm"
            }`}
          >
            AS
            <span
              className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 ${
                isDark ? "border-[#081b29]" : "border-[var(--main-color)]"
              }`}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;