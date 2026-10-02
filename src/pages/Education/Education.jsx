import React from "react";
import { motion } from "framer-motion";
import { FiCalendar, FiBriefcase, FiCheckCircle } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";

// 1. Static Data outside component to prevent garbage collection on re-render
const educationData = [
  {
    date: "2021 - 2023",
    title: "Master of Computer Applications (MCA)",
    institution: "NIIS Institute of Business Administration, Bhubaneswar",
    grade: "8.75 CGPA",
    desc: "Specialized in Software Engineering, Advanced Web Technologies, Database Systems, and Scalable Application Architecture.",
  },
  {
    date: "2017 - 2020",
    title: "B.Sc in Computer Science",
    institution: "Chitalo Degree Mahavidyalaya, Jajpur Town",
    grade: "71%",
    desc: "Core focus on Data Structures, Algorithms, Object-Oriented Programming, and Web Development Fundamentals.",
  },
  {
    date: "2015 - 2017",
    title: "Intermediate (CHSE Odisha)",
    institution: "Vinayak College of Science and Commerce, Bhadrak",
    grade: "55%",
    desc: "Higher Secondary education with Science specialization (Physics, Chemistry, Mathematics).",
  },
];

const experienceData = [
  {
    date: "Nov 2025 - Present",
    title: "Software Engineer",
    company: "Comminent Pvt. Ltd.",
    bullets: [
      "Architecting scalable MERN web applications, enterprise dashboards, and cross-platform mobile apps with React Native.",
      "Developing secure RESTful microservices and backend APIs with Node.js, Express, and PostgreSQL.",
      "Implementing resilient state management pipelines using Redux Toolkit, React Query, and Zustand.",
    ],
  },
  {
    date: "July 2023 - Nov 2025",
    title: "Frontend Developer",
    company: "AbsecLab Pvt. Ltd.",
    bullets: [
      "Engineered high-performance, responsive UI systems utilizing React.js, Next.js, and Tailwind CSS.",
      "Optimized web applications for Core Web Vitals, maximum render speed, and cross-browser reliability.",
      "Collaborated with backend teams to integrate RBAC security, Keycloak protocols, and RESTful endpoints.",
    ],
  },
];

// 2. Optimized Animation Variants with Hardware Acceleration
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -20, y: 15 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 14,
    },
  },
};

