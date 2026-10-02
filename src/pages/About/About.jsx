import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { calculateExperience } from "../../utils/experience";
import { FiCode, FiSmartphone, FiServer, FiShield, FiMessageSquare } from "react-icons/fi";

const highlights = [
  {
    icon: <FiCode className="text-[var(--main-color)] text-[2.2rem]" />,
    title: "Frontend Engineering",
    desc: "React.js, Next.js, TypeScript, Tailwind CSS, Material UI, Redux Toolkit",
  },
  {
    icon: <FiSmartphone className="text-[var(--main-color)] text-[2.2rem]" />,
    title: "Cross-Platform Mobile",
    desc: "Native-feel Android & iOS applications using React Native & Expo",
  },
  {
    icon: <FiServer className="text-[var(--main-color)] text-[2.2rem]" />,
    title: "Backend & REST APIs",
    desc: "Node.js, Express.js, Microservices & Scalable API Architectures",
  },
  {
    icon: <FiShield className="text-[var(--main-color)] text-[2.2rem]" />,
    title: "Databases & Security",
    desc: "MongoDB, PostgreSQL, Role-Based Access Control (RBAC) & Keycloak",
  },
];

const keySkillsPills = [
  "React.js",
  "Next.js",
  "React Native",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "TypeScript",
  "JavaScript (ES6+)",
  "Redux Toolkit",
  "Zustand",
  "React Query",
  "Tailwind CSS",
  "Material UI",
  "REST APIs",
  "Keycloak (RBAC)",
  "Git & GitHub",
];

