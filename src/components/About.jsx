import React from "react";
import { motion } from "framer-motion";
import { calculateExperience } from "../utils/experience";
import { FiCode, FiSmartphone, FiServer, } from "react-icons/fi";

export default function About() {
  const experience = calculateExperience("2023-05-01");

  const highlights = [
    {
      icon: <FiCode className="text-[var(--main-color)] text-2xl" />,
      title: "Frontend Web",
      desc: "React.js, Next.js, Redux, Tailwind CSS, Material UI",
    },
    {
      icon: <FiSmartphone className="text-[var(--main-color)] text-2xl" />,
      title: "Mobile App Dev",
      desc: "Cross-platform mobile apps using React Native",
    },
    {
      icon: <FiServer className="text-[var(--main-color)] text-2xl" />,
      title: "Backend & APIs",
      desc: "Node.js, Express, MongoDB & PostgreSQL",
    },
  ];
  const keySkillsPills = [
    "React.js",
    "Next.js",
    "React Native",
    "React Query",
    "Redux Toolkit",
    "Zustand",
    "Node.js",
    "Express.js",
    "Keycloak",
    "RBAC",
    "PostgreSQL",
    "MongoDB",
    "Tailwind CSS",
    "Material UI",
  ];
  return (
    <section
      id="about"
      className="min-h-screen py-[5rem] px-[5%] md:px-[8%] flex flex-col items-center justify-center relative overflow-hidden bg-[var(--second-bg-color)] text-[#ededed]"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[var(--main-color)] opacity-5 blur-[120px] pointer-events-none rounded-full" />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-[3.2rem] sm:text-[4.2rem] md:text-[5rem] text-center font-bold mb-6"
      >
        Who <span className="text-[var(--main-color)]">I Am</span>
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-[1200px] w-full">
        {/* LEFT COLUMN: Profile Image with Animated Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-5 flex flex-col items-center justify-center"
        >
          <div className="relative flex justify-center items-center w-[22rem] h-[22rem] sm:w-[26rem] sm:h-[26rem]">
            {/* Image */}
            <img
              src="/Abhijit.png"
              alt="Abhijit Sahoo"
              className="rounded-full w-[88%] h-[88%] object-cover border-[0.3rem] border-[var(--main-color)] z-10 shadow-[0_0_20px_rgba(0,171,240,0.3)]"
            />

            {/* ROTATING BORDER */}
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              className="absolute inset-0 rounded-full border-[0.25rem] border-t-transparent border-b-transparent border-l-[var(--main-color)] border-r-[var(--main-color)] shadow-[0_0_15px_var(--main-color)]"
            />
          </div>
          {/* <div className="relative flex justify-center items-center w-[25rem] h-[25rem]">
        <img
          src="/Abhijit.png"
          alt="profile"
          className="rounded-full"
          style={{
            width: "90%",
            border: "0.2rem solid var(--main-color)",
            zIndex: 2,
          }}
        />

        
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="absolute inset-0 rounded-full"
          style={{
            borderTop: "0.2rem solid var(--second-bg-color)",
            borderBottom: "0.2rem solid var(--second-bg-color)",
            borderLeft: "0.2rem solid var(--main-color)",
            borderRight: "0.2rem solid var(--main-color)",
          }}
        />
      </div> */}
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 gap-4 w-full mt-8">
            <div className="bg-[#112e42]/80 backdrop-blur-md p-4 rounded-2xl border border-[#ededed]/10 text-center">
              <h4 className="text-[2.2rem] font-bold text-[var(--main-color)]">
                {experience}
              </h4>
              <p className="text-[1.2rem] text-[#ededed]/70">Experience</p>
            </div>
            <div className="bg-[#112e42]/80 backdrop-blur-md p-4 rounded-2xl border border-[#ededed]/10 text-center">
              <h4 className="text-[2.2rem] font-bold text-[var(--main-color)]">
                5+
              </h4>
              <p className="text-[1.2rem] text-[#ededed]/70">Projects Built</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Bio & Highlights */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:col-span-7 flex flex-col text-left space-y-6"
        >
          <div className="space-y-2">
            <span className="text-[1.4rem] font-bold tracking-widest text-[var(--main-color)] uppercase">
              Software Engineer
            </span>
            <h3 className="text-[2.4rem] sm:text-[3rem] font-extrabold text-[#ededed] leading-snug">
              Building Scalable Web Applications &
              <br />
              Enterprise Solutions
            </h3>
          </div>


          <p className="text-[1.45rem] sm:text-[1.55rem] leading-relaxed text-[#ededed]/80">
  I'm a{" "}
  <span className="text-[var(--main-color)] font-semibold">
    Software Engineer 
  </span>{" "}
  with{" "}
  <span className="text-[var(--main-color)] font-semibold">
    {experience}
  </span>{" "}
  of experience building scalable web applications, enterprise dashboards, and
  cross-platform mobile apps using React.js, Next.js, and React Native.

  <br />
  <br />

  I specialize in developing reusable UI components, integrating REST APIs,
  managing application state with React Query, Redux Toolkit, and Zustand, and
  delivering secure, high-performance applications using RBAC, Keycloak, and
  modern frontend best practices.
</p>
          {/* Core Tech Pills */}
          <div className="flex flex-wrap gap-2 py-1">
            {keySkillsPills.map((skill, index) => (
              <span
                key={index}
                className="text-[1.1rem] px-3 py-1 rounded-full bg-[#112e42] border border-[var(--main-color,#00eeff)]/30 text-[var(--main-color,#00eeff)] font-medium"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Highlights Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-2">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#112e42]/60 p-4 rounded-xl border border-[#ededed]/10 hover:border-[var(--main-color)]/50 transition-colors"
              >
                <div className="mb-2">{item.icon}</div>
                <h5 className="text-[1.4rem] font-bold mb-1 text-[#ededed]">
                  {item.title}
                </h5>
                <p className="text-[1.1rem] text-[#ededed]/60 leading-tight">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>



          {/* Action Button */}
          <div className="pt-4">
            <div className="inline-block w-[16rem] h-[4.8rem]">
              <a
                href="#contact"
                className="group relative flex justify-center items-center w-full h-full text-[1.6rem] font-semibold tracking-wider text-[#081b29] bg-[var(--main-color)] border-[0.2rem] border-[var(--main-color)] rounded-[0.8rem] overflow-hidden z-10 transition-colors duration-500 hover:text-[var(--main-color)] cursor-pointer"
              >
                Let's Talk
                <span className="absolute top-0 left-0 w-0 h-full bg-[#081b29] -z-10 transition-all duration-500 group-hover:w-full" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}