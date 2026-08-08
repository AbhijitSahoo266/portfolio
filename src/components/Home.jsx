import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiFacebook, FiLinkedin, FiPhone, FiMail, FiTerminal } from "react-icons/fi";
import { TfiTwitter } from "react-icons/tfi";
import { FaWhatsapp, FaReact, FaNodeJs } from "react-icons/fa";
import { calculateExperience } from "../utils/experience";
import { generateAndDownloadCV } from "../utils/generateCV";

const roles = [
  "Software Engineer",
  "Frontend Developer",
  "MERN Stack Developer",
  "Mobile App Developer",
  "UI/UX Designer",
];

const Home = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const experience = calculateExperience("2023-05-01");

  useEffect(() => {
    const current = roles[index];
    let speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  const socialLinks = [
    { icon: FiFacebook, link: "#" },
    { icon: TfiTwitter, link: "#" },
    {
      icon: FiLinkedin,
      link: "https://www.linkedin.com/in/abhijit-sahoo-697913261/",
    },
    {
      icon: FaWhatsapp,
      link: "https://api.whatsapp.com/send?phone=919114126106&text=Hi%20Abhijit%2C%20I%20want%20to%20connect%20with%20you",
    },
    { icon: FiPhone, link: "tel:+919114126106" },
    { icon: FiMail, link: "mailto:abhijitsahoo266@gmail.com" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen w-full flex justify-center items-center px-6 sm:px-12 md:px-16 lg:px-20 2xl:px-28 py-[8rem] bg-[#081b29] relative overflow-hidden"
    >
      {/* Ambient Glow */}
      <div className="absolute top-1/3 right-10 w-[35rem] h-[35rem] xl:w-[45rem] xl:h-[45rem] bg-[var(--main-color)] opacity-10 blur-[12rem] pointer-events-none rounded-full" />

      <div className="w-full max-w-[125rem] xl:max-w-[145rem] 2xl:max-w-[165rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-center relative z-10">
        
        {/* LEFT COLUMN: HERO BIO */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          <h1 className="text-[3.2rem] sm:text-[4.5rem] lg:text-[5.4rem] xl:text-[6rem] font-extrabold leading-[1.2] tracking-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ededed] to-[var(--main-color)]">
              Abhijit Sahoo
            </span>
          </h1>

          {/* ROLE */}
          <div className="mt-[1.2rem] mb-[2rem] min-h-[4rem] flex items-center">
            <h2 className="text-[2rem] sm:text-[2.8rem] lg:text-[3.4rem] xl:text-[3.8rem] font-bold text-[#ededed]">
              And I'm a{" "}
              <span className="text-[var(--main-color)] font-extrabold pb-1">
                {text}
                <span className="animate-pulse text-white font-normal ml-[0.4rem]">|</span>
              </span>
            </h2>
          </div>

          {/* TEXT */}
          <p className="text-[1.4rem] sm:text-[1.6rem] lg:text-[1.8rem] xl:text-[2rem] text-[#ededed]/80 leading-[1.7] max-w-[65rem] xl:max-w-[75rem]">
            Fullstack & Mobile Developer with{" "}
            <span className="text-[var(--main-color)] font-semibold">
              {experience}
            </span>{" "}
            of experience building responsive web and mobile apps using React.js,
            Next.js, React Native, Node.js, Express, and PostgreSQL. Focused on
            clean architecture and high-performance UI.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center gap-[1.5rem] sm:gap-[2rem] my-[3rem] w-full sm:w-auto">
            <button
              onClick={generateAndDownloadCV}
              className="flex justify-center items-center w-full sm:w-[16rem] h-[4.8rem] border-[0.2rem] border-[var(--main-color)] rounded-[0.8rem] text-[1.6rem] font-semibold text-[var(--main-color)] relative overflow-hidden hover:text-white transition-all duration-500 before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-[var(--main-color)] before:-z-10 before:transition-all before:duration-500 hover:before:w-full cursor-pointer"
            >
              Download CV
            </button>

            <a
              href="#contact"
              className="flex justify-center items-center w-full sm:w-[16rem] h-[4.8rem] border-[0.2rem] border-[var(--main-color)] rounded-[0.8rem] text-[1.6rem] font-semibold text-[var(--main-color)] relative overflow-hidden hover:text-white transition-all duration-500 before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-[var(--main-color)] before:-z-10 before:transition-all before:duration-500 hover:before:w-full"
            >
              Let's Talk
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex flex-col gap-[1rem]">
            <span className="text-[1.2rem] text-[#ededed]/50 uppercase tracking-[0.2rem] font-semibold">
              Connect With Me
            </span>
            <div className="flex flex-wrap items-center gap-[1.2rem]">
              {socialLinks.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center w-[4rem] h-[4rem] border-[0.2rem] border-[var(--main-color)] rounded-full text-[var(--main-color)] relative overflow-hidden transition-all duration-500 hover:text-[#081b29] z-10 group"
                  >
                    <span className="absolute top-0 left-0 w-0 h-full -z-10 transition-all duration-500 group-hover:w-full bg-[var(--main-color)]" />
                    <Icon className="text-[1.8rem] shrink-0" />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: INTERACTIVE FLOATING CODE TERMINAL */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex justify-center lg:justify-end items-center relative py-8"
        >
          {/* Main Code Terminal Box */}
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            whileHover={{ scale: 1.02 }}
            className="w-full max-w-[42rem] xl:max-w-[48rem] bg-[#112e42]/90 backdrop-blur-md rounded-[1.5rem] border border-[var(--main-color)]/40 shadow-[0_0_35px_rgba(0,171,240,0.15)] hover:shadow-[0_0_50px_rgba(0,171,240,0.3)] transition-all duration-500 overflow-hidden font-mono z-10"
          >
            {/* Terminal Header */}
            <div className="bg-[#081b29] px-5 py-3 border-b border-[#ededed]/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              </div>
              <div className="flex items-center gap-2 text-[1.1rem] xl:text-[1.2rem] text-[#ededed]/60 font-semibold">
                <FiTerminal className="text-[var(--main-color)] animate-pulse" />
                <span>DeveloperProfile.jsx</span>
              </div>
            </div>

            {/* Terminal Code Snippet */}
            <div className="p-6 text-[1.2rem] sm:text-[1.3rem] xl:text-[1.4rem] leading-relaxed text-[#ededed]/90 space-y-2">
              <motion.p initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                <span className="text-[#00abf0]">const</span> developer = &#123;
              </motion.p>

              <motion.p initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="pl-4">
                <span className="text-[#ededed]/60">name:</span> <span className="text-emerald-400">"Abhijit Sahoo"</span>,
              </motion.p>

              <motion.p initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="pl-4">
                <span className="text-[#ededed]/60">role:</span> <span className="text-emerald-400">"Fullstack & Mobile Engineer"</span>,
              </motion.p>

              <motion.p initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="pl-4">
                <span className="text-[#ededed]/60">stack:</span> [
              </motion.p>

              <motion.p initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="pl-8 text-yellow-300">
                "React", "Next.js", "React Native",
              </motion.p>

              <motion.p initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="pl-8 text-yellow-300">
                "Node.js", "PostgreSQL"
              </motion.p>

              <motion.p initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }} className="pl-4">
                ],
              </motion.p>

              <motion.p initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} className="pl-4">
                <span className="text-[#ededed]/60">status:</span> <span className="text-sky-400">"Building Scalable Solutions 🚀"</span>
              </motion.p>

              <motion.p initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }}>
                &#125;;<span className="animate-pulse text-[var(--main-color)] font-bold ml-1">|</span>
              </motion.p>

              {/* Terminal Footer Status Bar */}
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.0 }} className="pt-3 border-t border-[#ededed]/10 flex items-center justify-between text-[1.1rem] xl:text-[1.2rem]">
                <span className="text-emerald-400 flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  Ready for Hire
                </span>
                <span className="text-[var(--main-color)] font-semibold">200 OK</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Floating Badge 1 - Top Left */}
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }}
            className="absolute -top-4 -left-4 sm:-left-6 bg-[#081b29]/95 backdrop-blur-md p-3 px-4 rounded-xl border border-[var(--main-color)]/50 shadow-[0_0_15px_rgba(0,171,240,0.2)] flex items-center gap-3 z-20 cursor-pointer"
          >
            <div className="p-2 rounded-lg bg-[var(--main-color)]/20 text-[var(--main-color)] text-[1.8rem]">
              <FaReact />
            </div>
            <div>
              <p className="text-[1.1rem] xl:text-[1.2rem] font-bold text-white">Cross Platform</p>
              <p className="text-[0.95rem] xl:text-[1rem] text-[#ededed]/60">Web & Mobile Apps</p>
            </div>
          </motion.div>

          {/* Floating Badge 2 - Bottom Right */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }}
            className="absolute -bottom-4 -right-2 bg-[#081b29]/95 backdrop-blur-md p-3 px-4 rounded-xl border border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.2)] flex items-center gap-3 z-20 cursor-pointer"
          >
            <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 text-[1.8rem]">
              <FaNodeJs />
            </div>
            <div>
              <p className="text-[1.1rem] xl:text-[1.2rem] font-bold text-white">API Architecture</p>
              <p className="text-[0.95rem] xl:text-[1rem] text-emerald-400 font-semibold">Node & PostgreSQL</p>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default Home;