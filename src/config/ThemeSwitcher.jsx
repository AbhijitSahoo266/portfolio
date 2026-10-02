import React, { useState, useEffect } from "react";
import { FiCheck } from "react-icons/fi";

export const themeColors = [
  { name: "Default Cyan", value: "#00abf0" },
  { name: "Primary Indigo", value: "#3c4682" },
  { name: "Emerald Green", value: "#10b981" },
  { name: "Purple Neon", value: "#a855f7" },
  { name: "Rose", value: "#f43f5e" },
  { name: "Golden Yellow", value: "#eab308" },
];

const ThemeSwitcher = ({ inline = false, onSelectColor }) => {
  const [activeColor, setActiveColor] = useState("#00abf0");

  useEffect(() => {
    const savedColor =
      localStorage.getItem("portfolioThemeColor") || "#00abf0";

    setActiveColor(savedColor);
    document.documentElement.style.setProperty(
      "--main-color",
      savedColor
    );
  }, []);

  const changeColor = (color) => {
    setActiveColor(color);

    document.documentElement.style.setProperty(
      "--main-color",
      color
    );

    localStorage.setItem("portfolioThemeColor", color);

    if (onSelectColor) {
      onSelectColor(color);
    }
  };

  if (inline) {
    return (
      <div className="flex items-center justify-between gap-1 p-2 rounded-xl bg-[var(--second-bg-color)]/50 ]">
        {themeColors.map((item, idx) => {
          const isSelected =
            activeColor.toLowerCase() === item.value.toLowerCase();

          return (
            <button
              key={idx}
              type="button"
              onClick={() => changeColor(item.value)}
              title={item.name}
              className={`w-7 h-7 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xs border border-black/10 ${
                isSelected
                  ? "ring-2 ring-offset-2 ring-offset-[var(--drawer-bg)] ring-[var(--text-color)] scale-110 shadow-md"
                  : "opacity-80 hover:opacity-100 hover:scale-105"
              }`}
              style={{ backgroundColor: item.value }}
            >
              {isSelected && (
                <FiCheck className="text-white text-[1.2rem] stroke-[3] drop-shadow-sm" />
              )}
            </button>
          );
        })}
      </div>
    );
  }

  return null;
};

export default ThemeSwitcher;