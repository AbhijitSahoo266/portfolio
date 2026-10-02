import React, { useState } from "react";
import { FaUpRightFromSquare, FaGlobe, FaMobileScreenButton } from "react-icons/fa6";
import { FiLayers, FiActivity, FiCheck } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: "sparrow",
      title: "Sparrow Academic System",
      desc: "Full-scale college management enterprise portal for student records, faculty performance metrics, and automated academic grading systems.",
      img: "/sparrow1.jpeg",
      link: "https://sparrowcampus.pro/login/",
      type: "web",
      metric: "99.8% Uptime",
      tech: ["React.js", "Redux Toolkit", "Tailwind CSS", "Node.js", "REST APIs"],
    },
    {
      id: "papl",
      title: "PAPL Enterprise HRMS",
      desc: "Comprehensive HRMS & corporate housing management application featuring role-based access control (RBAC) and employee allocations.",
      img: "/2.jpg",
      link: null,
      type: "web",
      metric: "RBAC Security",
      tech: ["React.js", "Next.js", "Tailwind CSS", "Node.js", "PostgreSQL"],
    },
    {
      id: "bloodbank",
      title: "LifeConnect Blood Bank",
      desc: "Critical life-saving network connecting blood donors, recipients, and medical centers with real-time inventory tracking and alerts.",
      img: "/bloodbank.jpeg",
      link: "https://bloodbank.in/",
      type: "web",
      metric: "Live Tracking",
      tech: ["React.js", "Material UI", "Node.js", "Express", "MongoDB"],
    },
    {
      id: "vehicle-app",
      title: "Fleet & Vehicle Fleet Manager",
      desc: "Cross-platform mobile application managing corporate fleet diagnostics, live fuel metrics, routine servicing logs, and expense telemetry.",
      img: "https://images.unsplash.com/photo-1511527844068-006b95d162c2?auto=format&fit=crop&w=1200&q=80",
      link: null,
      type: "mobile",
      metric: "Offline-First",
      tech: ["React Native", "Expo", "Redux Toolkit", "AsyncStorage"],
    },
    {
      id: "epuja",
      title: "E-Puja Devotional Platform",
      desc: "Spiritual services mobile platform enabling devotees to book temple rituals, scheduled video pujas, and seamless checkout integrations.",
      img: "/jaganath.jpg",
      link: "https://epuja-demo.vercel.app",
      type: "mobile",
      metric: "Payment Gateway",
      tech: ["React Native", "Tailwind CSS", "REST APIs", "Razorpay"],
    },
  ];

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.type === filter);

  return (
    <div className="w-full relative overflow-hidden py-2 sm:py-4">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] xl:w-[45rem] xl:h-[45rem] bg-[var(--main-color)] opacity-5 blur-[12rem] pointer-events-none rounded-full"
      />

      <div className="w-full mx-auto relative z-10 flex flex-col justify-center">
        {/* Header */}
      <motion.div
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
  className="text-left mb-6 sm:mb-8"
>
  <h2 className="text-[1.5rem] sm:text-[1.8rem] lg:text-[2rem] font-bold tracking-tight text-[var(--text-color)] leading-snug">
    Latest{" "}
    <span className="text-[var(--main-color)] drop-shadow-[0_0_10px_rgba(0,171,240,0.2)]">
      Projects
    </span>
  </h2>

  <p className="text-[0.95rem] sm:text-[1.05rem] text-[var(--text-muted)] mt-1.5 max-w-xl font-normal leading-relaxed">
    Production-grade web systems, enterprise portals, and cross-platform mobile apps engineered with clean architecture.
  </p>
