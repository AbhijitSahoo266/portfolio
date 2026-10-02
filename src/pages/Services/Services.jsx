import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiCode, FiLayout, FiCheckCircle, FiServer, FiArrowRight } from "react-icons/fi";
import { FaMobileAlt } from "react-icons/fa";

export default function Services() {
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  const [cards, setCards] = useState([
    {
      id: "card-1",
      icon: <FiCode className="text-[2.2rem] text-[var(--main-color)] mx-auto" />,
      title: "Frontend Engineering",
      desc: "Building fast, SEO-friendly, and responsive web apps using modern frameworks.",
      tags: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
      features: [
        "Single Page Apps & SSR (Next.js)",
        "State Management (Redux, Zustand)",
        "Pixel-Perfect Responsive UI",
        "Web Performance & Core Vitals",
      ],
    },
    {
      id: "card-2",
      icon: <FaMobileAlt className="text-[2.2rem] text-[var(--main-color)] mx-auto" />,
      title: "Cross-Platform Mobile",
      desc: "Developing native-feel mobile applications for both Android and iOS devices.",
      tags: ["React Native", "Expo", "REST APIs", "Mobile UI"],
      features: [
        "Cross-Platform Native Apps",
        "Fluid Micro-Interactions",
        "Offline Storage & Async State",
        "Clean Component Architecture",
      ],
    },
    {
      id: "card-3",
      icon: <FiServer className="text-[2.2rem] text-[var(--main-color)] mx-auto" />,
      title: "MERN Backend & APIs",
      desc: "Architecting secure backend services, RESTful APIs, and database structures.",
      tags: ["Node.js", "Express.js", "MongoDB", "PostgreSQL"],
      features: [
        "Scalable RESTful API Design",
        "RBAC & Keycloak Authentication",
        "Database Schema Modeling",
        "Business Logic & Microservices",
      ],
    },
    {
      id: "card-4",
      icon: <FiLayout className="text-[2.2rem] text-[var(--main-color)] mx-auto" />,
      title: "UI Systems & Dashboards",
      desc: "Crafting clean, accessible component libraries and enterprise admin panels.",
      tags: ["Tailwind CSS", "Material UI", "Figma to Code", "Design Systems"],
      features: [
        "Modular Component Systems",
        "Complex Enterprise Dashboards",
        "Role-Based Dynamic Interfaces",
        "Cross-Browser Compatibility",
      ],
    },
  ]);

  // Te whakatau aunoa i te maha o ngā kāri e kitea ana kia rite ki te mata
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setVisibleCount(1);
      } else if (width < 1200) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Te hurihuri aunoa (Running carousel)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCards((prevCards) => {
        const [firstCard, ...restCards] = prevCards;
        return [...restCards, firstCard];
      });
    }, 2800);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="w-full relative overflow-hidden py-4">
      {/* Ifa o muri */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[24rem] h-[24rem] xl:w-[32rem] xl:h-[32rem] bg-[var(--main-color)] opacity-5 blur-[10rem] pointer-events-none rounded-full"
      />

      {/* Papa Whānui Whakatakotoranga (Kāore he max-w whakatiki) */}
      <div className="w-full relative z-10 flex flex-col justify-center">
        {/* Upoko */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-left mb-6"
        >
          <h2 className="text-[1.6rem] sm:text-[1.8rem] lg:text-[2rem] font-bold tracking-tight text-[var(--text-color)] leading-snug">
            My{" "}
            <span className="text-[var(--main-color)] drop-shadow-[0_0_10px_rgba(0,171,240,0.2)]">
              Services
            </span>
          </h2>

          <p className="text-[0.95rem] sm:text-[1rem] text-[var(--text-muted)] mt-1.5 max-w-2xl font-normal leading-relaxed">
            High-performance web, mobile, and backend solutions built with clean architecture and modern engineering standards.
          </p>
        </motion.div>

        {/* Wāhanga Kāri Hurihuri - Ka whakakī i te taha mauī ki te taha matau */}
        <div
          className="relative w-full overflow-hidden py-2"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex gap-4 sm:gap-5 w-full items-stretch">
            <AnimatePresence mode="popLayout">
              {cards.slice(0, visibleCount).map((service) => (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, x: 50, scale: 0.98 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -50, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  style={{
                    flex: `1 1 calc(${100 / visibleCount}% - ${((visibleCount - 1) * 1.25) / visibleCount}rem)`,
                    minWidth: 0,
                  }}
                  className="flex flex-col"
                >
                  <ServiceCard {...service} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Tohu Tīpako (Dots) */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {["card-1", "card-2", "card-3", "card-4"].map((cardId) => {
            const isActive = cards[0].id === cardId;
            return (
              <span
                key={cardId}
                className={`h-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-8 bg-[var(--main-color)] shadow-[0_0_8px_var(--main-color)]"
                    : "w-2 bg-[var(--text-muted)] opacity-30"
                }`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* KĀRI RATONGA */
function ServiceCard({ icon, title, desc, tags, features }) {
  return (
    <div className="h-full w-full flex flex-col justify-between bg-[var(--second-bg-color)]/50 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-[var(--border-color)] hover:border-[var(--main-color)]/50 transition-all duration-300 relative shadow-sm hover:shadow-md">
      <div>
        <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-xl bg-[var(--main-color)]/10 border border-[var(--main-color)]/25">
          {icon}
        </div>

        <h3 className="text-lg sm:text-xl mb-2 font-bold text-center text-[var(--text-color)] hover:text-[var(--main-color)] transition-colors duration-300">
          {title}
        </h3>

        <p className="text-xs sm:text-sm text-[var(--text-muted)] text-center mb-4 leading-relaxed min-h-[2.8rem]">
          {desc}
        </p>

        <div className="border-t border-[var(--border-color)] pt-3.5 mb-4">
          <p className="text-xs uppercase tracking-wider text-[var(--main-color)] font-bold mb-2">
            What I Deliver:
          </p>
          <ul className="space-y-1.5">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-xs sm:text-sm text-[var(--text-color)] gap-2">
                <FiCheckCircle className="text-[var(--main-color)] shrink-0 text-sm" />
                <span className="truncate">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-5 justify-center">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[0.75rem] px-2.5 py-0.5 bg-[var(--second-bg-color)]/70 text-[var(--main-color)] border border-[var(--main-color)]/20 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="text-center mt-auto pt-2">
        <Link
          to="/contact"
          className="flex justify-center items-center gap-2 w-full py-2.5 px-4 border border-[var(--main-color)] rounded-xl text-sm font-semibold text-[var(--main-color)] relative overflow-hidden hover:text-[var(--bg-color)] transition-all duration-300 before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-[var(--main-color)] before:-z-10 hover:before:w-full cursor-pointer"
        >
          <span>Get Started</span>
          <FiArrowRight className="text-sm" />
        </Link>
      </div>
    </div>
  );
}