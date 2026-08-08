import React from "react";
import { motion } from "framer-motion";
import { 
  FaHtml5, 
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
  SiReactquery
} from "react-icons/si";

// Scroll-Triggered Stagger Variants for Cards
const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 14 },
  },
};

export default function Skills() {
  const technicalSkills = [
    { name: "React.js / Next.js", level: 92, icon: <FaReact className="text-[#61dafb]" /> },
    { name: "JavaScript (ES6+)", level: 90, icon: <FaJsSquare className="text-[#f7df1e]" /> },
    { name: "Tailwind CSS / MUI", level: 95, icon: <SiTailwindcss className="text-[#06b6d4]" /> },
    { name: "React Query / Redux / Zustand", level: 88, icon: <SiReactquery className="text-[#ff4154]" /> },
    { name: "React Native", level: 82, icon: <FaMobileAlt className="text-[var(--main-color)]" /> },
    { name: "Node.js / Express.js", level: 85, icon: <FaNodeJs className="text-[#339933]" /> },
    { name: "PostgreSQL / MongoDB", level: 80, icon: <SiPostgresql className="text-[#4169e1]" /> },
    { name: "RBAC & Keycloak Security", level: 85, icon: <FaKey className="text-[#e25555]" /> },
  ];

  const marqueeCoding = [
    { name: "HTML5", level: "Advanced", icon: <FaHtml5 className="text-[#e34f26]" /> },
    { name: "Tailwind CSS", level: "Advanced", icon: <SiTailwindcss className="text-[#06b6d4]" /> },
    { name: "JavaScript", level: "Advanced", icon: <FaJsSquare className="text-[#f7df1e]" /> },
    { name: "React.js", level: "Advanced", icon: <FaReact className="text-[#61dafb]" /> },
    { name: "Next.js", level: "Advanced", icon: <SiNextdotjs className="text-white" /> },
    { name: "React Native", level: "Intermediate", icon: <FaReact className="text-[#61dafb]" /> },
    { name: "React Query", level: "Advanced", icon: <SiReactquery className="text-[#ff4154]" /> },
    { name: "Redux Toolkit", level: "Advanced", icon: <SiRedux className="text-[#764abc]" /> },
    { name: "Zustand", level: "Advanced", icon: <FaCogs className="text-[#ff9900]" /> },
    { name: "Node.js", level: "Advanced", icon: <FaNodeJs className="text-[#339933]" /> },
    { name: "Express.js", level: "Intermediate", icon: <SiExpress className="text-white" /> },
    { name: "MongoDB", level: "Advanced", icon: <SiMongodb className="text-[#47a248]" /> },
    { name: "PostgreSQL", level: "Intermediate", icon: <SiPostgresql className="text-[#4169e1]" /> },
    { name: "Docker", level: "Intermediate", icon: <FaDocker className="text-[#2496ed]" /> },
    { name: "Git", level: "Advanced", icon: <FaGitAlt className="text-[#f05032]" /> },
  ];

  const professionalSkills = [
    { name: "Web Application Dev", level: "Expert", icon: <FaLaptopCode className="text-[var(--main-color)]" /> },
    { name: "Mobile Development", level: "Advanced", icon: <FaMobileAlt className="text-[var(--main-color)]" /> },
    { name: "REST API Integration", level: "Expert", icon: <FaPlug className="text-[var(--main-color)]" /> },
    { name: "RBAC & Security", level: "Advanced", icon: <FaKey className="text-[var(--main-color)]" /> },
    { name: "State Management", level: "Expert", icon: <SiRedux className="text-[#764abc]" /> },
    { name: "Performance Tuning", level: "Advanced", icon: <FaTachometerAlt className="text-[var(--main-color)]" /> },
    { name: "UI/UX Translation", level: "Intermediate", icon: <FaPaintBrush className="text-[var(--main-color)]" /> },
  ];

  const duplicatedCoding = [...marqueeCoding, ...marqueeCoding];
  const duplicatedProfessional = [...professionalSkills, ...professionalSkills];

  return (
    <section
      id="skills"
      className="py-[6rem] px-6 sm:px-12 md:px-16 lg:px-20 bg-[#081b29] text-[#ededed] relative overflow-x-clip w-full flex justify-center"
    >
      {/* Background Ambient Glow */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.12, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 w-[30rem] h-[30rem] bg-[var(--main-color)] blur-[120px] pointer-events-none rounded-full" 
      />

      <div className="w-full max-w-[125rem] mx-auto relative z-10 flex flex-col justify-center">
        
        {/* SECTION HEADING WITH SCROLL REVEAL */}
        <motion.div
          initial={{ opacity: 0, y: -30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-center mb-[4rem] w-full"
        >
          <h2 className="text-[3rem] sm:text-[4rem] lg:text-[4.8rem] font-bold tracking-wide">
            My <span className="text-[var(--main-color)] drop-shadow-[0_0_15px_rgba(0,171,240,0.4)]">Skills</span>
          </h2>
          <p className="text-[1.3rem] sm:text-[1.5rem] lg:text-[1.6rem] text-[#ededed]/70 mt-2 max-w-[55rem] mx-auto">
            Technologies, core frameworks, and architecture capabilities I use to construct enterprise systems.
          </p>
        </motion.div>

        {/* SECTION 1: CORE TECHNICAL PROFICIENCY WITH REPEATING SCROLL-TRIGGERED BARS */}
        <div className="mb-[5rem]">
          <h3 className="text-[2rem] sm:text-[2.4rem] font-semibold text-[#ededed] mb-[2.5rem] border-l-4 border-[var(--main-color)] pl-4">
            Core Technical Proficiency
          </h3>

          <motion.div
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={cardItemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-[#112e42]/80 backdrop-blur-md p-6 rounded-[1.2rem] border border-[var(--main-color)]/20 hover:border-[var(--main-color)] shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-[2.8rem] group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <span className="text-[1.3rem] font-bold text-[var(--main-color)]">
                    {skill.level}%
                  </span>
                </div>

                <h4 className="text-[1.5rem] font-semibold text-[#ededed] mb-3 group-hover:text-[var(--main-color)] transition-colors">
                  {skill.name}
                </h4>

                {/* PROGRESS BAR THAT RE-RUNS EVERY TIME YOU SCROLL BACK */}
                <div className="w-full h-2 bg-[#081b29] rounded-full overflow-hidden border border-[#ededed]/10 relative">
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ 
                      duration: 1.2, 
                      delay: 0.05 + index * 0.06, 
                      ease: "easeOut" 
                    }}
                    className="h-full bg-[var(--main-color)] rounded-full shadow-[0_0_12px_var(--main-color)]"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* SECTION 2: DYNAMIC INFINITE MARQUEE - TECH STACK */}
        <div className="mb-[5rem] w-full overflow-hidden">
          <h3 className="text-[2rem] sm:text-[2.4rem] font-semibold text-[#ededed] mb-[2rem] border-l-4 border-[var(--main-color)] pl-4">
            Full Technology Ecosystem
          </h3>

          <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <motion.div
              className="flex gap-6 w-max py-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 28,
                repeat: Infinity,
              }}
            >
              {duplicatedCoding.map((skill, index) => (
                <div
                  key={index}
                  className="bg-[#112e42]/80 backdrop-blur-md p-6 sm:p-7 rounded-[1.2rem] border border-[#ededed]/10 hover:border-[var(--main-color)] transition-all duration-300 flex flex-col items-center justify-center text-center shadow-lg w-[17rem] shrink-0 group hover:scale-105 hover:shadow-[0_0_20px_rgba(0,171,240,0.2)]"
                >
                  <div className="text-[3.2rem] mb-3 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h4 className="text-[1.4rem] font-semibold text-[#ededed] group-hover:text-[var(--main-color)] transition-colors">
                    {skill.name}
                  </h4>
                  <span className="text-[1.1rem] mt-1 text-[#ededed]/50 font-medium">
                    {skill.level}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* SECTION 3: REVERSE MARQUEE - CORE COMPETENCIES */}
        <div className="w-full overflow-hidden">
          <h3 className="text-[2rem] sm:text-[2.4rem] font-semibold text-[#ededed] mb-[2rem] border-l-4 border-[var(--main-color)] pl-4">
            Engineering Competencies
          </h3>

          <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <motion.div
              className="flex gap-6 w-max py-4"
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                ease: "linear",
                duration: 28,
                repeat: Infinity,
              }}
            >
              {duplicatedProfessional.map((skill, index) => (
                <div
                  key={index}
                  className="bg-[#112e42]/80 backdrop-blur-md p-6 rounded-[1.2rem] border border-[#ededed]/10 hover:border-[var(--main-color)] transition-all duration-300 flex items-center gap-5 shadow-lg w-[26rem] shrink-0 group hover:scale-105 hover:shadow-[0_0_20px_rgba(0,171,240,0.2)]"
                >
                  <div className="w-[4.5rem] h-[4.5rem] rounded-[1rem] bg-[var(--main-color)]/10 border border-[var(--main-color)]/30 flex items-center justify-center text-[2rem] shrink-0 transition-all duration-300  group-hover:text-[#081b29]">
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="text-[1.5rem] font-semibold text-[#ededed] group-hover:text-[var(--main-color)] transition-colors">
                      {skill.name}
                    </h4>
                    <span className="text-[1.2rem] text-[#ededed]/50">
                      {skill.level}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}