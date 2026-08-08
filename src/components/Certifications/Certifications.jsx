import React from "react";
import { motion } from "framer-motion";
import { FiAward, FiExternalLink, FiCheckCircle } from "react-icons/fi";

const certificatesData = [
  {
    id: 1,
    title: "React & Redux - Fullstack Certification",
    issuer: "Udemy / Meta",
    date: "2023",
    credentialId: "UC-89X32A1",
    skills: ["React.js", "Redux Toolkit", "REST APIs"],
    link: "https://udemy.com",
  },
  {
    id: 2,
    title: "React Native Mobile App Development",
    issuer: "Coursera / Meta",
    date: "2024",
    credentialId: "COURSERA-RN-402",
    skills: ["React Native", "Expo", "Mobile UI"],
    link: "https://coursera.org",
  },
  {
    id: 3,
    title: "Node.js & PostgreSQL Backend Architecture",
    issuer: "FreeCodeCamp / HackerRank",
    date: "2024",
    credentialId: "HKR-NODE-781",
    skills: ["Node.js", "Express", "PostgreSQL"],
    link: "https://hackerrank.com",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-[2rem] px-6 sm:px-12 md:px-16 lg:px-20 bg-[#081b29] text-[#ededed] relative overflow-hidden w-full flex justify-center"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-10 w-[30rem] h-[30rem] bg-[var(--main-color)] opacity-5 blur-[10rem] pointer-events-none rounded-full" />

      <div className="w-full max-w-[125rem] mx-auto relative z-10 flex flex-col justify-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-[4rem] w-full"
        >
          <h2 className="text-[3rem] sm:text-[4rem] lg:text-[4.8rem] font-bold">
            Licenses & <span className="text-[var(--main-color)]">Certifications</span>
          </h2>
          <p className="text-[1.3rem] sm:text-[1.5rem] lg:text-[1.6rem] text-[#ededed]/70 mt-2 max-w-[55rem] mx-auto">
            Verified skills, professional accomplishments, and technical training.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {certificatesData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
              className="bg-[#112e42]/80 backdrop-blur-md p-6 sm:p-8 rounded-[1.5rem] border border-[#ededed]/10 hover:border-[var(--main-color)]/70 transition-all duration-300 flex flex-col justify-between shadow-xl group w-full h-full"
            >
              <div>
                {/* Top Header */}
                <div className="flex justify-between items-start gap-3 mb-4">
                  <div className="w-[4.2rem] h-[4.2rem] rounded-xl bg-[var(--main-color)]/10 border border-[var(--main-color)]/30 flex items-center justify-center text-[var(--main-color)] text-[2.2rem]">
                    <FiAward />
                  </div>
                  <span className="text-[1.1rem] px-3 py-1 rounded-full bg-[#081b29] text-[var(--main-color)] border border-[var(--main-color)]/30 font-semibold">
                    {item.date}
                  </span>
                </div>

                {/* Title & Issuer */}
                <h3 className="text-[1.8rem] sm:text-[2rem] font-bold text-[#ededed] group-hover:text-[var(--main-color)] transition-colors leading-[1.3]">
                  {item.title}
                </h3>
                <p className="text-[1.3rem] font-semibold text-[var(--main-color)] mt-1 mb-2">
                  {item.issuer}
                </p>
                <p className="text-[1.1rem] text-[#ededed]/50 font-mono mb-4">
                  ID: {item.credentialId}
                </p>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="flex items-center gap-1 text-[1.1rem] px-2.5 py-0.5 rounded-md bg-[#081b29] text-[#ededed]/80 border border-[#ededed]/10"
                    >
                      <FiCheckCircle className="text-[var(--main-color)] text-[1.2rem]" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Verify Link */}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full pt-4 border-t border-[#ededed]/10 text-[1.3rem] font-semibold text-[var(--main-color)] hover:underline mt-auto"
              >
                <span>Verify Credential</span>
                <FiExternalLink className="text-[1.4rem]" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}