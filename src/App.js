import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TiArrowUpOutline } from "react-icons/ti";
import "./App.css";

// Components
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import VersionBadge from "./components/VersionBadge/VersionBadge";
import Loader from "./components/Loader/Loader";
import Certifications from "./components/Certifications/Certifications";
import TechStackModal from "./components/TechStackModal/TechStackModal";

function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle Initial Loading Screen
  useEffect(() => {
    const LOAD_TIME = 2000;
    const timer = setTimeout(() => {
      setLoading(false);
    }, LOAD_TIME);

    return () => clearTimeout(timer);
  }, []);

  // Theme Sync
  useEffect(() => {
    const savedColor = localStorage.getItem("portfolioThemeColor") || "#00abf0";
    document.documentElement.style.setProperty("--main-color", savedColor);
  }, []);

  // Scroll Spy & Floating Scroll-To-Top Trigger
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Query both sections and div containers with IDs
      const sections = document.querySelectorAll("div[id], section[id]");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth Scroll Handler to Top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loader key="loader" />
      ) : (
        <motion.div
          key="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <Header
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
          <Home />
          <About />
          <Services />
          <Portfolio />
          <Education />
          <Skills />
          <Certifications />
          <Contact />

          {/* FOOTER */}
          <footer className="w-full bg-[var(--second-bg-color)] border-t border-[#ededed]/10 py-6 px-6 sm:px-12 md:px-16 lg:px-20 flex justify-center">
            <div className="w-full max-w-[125rem] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-[1.4rem] sm:text-[1.5rem] text-[#ededed]">
              <p className="text-center sm:text-left text-[#ededed]/80">
                © 2026  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ededed] to-[var(--main-color)]">
              Abhijit Sahoo
            </span>. All rights reserved.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <VersionBadge />
                <span className="text-[#ededed]/30">•</span>
                <TechStackModal />
              </div>
            </div>
          </footer>

          {/* FLOATING SCROLL-TO-TOP BUTTON */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed bottom-24 right-8 z-[99]"
              >
                <button
                  onClick={scrollToTop}
                  aria-label="Scroll to top"
                  className="relative flex justify-center items-center w-[4.2rem] h-[4.2rem] border-[0.2rem] border-[var(--main-color)] rounded-[0.8rem] text-[var(--main-color)] bg-[#081b29]/80 backdrop-blur-md overflow-hidden transition-all duration-500 hover:text-[#081b29] shadow-[0_0_15px_rgba(0,171,240,0.3)] group cursor-pointer"
                >
                  <span className="absolute top-0 left-0 w-0 h-full -z-10 transition-all duration-500 group-hover:w-full bg-[var(--main-color)]" />
                  <TiArrowUpOutline size={26} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;