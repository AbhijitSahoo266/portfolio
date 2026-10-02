import React, { useState, useEffect } from "react";
import { FiSun, FiMoon, FiMonitor } from "react-icons/fi";

const ThemeModeSwitcher = () => {
  const [mode, setMode] = useState(() => {
    return localStorage.getItem("portfolioColorMode") || "system";
  });

  const applyThemeMode = (selectedMode) => {
    const root = document.documentElement;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (selectedMode === "system") {
      root.setAttribute("data-theme", systemPrefersDark ? "dark" : "light");
    } else {
      root.setAttribute("data-theme", selectedMode);
    }
  };

  useEffect(() => {
    applyThemeMode(mode);
    localStorage.setItem("portfolioColorMode", mode);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemChange = () => {
      if (mode === "system") {
        applyThemeMode("system");
      }
    };

    mediaQuery.addEventListener("change", handleSystemChange);
    return () => mediaQuery.removeEventListener("change", handleSystemChange);
  }, [mode]);

  const options = [
    { id: "light", label: "Light", icon: FiSun },
    { id: "dark", label: "Dark", icon: FiMoon },
    { id: "system", label: "Device", icon: FiMonitor },
  ];

  return (
    <div className="grid grid-cols-3 gap-2 p-1.5 rounded-xl bg-[var(--second-bg-color)]/50 border border-[var(--border-color)] transition-colors duration-300">
      {options.map(({ id, label, icon: Icon }) => {
        const isActive = mode === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => setMode(id)}
            className={`flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-[1.2rem] font-medium transition-all duration-200 cursor-pointer shadow-xs ${
              isActive
                ? "bg-[var(--main-color)] text-[var(--bg-color)] font-bold shadow-md"
                : "text-[var(--text-muted)] hover:text-[var(--text-color)] hover:bg-[var(--second-bg-color)]"
            }`}
          >
            <Icon className="text-[1.4rem]" />
            <span>{label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default ThemeModeSwitcher;