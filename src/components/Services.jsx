import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCode, FiLayout, FiCheckCircle, FiServer } from "react-icons/fi";
import { FaMobileAlt } from "react-icons/fa";

export default function Services() {
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  // Dynamic card count per screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [cards, setCards] = useState([
    {
      id: "card-1",
      icon: <FiCode className="text-[2.8rem] text-[var(--main-color)] mx-auto" />,
      title: "Web Development",
      desc: "Building fast, scalable, and responsive web apps using React & Next.js.",
      tags: ["React.js", "Next.js", "Redux", "Tailwind CSS"],
      features: [
        "Single Page Applications (SPAs)",
        "Server-Side Rendering (SSR)",
        "State & API Integration",
        "Performance Tuning",
      ],
    },
    {
      id: "card-2",
      icon: <FiLayout className="text-[2.8rem] text-[var(--main-color)] mx-auto" />,
      title: "UI/UX Designing",
      desc: "Crafting clean, intuitive user experiences with modern design systems.",
      tags: ["Figma", "Tailwind CSS", "Material UI"],
      features: [
        "Interactive Wireframes",
        "Component Libraries",
        "Responsive Grid Layouts",
        "User-Centered UI",
      ],
    },
    {
      id: "card-3",
      icon: <FaMobileAlt className="text-[2.8rem] text-[var(--main-color)] mx-auto" />,
      title: "Mobile App Development",
      desc: "Developing cross-platform mobile apps for Android & iOS.",
      tags: ["React Native", "JavaScript", "REST APIs"],
      features: [
        "iOS & Android Native Apps",
        "Smooth Animations",
        "Offline Storage Sync",
        "Clean Mobile Architecture",
      ],
    },
    {
      id: "card-4",
      icon: <FiServer className="text-[2.8rem] text-[var(--main-color)] mx-auto" />,
      title: "API & Backend Integration",
      desc: "Building robust backend services, RESTful APIs, and databases.",
      tags: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
      features: [
        "RESTful API Design",
        "Authentication & Security",
        "Database Architecture",
        "Server Business Logic",
      ],
    },
  ]);

  // Rotational Loop
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCards((prevCards) => {
        const [firstCard, ...restCards] = prevCards;
        return [...restCards, firstCard];
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      id="services"
      className="py-[6rem] px-6 sm:px-12 md:px-16 lg:px-20 bg-[#081b29] text-[#ededed] relative overflow-hidden w-full flex justify-center"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-[var(--main-color)] opacity-5 blur-[10rem] pointer-events-none rounded-full" />

      <div className="w-full max-w-[125rem] mx-auto relative z-10 flex flex-col justify-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[3rem] sm:text-[4rem] lg:text-[4.8rem] text-center mb-[1rem] font-bold"
        >
          My <span className="text-[var(--main-color)]">Services</span>
        </motion.h2>

        <p className="text-[1.3rem] sm:text-[1.5rem] lg:text-[1.6rem] text-center text-[#ededed]/70 mb-[3.5rem] max-w-[55rem] mx-auto">
          High-performance solutions tailored to turn complex ideas into seamless digital experiences.
        </p>

        {/* Rotational Container */}
        <div
          className="relative w-full overflow-hidden py-2"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex gap-6">
            <AnimatePresence mode="popLayout">
              {cards.slice(0, visibleCount).map((service) => (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, x: 50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -50, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] flex-shrink-0"
                >
                  <ServiceCard {...service} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Dynamic Glowing Indicator Dots */}
        <div className="flex justify-center items-center gap-3 mt-[3rem]">
          {["card-1", "card-2", "card-3", "card-4"].map((cardId) => {
            const isActive = cards[0].id === cardId;
            return (
              <span
                key={cardId}
                className={`h-[0.8rem] rounded-full transition-all duration-500 ${
                  isActive
                    ? "w-[2.5rem] bg-[var(--main-color)] shadow-[0_0_10px_var(--main-color)]"
                    : "w-[0.8rem] bg-[#ededed]/20"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* COMPACT SERVICE CARD */
function ServiceCard({ icon, title, desc, tags, features }) {
  return (
    <div className="h-full flex flex-col justify-between bg-[#112e42]/80 backdrop-blur-md p-6 sm:p-8 rounded-[1.5rem] border border-[#ededed]/10 hover:border-[var(--main-color)] transition-all duration-300 relative shadow-xl">
      <div>
        {/* Icon */}
        <div className="w-[5rem] h-[5rem] mx-auto mb-4 flex items-center justify-center rounded-xl bg-[var(--main-color)]/10 border border-[var(--main-color)]/30">
          {icon}
        </div>

        <h3 className="text-[1.8rem] sm:text-[2rem] mb-2 font-semibold text-center hover:text-[var(--main-color)] transition-colors duration-300">
          {title}
        </h3>

        <p className="text-[1.2rem] text-[#ededed]/80 text-center mb-4 leading-relaxed">
          {desc}
        </p>

        {/* What I Deliver */}
        <div className="border-t border-[#ededed]/10 pt-4 mb-4">
          <p className="text-[1.1rem] uppercase tracking-wider text-[var(--main-color)] font-bold mb-2">
            What I Deliver:
          </p>
          <ul className="space-y-1.5">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-[1.2rem] text-[#ededed]/90 gap-2">
                <FiCheckCircle className="text-[var(--main-color)] shrink-0 text-[1.2rem]" />
                <span className="truncate">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6 justify-center">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[1rem] px-2.5 py-0.5 bg-[#081b29] text-[var(--main-color)] border border-[var(--main-color)]/30 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="text-center mt-auto">
        <ServiceButton />
      </div>
    </div>
  );
}

/* BUTTON COMPONENT */
function ServiceButton() {
  return (
    <div className="inline-block w-full h-[4.2rem]">
      <a
        href="#contact"
        className="group relative flex justify-center items-center w-full h-full text-[1.4rem] font-semibold tracking-wider text-[#081b29] bg-[var(--main-color)] border-[0.2rem] border-[var(--main-color)] rounded-[0.8rem] overflow-hidden z-10 transition-colors duration-500 hover:text-[var(--main-color)] cursor-pointer"
      >
        Get Started
        <span className="absolute top-0 left-0 w-0 h-full bg-[#081b29] -z-10 transition-all duration-500 group-hover:w-full" />
      </a>
    </div>
  );
}