function About() {
  const experience = calculateExperience("2023-05-01");

  return (
    <div className="w-full relative overflow-hidden py-4">
      {/* Background Accent Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[24rem] h-[24rem] xl:w-[36rem] xl:h-[36rem] bg-[var(--main-color)] opacity-5 blur-[12rem] pointer-events-none rounded-full"
      />

      {/* Main Full-Width Wrapper - Services & Home ସହିତ ସମାନ Layout */}
      <div className="w-full relative z-10 flex flex-col justify-center">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-left mb-6"
        >
          <h2 className="text-[1.6rem] sm:text-[1.8rem] lg:text-[2rem] font-bold tracking-tight text-[var(--text-color)] leading-snug">
            Who{" "}
            <span className="text-[var(--main-color)] drop-shadow-[0_0_10px_rgba(0,171,240,0.2)]">
              I Am
            </span>
          </h2>

          <p className="text-[0.95rem] sm:text-[1rem] text-[var(--text-muted)] mt-1.5 max-w-2xl font-normal leading-relaxed">
            Fullstack MERN Engineer & Frontend Specialist building resilient digital products.
          </p>
        </motion.div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center w-full">
          
          {/* LEFT COLUMN: Profile Image & Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col items-center justify-center w-full"
          >
            {/* Avatar with Rotating Glow */}
            <div className="relative flex justify-center items-center w-[20rem] h-[20rem] sm:w-[23rem] sm:h-[23rem] 2xl:w-[26rem] 2xl:h-[26rem]">
              <img
                src="/Abhijit.png"
                alt="Abhijit Sahoo"
                className="rounded-full w-[88%] h-[88%] object-cover border-[0.3rem] border-[var(--main-color)] z-10 shadow-[0_0_20px_rgba(0,171,240,0.25)]"
              />
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                className="absolute inset-0 rounded-full border-[0.25rem] border-t-transparent border-b-transparent border-l-[var(--main-color)] border-r-[var(--main-color)] shadow-[0_0_15px_var(--main-color)]"
              />
            </div>

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-2 gap-3.5 w-full max-w-[36rem] mt-6 sm:mt-7">
              <div className="bg-[var(--second-bg-color)]/60 backdrop-blur-md p-4 rounded-2xl border border-[var(--border-color)] text-center shadow-xs transition-colors">
                <h4 className="text-[2rem] sm:text-[2.2rem] 2xl:text-[2.4rem] font-bold text-[var(--main-color)]">
                  {experience}
                </h4>
                <p className="text-[1.15rem] 2xl:text-[1.25rem] text-[var(--text-muted)] font-medium">Industry Exp</p>
              </div>
              <div className="bg-[var(--second-bg-color)]/60 backdrop-blur-md p-4 rounded-2xl border border-[var(--border-color)] text-center shadow-xs transition-colors">
                <h4 className="text-[2rem] sm:text-[2.2rem] 2xl:text-[2.4rem] font-bold text-[var(--main-color)]">
                  Production
                </h4>
                <p className="text-[1.15rem] 2xl:text-[1.25rem] text-[var(--text-muted)] font-medium">Web & Mobile Apps</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Bio, Skills & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col text-left space-y-5 w-full"
          >
            <div className="space-y-1">
              <span className="text-[1.15rem] sm:text-[1.25rem] 2xl:text-[1.35rem] font-bold tracking-widest text-[var(--main-color)] uppercase">
                Fullstack & Mobile Engineer
              </span>
              <h3 className="text-[2.2rem] sm:text-[2.6rem] 2xl:text-[3rem] font-extrabold text-[var(--text-color)] leading-snug">
                Specialized in MERN Architecture & High-Performance UI
              </h3>
            </div>

            <p className="text-[1.35rem] sm:text-[1.45rem] 2xl:text-[1.55rem] leading-[1.7] text-[var(--text-muted)]">
              I am a{" "}
              <span className="text-[var(--main-color)] font-semibold">
                Frontend & MERN Stack Developer
              </span>{" "}
              with{" "}
              <span className="text-[var(--main-color)] font-semibold">
                {experience}
              </span>{" "}
              of hands-on expertise building enterprise-grade web applications, responsive dashboards, and cross-platform mobile solutions.
            </p>

            <p className="text-[1.35rem] sm:text-[1.45rem] 2xl:text-[1.55rem] leading-[1.7] text-[var(--text-muted)]">
              My core strength lies in translating complex UI/UX designs into pixel-perfect, accessible, and modular codebases using <strong>React.js</strong>, <strong>Next.js</strong>, and <strong>React Native</strong>. On the backend, I design secure REST APIs with <strong>Node.js</strong> and <strong>Express</strong>, paired with <strong>MongoDB</strong> or <strong>PostgreSQL</strong>, leveraging modern authentication protocols like <strong>Keycloak</strong> and strict Role-Based Access Control (RBAC).
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {keySkillsPills.map((skill, index) => (
                <span
                  key={index}
                  className="text-[1.1rem] 2xl:text-[1.2rem] px-3 py-1 rounded-full bg-[var(--second-bg-color)]/60 border border-[var(--main-color)]/25 text-[var(--main-color)] font-medium shadow-xs"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* 4 Balanced Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-2 w-full">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[var(--second-bg-color)]/60 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-[var(--border-color)] hover:border-[var(--main-color)] hover:shadow-[0_0_20px_rgba(0,171,240,0.3)] transition-all duration-300 shadow-xs flex flex-col justify-between transform-gpu group"
                >
                  <div>
                    <div className="mb-2.5 transition-transform duration-300 group-hover:scale-105">{item.icon}</div>
                    <h5 className="text-[1.4rem] 2xl:text-[1.5rem] font-bold mb-1 text-[var(--text-color)] group-hover:text-[var(--main-color)] transition-colors">
                      {item.title}
                    </h5>
                    <p className="text-[1.15rem] 2xl:text-[1.25rem] text-[var(--text-muted)] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Router Action Link */}
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex justify-center items-center gap-2 px-6 h-[4rem] 2xl:h-[4.4rem] border border-[var(--main-color)] rounded-xl text-[1.35rem] 2xl:text-[1.45rem] font-semibold text-[var(--main-color)] relative overflow-hidden hover:text-[var(--bg-color)] transition-all duration-300 before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-[var(--main-color)] before:-z-10 before:transition-all before:duration-300 hover:before:w-full cursor-pointer shadow-xs"
              >
                <FiMessageSquare className="text-[1.5rem]" />
                <span>Let's Talk</span>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

export default React.memo(About);