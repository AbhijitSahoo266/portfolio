import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";

import Loader from "./components/Loader/Loader";
import AppRoutes from "./routes/AppRoutes"; // Update path if placed elsewhere

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Save current route on every change so refresh stays on that route
  useEffect(() => {
    if (location.pathname && location.pathname !== "/") {
      sessionStorage.setItem("lastVisitedRoute", location.pathname);
    }
  }, [location.pathname]);

  // Initial loader timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // Theme, Mode & Font Initializer
  useEffect(() => {
    const savedColor = localStorage.getItem("portfolioThemeColor") || "#00abf0";
    document.documentElement.style.setProperty("--main-color", savedColor);

    const savedMode = localStorage.getItem("portfolioColorMode") || "system";
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedMode === "system") {
      document.documentElement.setAttribute(
        "data-theme",
        systemPrefersDark ? "dark" : "light"
      );
    } else {
      document.documentElement.setAttribute("data-theme", savedMode);
    }

    const fontConfig = {
      poppins: { family: "'Poppins', sans-serif", scale: "100%" },
      inter: { family: "'Inter', sans-serif", scale: "100%" },
      space: { family: "'Space Grotesk', sans-serif", scale: "95%" },
      jetbrains: { family: "'JetBrains Mono', monospace", scale: "88%" },
      fira: { family: "'Fira Code', monospace", scale: "88%" },
    };

    const savedFont = localStorage.getItem("portfolioFont") || "poppins";
    const selected = fontConfig[savedFont] || fontConfig.poppins;

    document.documentElement.style.setProperty("--font-family", selected.family);
    document.documentElement.style.setProperty("--font-scale", selected.scale);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? <Loader key="loader" /> : <AppRoutes key="routes" />}
    </AnimatePresence>
  );
}

export default App;