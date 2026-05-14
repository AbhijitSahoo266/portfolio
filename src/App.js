import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TiArrowUpOutline } from "react-icons/ti";
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollY = window.scrollY;

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

  return (
    
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
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
      <Testimonials />
      <Contact />

      {/* FOOTER */}
      <footer className="flex justify-between items-center flex-wrap px-10 py-[1rem] bg-[#112e42]">

        {/* TEXT */}
        <div className="text-[1.6rem] text-[#ededed]">
          <p>© 2026 Abhijit Sahoo. All rights reserved.</p>
        </div>

        {/* TOP ICON */}
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <a
            href="#home"
            className="relative flex justify-center items-center w-[4rem] h-[4rem] border-[0.2rem] border-[#00abf0] rounded-[0.6rem] text-[#00abf0] overflow-hidden transition-all duration-500 hover:text-[#081b29]"
          >
            <span
              className="absolute top-0 left-0 w-0 h-full -z-10 transition-all duration-500"
              style={{ background: "#00abf0" }}
            ></span>

            <TiArrowUpOutline size={24} />
          </a>
        </motion.div>
      </footer>
    </motion.div>
  );
}

export default App;