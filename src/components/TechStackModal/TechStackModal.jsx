import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiX,
  FiCode,
  FiLayers,
  FiSend,
  FiCpu,
  FiSettings,
  FiCheckCircle,
  FiTerminal,
  FiBox,
  FiExternalLink,
} from "react-icons/fi";

const portfolioStack = [
  {
    id: "core",
    category: "Core UI Framework",
    icon: <FiCode className="text-[var(--main-color)]" />,
    packages: [
      {
        name: "React",
        version: "18.2.0",
        desc: "Core JavaScript library for building component-based interfaces.",
        link: "https://react.dev/",
      },
      {
        name: "React DOM",
        version: "18.2.0",
        desc: "DOM rendering engine for web applications.",
        link: "https://react.dev/reference/react-dom",
      },
      {
        name: "React Router DOM",
        version: "7.18.2",
        desc: "Modern multi-page client-side routing & page navigation engine.",
        link: "https://reactrouter.com/",
      },
    ],
  },
  {
    id: "styling",
    category: "Styling & Motion",
    icon: <FiLayers className="text-[var(--main-color)]" />,
    packages: [
      {
        name: "Tailwind CSS",
        version: "3.4.19",
        desc: "Utility-first responsive styling engine.",
        link: "https://tailwindcss.com/",
      },
      {
        name: "Framer Motion",
        version: "12.38.0",
        desc: "Smooth animations and layout morphing transitions.",
        link: "https://www.framer.com/motion/",
      },
      {
        name: "React Icons",
        version: "5.1.0",
        desc: "Comprehensive modern SVG icon suite wrapper.",
        link: "https://react-icons.github.io/react-icons/",
      },
    ],
  },
  {
    id: "services",
    category: "Forms & Utilities",
    icon: <FiSend className="text-[var(--main-color)]" />,
    packages: [
      {
        name: "EmailJS Browser",
        version: "4.4.1",
        desc: "Client-side email integration engine without backend.",
        link: "https://www.emailjs.com/",
      },
      {
        name: "SweetAlert2",
        version: "11.10.8",
        desc: "Interactive customizable alert and modal notification library.",
        link: "https://sweetalert2.github.io/",
      },
      {
        name: "Axios",
        version: "1.6.8",
        desc: "Promise-based HTTP client for REST API communication.",
        link: "https://axios-http.com/",
      },
      {
        name: "jsPDF",
        version: "4.2.1",
        desc: "Client-side vector PDF generation engine for CV download.",
        link: "https://github.com/parallax/jsPDF",
      },
    ],
  },
  {
    id: "tooling",
    category: "Build & Tooling",
    icon: <FiSettings className="text-[var(--main-color)]" />,
    packages: [
      {
        name: "React Scripts",
        version: "5.0.1",
        desc: "Webpack and Babel compilation build configuration engine.",
        link: "https://create-react-app.dev/",
      },
      {
        name: "Web Vitals",
        version: "2.1.4",
        desc: "Real-time user experience metrics and load benchmarks.",
        link: "https://github.com/GoogleChrome/web-vitals",
      },
    ],
  },
];