function Education() {
  return (
    <div className="w-full relative overflow-hidden py-2 sm:py-4">
      {/* Background Ambient Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[24rem] h-[24rem] xl:w-[36rem] xl:h-[36rem] bg-[var(--main-color)] opacity-5 blur-[12rem] pointer-events-none rounded-full"
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
    My{" "}
    <span className="text-[var(--main-color)] drop-shadow-[0_0_10px_rgba(0,171,240,0.2)]">
      Journey
    </span>
  </h2>

  <p className="text-[0.95rem] sm:text-[1.05rem] text-[var(--text-muted)] mt-1.5 max-w-xl font-normal leading-relaxed">
    A chronological timeline of my academic background and professional engineering career.
  </p>
</motion.div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-14 w-full">
          
          {/* COLUMN 1: EDUCATION */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[var(--main-color)]/10 border border-[var(--main-color)]/25 flex items-center justify-center text-[2rem] text-[var(--main-color)]">
                <FaGraduationCap />
              </div>
              <h3 className="text-[2rem] sm:text-[2.3rem] font-bold text-[var(--text-color)]">
                Education
              </h3>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="relative border-l-[0.2rem] border-[var(--main-color)] ml-3 space-y-6"
            >
              {educationData.map((item, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  className="relative pl-6 sm:pl-8 group"
                >
                  {/* Glowing Timeline Node */}
                  <span 
                    aria-hidden="true"
                    className="absolute top-2 -left-[0.95rem] w-4 h-4 rounded-full bg-[var(--bg-color)] border-2 border-[var(--main-color)] shadow-[0_0_10px_var(--main-color)] transition-all duration-300 group-hover:bg-[var(--main-color)] group-hover:scale-125"
                  />

                  {/* Card Container */}
                  <div 
                    style={{ willChange: "transform" }}
                    className="bg-[var(--second-bg-color)]/60 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-[var(--border-color)] hover:border-[var(--main-color)] hover:shadow-[0_0_20px_rgba(0,171,240,0.25)] shadow-sm transition-all duration-300 transform-gpu group-hover:-translate-y-1"
                  >
                    <div className="inline-flex items-center gap-2 text-[1.1rem] 2xl:text-[1.2rem] font-semibold text-[var(--main-color)] bg-[var(--card-bg)] px-3 py-0.5 rounded-full border border-[var(--main-color)]/25 mb-2.5 shadow-xs">
                      <FiCalendar className="text-[1.2rem]" />
                      <span>{item.date}</span>
                    </div>

                    <h4 className="text-[1.65rem] sm:text-[1.85rem] font-bold text-[var(--text-color)] group-hover:text-[var(--main-color)] transition-colors leading-snug">
                      {item.title}
                    </h4>

                    <p className="text-[1.2rem] sm:text-[1.3rem] font-medium text-[var(--text-muted)] mt-1">
                      {item.institution} • <span className="text-[var(--main-color)] font-bold">{item.grade}</span>
                    </p>

                    <p className="text-[1.2rem] sm:text-[1.3rem] text-[var(--text-muted)] mt-2.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* COLUMN 2: EXPERIENCE */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[var(--main-color)]/10 border border-[var(--main-color)]/25 flex items-center justify-center text-[2rem] text-[var(--main-color)]">
                <FiBriefcase />
              </div>
              <h3 className="text-[2rem] sm:text-[2.3rem] font-bold text-[var(--text-color)]">
                Experience
              </h3>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="relative border-l-[0.2rem] border-[var(--main-color)] ml-3 space-y-6"
            >
              {experienceData.map((item, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  className="relative pl-6 sm:pl-8 group"
                >
                  {/* Glowing Timeline Node */}
                  <span 
                    aria-hidden="true"
                    className="absolute top-2 -left-[0.95rem] w-4 h-4 rounded-full bg-[var(--bg-color)] border-2 border-[var(--main-color)] shadow-[0_0_10px_var(--main-color)] transition-all duration-300 group-hover:bg-[var(--main-color)] group-hover:scale-125"
                  />

                  {/* Card Container */}
                  <div 
                    style={{ willChange: "transform" }}
                    className="bg-[var(--second-bg-color)]/60 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-[var(--border-color)] hover:border-[var(--main-color)] hover:shadow-[0_0_20px_rgba(0,171,240,0.25)] shadow-sm transition-all duration-300 transform-gpu group-hover:-translate-y-1"
                  >
                    <div className="inline-flex items-center gap-2 text-[1.1rem] 2xl:text-[1.2rem] font-semibold text-[var(--main-color)] bg-[var(--card-bg)] px-3 py-0.5 rounded-full border border-[var(--main-color)]/25 mb-2.5 shadow-xs">
                      <FiCalendar className="text-[1.2rem]" />
                      <span>{item.date}</span>
                    </div>

                    <h4 className="text-[1.65rem] sm:text-[1.85rem] font-bold text-[var(--text-color)] group-hover:text-[var(--main-color)] transition-colors leading-snug">
                      {item.title}
                    </h4>

                    <p className="text-[1.25rem] sm:text-[1.35rem] font-semibold text-[var(--main-color)] mt-0.5 mb-3">
                      {item.company}
                    </p>

                    <ul className="space-y-2">
                      {item.bullets.map((bullet, idx) => (
                        <li 
                          key={idx} 
                          className="flex items-start gap-2.5 text-[1.2rem] sm:text-[1.3rem] text-[var(--text-muted)] leading-relaxed"
                        >
                          <FiCheckCircle className="text-[var(--main-color)] shrink-0 text-[1.35rem] mt-1" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default React.memo(Education);