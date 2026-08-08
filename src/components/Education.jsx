import React from "react";
import { motion } from "framer-motion";
import { FiCalendar, FiBriefcase, FiCheckCircle } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";

// Container variant for staggering children animations
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Card variant with spring physics for natural movement
const cardVariants = {
  hidden: { opacity: 0, x: -30, y: 20 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

export default function Education() {
  const educationData = [
    {
      date: "2021 - 2023",
      title: "Master of Computer Applications (MCA)",
      institution: "NIIS Institute of Business Administration, Bhubaneswar",
      grade: "8.75 CGPA",
      desc: "Specialized in Software Engineering, Advanced Web Technologies, Database Systems, and Application Architecture.",
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
        "Building scalable full-stack web and cross-platform mobile applications using React, Next.js, and React Native.",
        "Developing robust RESTful APIs with Node.js, Express, and PostgreSQL.",
        "Implementing state management solutions with Redux Toolkit and Zustand for smooth app performance.",
      ],
    },
    {
      date: "July 2023 - Nov 2025",
      title: "Frontend Developer",
      company: "AbsecLab Pvt. Ltd.",
      bullets: [
        "Engineered high-performance, responsive user interfaces using React.js, Next.js, and Tailwind CSS.",
        "Optimized web apps for maximum speed, scalability, and cross-browser compatibility.",
        "Collaborated closely with backend teams and UI/UX designers to translate Figma designs into pixel-perfect code.",
      ],
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen px-[5%] sm:px-[8%] py-[4rem] bg-[#081b29] text-[#ededed] overflow-hidden"
    >
      {/* HEADING WITH FADE & SCALE */}
      <motion.h2
        initial={{ opacity: 0, y: -40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-[3rem] sm:text-[4rem] md:text-[5rem] text-center mb-[5rem] font-bold tracking-wide"
      >
        My <span className="text-[var(--main-color)] drop-shadow-[0_0_15px_rgba(0,238,255,0.3)]">Journey</span>
      </motion.h2>

      <div className="flex flex-wrap gap-[4rem] lg:gap-[5rem]">

        {/* EDUCATION COLUMN */}
        <div className="flex-1 min-w-[300px]">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-[2.5rem]"
          >
            <FaGraduationCap className="text-[2.8rem] text-[var(--main-color)]" />
            <h3 className="text-[2.2rem] sm:text-[2.5rem] font-semibold">Education</h3>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="relative border-l-[0.2rem] border-[var(--main-color)] ml-2"
          >
            {educationData.map((item, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className="relative pl-[2.2rem] mb-[3rem] group"
              >
                {/* Animated Glowing Timeline Dot */}
                <motion.span 
                  whileHover={{ scale: 1.4 }}
                  className="absolute top-1 left-[-1.1rem] w-[2rem] h-[2rem] rounded-full bg-[#081b29] border-4 border-[var(--main-color)] shadow-[0_0_12px_var(--main-color)] transition-all duration-300 group-hover:bg-[var(--main-color)]"
                />

                {/* Card Container with Interactive Hover Elevation */}
                <motion.div 
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-[#112e42] p-[2rem] rounded-[1rem] border border-[var(--main-color)]/40 hover:border-[var(--main-color)] hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] transition-all duration-300"
                >
                  <div className="inline-flex items-center gap-2 text-[1.2rem] font-semibold text-[var(--main-color)] bg-[#081b29] px-3.5 py-1 rounded-full border border-[var(--main-color)]/30 mb-3">
                    <FiCalendar className="text-[1.3rem]" />
                    <span>{item.date}</span>
                  </div>
                  <h4 className="text-[1.8rem] sm:text-[2rem] font-bold text-[#ededed] group-hover:text-[var(--main-color)] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[1.3rem] font-medium text-[#ededed]/80 mt-1">
                    {item.institution} • <span className="text-[var(--main-color)] font-bold">{item.grade}</span>
                  </p>
                  <p className="text-[1.3rem] text-[#ededed]/70 mt-3 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* EXPERIENCE COLUMN */}
        <div className="flex-1 min-w-[300px]">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3 mb-[2.5rem]"
          >
            <FiBriefcase className="text-[2.8rem] text-[var(--main-color)]" />
            <h3 className="text-[2.2rem] sm:text-[2.5rem] font-semibold">Experience</h3>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="relative border-l-[0.2rem] border-[var(--main-color)] ml-2"
          >
            {experienceData.map((item, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className="relative pl-[2.2rem] mb-[3rem] group"
              >
                {/* Animated Glowing Timeline Dot */}
                <motion.span 
                  whileHover={{ scale: 1.4 }}
                  className="absolute top-1 left-[-1.1rem] w-[2rem] h-[2rem] rounded-full bg-[#081b29] border-4 border-[var(--main-color)] shadow-[0_0_12px_var(--main-color)] transition-all duration-300 group-hover:bg-[var(--main-color)]"
                />

                {/* Card Container with Interactive Hover Elevation */}
                <motion.div 
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-[#112e42] p-[2rem] rounded-[1rem] border border-[var(--main-color)]/40 hover:border-[var(--main-color)] hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] transition-all duration-300"
                >
                  <div className="inline-flex items-center gap-2 text-[1.2rem] font-semibold text-[var(--main-color)] bg-[#081b29] px-3.5 py-1 rounded-full border border-[var(--main-color)]/30 mb-3">
                    <FiCalendar className="text-[1.3rem]" />
                    <span>{item.date}</span>
                  </div>
                  <h4 className="text-[1.8rem] sm:text-[2rem] font-bold text-[#ededed] group-hover:text-[var(--main-color)] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[1.3rem] font-semibold text-[var(--main-color)] mt-1 mb-3">
                    {item.company}
                  </p>

                  <ul className="space-y-2.5">
                    {item.bullets.map((bullet, idx) => (
                      <motion.li 
                        key={idx} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * idx }}
                        className="flex items-start gap-2 text-[1.3rem] text-[#ededed]/80 leading-relaxed"
                      >
                        <FiCheckCircle className="text-[var(--main-color)] shrink-0 text-[1.4rem] mt-1" />
                        <span>{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}