import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiAward, FiExternalLink, FiCheckCircle, FiMaximize2, FiX } from "react-icons/fi";

const certificatesData = [
  {
    id: 1,
    title: "Introduction to Internet of Things",
    issuer: "NPTEL / IIT Kharagpur",
    date: "MCA",
  
    skills: ["IoT Architecture", "Sensors & Actuators", "Wireless Networks", "Embedded Systems"],
    link: "/introduction%20to%20internet%20of%20things.jpg",
    image: "/introduction%20to%20internet%20of%20things.jpg",
    tag: "NPTEL",
  },
  {
    id: 2,
    title: "Cloud Computing",
    issuer: "NPTEL / IIT Kharagpur",
    date: "MCA",
   
    skills: ["Cloud Architecture", "Virtualization", "AWS / Azure Basics", "Distributed Systems"],
    link: "/Cloud%20Computing.jpg",
    image: "/Cloud%20Computing.jpg",
    tag: "NPTEL",
  },
  {
    id: 3,
    title: "Intellectual Property",
    issuer: "NPTEL / IIT Kharagpur",
    date: "MCA",
  
    skills: ["Patents & Trademarks", "Copyright Law", "IP Strategy", "Tech Ethics"],
    link: "/intellectual%20property.jpg",
    image: "/intellectual%20property.jpg",
    tag: "NPTEL",
  },
  {
    id: 4,
    title: "React & Redux - Fullstack Certification",
    issuer: "Udemy / Meta",
    date: "2023",
  
    skills: ["React.js", "Redux Toolkit", "REST APIs", "State Architecture"],
    link: "https://udemy.com",
    image: null,
    tag: "Web Dev",
  },
  {
    id: 5,
    title: "React Native Mobile App Development",
    issuer: "Coursera / Meta",
    date: "2025",
   
    skills: ["React Native", "Expo", "Mobile UI", "Offline Storage"],
    link: "https://coursera.org",
    image: null,
    tag: "Mobile",
  },
  {
    id: 6,
    title: "Node.js & PostgreSQL Backend Architecture",
    issuer: "FreeCodeCamp / HackerRank",
    date: "2025",
 
    skills: ["Node.js", "Express.js", "PostgreSQL", "API Security"],
    link: "https://hackerrank.com",
    image: null,
    tag: "Backend",
  },
];

function Certifications() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="w-full relative overflow-hidden py-4">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[35rem] h-[35rem] xl:w-[50rem] xl:h-[50rem] bg-[var(--main-color)] opacity-[0.06] blur-[150px] pointer-events-none rounded-full"
      />

      {/* Main Full-Width Wrapper -  */}
      <div className="w-full relative z-10 flex flex-col justify-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-left mb-6"
        >
          <h2 className="text-[1.6rem] sm:text-[1.8rem] lg:text-[2rem] font-bold tracking-tight text-[var(--text-color)] leading-snug">
            Licenses &{" "}
            <span className="text-[var(--main-color)] drop-shadow-[0_0_10px_rgba(0,171,240,0.2)]">
              Certifications
            </span>
          </h2>
          <p className="text-[0.95rem] sm:text-[1rem] text-[var(--text-muted)] mt-1.5 max-w-2xl font-normal leading-relaxed">
            Verified NPTEL certifications completed during my MCA along with professional industry credentials.
          </p>
        </motion.div>

        {/* Dynamic Responsive Full-Width Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-5 w-full items-stretch">
          {certificatesData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-[var(--second-bg-color)]/70 backdrop-blur-xl p-5 rounded-2xl border border-[var(--border-color)] hover:border-[var(--main-color)] hover:shadow-[0_10px_30px_rgba(0,171,240,0.18)] transition-all duration-300 flex flex-col justify-between group h-full"
            >
              <div className="flex flex-col flex-grow">
                {/* Header Tag and Date */}
                <div className="flex justify-between items-center gap-2 mb-3.5">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-[var(--main-color)]/15 text-[var(--main-color)] border border-[var(--main-color)]/30">
                    {item.tag}
                  </span>
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-[var(--card-bg)] text-[var(--main-color)] border border-[var(--main-color)]/25">
                    {item.date}
                  </span>
                </div>

                {/* Certificate Preview Card */}
                {item.image ? (
                  <div
                    onClick={() => setSelectedImage({ url: item.image, title: item.title })}
                    className="relative w-full aspect-[16/10] mb-3.5 rounded-xl overflow-hidden border border-[var(--border-color)] group-hover:border-[var(--main-color)]/40 cursor-pointer bg-slate-950/10 flex items-center justify-center p-1.5"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 rounded-lg"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-medium text-xs backdrop-blur-[2px] rounded-xl">
                      <FiMaximize2 className="text-base" />
                      <span>Preview Certificate</span>
                    </div>
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-xl bg-[var(--main-color)]/10 border border-[var(--main-color)]/25 flex items-center justify-center text-[var(--main-color)] text-2xl mb-3.5 group-hover:scale-105 transition-transform duration-300">
                    <FiAward />
                  </div>
                )}

                {/* Info */}
                <h3 className="text-base sm:text-lg font-bold text-[var(--text-color)] group-hover:text-[var(--main-color)] transition-colors leading-snug mb-1 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm font-semibold text-[var(--main-color)] mb-1.5">
                  {item.issuer}
                </p>

                <p className="text-xs text-[var(--text-muted)] font-mono mb-3">
                  Credential ID: <span className="text-[var(--text-color)] font-medium">{item.credentialId}</span>
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
                  {item.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md bg-[var(--card-bg)] text-[var(--text-color)] border border-[var(--border-color)] group-hover:border-[var(--main-color)]/30 font-medium"
                    >
                      <FiCheckCircle className="text-[var(--main-color)] text-[10px] shrink-0" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-[var(--border-color)] flex items-center justify-between text-xs font-semibold text-[var(--main-color)]">
                {item.image ? (
                  <button
                    type="button"
                    onClick={() => setSelectedImage({ url: item.image, title: item.title })}
                    className="inline-flex items-center gap-1.5 hover:underline cursor-pointer"
                  >
                    <span>View Certificate</span>
                    <FiMaximize2 className="text-xs" />
                  </button>
                ) : (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:underline"
                  >
                    <span>Verify Credential</span>
                    <FiExternalLink className="text-xs" />
                  </a>
                )}

                {item.image && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text-muted)] hover:text-[var(--main-color)] inline-flex items-center gap-1 text-[11px] transition-colors"
                  >
                    <span>Open Raw</span>
                    <FiExternalLink />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-[var(--second-bg-color)] rounded-2xl overflow-hidden border border-[var(--border-color)] shadow-2xl p-3 sm:p-5"
            >
              <div className="flex justify-between items-center px-2 py-1.5 mb-2 border-b border-[var(--border-color)]">
                <h4 className="text-sm sm:text-base font-semibold text-[var(--text-color)] truncate pr-4">
                  {selectedImage.title}
                </h4>
                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="p-1 rounded-full hover:bg-[var(--card-bg)] text-[var(--text-muted)] hover:text-[var(--text-color)] transition-colors"
                >
                  <FiX className="text-xl" />
                </button>
              </div>

              <div className="max-h-[78vh] overflow-auto flex items-center justify-center rounded-xl bg-black/50 p-2">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="max-h-[74vh] w-auto object-contain rounded-md"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default React.memo(Certifications);