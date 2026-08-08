import React, { useState, useEffect } from "react";
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
  FiFileText
} from "react-icons/fi";

const portfolioStack = [
  {
    id: "core",
    category: "Core UI Framework",
    icon: <FiCode className="text-[var(--main-color)]" />,
    packages: [
      { name: "React", version: "18.2.0", desc: "Core JavaScript library for building component-based interfaces.", link: "https://react.dev/" },
      { name: "React DOM", version: "18.2.0", desc: "DOM rendering engine for web applications.", link: "https://react.dev/reference/react-dom" },
      { name: "React Router DOM", version: "7.18.2", desc: "Client-side routing and page transitions.", link: "https://reactrouter.com/" },
    ],
  },
  {
    id: "styling",
    category: "Styling & Motion",
    icon: <FiLayers className="text-[var(--main-color)]" />,
    packages: [
      { name: "Tailwind CSS", version: "3.4.19", desc: "Utility-first responsive design framework.", link: "https://tailwindcss.com/" },
      { name: "Framer Motion", version: "12.38.0", desc: "Production-ready animation engine for fluid UI interactions.", link: "https://www.framer.com/motion/" },
      { name: "React Icons", version: "5.1.0", desc: "Comprehensive icon suite wrapper.", link: "https://react-icons.github.io/react-icons/" },
      { name: "React Scroll", version: "1.9.3", desc: "Smooth scroll navigation for single-page applications.", link: "https://www.npmjs.com/package/react-scroll" },
    ],
  },
  {
    id: "services",
    category: "Forms & Utilities",
    icon: <FiSend className="text-[var(--main-color)]" />,
    packages: [
      { name: "EmailJS Browser", version: "4.4.1", desc: "Client-side email integration engine.", link: "https://www.emailjs.com/" },
      { name: "SweetAlert2", version: "11.10.8", desc: "Custom popup modal and toast notification library.", link: "https://sweetalert2.github.io/" },
      { name: "SweetAlert2 React Content", version: "5.0.7", desc: "React component wrapper for SweetAlert2 modals.", link: "https://github.com/sweetalert2/sweetalert2-react-content" },
      { name: "Axios", version: "1.6.8", desc: "Promise-based HTTP client for REST API communication.", link: "https://axios-http.com/" },
      { name: "jsPDF", version: "4.2.1", desc: "Client-side PDF generation engine for CV download.", link: "https://github.com/parallax/jsPDF" },
    ],
  },
  {
    id: "tooling",
    category: "Build & Tooling",
    icon: <FiSettings className="text-[var(--main-color)]" />,
    packages: [
      { name: "React Scripts", version: "5.0.1", desc: "Webpack and Babel build configuration engine.", link: "https://create-react-app.dev/" },
      { name: "Web Vitals", version: "2.1.4", desc: "Real-time performance and UX health metrics.", link: "https://github.com/GoogleChrome/web-vitals" },
    ],
  },
];

