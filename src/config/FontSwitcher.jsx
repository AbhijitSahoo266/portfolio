import React, { useState, useEffect, useRef } from "react";
import { FiType } from "react-icons/fi";

export const FONTS = [
  { 
    id: "poppins", 
    name: "Poppins", 
    value: "'Poppins', sans-serif",
    scale: "100%",
    lineHeight: "1.6",
  },
  { 
    id: "inter", 
    name: "Inter", 
    value: "'Inter', sans-serif",
    scale: "100%",
    lineHeight: "1.55",
  },
  { 
    id: "space", 
    name: "Space", 
    value: "'Space Grotesk', sans-serif",
    scale: "95%",
    lineHeight: "1.5",
  },
  { 
    id: "jetbrains", 
    name: "JetBrains", 
    value: "'JetBrains Mono', monospace",
    scale: "88%",
    lineHeight: "1.6",
  },
  { 
    id: "fira", 
    name: "Fira Code", 
    value: "'Fira Code', monospace",
    scale: "88%",
    lineHeight: "1.6",
  },
];

const FontSwitcher = ({ inline = false }) => {
  const [open, setOpen] = useState(false);
  const [activeFont, setActiveFont] = useState(
    () => localStorage.getItem("portfolioFont") || "poppins"
  );
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    if (!inline) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [inline]);

  const selectFont = (font) => {
    setActiveFont(font.id);
    document.documentElement.style.setProperty("--font-family", font.value);
    document.documentElement.style.setProperty("--font-scale", font.scale);
    document.documentElement.style.setProperty("--font-line-height", font.lineHeight);
    localStorage.setItem("portfolioFont", font.id);
    if (!inline) setOpen(false);
  };

  // INLINE MODE: Compact Small Box Grid
  if (inline) {
    return (
      <div className="grid grid-cols-3 gap-2">
        {FONTS.map((font) => {
          const isSelected = activeFont === font.id;
          return (
            <button
              key={font.id}
              type="button"
              onClick={() => selectFont(font)}
              style={{ fontFamily: font.value }}
              className={`h-[3.6rem] px-2 rounded-xl border flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer shadow-xs ${
                isSelected
                  ? "border-[var(--main-color)] bg-[var(--main-color)]/15 text-[var(--main-color)] font-bold shadow-sm"
                  : "border-[var(--border-color)] bg-[var(--second-bg-color)]/50 text-[var(--text-color)] hover:border-[var(--main-color)]/40 hover:bg-[var(--second-bg-color)]"
              }`}
            >
              <span className="text-[1.2rem] truncate">{font.name}</span>
              {isSelected && <span className="text-[1.1rem] font-sans">✓</span>}
            </button>
          );
        })}
      </div>
    );
  }

  // DROPDOWN MODE (Fallback)
  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[var(--border-color)] bg-[var(--second-bg-color)]/70 text-[var(--text-color)] hover:bg-[var(--second-bg-color)] transition-colors text-[1.3rem] cursor-pointer shadow-xs"
        title="Change Font"
      >
        <FiType className="text-[1.6rem] text-[var(--main-color)]" />
        <span className="hidden sm:inline">Font</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-[19rem] bg-[var(--drawer-bg)] backdrop-blur-xl border border-[var(--border-color)] rounded-xl shadow-2xl py-2 z-[110] transition-colors duration-300">
          <div className="px-4 py-1 text-[1.1rem] uppercase tracking-wider text-[var(--text-muted)] font-semibold">
            Select Typography
          </div>
          {FONTS.map((font) => (
            <button
              key={font.id}
              type="button"
              onClick={() => selectFont(font)}
              style={{ fontFamily: font.value }}
              className={`w-full text-left px-4 py-2.5 text-[1.3rem] transition-colors flex items-center justify-between cursor-pointer ${
                activeFont === font.id
                  ? "text-[var(--main-color)] bg-[var(--main-color)]/10 font-bold"
                  : "text-[var(--text-color)] hover:bg-[var(--second-bg-color)]/60"
              }`}
            >
              <span>{font.name}</span>
              {activeFont === font.id && <span className="text-sm font-sans text-[var(--main-color)]">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FontSwitcher;