import React, { useState } from "react";
import { FaUpRightFromSquare, FaGlobe, FaMobileScreenButton } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: "sparrow",
      title: "Sparrow Academic System",
      desc: "College management system for tracking student records, faculty management, and academic grading.",
      img: "/sparrow1.jpeg",
      link: "https://sparrowcampus.pro/login/",
      type: "web",
      tech: ["React.js", "Redux", "Tailwind CSS", "Node.js"],
    },
    {
      id: "papl",
      title: "PAPL System",
      desc: "Comprehensive HRMS & Housing management application for corporate employee tracking and allocation.",
      img: "/2.jpg",
      link: null,
      type: "web",
      tech: ["React.js", "Next.js", "Tailwind CSS", "REST APIs"],
    },
    {
      id: "bloodbank",
      title: "Online Blood Bank",
      desc: "A life-saving platform connecting blood donors, recipients, and hospitals with real-time stock tracking.",
      img: "/bloodbank.jpeg",
      link: "https://bloodbank.in/",
      type: "web",
      tech: ["React.js", "Material UI", "Node.js", "MongoDB"],
    },
    {
      id: "vehicle-app",
      title: "Vehicle Management Mobile App",
      desc: "Cross-platform mobile application for managing vehicle service records, fuel logs, and maintenance alerts.",
      img: "https://images.unsplash.com/photo-1511527844068-006b95d162c2?auto=format&fit=crop&w=1200&q=80",
      link: null,
      type: "mobile",
      tech: ["React Native", "Redux Toolkit", "AsyncStorage"],
    },
    {
      id: "epuja",
      title: "E-Puja Application",
      desc: "Digital spiritual platform enabling users to book puja services, schedules, and online payments seamlessly.",
      img: "/jaganath.jpg",
      link: "https://epuja-demo.vercel.app",
      type: "mobile",
      tech: ["React Native", "Tailwind CSS", "Razorpay"],
    },
  ];

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.type === filter);

  return (
    <div
      id="projects"
      className="py-[6rem] px-6 sm:px-12 md:px-16 lg:px-20 bg-[#081b29] text-[#ededed] relative overflow-hidden w-full flex justify-center"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] bg-[var(--main-color)] opacity-5 blur-[10rem] pointer-events-none rounded-full" />

      <div className="w-full max-w-[125rem] mx-auto relative z-10 flex flex-col justify-center">
        {/* HEADING with Scroll Repeat Motion */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-[3rem] w-full"
        >
          <h2 className="text-[3rem] sm:text-[4rem] lg:text-[4.8rem] font-bold">
            Latest <span className="text-[var(--main-color)]">Projects</span>
          </h2>
          <p className="text-[1.3rem] sm:text-[1.5rem] lg:text-[1.6rem] text-[#ededed]/70 mt-2 max-w-[55rem] mx-auto">
            Explore a collection of web platforms and mobile applications engineered for performance and user experience.
          </p>
        </motion.div>

        {/* FILTER TABS with Scroll Repeat Motion */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center items-center gap-3 sm:gap-4 mb-[4rem] flex-wrap w-full"
        >
          {[
            { label: "All Projects", value: "all", icon: null },
            { label: "Web Apps", value: "web", icon: FaGlobe },
            { label: "Mobile Apps", value: "mobile", icon: FaMobileScreenButton },
          ].map((tab) => {
            const isActive = filter === tab.value;
            const Icon = tab.icon;

            return (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value)}
                className={`
                  relative flex items-center gap-2 px-6 py-3
                  text-[1.3rem] sm:text-[1.5rem] font-semibold
                  rounded-xl transition-all duration-300 cursor-pointer
                  ${
                    isActive
                      ? "bg-[var(--main-color)] text-[#081b29] shadow-[0_0_15px_rgba(0,171,240,0.4)]"
                      : "bg-[#112e42]/80 text-[#ededed]/80 border border-[#ededed]/10 hover:border-[var(--main-color)] hover:text-[var(--main-color)]"
                  }
                `}
              >
                {Icon && <Icon className="text-[1.4rem]" />}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* PROJECT GRID */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-[#112e42]/80 backdrop-blur-md rounded-[1.5rem] border border-[#ededed]/10 hover:border-[var(--main-color)]/60 overflow-hidden shadow-lg transition-all duration-500 flex flex-col justify-between w-full"
              >
                <div>
                  {/* IMAGE CONTAINER WITH OVERLAY BUTTON */}
                  <div className="relative h-[220px] overflow-hidden bg-[#081b29]">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#112e42] via-transparent to-transparent opacity-80" />

                    {/* Top Category Badge */}
                    <span className="absolute top-4 left-4 px-3 py-1 text-[1.1rem] font-bold uppercase tracking-wider rounded-md bg-[#081b29]/80 backdrop-blur-md text-[var(--main-color)] border border-[var(--main-color)]/30">
                      {project.type}
                    </span>

                    {/* Direct Link Hover Button */}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[var(--main-color)] text-[#081b29] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75 shadow-lg hover:bg-white"
                        title="Open Live Preview"
                      >
                        <FaUpRightFromSquare className="text-[1.6rem]" />
                      </a>
                    )}
                  </div>

                  {/* CONTENT AREA */}
                  <div className="p-6">
                    <h3 className="text-[2rem] font-bold mb-3 text-[#ededed] group-hover:text-[var(--main-color)] transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-[1.3rem] text-[#ededed]/70 mb-6 leading-relaxed line-clamp-3">
                      {project.desc}
                    </p>

                    {/* TECH STACK BADGES */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((item, idx) => (
                        <span
                          key={idx}
                          className="text-[1.1rem] px-3 py-1 rounded-full bg-[#081b29] text-[var(--main-color)] border border-[var(--main-color)]/20 font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CARD FOOTER LINK */}
                <div className="px-6 pb-6 pt-2 border-t border-[#ededed]/5 flex justify-between items-center mt-auto">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[1.3rem] font-semibold text-[var(--main-color)] hover:underline"
                    >
                      <span>View Live Demo</span>
                      <FaUpRightFromSquare className="text-[1.2rem]" />
                    </a>
                  ) : (
                    <span className="text-[1.2rem] font-medium text-[#ededed]/40 italic">
                      Internal Client Project
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}