</motion.div>

        {/* Filter Segmented Control */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex justify-center items-center gap-2.5 sm:gap-4 mb-8 flex-wrap w-full"
        >
          {[
            { label: "All Projects", value: "all", icon: FiLayers },
            { label: "Web Applications", value: "web", icon: FaGlobe },
            { label: "Mobile Apps", value: "mobile", icon: FaMobileScreenButton },
          ].map((tab) => {
            const isActive = filter === tab.value;
            const Icon = tab.icon;

            return (
              <button
                key={tab.value}
                type="button"
                onClick={() => setFilter(tab.value)}
                className={`flex items-center gap-2 px-5 py-2.5 2xl:px-6 2xl:py-3 text-[1.25rem] sm:text-[1.35rem] 2xl:text-[1.5rem] font-semibold rounded-xl transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[var(--main-color)] text-white shadow-md shadow-[var(--main-color)]/30 scale-100"
                    : "bg-[var(--second-bg-color)]/60 text-[var(--text-muted)] border border-[var(--border-color)] hover:border-[var(--main-color)]/50 hover:text-[var(--text-color)]"
                }`}
              >
                <Icon className="text-[1.3rem] 2xl:text-[1.5rem]" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Dynamic Grid: Auto scale up to 4K Displays */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 min-[2200px]:grid-cols-5 gap-6 sm:gap-7 2xl:gap-8 w-full"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95, y: 25 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                whileHover={{ y: -6 }}
                className="group flex flex-col justify-between w-full bg-[var(--second-bg-color)]/60 backdrop-blur-md rounded-2xl border border-[var(--border-color)] hover:border-[var(--main-color)]/60 shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)] transition-all duration-300 overflow-hidden"
              >
                <div className="flex flex-col flex-1">
                  {/* Fluid Media Header */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-[var(--bg-color)]">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--second-bg-color)] via-transparent to-transparent opacity-90" />

                    <span className="absolute top-3.5 left-3.5 px-3 py-1 text-[1.05rem] 2xl:text-[1.15rem] font-bold uppercase tracking-wider rounded-lg bg-[var(--card-bg)]/90 backdrop-blur-md text-[var(--main-color)] border border-[var(--border-color)] shadow-xs">
                      {project.type === "web" ? "Web App" : "Mobile App"}
                    </span>

                    <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-emerald-400 text-[1rem] 2xl:text-[1.1rem] font-medium flex items-center gap-1.5 shadow-xs">
                      <FiActivity className="text-[1.1rem] animate-pulse" />
                      <span>{project.metric}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 2xl:p-7 flex flex-col flex-1">
                    <h3 className="text-[1.75rem] sm:text-[1.9rem] 2xl:text-[2.1rem] font-bold mb-2 text-[var(--text-color)] group-hover:text-[var(--main-color)] transition-colors duration-300 leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-[1.2rem] 2xl:text-[1.35rem] text-[var(--text-muted)] mb-5 leading-relaxed line-clamp-3 flex-1">
                      {project.desc}
                    </p>

                    {/* Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-1 mt-auto">
                      {project.tech.map((item, idx) => (
                        <span
                          key={idx}
                          className="text-[1.05rem] 2xl:text-[1.15rem] px-2.5 py-0.5 rounded-lg bg-[var(--card-bg)] text-[var(--text-color)] border border-[var(--border-color)] group-hover:border-[var(--main-color)]/30 font-medium shadow-xs transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-5 sm:px-6 2xl:px-7 py-4 border-t border-[var(--border-color)] flex justify-between items-center bg-[var(--card-bg)]/40 shrink-0">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[1.25rem] 2xl:text-[1.35rem] font-semibold text-[var(--main-color)] hover:underline cursor-pointer"
                    >
                      <span>Live Preview</span>
                      <FaUpRightFromSquare className="text-[1.15rem]" />
                    </a>
                  ) : (
                    <span className="text-[1.15rem] 2xl:text-[1.25rem] font-medium text-[var(--text-muted)] flex items-center gap-1.5 italic">
                      <FiCheck className="text-emerald-500" /> Internal Solution
                    </span>
                  )}

                  <span className="text-[1.1rem] 2xl:text-[1.2rem] font-mono text-[var(--text-muted)] opacity-60">
                    Production
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}