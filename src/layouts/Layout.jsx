import React, { useState, useEffect, useRef } from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { TiArrowUpOutline } from "react-icons/ti";
import {
  FiHome,
  FiUser,
  FiServer,
  FiBriefcase,
  FiCpu,
  FiBookOpen,
  FiAward,
  FiMail,
} from "react-icons/fi";

import Header from "../components/layout/Header/Header";
import Sidebar from "../components/layout/Sidebar/Sidebar";
import SettingsDrawer from "../components/layout/SettingsDrawer/SettingsDrawer";
import VersionBadge from "../components/VersionBadge/VersionBadge";
import TechStackModal from "../components/TechStackModal/TechStackModal";

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

const Layout = () => {
  const location = useLocation();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isPinned, setIsPinned] = useState(() => {
    const savedPin = localStorage.getItem("portfolioSidebarPinned");
    return savedPin !== null ? JSON.parse(savedPin) : true;
  });

  // Track layout & hidden states
  const [menuLayout, setMenuLayout] = useState(
    () => localStorage.getItem("portfolioMenuLayout") || "vertical"
  );
  const [isSidebarHidden, setIsSidebarHidden] = useState(
    () => localStorage.getItem("portfolioSidebarHidden") === "true"
  );

  const [isDark, setIsDark] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Layout states ('fixed' | 'static' | 'hidden')
  const [appBarType, setAppBarType] = useState(
    () => localStorage.getItem("portfolioAppBarType") || "fixed"
  );
  const [footerType, setFooterType] = useState(
    () => localStorage.getItem("portfolioFooterType") || "fixed"
  );

  const scrollContainerRef = useRef(null);

  // Sync Layout changes from SettingsDrawer
  useEffect(() => {
    const handleLayoutChange = () => {
      setAppBarType(localStorage.getItem("portfolioAppBarType") || "fixed");
      setFooterType(localStorage.getItem("portfolioFooterType") || "fixed");
    };

    const handleSidebarChange = () => {
      setMenuLayout(localStorage.getItem("portfolioMenuLayout") || "vertical");
      setIsSidebarHidden(localStorage.getItem("portfolioSidebarHidden") === "true");
      const savedPin = localStorage.getItem("portfolioSidebarPinned");
      if (savedPin !== null) {
        setIsPinned(JSON.parse(savedPin));
      }
    };

    window.addEventListener("portfolioLayoutChanged", handleLayoutChange);
    window.addEventListener("portfolioSidebarChanged", handleSidebarChange);
    window.addEventListener("storage", handleLayoutChange);
    window.addEventListener("storage", handleSidebarChange);

    return () => {
      window.removeEventListener("portfolioLayoutChanged", handleLayoutChange);
      window.removeEventListener("portfolioSidebarChanged", handleSidebarChange);
      window.removeEventListener("storage", handleLayoutChange);
      window.removeEventListener("storage", handleSidebarChange);
    };
  }, []);

  // Theme Sync
  useEffect(() => {
    const checkTheme = () => {
      const currentTheme =
        document.documentElement.getAttribute("data-theme") || "dark";
      setIsDark(currentTheme === "dark");
    };
    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      setShowScrollTop(scrollContainerRef.current.scrollTop > 300);
    }
  };

  const scrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleTogglePin = (nextStateOrFn) => {
    setIsPinned((prev) => {
      const nextState =
        typeof nextStateOrFn === "function" ? nextStateOrFn(prev) : nextStateOrFn;
      localStorage.setItem("portfolioSidebarPinned", JSON.stringify(nextState));
      return nextState;
    });
  };

  const checkIsActive = (path) => {
    if (path === "/home") {
      return location.pathname === "/home" || location.pathname === "/";
    }
    return location.pathname === path;
  };

  // Horizontal Navigation Bar
  const renderHorizontalNav = () => (
    <nav className="w-full bg-[var(--card-bg)] backdrop-blur-md border border-[var(--border-color)] rounded-2xl p-1.5 shadow-sm mt-3 overflow-x-auto no-scrollbar flex items-center gap-1.5 shrink-0">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = checkIsActive(item.path);
        return (
          <NavLink
            key={item.path}
            to={item.path}
            className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-[1.3rem] font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
              isActive
                ? "text-white font-bold bg-[var(--main-color)] shadow-sm"
                : "text-[var(--text-color)]/75 hover:text-[var(--text-color)] hover:bg-[var(--second-bg-color)]"
            }`}
          >
            <Icon size={18} />
            <span>{item.name}</span>
          </NavLink>
        );
      })}
    </nav>
  );

  // Reusable Header Component
  const renderHeader = () => (
    <div className="flex flex-col w-full">
      <Header
        isSidebarOpen={isSidebarOpen}
        setSidebarOpen={setSidebarOpen}
        isDark={isDark}
        setIsDark={setIsDark}
        isSidebarHidden={isSidebarHidden}
        menuLayout={menuLayout}
      />
    
      {menuLayout === "horizontal" && !isSidebarHidden && renderHorizontalNav()}
    </div>
  );

  // Reusable Footer Component
  const renderFooter = () => (
    <footer className="w-full bg-[var(--card-bg)] backdrop-blur-md border border-[var(--border-color)] py-4 px-6 sm:px-10 flex justify-center transition-colors duration-300 rounded-2xl shrink-0 shadow-xs">
      <div className="w-full max-w-[125rem] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-[1.3rem]">
        <p className="text-center sm:text-left text-[var(--text-muted)]">
          © 2026{" "}
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-color)] to-[var(--main-color)]">
            Abhijit Sahoo
          </span>
          . All rights reserved.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <VersionBadge />
          <span className="text-[var(--text-muted)] opacity-40">•</span>
          <TechStackModal />
        </div>
      </div>
    </footer>
  );

  const getMarginLeft = () => {
    if (menuLayout === "horizontal" || isSidebarHidden) return "0px";
    return isPinned ? "255px" : "80px";
  };

  return (
    <div className="h-screen w-full bg-[var(--bg-color)] text-[var(--text-color)] flex overflow-hidden transition-colors duration-300">
      {/* 1. SIDEBAR: */}
      {menuLayout === "vertical" && !isSidebarHidden && (
        <Sidebar
          isPinned={isPinned}
          setIsPinned={handleTogglePin}
          isSidebarOpen={isSidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      )}

      {/* 2. UNIFIED SETTINGS DRAWER */}
      <SettingsDrawer />

      {/* 3. RIGHT CONTENT AREA */}
      <motion.div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        animate={{
          marginLeft: getMarginLeft(),
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="flex-1 h-screen overflow-y-auto overflow-x-hidden flex flex-col max-md:!ml-0 custom-scrollbar scroll-smooth w-full"
      >
        {/* HEADER: FIXED */}
        {appBarType === "fixed" && (
          <div className="sticky top-0 z-30 pt-4 px-4 sm:pt-6 sm:px-6 pb-2 shrink-0 bg-[var(--bg-color)]/85 backdrop-blur-md">
            {renderHeader()}
          </div>
        )}

        {/* HEADER: STATIC */}
        {appBarType === "static" && (
          <div className="pt-4 px-4 sm:pt-6 sm:px-6 pb-2 shrink-0">
            {renderHeader()}
          </div>
        )}

        {/* MAIN BODY CONTENT */}
        <div className="flex-1 px-4 sm:px-6 pt-2 pb-4 flex flex-col">
          <main className="flex-1 w-full bg-[var(--card-bg)] backdrop-blur-md border border-[var(--border-color)] rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] p-5 sm:p-8 lg:p-10 mb-4 transition-colors duration-300">
            <Outlet />
          </main>

          {/* FOOTER: STATIC */}
          {footerType === "static" && renderFooter()}
        </div>

        {/* FOOTER: FIXED */}
        {footerType === "fixed" && (
          <div className="sticky bottom-0 z-30 pb-4 px-4 sm:pb-5 sm:px-6 pt-2 shrink-0 bg-[var(--bg-color)]/85 backdrop-blur-md">
            {renderFooter()}
          </div>
        )}
      </motion.div>

      {/* SCROLL TO TOP BUTTON */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className={`fixed right-8 z-[90] ${
              footerType === "fixed" ? "bottom-24" : "bottom-8"
            }`}
          >
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="flex justify-center items-center w-12 h-12 rounded-xl bg-[var(--main-color)] text-white shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <TiArrowUpOutline size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Layout;