import React from "react";
import { motion } from "framer-motion";
import {

  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaMobileAlt,
  FaLaptopCode,
  FaPaintBrush,
  FaPlug,
  FaTachometerAlt,
  FaKey,
  FaDocker,
  FaGitAlt,
  FaCogs
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiRedux,
  SiReactquery,
  SiTypescript
} from "react-icons/si";

const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 14 },
  },
};

export default function Skills() {
  const technicalSkills = [
    { name: "React.js / Next.js", level: 92, icon: <FaReact className="text-[#61dafb]" /> },
    { name: "TypeScript / JavaScript (ES6+)", level: 90, icon: <SiTypescript className="text-[#3178c6]" /> },
    { name: "Tailwind CSS / Material UI", level: 95, icon: <SiTailwindcss className="text-[#06b6d4]" /> },
    { name: "React Query / Redux / Zustand", level: 88, icon: <SiReactquery className="text-[#ff4154]" /> },
    { name: "React Native (Mobile Apps)", level: 84, icon: <FaMobileAlt className="text-[var(--main-color)]" /> },
    { name: "Node.js / Express.js", level: 86, icon: <FaNodeJs className="text-[#339933]" /> },
    { name: "PostgreSQL / MongoDB", level: 82, icon: <SiPostgresql className="text-[#4169e1]" /> },
    { name: "RBAC & Keycloak Security", level: 85, icon: <FaKey className="text-[#e25555]" /> },
  ];

  const marqueeCoding = [
    { name: "React.js", level: "Advanced", icon: <FaReact className="text-[#61dafb]" /> },
    { name: "Next.js", level: "Advanced", icon: <SiNextdotjs className="text-[var(--text-color)]" /> },
    { name: "TypeScript", level: "Advanced", icon: <SiTypescript className="text-[#3178c6]" /> },
    { name: "JavaScript", level: "Advanced", icon: <FaJsSquare className="text-[#f7df1e]" /> },
    { name: "React Native", level: "Advanced", icon: <FaMobileAlt className="text-[#61dafb]" /> },
    { name: "Node.js", level: "Advanced", icon: <FaNodeJs className="text-[#339933]" /> },
    { name: "Express.js", level: "Advanced", icon: <SiExpress className="text-[var(--text-color)]" /> },
    { name: "MongoDB", level: "Advanced", icon: <SiMongodb className="text-[#47a248]" /> },
    { name: "PostgreSQL", level: "Intermediate", icon: <SiPostgresql className="text-[#4169e1]" /> },
    { name: "Tailwind CSS", level: "Expert", icon: <SiTailwindcss className="text-[#06b6d4]" /> },
    { name: "Redux Toolkit", level: "Advanced", icon: <SiRedux className="text-[#764abc]" /> },
    { name: "React Query", level: "Advanced", icon: <SiReactquery className="text-[#ff4154]" /> },
    { name: "Zustand", level: "Advanced", icon: <FaCogs className="text-[#ff9900]" /> },
    { name: "Git & GitHub", level: "Advanced", icon: <FaGitAlt className="text-[#f05032]" /> },
    { name: "Docker", level: "Intermediate", icon: <FaDocker className="text-[#2496ed]" /> },
  ];

  const professionalSkills = [
    { name: "Web Application Engineering", level: "Expert", icon: <FaLaptopCode className="text-[var(--main-color)]" /> },
    { name: "Cross-Platform Mobile Dev", level: "Advanced", icon: <FaMobileAlt className="text-[var(--main-color)]" /> },
    { name: "RESTful API Integration", level: "Expert", icon: <FaPlug className="text-[var(--main-color)]" /> },
    { name: "RBAC & Enterprise Security", level: "Advanced", icon: <FaKey className="text-[var(--main-color)]" /> },
    { name: "Scalable State Management", level: "Expert", icon: <SiRedux className="text-[#764abc]" /> },
    { name: "Performance Optimization", level: "Advanced", icon: <FaTachometerAlt className="text-[var(--main-color)]" /> },
    { name: "UI/UX Design Translation", level: "Advanced", icon: <FaPaintBrush className="text-[var(--main-color)]" /> },
  ];

  const duplicatedCoding = [...marqueeCoding, ...marqueeCoding];
  const duplicatedProfessional = [...professionalSkills, ...professionalSkills];

  return (
    <div className="w-full relative overflow-hidden py-2 sm:py-4">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-10 w-[24rem] h-[24rem] xl:w-[36rem] xl:h-[36rem] bg-[var(--main-color)] opacity-5 blur-[12rem] pointer-events-none rounded-full"
      />

      <div className="w-full mx-auto relative z-10 flex flex-col justify-center">

        {/* Page Heading */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-left mb-6 sm:mb-8"
        >
          <h2 className="text-[1.5rem] sm:text-[1.8rem] lg:text-[2rem] font-bold tracking-tight text-[var(--text-color)] leading-snug">
            Technical{" "}
            <span className="text-[var(--main-color)] drop-shadow-[0_0_10px_rgba(0,171,240,0.2)]">
              Skills
            </span>
          </h2>

          <p className="text-[0.95rem] sm:text-[1.05rem] text-[var(--text-muted)] mt-1.5 max-w-xl font-normal leading-relaxed">
            Technologies, frameworks, and architecture patterns I leverage to construct robust MERN, Frontend, and Mobile applications.
          </p>
        </motion.div>

        {/* SECTION 1: CORE TECHNICAL PROFICIENCY */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-1.5 h-7 rounded-full bg-[var(--main-color)]" />
            <h3 className="text-[1.9rem] sm:text-[2.2rem] font-bold text-[var(--text-color)]">
              Core Technical Proficiency
            </h3>
          </div>

          <motion.div
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 gap-5 sm:gap-6 w-full"
          >
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={cardItemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                /* Card hover re border color abang glowing shadow */
                className="bg-[var(--second-bg-color)]/60 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-[var(--border-color)] hover:border-[var(--main-color)] hover:shadow-[0_0_25px_rgba(0,171,240,0.35)] shadow-md transition-all duration-300 group flex flex-col justify-between cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-[2.6rem] sm:text-[2.8rem] transition-transform duration-300 group-hover:scale-110">
                      {skill.icon}
                    </div>
                    <span className="text-[1.3rem] font-bold text-[var(--main-color)]">
                      {skill.level}%
                    </span>
                  </div>

                  <h4 className="text-[1.45rem] sm:text-[1.55rem] font-bold text-[var(--text-color)] mb-4 group-hover:text-[var(--main-color)] transition-colors leading-snug">
                    {skill.name}
                  </h4>
                </div>

                {/* Animated Progress Bar: scroll up/down re repeat animate heba */}
                <div className="w-full h-2 bg-[var(--card-bg)] rounded-full overflow-hidden border border-[var(--border-color)] relative">
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{
                      duration: 1.1,
                      delay: 0.05 + index * 0.04,
                      ease: "easeOut"
                    }}
                    className="h-full bg-[var(--main-color)] rounded-full shadow-[0_0_12px_var(--main-color)]"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* SECTION 2: DYNAMIC MARQUEE - FULL TECHNOLOGY ECOSYSTEM */}
        <div className="mb-10 sm:mb-12 w-full overflow-hidden">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-1.5 h-7 rounded-full bg-[var(--main-color)]" />
            <h3 className="text-[1.9rem] sm:text-[2.2rem] font-bold text-[var(--text-color)]">
              Full Technology Ecosystem
            </h3>
          </div>

          <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)]">
            <motion.div
              className="flex gap-4 sm:gap-6 w-max py-2"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 30,
                repeat: Infinity,
              }}
            >
              {duplicatedCoding.map((skill, index) => (
                <div
                  key={index}
                  className="bg-[var(--second-bg-color)]/60 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-[var(--border-color)] hover:border-[var(--main-color)] hover:shadow-[0_0_20px_rgba(0,171,240,0.3)] transition-all duration-300 flex flex-col items-center justify-center text-center shadow-sm w-[15rem] sm:w-[17rem] shrink-0 group hover:scale-105"
                >
                  <div className="text-[2.8rem] sm:text-[3.2rem] mb-2.5 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h4 className="text-[1.35rem] sm:text-[1.45rem] font-bold text-[var(--text-color)] group-hover:text-[var(--main-color)] transition-colors">
                    {skill.name}
                  </h4>
                  <span className="text-[1.05rem] sm:text-[1.1rem] mt-1 text-[var(--text-muted)] font-medium">
                    {skill.level}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* SECTION 3: REVERSE MARQUEE - ENGINEERING COMPETENCIES */}
        <div className="w-full overflow-hidden">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-1.5 h-7 rounded-full bg-[var(--main-color)]" />
            <h3 className="text-[1.9rem] sm:text-[2.2rem] font-bold text-[var(--text-color)]">
              Engineering Competencies
            </h3>
          </div>

          <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)]">
            <motion.div
              className="flex gap-4 sm:gap-6 w-max py-2"
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                ease: "linear",
                duration: 30,
                repeat: Infinity,
              }}
            >
              {duplicatedProfessional.map((skill, index) => (
                <div
                  key={index}
                  className="bg-[var(--second-bg-color)]/60 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-[var(--border-color)] hover:border-[var(--main-color)] hover:shadow-[0_0_20px_rgba(0,171,240,0.3)] transition-all duration-300 flex items-center gap-4 shadow-sm w-[24rem] sm:w-[27rem] shrink-0 group hover:scale-105"
                >
                  <div className="w-[4.2rem] h-[4.2rem] rounded-xl bg-[var(--main-color)]/10 border border-[var(--main-color)]/25 flex items-center justify-center text-[2rem] shrink-0 transition-all duration-300 group-hover:scale-105">
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="text-[1.4rem] sm:text-[1.5rem] font-bold text-[var(--text-color)] group-hover:text-[var(--main-color)] transition-colors leading-snug">
                      {skill.name}
                    </h4>
                    <span className="text-[1.15rem] text-[var(--text-muted)] font-medium">
                      {skill.level}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
}