export default function TechStackModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Escape key click kale modal close heba
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Clean Scroll Lock (Layout re jump nathai body au main container lock heba)
  useEffect(() => {
    const scrollContainer = document.getElementById("main-scroll-area");
    if (isOpen) {
      document.body.style.overflow = "hidden";
      if (scrollContainer) scrollContainer.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      if (scrollContainer) scrollContainer.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "";
      if (scrollContainer) scrollContainer.style.overflow = "auto";
    };
  }, [isOpen]);

  const filteredCategories =
    activeTab === "all"
      ? portfolioStack
      : portfolioStack.filter((cat) => cat.id === activeTab);

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div
          id="tech-stack-portal-modal"
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{ willChange: "transform, opacity" }}
            className="relative w-full max-w-[850px] max-h-[85vh] flex flex-col bg-[var(--second-bg-color)] border border-[var(--border-color)] rounded-[2rem] p-5 sm:p-7 text-[var(--text-color)] shadow-2xl z-10 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[var(--border-color)] relative z-10 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[var(--main-color)]/10 border border-[var(--main-color)]/30 flex items-center justify-center text-[var(--main-color)] text-[1.8rem] sm:text-[2rem]">
                  <FiTerminal />
                </div>
                <div>
                  <h3 className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[var(--text-color)] leading-tight">
                    Licensing & System Info
                  </h3>
                  <p className="text-[1.1rem] sm:text-[1.2rem] text-[var(--main-color)] font-mono font-medium">
                    Portfolio Engine • React 18 & Router 7
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close Modal"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[var(--bg-color)] hover:bg-[var(--main-color)] hover:text-white text-[var(--text-color)] flex items-center justify-center transition-colors cursor-pointer shrink-0 border border-[var(--border-color)] shadow-xs"
              >
                <FiX className="text-[1.8rem]" />
              </button>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center gap-2 my-4 overflow-x-auto pb-2 shrink-0 relative z-10 no-scrollbar">
              <button
                type="button"
                onClick={() => setActiveTab("all")}
                className={`px-3.5 py-1.5 rounded-lg text-[1.1rem] sm:text-[1.2rem] font-semibold whitespace-nowrap transition-colors cursor-pointer shadow-xs ${
                  activeTab === "all"
                    ? "bg-[var(--main-color)] text-white font-bold shadow-md"
                    : "bg-[var(--bg-color)] text-[var(--text-muted)] hover:text-[var(--text-color)] border border-[var(--border-color)]"
                }`}
              >
                All Packages
              </button>
              {portfolioStack.map((cat) => (
                <button
                  type="button"
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-[1.1rem] sm:text-[1.2rem] font-semibold whitespace-nowrap transition-colors cursor-pointer shadow-xs ${
                    activeTab === cat.id
                      ? "bg-[var(--main-color)] text-white font-bold shadow-md"
                      : "bg-[var(--bg-color)] text-[var(--text-muted)] hover:text-[var(--text-color)] border border-[var(--border-color)]"
                  }`}
                >
                  {cat.category}
                </button>
              ))}
            </div>

            {/* Scrollable Body Content */}
            <div className="flex-1 overflow-y-auto space-y-5 pr-2 relative z-10 no-scrollbar">
              {filteredCategories.map((cat) => (
                <div
                  key={cat.id}
                  className="bg-[var(--bg-color)]/70 p-4 sm:p-5 rounded-2xl border border-[var(--border-color)] hover:border-[var(--main-color)]/40 transition-colors shadow-xs"
                >
                  <div className="flex items-center gap-2.5 text-[1.4rem] sm:text-[1.5rem] font-bold text-[var(--text-color)] mb-3">
                    {cat.icon}
                    <h4>{cat.category}</h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {cat.packages.map((pkg, pIdx) => (
                      <a
                        key={pIdx}
                        href={pkg.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/card bg-[var(--second-bg-color)] p-3.5 rounded-xl border border-[var(--border-color)] hover:border-[var(--main-color)] transition-all flex flex-col justify-between cursor-pointer hover:shadow-md"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <div className="flex items-center gap-2">
                              <FiBox className="text-[var(--main-color)] text-[1.2rem]" />
                              <span className="text-[1.2rem] sm:text-[1.3rem] font-bold text-[var(--text-color)] group-hover/card:text-[var(--main-color)] transition-colors flex items-center gap-1.5">
                                {pkg.name}
                                <FiExternalLink className="text-[1.1rem] opacity-0 group-hover/card:opacity-100 transition-opacity text-[var(--main-color)]" />
                              </span>
                            </div>
                            <span className="text-[1rem] sm:text-[1.1rem] px-2 py-0.5 rounded-md bg-[var(--main-color)]/10 text-[var(--main-color)] font-mono font-semibold border border-[var(--main-color)]/30">
                              v{pkg.version}
                            </span>
                          </div>
                          <p className="text-[1.1rem] text-[var(--text-muted)] leading-relaxed">
                            {pkg.desc}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-4 pt-3 border-t border-[var(--border-color)] flex flex-wrap justify-between items-center text-[1.1rem] sm:text-[1.2rem] text-[var(--text-muted)] relative z-10 shrink-0">
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-[var(--main-color)]" />
                <span>Verified Client Dependencies</span>
              </div>
              <span className="font-mono text-[var(--main-color)] font-semibold">
                Designed by Abhijit Sahoo
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <motion.button
        type="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="relative group inline-flex items-center gap-2 px-3.5 py-1.5 bg-[var(--second-bg-color)] hover:bg-[var(--main-color)] text-[var(--main-color)] hover:text-white border border-[var(--main-color)]/30 hover:border-[var(--main-color)] rounded-lg text-[1.2rem] sm:text-[1.3rem] font-semibold transition-all duration-300 cursor-pointer overflow-hidden shadow-xs"
      >
        <FiCpu className="text-[1.4rem] group-hover:rotate-180 transition-transform duration-500" />
        <span>System Architecture</span>
      </motion.button>

      {mounted && createPortal(modalContent, document.body)}
    </>
  );
}