export default function TechStackModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  // PREVENT BODY SCROLL WHEN MODAL IS OPEN
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const filteredCategories =
    activeTab === "all"
      ? portfolioStack
      : portfolioStack.filter((cat) => cat.id === activeTab);

  return (
    <>
      {/* TRIGGER BUTTON */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="relative group inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#112e42]/80 hover:bg-[var(--main-color)] text-[var(--main-color)] hover:text-[#081b29] border border-[var(--main-color)]/30 hover:border-[var(--main-color)] rounded-lg text-[1.2rem] sm:text-[1.3rem] font-semibold transition-all duration-300 cursor-pointer overflow-hidden"
      >
        <FiCpu className="text-[1.4rem] group-hover:rotate-180 transition-transform duration-500" />
        <span>System Architecture</span>
      </motion.button>

      {/* MODAL POPUP */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-[#081b29]/80 backdrop-blur-md">
            {/* Modal Overlay Click to Close */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-[850px] max-h-[85vh] flex flex-col bg-[#0b2234] border border-[var(--main-color)]/40 rounded-[2rem] p-5 sm:p-7 text-[#ededed] shadow-[0_0_50px_rgba(0,171,240,0.25)] z-10 overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#ededed]/10 relative z-10 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[var(--main-color)]/10 border border-[var(--main-color)]/30 flex items-center justify-center text-[var(--main-color)] text-[1.8rem] sm:text-[2rem]">
                    <FiTerminal />
                  </div>
                  <div>
                    <h3 className="text-[1.8rem] sm:text-[2.2rem] font-bold text-[#ededed] leading-tight">
                      Licensing & System Info
                    </h3>
                    <p className="text-[1.1rem] sm:text-[1.2rem] text-[var(--main-color)] font-mono font-medium">
                      Portfolio Engine v0.1.0 • React 18
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#112e42] hover:bg-[var(--main-color)] hover:text-[#081b29] text-[#ededed] flex items-center justify-center transition-all cursor-pointer shrink-0"
                >
                  <FiX className="text-[1.8rem]" />
                </button>
              </div>

              {/* Category Filter Tabs */}
              <div className="flex items-center gap-2 my-4 overflow-x-auto pb-2 shrink-0 relative z-10 scrollbar-none">
                <button
                  onClick={() => setActiveTab("all")}
                  className={`px-3.5 py-1.5 rounded-lg text-[1.1rem] sm:text-[1.2rem] font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                    activeTab === "all"
                      ? "bg-[var(--main-color)] text-[#081b29]"
                      : "bg-[#112e42]/60 text-[#ededed]/70 hover:text-[var(--main-color)]"
                  }`}
                >
                  All Packages
                </button>
                {portfolioStack.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`px-3.5 py-1.5 rounded-lg text-[1.1rem] sm:text-[1.2rem] font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                      activeTab === cat.id
                        ? "bg-[var(--main-color)] text-[#081b29]"
                        : "bg-[#112e42]/60 text-[#ededed]/70 hover:text-[var(--main-color)]"
                    }`}
                  >
                    {cat.category}
                  </button>
                ))}
              </div>

              {/* Scrollable Body Content */}
              <div className="flex-1 overflow-y-auto space-y-5 pr-2 relative z-10 custom-modal-scroll">
                {filteredCategories.map((cat) => (
                  <div
                    key={cat.id}
                    className="bg-[#112e42]/50 p-4 sm:p-5 rounded-2xl border border-[#ededed]/10 hover:border-[var(--main-color)]/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2.5 text-[1.4rem] sm:text-[1.5rem] font-bold text-[#ededed] mb-3">
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
                          className="group/card bg-[#081b29] p-3.5 rounded-xl border border-[var(--main-color)]/20 hover:border-[var(--main-color)] transition-all duration-300 flex flex-col justify-between cursor-pointer hover:shadow-[0_0_15px_rgba(0,171,240,0.15)]"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-1.5">
                              <div className="flex items-center gap-2">
                                <FiBox className="text-[var(--main-color)] text-[1.2rem]" />
                                <span className="text-[1.2rem] sm:text-[1.3rem] font-bold text-[#ededed] group-hover/card:text-[var(--main-color)] transition-colors flex items-center gap-1.5">
                                  {pkg.name}
                                  <FiExternalLink className="text-[1.1rem] opacity-0 group-hover/card:opacity-100 transition-opacity text-[var(--main-color)]" />
                                </span>
                              </div>
                              <span className="text-[1rem] sm:text-[1.1rem] px-2 py-0.5 rounded-md bg-[var(--main-color)]/10 text-[var(--main-color)] font-mono font-semibold border border-[var(--main-color)]/30">
                                v{pkg.version}
                              </span>
                            </div>
                            <p className="text-[1.1rem] text-[#ededed]/60 leading-relaxed">
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
              <div className="mt-4 pt-3 border-t border-[#ededed]/10 flex flex-wrap justify-between items-center text-[1.1rem] sm:text-[1.2rem] text-[#ededed]/60 relative z-10 shrink-0">
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-[var(--main-color)]" />
                  <span>Verified Client Dependencies</span>
                </div>
                <span className="font-mono text-[var(--main-color)]">
                  Designed by Abhijit Sahoo
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}