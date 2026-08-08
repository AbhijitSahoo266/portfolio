import React, { useState, useEffect, useRef } from "react";
import { FaPalette } from "react-icons/fa";

const themeColors = [
  { name: "Default Cyan", value: "#00abf0" },
  { name: "Primary ", value: "#3c4682" },
  { name: "Emerald Green", value: "#10b981" },
  { name: "Purple Neon", value: "#a855f7" },
  { name: "Sunset Orange", value: "#f97316" },
  { name: "Golden Yellow", value: "#eab308" },
];

const ThemeSwitcher = () => {
  const [open, setOpen] = useState(false);
  const [activeColor, setActiveColor] = useState("#00abf0");
  const switcherRef = useRef(null);

  useEffect(() => {
    const savedColor = localStorage.getItem("portfolioThemeColor") || "#00abf0";
    setActiveColor(savedColor);
    document.documentElement.style.setProperty("--main-color", savedColor);

    // Outside Click Handler
    const handleOutsideClick = (e) => {
      if (switcherRef.current && !switcherRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const changeColor = (color) => {
    setActiveColor(color);
    document.documentElement.style.setProperty("--main-color", color);
    localStorage.setItem("portfolioThemeColor", color);
    setOpen(false);
  };

  return (
    <div className="relative" ref={switcherRef}>
      {/* Palette Icon Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center p-2.5 bg-[#dce1e4] border-2 border-[var(--main-color)] text-[var(--main-color)] rounded-full shadow-lg hover:rotate-45 transition-all duration-300"
        title="Change Theme Color"
      >
        <FaPalette size={18} />
      </button>

      {/* Dropdown Options Box */}
      {open && (
        <div className="absolute right-0 top-16 p-2 bg-[#112e42] border border-[var(--main-color)] rounded-xl shadow-2xl flex gap-2 z-[1000]">
          {themeColors.map((item, idx) => (
            <button
              key={idx}
              onClick={() => changeColor(item.value)}
              className={`w-6 h-6 rounded-full border-2 transition-transform duration-200 hover:scale-125 ${activeColor === item.value ? "border-white scale-110 shadow-md" : "border-transparent"
                }`}
              style={{ backgroundColor: item.value }}
              title={item.name}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;