import React, { useState, useEffect, } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiChevronLeft,
  FiChevronRight,
  FiHome,
  FiUser,
  FiServer,
  FiBriefcase,
  FiCpu,
  FiBookOpen,
  FiAward,
  FiMail,
} from "react-icons/fi";

const navItems = [
  { name: "Home", path: "/home", icon: FiHome },
  { name: "About", path: "/about", icon: FiUser },
  { name: "Services", path: "/services", icon: FiServer },
  { name: "Projects", path: "/projects", icon: FiBriefcase },
  { name: "Skills", path: "/skills", icon: FiCpu },
  { name: "Education", path: "/education", icon: FiBookOpen },
  { name: "Certifications", path: "/certifications", icon: FiAward },
  { name: "Contact", path: "/contact", icon: FiMail },
];

function hexToRgba(hex, alpha) {
  if (!hex) return "rgba(0,0,0,0)";
  let c = hex.replace("#", "").trim();
  if (c.length === 3) c = c.split("").map((x) => x + x).join("");
  const num = parseInt(c, 16);
  return `rgba(${(num >> 16) & 255}, ${(num >> 8) & 255}, ${num & 255}, ${alpha})`;
}

const Sidebar = ({ isPinned, setIsPinned, isSidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);

  // Hidden state managed via custom events/localStorage
  const [isSidebarHidden, setIsSidebarHidden] = useState(
    () => localStorage.getItem("portfolioSidebarHidden") === "true"
  );

  const isExpanded = isPinned || isHovered;

  const [currentColor, setCurrentColor] = useState(
    () => localStorage.getItem("portfolioThemeColor") || "#00abf0"
  );

  const [isDark, setIsDark] = useState(() => {
    return (
      document.documentElement.classList.contains("dark") ||
      document.documentElement.getAttribute("data-theme") === "dark" ||
      localStorage.getItem("portfolioColorMode") === "dark"
    );
  });

  useEffect(() => {
    const handleThemeChange = () => {
      const saved = localStorage.getItem("portfolioThemeColor") || "#00abf0";
      setCurrentColor(saved);
    };

    const handleSidebarConfigChange = (e) => {
      if (e?.detail?.source === "sidebar-pin-btn") return;

      const isHidden = localStorage.getItem("portfolioSidebarHidden") === "true";
      setIsSidebarHidden(isHidden);

      const savedPinned = localStorage.getItem("portfolioSidebarPinned");
      if (savedPinned !== null && setIsPinned) {
        setIsPinned(savedPinned === "true");
      }
    };

    window.addEventListener("storage", handleThemeChange);
    window.addEventListener("portfolioSidebarChanged", handleSidebarConfigChange);
    const interval = setInterval(handleThemeChange, 800);

    const observer = new MutationObserver(() => {
      const themeAttr = document.documentElement.getAttribute("data-theme");
      const hasDarkClass = document.documentElement.classList.contains("dark");
      setIsDark(themeAttr === "dark" || hasDarkClass);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme", "class"],
    });

    return () => {
      window.removeEventListener("storage", handleThemeChange);
      window.removeEventListener("portfolioSidebarChanged", handleSidebarConfigChange);
      clearInterval(interval);
      observer.disconnect();
    };
  }, [setIsPinned]);

  // Arrow button click handler
  const togglePin = (e) => {
    e.stopPropagation();
    const nextPinned = !isPinned;

    if (setIsPinned) {
      setIsPinned(nextPinned);
    }

    if (!nextPinned) {
      setIsHovered(false);
    }

    localStorage.setItem("portfolioSidebarPinned", nextPinned.toString());

    // Dispatch custom event to notify SettingsDrawer
    window.dispatchEvent(
      new CustomEvent("portfolioSidebarChanged", {
        detail: { source: "sidebar-pin-btn", isPinned: nextPinned },
      })
    );
  };

  const dynamicDeepBg = hexToRgba(currentColor, isDark ? 0.35 : 0.18);

  const checkIsActive = (path) => {
    if (path === "/home") {
      return location.pathname === "/home" || location.pathname === "/";
    }
    return location.pathname === path;
  };


  if (isSidebarHidden) return null;

  return (
    <>
      {/* DESKTOP SIDEBAR */}
      <motion.aside
        onMouseEnter={() => {
          if (!isPinned) setIsHovered(true);
        }}
        onMouseLeave={() => setIsHovered(false)}
        initial={false}
        animate={{
          width: isExpanded ? 255 : 80,
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="hidden md:flex fixed top-0 left-0 bottom-0 z-40 flex-col justify-between border-r border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-md text-[var(--text-color)] shadow-xl transition-colors duration-300"
      >
        {/* PIN / COLLAPSE BUTTON */}
        <button
          type="button"
          onClick={togglePin}
          aria-label={isPinned ? "Unpin Sidebar" : "Pin Sidebar"}
          title={isPinned ? "Click to Collapse Sidebar" : "Click to Pin & Keep Open"}
          className="absolute -right-3.5 top-6 w-9 h-9 rounded-full bg-[var(--main-color)] text-white flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-all cursor-pointer z-50 border-2 border-[var(--card-bg)]"
        >
          {isPinned ? <FiChevronLeft size={18} /> : <FiChevronRight size={18} />}
        </button>

        {/* LOGO & NAVIGATION */}
        <div className="flex flex-col flex-1 overflow-hidden">
          {/* BRAND */}
          <div className="h-[72px] flex items-center px-4 border-b border-[var(--border-color)] gap-3 shrink-0">
            <div className="min-w-[42px] h-[42px] rounded-xl bg-[var(--main-color)] text-white flex items-center justify-center font-black text-[1.5rem] shadow-md shadow-[var(--main-color)]/25">
              AS
            </div>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden whitespace-nowrap"
                >
                  <h2 className="text-[1.5rem] font-bold leading-tight text-[var(--text-color)]">
                    Abhijit Sahoo
                  </h2>
                  <p className="text-[1.1rem] text-[var(--text-muted)] font-medium">
                    Web Developer
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* MENU LINKS */}
          <nav className="mt-4 pl-3 pr-2 flex flex-col gap-2 overflow-y-auto no-scrollbar relative">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = checkIsActive(item.path);

              return (
                <div key={item.path} className="relative flex items-stretch w-full">
                  <NavLink
                    to={item.path}
                    style={{
                      backgroundColor: isActive ? dynamicDeepBg : "transparent",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = dynamicDeepBg;
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = "transparent";
                      }
                    }}
                    className={`group flex-1 mr-2.5 flex items-center gap-3.5 px-3.5 py-3 rounded-xl text-[1.4rem] font-medium transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "text-[var(--text-color)] font-bold shadow-xs"
                        : "text-[var(--text-color)]/75 hover:text-[var(--text-color)] hover:translate-x-1"
                    }`}
                  >
                    <div className="min-w-[22px] flex items-center justify-center text-[1.8rem] transition-transform duration-200 group-hover:scale-110">
                      <Icon />
                    </div>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.span
                          initial={{ opacity: 0, x: -6 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -6 }}
                          transition={{ duration: 0.15 }}
                          className="whitespace-nowrap"
                        >
                          {item.name}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </NavLink>

                  {isActive && (
                    <motion.span
                      layoutId="activeIndicatorDesktop"
                      className="absolute -right-2 top-0 bottom-0 w-[4px] rounded-full bg-[var(--main-color)] shadow-[0_0_12px_var(--main-color)] pointer-events-none"
                    />
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </motion.aside>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[98] md:hidden"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 bottom-0 w-[260px] z-[99] bg-[var(--card-bg)] backdrop-blur-xl border-r border-[var(--border-color)] shadow-2xl md:hidden flex flex-col justify-between"
            >
              <div className="flex flex-col flex-1">
                <div className="h-[72px] flex items-center px-5 border-b border-[var(--border-color)] gap-3 shrink-0">
                  <div className="min-w-[42px] h-[42px] rounded-xl bg-[var(--main-color)] text-white flex items-center justify-center font-black text-[1.5rem] shadow-md shadow-[var(--main-color)]/25">
                    AS
                  </div>
                  <div>
                    <h2 className="text-[1.5rem] font-bold text-[var(--text-color)]">
                      Abhijit Sahoo
                    </h2>
                    <p className="text-[1.1rem] text-[var(--text-muted)]">Web Developer</p>
                  </div>
                </div>

                <nav className="mt-4 pl-3 pr-2 flex flex-col gap-2 relative">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = checkIsActive(item.path);

                    return (
                      <div key={item.path} className="relative flex items-stretch w-full">
                        <NavLink
                          to={item.path}
                          onClick={() => setSidebarOpen(false)}
                          style={{
                            backgroundColor: isActive ? dynamicDeepBg : "transparent",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = dynamicDeepBg;
                          }}
                          onMouseLeave={(e) => {
                            if (!isActive) {
                              e.currentTarget.style.backgroundColor = "transparent";
                            }
                          }}
                          className={`flex-1 mr-2.5 flex items-center justify-between px-3.5 py-3 rounded-xl text-[1.45rem] font-medium transition-all duration-200 ${
                            isActive
                              ? "text-[var(--text-color)] font-bold shadow-xs"
                              : "text-[var(--text-color)]/80 hover:translate-x-1"
                          }`}
                        >
                          <div className="flex items-center gap-3.5">
                            <Icon size={20} />
                            <span>{item.name}</span>
                          </div>
                        </NavLink>

                        {isActive && (
                          <span className="absolute -right-2 top-0 bottom-0 w-[4px] rounded-full bg-[var(--main-color)] shadow-[0_0_12px_var(--main-color)] pointer-events-none" />
                        )}
                      </div>
                    );
                  })}
                </nav>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;