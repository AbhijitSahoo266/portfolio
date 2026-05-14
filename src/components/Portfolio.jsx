import React, { useState } from "react";
import { FaUpRightFromSquare } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Sparrow Academic System",
      desc: "College management system for students, faculty, and academic tracking.",
      img: "/sparrow1.jpeg",
      link: "https://sparrowcampus.pro/login/",
      type: "web",
    },
    {
      title: "PAPL System",
      desc: "HRMS + Housing system for employee management and allocation.",
      img: "/2.jpg",
      link: null,
      type: "web",
    },
    {
      title: "Online Blood Bank",
      desc: "Platform connecting donors, recipients, and blood banks.",
      img: "/bloodbank.jpeg",
      link: "https://bloodbank.in/",
      type: "web",
    },
    {
      title: "Vehicle Management Mobile App",
      desc: "Mobile application for managing vehicle records and service history.",
      img: "https://images.unsplash.com/photo-1511527844068-006b95d162c2?auto=format&fit=crop&w=1200&q=80",
      link: null,
      type: "mobile",
    },
    {
      title: "E-Puja Application",
      desc: "Digital puja booking system with scheduling and payments.",
      img: "/jaganath.jpg",
      link: "https://epuja-demo.vercel.app",
      type: "mobile",
    },
  ];

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.type === filter);

  return (
    <section
      id="portfolio"
      className="min-h-screen px-6 md:px-20 py-24 bg-[#081b29] text-[#ededed]"
    >
      {/* HEADING */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-[clamp(3rem,6vw,5rem)] font-bold mb-10"
      >
        Latest <span className="text-[#00abf0]">Projects</span>
      </motion.h2>

      {/* FILTER BUTTONS */}
<div className="flex justify-center gap-3 sm:gap-5 mb-12 flex-nowrap overflow-x-auto px-2 no-scrollbar">
  {["all", "web", "mobile"].map((type) => {
    const isActive = filter === type;

    return (
      <motion.button
        key={type}
        onClick={() => setFilter(type)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`
          relative
          min-w-[100px] sm:min-w-[120px] md:min-w-[140px]
          h-[38px] sm:h-[44px] md:h-[50px]
          px-4
          text-[0.9rem] sm:text-[1.1rem] md:text-[1.4rem]
          font-semibold
          rounded-[0.6rem] sm:rounded-[0.8rem]
          border-[0.15rem] sm:border-[0.2rem]
          transition-all duration-300
          whitespace-nowrap
          ${
            isActive
              ? "bg-[#00abf0] text-[#081b29] border-[#00abf0]"
              : "bg-transparent text-[#00abf0] border-[#00abf0] hover:bg-[#00abf0] hover:text-[#081b29]"
          }
        `}
      >
        {type.toUpperCase()}
      </motion.button>
    );
  })}
</div>
      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-10">
        {filtered.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="relative h-[400px] rounded-2xl overflow-hidden border border-[#ededed]/20 shadow-lg group"
          >
            {/* IMAGE */}
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* OVERLAY */}
            <div
              className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 translate-y-full group-hover:translate-y-0 transition-all duration-500"
              style={{
                background:
                  "linear-gradient(rgba(0,0,0,0.2), rgba(0,171,240,0.9))",
              }}
            >
              <h4 className="text-[2.2rem] font-semibold mb-3">
                {project.title}
              </h4>

              <p className="text-[1.4rem] mb-6 text-[#f1f1f1] line-clamp-4">
                {project.desc}
              </p>

              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-[5rem] h-[5rem] rounded-full bg-[#ededed] hover:scale-110 transition"
                >
                  <FaUpRightFromSquare className="text-[2rem] text-[#081b29]" />
                </a>
              ) : (
                <div className="flex items-center justify-center w-[5rem] h-[5rem] rounded-full bg-[#ededed] opacity-60">
                  <FaUpRightFromSquare className="text-[2rem] text-[#081b29]" />
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}