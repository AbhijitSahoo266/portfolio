import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoSettingsOutline, IoClose } from "react-icons/io5";
import {
  FiType,
  FiDroplet,
  FiRotateCcw,
  FiDownload,
  FiSun,
  FiLayout,
  FiSidebar,
  FiMinimize2,
  FiEyeOff,
  FiColumns,
} from "react-icons/fi";

import ThemeSwitcher from "../../../config/ThemeSwitcher";
import FontSwitcher from "../../../config/FontSwitcher";
import { generateAndDownloadCV } from "../../../utils/generateCV";
import VersionBadge from "../../VersionBadge/VersionBadge";
import TechStackModal from "../../TechStackModal/TechStackModal";
import ThemeModeSwitcher from "../../../config/ThemeModeSwitcher";

const LAYOUT_OPTIONS = [
  { id: "fixed", label: "Fixed" },
  { id: "static", label: "Static" },
  { id: "hidden", label: "Hidden" },
];

const MENU_LAYOUT_OPTIONS = [
  { id: "vertical", label: "Vertical" },
  { id: "horizontal", label: "Horizontal" },
];

/* Reusable Smooth CSS Toggle Switch */
const CustomToggleSwitch = ({ checked, onChange, ariaLabel }) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer select-none">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        aria-label={ariaLabel}
        className="sr-only peer"
      />
      <div
        className={`w-11 h-6 rounded-full transition-colors duration-200 ease-in-out ${
          checked ? "bg-[var(--main-color)]" : "bg-gray-400/40 dark:bg-gray-600/50"
        }`}
      />
      <div
        className={`absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-200 ease-in-out ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </label>
  );
};

const SettingsDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  // Menu Layout state ('vertical' | 'horizontal')
  const [menuLayout, setMenuLayout] = useState(
    () => localStorage.getItem("portfolioMenuLayout") || "vertical"
  );

  // Layout states ('fixed' | 'static' | 'hidden')
  const [appBarType, setAppBarType] = useState(
    () => localStorage.getItem("portfolioAppBarType") || "fixed"
  );
  const [footerType, setFooterType] = useState(
    () => localStorage.getItem("portfolioFooterType") || "fixed"
  );

  // Sidebar controls
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(
    () => localStorage.getItem("portfolioSidebarPinned") === "false"
  );
  const [isMenuHidden, setIsMenuHidden] = useState(
    () => localStorage.getItem("portfolioSidebarHidden") === "true"
  );

  const drawerRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (drawerRef.current && drawerRef.current.contains(e.target)) return;
      if (e.target.closest("#tech-stack-portal-modal")) return;
      setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);

  useEffect(() => {
    const syncSidebarState = () => {
      setIsMenuCollapsed(localStorage.getItem("portfolioSidebarPinned") === "false");
      setIsMenuHidden(localStorage.getItem("portfolioSidebarHidden") === "true");
      setMenuLayout(localStorage.getItem("portfolioMenuLayout") || "vertical");
    };

    window.addEventListener("portfolioSidebarChanged", syncSidebarState);
    return () => window.removeEventListener("portfolioSidebarChanged", syncSidebarState);
  }, []);

  const handleMenuLayoutChange = (layout) => {
    setMenuLayout(layout);
    localStorage.setItem("portfolioMenuLayout", layout);

    if (layout === "horizontal") {
      setIsMenuCollapsed(false);
      localStorage.setItem("portfolioSidebarPinned", "true");
    }

    window.dispatchEvent(new Event("portfolioSidebarChanged"));
    window.dispatchEvent(new Event("portfolioLayoutChanged"));
  };

  const handleAppBarChange = (type) => {
    setAppBarType(type);
    localStorage.setItem("portfolioAppBarType", type);
    window.dispatchEvent(new Event("portfolioLayoutChanged"));
  };

  const handleFooterChange = (type) => {
    setFooterType(type);
    localStorage.setItem("portfolioFooterType", type);
    window.dispatchEvent(new Event("portfolioLayoutChanged"));
  };

  const handleToggleCollapsed = (e) => {
    const checked = e.target.checked;
    setIsMenuCollapsed(checked);
    localStorage.setItem("portfolioSidebarPinned", (!checked).toString());
    window.dispatchEvent(new Event("portfolioSidebarChanged"));
  };

  const handleToggleHidden = (e) => {
    const checked = e.target.checked;
    setIsMenuHidden(checked);
    localStorage.setItem("portfolioSidebarHidden", checked.toString());

    if (checked) {
      setIsMenuCollapsed(false);
      localStorage.setItem("portfolioSidebarPinned", "true");
    }

    window.dispatchEvent(new Event("portfolioSidebarChanged"));
  };

  const handleResetDefaults = () => {
    localStorage.removeItem("portfolioThemeColor");
    localStorage.removeItem("portfolioFont");
    localStorage.removeItem("portfolioColorMode");
    localStorage.removeItem("portfolioAppBarType");
    localStorage.removeItem("portfolioFooterType");
    localStorage.removeItem("portfolioSidebarPinned");
    localStorage.removeItem("portfolioSidebarHidden");
    localStorage.removeItem("portfolioMenuLayout");

    document.documentElement.setAttribute("data-theme", "dark");
    document.documentElement.style.setProperty("--main-color", "#00abf0");
    document.documentElement.style.setProperty("--font-family", "'Poppins', sans-serif");
    document.documentElement.style.setProperty("--font-scale", "100%");
    document.documentElement.style.setProperty("--font-line-height", "1.6");

    setMenuLayout("vertical");
    setAppBarType("fixed");
    setFooterType("fixed");
    setIsMenuCollapsed(false);
    setIsMenuHidden(false);

    window.dispatchEvent(new Event("portfolioLayoutChanged"));
    window.dispatchEvent(new Event("portfolioSidebarChanged"));

    setResetKey((prev) => prev + 1);
  };

  return (
    <>
      {/* FLOATING TRIGGER BUTTON */}
      <motion.button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open Customizer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{ willChange: "transform" }}
        className="fixed top-[8.6rem] right-0 z-[89] flex items-center justify-center w-[4rem] h-[4rem] bg-[var(--main-color)] text-white border-l-[2px] border-y-[2px] border-white/20 rounded-l-xl shadow-lg shadow-[var(--main-color)]/30 cursor-pointer group hover:brightness-110 active:scale-95 transition-all duration-300"
      >
        <IoSettingsOutline className="text-[2.2rem] group-hover:rotate-90 transition-transform duration-500" />
      </motion.button>

      {/* SLIDE-OUT DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[105] flex justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-xs"
            />

            <motion.aside
              ref={drawerRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="relative w-[30rem] sm:w-[35rem] h-full bg-[var(--drawer-bg)] backdrop-blur-xl border-l border-[var(--main-color)]/30 flex flex-col justify-between shadow-2xl text-[var(--text-color)] overflow-hidden transition-colors duration-300"
            >
              {/* FIXED CONSTANT HEADER */}
              <div className="sticky top-0 z-10 bg-[var(--drawer-bg)] px-6 pt-6 pb-3.5 border-b border-[var(--border-color)] flex items-center justify-between shrink-0">
                <div>
                  <h3 className="text-[1.65rem] font-bold text-[var(--text-color)] tracking-wide">
                    Theme Customizer
                  </h3>
                  <p className="text-[1.1rem] text-[var(--text-muted)]">
                    Customize & Preview in Real Time
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg bg-[var(--second-bg-color)]/60 hover:bg-[var(--second-bg-color)] text-[var(--text-muted)] hover:text-[var(--text-color)] transition-colors cursor-pointer"
                >
                  <IoClose size={20} />
                </button>
              </div>

              {/* SCROLLABLE MIDDLE CONTENT */}
              <div className="min-h-0 flex-1 overflow-y-auto px-6 py-5 space-y-5">
                {/* Section: Mode */}
                <div>
                  <div className="flex items-center gap-2 text-[1.25rem] font-semibold text-[var(--main-color)] mb-2">
                    <FiSun />
                    <span>Display Mode</span>
                  </div>
                  <ThemeModeSwitcher key={`mode-${resetKey}`} />
                </div>

                {/* Section: Primary Color */}
                <div>
                  <div className="flex items-center gap-2 text-[1.25rem] font-semibold text-[var(--main-color)] mb-2">
                    <FiDroplet />
                    <span>Primary Color</span>
                  </div>
                  <ThemeSwitcher key={`theme-${resetKey}`} inline={true} />
                </div>

                {/* Section: AppBar Type */}
                <div>
                  <div className="flex items-center gap-2 text-[1.25rem] font-semibold text-[var(--main-color)] mb-2.5">
                    <FiLayout />
                    <span>AppBar Type</span>
                  </div>
                  <div className="flex flex-row items-center justify-between gap-2">
                    {LAYOUT_OPTIONS.map((opt) => {
                      const isSelected = appBarType === opt.id;
                      return (
                        <label
                          key={opt.id}
                          className="flex items-center gap-2.5 px-3 py-2 rounded-xl cursor-pointer transition-colors hover:bg-[var(--main-color)]/10"
                        >
                          <input
                            type="radio"
                            name="appBarTypeRadio"
                            value={opt.id}
                            checked={isSelected}
                            onChange={() => handleAppBarChange(opt.id)}
                            className="sr-only"
                          />
                          <div
                            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                              isSelected
                                ? "border-[var(--main-color)] bg-[var(--main-color)]/15 shadow-xs"
                                : "border-[var(--text-muted)]/60 hover:border-[var(--text-color)]"
                            }`}
                          >
                            {isSelected && (
                              <span className="w-3 h-3 rounded-full bg-[var(--main-color)]" />
                            )}
                          </div>
                          <span
                            className={`text-[1.3rem] whitespace-nowrap transition-colors ${
                              isSelected
                                ? "text-[var(--text-color)] font-semibold"
                                : "text-[var(--text-muted)]"
                            }`}
                          >
                            {opt.label}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Section: Footer Type */}
                <div>
                  <div className="flex items-center gap-2 text-[1.25rem] font-semibold text-[var(--main-color)] mb-2.5">
                    <FiLayout />
                    <span>Footer Type</span>
                  </div>
                  <div className="flex flex-row items-center justify-between gap-2">
                    {LAYOUT_OPTIONS.map((opt) => {
                      const isSelected = footerType === opt.id;
                      return (
                        <label
                          key={opt.id}
                          className="flex items-center gap-2.5 px-3 py-2 rounded-xl cursor-pointer transition-colors hover:bg-[var(--main-color)]/10"
                        >
                          <input
                            type="radio"
                            name="footerTypeRadio"
                            value={opt.id}
                            checked={isSelected}
                            onChange={() => handleFooterChange(opt.id)}
                            className="sr-only"
                          />
                          <div
                            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                              isSelected
                                ? "border-[var(--main-color)] bg-[var(--main-color)]/15 shadow-xs"
                                : "border-[var(--text-muted)]/60 hover:border-[var(--text-color)]"
                            }`}
                          >
                            {isSelected && (
                              <span className="w-3 h-3 rounded-full bg-[var(--main-color)]" />
                            )}
                          </div>
                          <span
                            className={`text-[1.3rem] whitespace-nowrap transition-colors ${
                              isSelected
                                ? "text-[var(--text-color)] font-semibold"
                                : "text-[var(--text-muted)]"
                            }`}
                          >
                            {opt.label}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Section: Typography Style */}
                <div>
                  <div className="flex items-center gap-2 text-[1.25rem] font-semibold text-[var(--main-color)] mb-2">
                    <FiType />
                    <span>Typography</span>
                  </div>
                  <FontSwitcher key={`font-${resetKey}`} inline={true} />
                </div>

                {/* Section: Menu Layout */}
                <div className="hidden md:block">
                  <div className="flex items-center gap-2 text-[1.25rem] font-semibold text-[var(--main-color)] mb-2.5">
                    <FiColumns />
                    <span>Menu Layout</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {MENU_LAYOUT_OPTIONS.map((opt) => {
                      const isSelected = menuLayout === opt.id;
                      return (
                        <label
                          key={opt.id}
                          className={`flex items-center justify-center gap-2.5 px-3.5 py-2.5 rounded-xl cursor-pointer border transition-all ${
                            isSelected
                              ? "border-[var(--main-color)] bg-[var(--main-color)]/10 font-bold text-[var(--text-color)] shadow-xs"
                              : "border-[var(--border-color)] hover:border-[var(--main-color)]/50 text-[var(--text-muted)] hover:text-[var(--text-color)]"
                          }`}
                        >
                          <input
                            type="radio"
                            name="menuLayoutRadio"
                            value={opt.id}
                            checked={isSelected}
                            onChange={() => handleMenuLayoutChange(opt.id)}
                            className="sr-only"
                          />
                          <div
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                              isSelected
                                ? "border-[var(--main-color)] bg-[var(--main-color)]/20"
                                : "border-[var(--text-muted)]/60"
                            }`}
                          >
                            {isSelected && (
                              <span className="w-2.5 h-2.5 rounded-full bg-[var(--main-color)]" />
                            )}
                          </div>
                          <span className="text-[1.3rem] whitespace-nowrap">
                            {opt.label}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Section: Menu Controls */}
                <div className="hidden md:block">
                  <div className="flex items-center gap-2 text-[1.25rem] font-semibold text-[var(--main-color)] mb-2.5">
                    <FiSidebar />
                    <span>{menuLayout === "vertical" ? "Sidebar Controls" : "Menu Controls"}</span>
                  </div>
                  <div className="flex flex-col gap-2 rounded-2xl bg-[var(--second-bg-color)]/40 p-2.5 border border-[var(--border-color)]">
                    <div className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-[var(--main-color)]/5 transition-colors">
                      <div className="flex items-center gap-2.5">
                        <FiEyeOff className="text-[1.4rem] text-[var(--text-muted)]" />
                        <span className="text-[1.3rem] font-medium text-[var(--text-color)]">
                          Menu Hidden
                        </span>
                      </div>
                      <CustomToggleSwitch
                        checked={isMenuHidden}
                        onChange={handleToggleHidden}
                        ariaLabel="Toggle Menu Hidden"
                      />
                    </div>

                    <AnimatePresence>
                      {!isMenuHidden && menuLayout === "vertical" && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-[var(--main-color)]/5 transition-colors">
                            <div className="flex items-center gap-2.5">
                              <FiMinimize2 className="text-[1.4rem] text-[var(--text-muted)]" />
                              <span className="text-[1.3rem] font-medium text-[var(--text-color)]">
                                Menu Collapsed
                              </span>
                            </div>
                            <CustomToggleSwitch
                              checked={isMenuCollapsed}
                              onChange={handleToggleCollapsed}
                              ariaLabel="Toggle Menu Collapsed"
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Section: Resume Download */}
                <div className="pt-2">
                  <motion.button
                    type="button"
                    onClick={generateAndDownloadCV}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative group w-full h-[4.2rem] rounded-xl bg-gradient-to-r from-[var(--main-color)]/20 via-[var(--second-bg-color)]/40 to-[var(--main-color)]/20 border border-[var(--main-color)]/40 hover:border-[var(--main-color)] text-[var(--text-color)] font-semibold text-[1.3rem] flex items-center justify-center gap-2.5 overflow-hidden transition-all duration-300 shadow-[0_0_15px_rgba(0,171,240,0.1)] hover:shadow-[0_0_20px_rgba(0,171,240,0.25)] cursor-pointer"
                  >
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-[var(--main-color)]/10 to-transparent" />
                    <motion.span
                      animate={{ y: [0, 2, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    >
                      <FiDownload className="text-[1.6rem] text-[var(--main-color)] group-hover:scale-110 transition-transform" />
                    </motion.span>
                    <span className="tracking-wide">Download Resume</span>
                  </motion.button>
                </div>
              </div>

              {/* FIXED CONSTANT FOOTER */}
              <div className="sticky bottom-0 z-10 bg-[var(--drawer-bg)] p-6 border-t border-[var(--border-color)] flex flex-col gap-3 shrink-0">
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={handleResetDefaults}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-500 dark:text-red-400 border border-red-500/30 text-[1.15rem] font-medium transition-all duration-200 cursor-pointer"
                  >
                    <FiRotateCcw className="text-[1.2rem]" />
                    <span>Reset Defaults</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                    <span className="text-[1.05rem] text-[var(--text-muted)] font-medium">
                      Auto-saved
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-1 text-[1.2rem]">
                  <VersionBadge />
                  <TechStackModal />
                </div>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SettingsDrawer;