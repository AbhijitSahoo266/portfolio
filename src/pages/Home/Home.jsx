import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiLinkedin, FiPhone, FiMail, FiTerminal, FiEye, FiDownload,
  FiMessageSquare, FiMonitor, FiCpu, FiServer, FiActivity, FiArrowUpRight,
  FiDatabase, FiShield, FiBox, FiCode, FiLayers, FiZap,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { calculateExperience } from "../../utils/experience";
import { generateAndDownloadCV,viewCV } from "../../utils/generateCV";
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiPostgresql, SiMongodb,
  SiTailwindcss, SiFramer, SiFigma, SiGit, SiRedux, SiMui, SiJsonwebtokens,
  SiDocker, SiPostman, SiAxios, SiJavascript,
} from "react-icons/si";

const ROLES = [
  "Frontend Engineer",
  "Software Engineer",
  "MERN Stack Developer",
  "React.js Developer",
  "Web Application Engineer",
];

const TECH = [
  "React.js", "Next.js", "Redux Toolkit", "Zustand", "React Query",
  "Tailwind CSS", "Material UI", "Node.js", "Express", "MongoDB",
  "PostgreSQL", "REST APIs", "Keycloak", "Git",
];

const ENGINEERING_PILLARS = [
  {
    icon: FiLayers,
    title: "State & Data Caching",
    desc: "Seamless server-state caching via React Query combined with modular client state architectures using Redux Toolkit & Zustand.",
  },
  {
    icon: FiZap,
    title: "Performance Tuning",
    desc: "Optimizing bundle sizes, code splitting, memoization, and virtualization to ensure smooth 60fps UI for large datasets.",
  },
  {
    icon: FiShield,
    title: "Security & Access Control",
    desc: "Production-ready security implementations including Role-Based Access Control (RBAC), Keycloak SSO, and JWT verification.",
  },
];

const TECH_ICONS = {
  "React.js": { icon: SiReact, color: "#61DAFB" },
  React: { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "currentColor" },
  "Node.js": { icon: SiNodedotjs, color: "#68A063" },
  Node: { icon: SiNodedotjs, color: "#68A063" },
  Express: { icon: SiExpress, color: "currentColor" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  PostgreSQL: { icon: SiPostgresql, color: "#4F8ACB" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#38BDF8" },
  Tailwind: { icon: SiTailwindcss, color: "#38BDF8" },
  "Material UI": { icon: SiMui, color: "#007FFF" },
  MUI: { icon: SiMui, color: "#007FFF" },
  "Redux Toolkit": { icon: SiRedux, color: "#764ABC" },
  Redux: { icon: SiRedux, color: "#764ABC" },
  Zustand: { icon: FiBox, color: "#F59E0B" },
  "React Query": { icon: FiDatabase, color: "#FF4154" },
  Axios: { icon: SiAxios, color: "#5A29E4" },
  JWT: { icon: SiJsonwebtokens, color: "#D63AFF" },
  Keycloak: { icon: FiShield, color: "#4D9BE6" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  "REST APIs": { icon: FiServer, color: "#10B981" },
  "Framer Motion": { icon: SiFramer, color: "currentColor" },
  Figma: { icon: SiFigma, color: "#F24E1E" },
  Git: { icon: SiGit, color: "#F05032" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  Postman: { icon: SiPostman, color: "#FF6C37" },
};

const TechIcon = ({ name, className = "text-[2rem]" }) => {
  const item = TECH_ICONS[name];
  if (!item) return <FiCode className={className} />;
  const Icon = item.icon;
  return <Icon style={{ color: item.color }} className={className} />;
};

const SERVICES = [
  {
    icon: FiMonitor,
    title: "Enterprise Web Apps",
    text: "Scalable, high-performance dashboards and SPA using React.js, Next.js, and modern architectural patterns.",
  },
  {
    icon: FiActivity,
    title: "Real-Time Analytics & UI",
    text: "Dynamic data tables with server-side pagination, advanced filtering, sorting, and SLA monitoring interfaces.",
  },
  {
    icon: FiServer,
    title: "MERN & RESTful APIs",
    text: "Robust backend services with Node.js, Express, MongoDB, and secure RBAC/JWT/Keycloak authentication.",
  },
  {
    icon: FiCpu,
    title: "Performance Optimization",
    text: "Frontend acceleration using Lazy Loading, Code Splitting, Memoization, and efficient state caching with React Query.",
  },
];

const TABS = ["profile", "stack", "contact"];

const btn =
  "flex justify-center items-center gap-2.5 px-6 h-[4.2rem] border border-[var(--main-color)] rounded-xl text-[1.4rem] font-semibold text-[var(--main-color)] relative overflow-hidden hover:text-[var(--bg-color)] transition-all duration-300 before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-[var(--main-color)] before:-z-10 before:transition-all before:duration-300 hover:before:w-full cursor-pointer shadow-[0_4px_14px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]";

const Home = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [tab, setTab] = useState("profile");

  const experience = useMemo(() => calculateExperience("2023-05-01"), []);

  useEffect(() => {
    const current = ROLES[index];
    let timer;
    if (!isDeleting && text === current) {
      timer = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % ROLES.length);
    } else {
      timer = setTimeout(() => {
        setText((prev) =>
          isDeleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
        );
      }, isDeleting ? 40 : 80);
    }
    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  const socialLinks = useMemo(
    () => [
      { icon: FiLinkedin, label: "LinkedIn", link: "https://www.linkedin.com/in/abhijit-sahoo-697913261/" },
      { icon: FaWhatsapp, label: "WhatsApp", link: "https://api.whatsapp.com/send?phone=919114126106&text=Hi%20Abhijit%2C%20I%20want%20to%20connect%20with%20you" },
      { icon: FiPhone, label: "Call", link: "tel:+919114126106" },
      { icon: FiMail, label: "Email", link: "mailto:abhijitsahoo266@gmail.com" },
    ],
    []
  );

  const stats = [
    { value: experience, label: "Hands-on engineering experience" },
    { value: "Enterprise UI", label: "Real-time dashboards & analytics" },
    { value: "MERN Stack", label: "Frontend-focused fullstack solutions" },
  ];

  const codeLines = {
    profile: [
      ["const", " engineer = {"],
      ["  name: ", '"Abhijit Sahoo"', ","],
      ["  title: ", '"Frontend & MERN Engineer"', ","],
      ["  company: ", '"Comminent Pvt. Ltd."', ","],
      ["  status: ", '"Shipping Scalable Apps 🚀"'],
      ["};"],
    ],
    stack: [
      ["const", " techStack = {"],
      ["  frontend: ", '["React.js", "Next.js"]', ","],
      ["  state: ", '["Redux Toolkit", "Zustand"]', ","],
      ["  backend: ", '["Node.js", "Express.js"]', ","],
      ["  database: ", '["MongoDB", "PostgreSQL"]'],
      ["};"],
    ],
    contact: [
      ["const", " contact = {"],
      ["  email: ", '"abhijitsahoo266@gmail.com"', ","],
      ["  location: ", '"Bengaluru / Odisha"', ","],
      ["  open_to: ", '["Frontend", "MERN Stack"]'],
      ["};"],
    ],
  };

  return (
    <div className="w-full relative overflow-hidden py-4">
      <style>{`
        @keyframes home-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .home-marquee { animation: home-marquee 28s linear infinite; }
        .home-marquee-wrap:hover .home-marquee { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) { .home-marquee { animation: none; } }
      `}</style>

      {/* Decorative Radiance */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 right-0 w-[30rem] h-[30rem] bg-[var(--main-color)] opacity-15 blur-[11rem] pointer-events-none rounded-full"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-[24rem] h-[24rem] bg-emerald-500 opacity-[0.08] blur-[10rem] pointer-events-none rounded-full"
      />

      {/* Main Full-Width Wrapper - Services file ସହିତ ସମାନ Layout ଏବଂ Gap */}
      <div className="w-full relative z-10 flex flex-col gap-10 sm:gap-14">

        {/* 1. HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <span className="inline-flex items-center gap-2 self-start mb-4 px-3.5 py-1.5 rounded-full border border-emerald-500/40 bg-[rgba(16,185,129,0.08)] backdrop-blur-md text-[1.25rem] text-emerald-600 dark:text-emerald-400 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Available for new opportunities
            </span>

            <h1 className="text-[3rem] sm:text-[3.6rem] font-extrabold tracking-tight leading-[1.2]">
              Hi, I'm{" "}
              <span className="text-[var(--main-color)] whitespace-nowrap">Abhijit Sahoo</span>
            </h1>

            <div className="mt-2 mb-3 h-[4rem] flex items-center">
              <h2 className="text-[2rem] sm:text-[2.4rem] font-bold text-[var(--text-color)] leading-none">
                And I'm a{" "}
                <span className="text-[var(--main-color)] font-extrabold inline-block">
                  {text}
                  <span className="animate-pulse text-[var(--text-color)] font-normal ml-1">|</span>
                </span>
              </h2>
            </div>

            <p className="text-[1.4rem] text-[var(--text-muted)] leading-[1.7] max-w-[65rem]">
              Frontend Engineer & MERN Stack Developer with{" "}
              <span className="text-[var(--main-color)] font-semibold">{experience}</span> of experience
              building enterprise-grade web applications, real-time analytics dashboards, and scalable architectures
              using React.js, Next.js, Redux Toolkit, Zustand, Node.js, and MongoDB.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 my-6 w-full">
              <button type="button" onClick={viewCV} className={btn}>
                <FiEye className="text-[1.6rem]" /><span>View CV</span>
              </button>
              <button type="button" onClick={generateAndDownloadCV} className={btn}>
                <FiDownload className="text-[1.6rem]" /><span>Download CV</span>
              </button>
              <Link to="/contact" className={btn}>
                <FiMessageSquare className="text-[1.6rem]" /><span>Let's Talk</span>
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-[1.3rem] text-[var(--text-muted)] font-semibold">
                Connect with me
              </span>
              <div className="flex flex-wrap items-center gap-3">
                {socialLinks.map(({ icon: Icon, link, label }) => (
                  <a
                    key={label}
                    href={link}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center w-[4rem] h-[4rem] border-2 border-[var(--main-color)] rounded-full text-[var(--main-color)] relative overflow-hidden transition-all duration-300 hover:text-[var(--bg-color)] z-10 group cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_18px_rgba(0,0,0,0.15)]"
                  >
                    <span className="absolute top-0 left-0 w-0 h-full -z-10 transition-all duration-300 group-hover:w-full bg-[var(--main-color)]" />
                    <Icon className="text-[1.7rem] shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Terminal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 flex justify-center lg:justify-end items-center relative py-2 w-full"
          >
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="w-full max-w-[42rem] bg-[var(--card-bg)] backdrop-blur-xl rounded-2xl border border-[var(--border-color)] shadow-xl overflow-hidden font-mono z-10"
            >
              <div className="bg-[rgba(255,255,255,0.06)] dark:bg-[rgba(15,20,30,0.8)] px-4 py-2.5 border-b border-[var(--border-color)] flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-[1.2rem] text-[var(--text-muted)] font-semibold">
                  <FiTerminal className="text-[var(--main-color)]" />
                  <span>AbhijitProfile.jsx</span>
                </div>
              </div>

              <div role="tablist" className="flex border-b border-[var(--border-color)] text-[1.2rem] bg-black/5 dark:bg-black/20">
                {TABS.map((t) => (
                  <button
                    key={t}
                    role="tab"
                    aria-selected={tab === t}
                    onClick={() => setTab(t)}
                    className={`px-4 py-2 transition-colors cursor-pointer ${tab === t
                      ? "text-[var(--main-color)] border-b-2 border-[var(--main-color)] font-semibold bg-[rgba(255,255,255,0.03)]"
                      : "text-[var(--text-muted)] hover:text-[var(--text-color)]"
                      }`}
                  >
                    {t}.js
                  </button>
                ))}
              </div>

              <div className="p-5 text-[1.3rem] leading-relaxed text-[var(--text-color)] min-h-[17rem]">
                {codeLines[tab].map((parts, i) => (
                  <p key={`${tab}-${i}`} className="whitespace-pre-wrap break-words">
                    {parts.map((part, j) => {
                      const isKeyword = part === "const";
                      const isString = part.startsWith('"') || part.startsWith("[");
                      const isKey = part.endsWith(": ");
                      return (
                        <span
                          key={j}
                          className={
                            isKeyword ? "text-[var(--main-color)] font-semibold"
                              : isString ? "text-emerald-500 dark:text-emerald-400"
                                : isKey ? "text-[var(--text-muted)]" : ""
                          }
                        >
                          {part}
                        </span>
                      );
                    })}
                  </p>
                ))}
                <span className="animate-pulse text-[var(--main-color)] font-bold">|</span>
              </div>

              <div className="px-4 py-2.5 border-t border-[var(--border-color)] flex items-center justify-between text-[1.15rem] bg-black/5 dark:bg-black/20">
                <span className="text-emerald-500 dark:text-emerald-400 flex items-center gap-1.5 font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  Ready for Hire
                </span>
                <span className="text-[var(--main-color)] font-semibold">200 OK</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* 2. STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 w-full">
          {stats.map((s, index) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-xl shadow-sm hover:border-[var(--main-color)]/70 transition-all duration-300 flex flex-col justify-center"
            >
              <p className="text-[2.6rem] font-bold text-[var(--main-color)] leading-tight tracking-tight">
                {s.value}
              </p>
              <p className="text-[1.3rem] text-[var(--text-muted)] mt-1.5 font-medium leading-snug">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 3. TECH MARQUEE */}
        <div className="flex flex-col gap-2 w-full">
          <div>
            <span className="text-[1.2rem] font-semibold text-[var(--main-color)] uppercase tracking-wider">
              Technologies
            </span>
            <h2 className="text-[2.2rem] font-bold tracking-tight mt-1">
              Core Tech Stack & Ecosystem
            </h2>
          </div>

          <div
            className="home-marquee-wrap overflow-hidden py-3 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] w-full"
            aria-label="Technologies I work with"
          >
            <div className="home-marquee flex w-max gap-4 py-2">
              {[...TECH, ...TECH].map((t, i) => (
                <div
                  key={i}
                  aria-hidden={i >= TECH.length}
                  className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-xl shadow-sm hover:border-[var(--main-color)] text-[1.4rem] text-[var(--text-color)] font-medium whitespace-nowrap transition-colors duration-300"
                >
                  <TechIcon name={t} className="text-[2.1rem] shrink-0" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. WORK EXPERIENCE SNAPSHOT */}
        <div className="flex flex-col gap-3 w-full">
          <div>
            <span className="text-[1.2rem] font-semibold text-[var(--main-color)] uppercase tracking-wider">
              Career Journey
            </span>
            <h2 className="text-[2.2rem] font-bold tracking-tight mt-1">
              Where I've Contributed
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mt-2 w-full">
            {/* Comminent Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              whileHover={{
                y: -5,
                transition: { type: "spring", stiffness: 350, damping: 20 },
              }}
              className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-md shadow-sm hover:border-[var(--main-color)] hover:shadow-[0_10px_28px_rgba(0,171,240,0.12)] transition-colors duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[1.15rem] font-semibold border border-[var(--main-color)]/30 bg-[var(--main-color)]/10 text-[var(--main-color)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--main-color)] animate-ping" />
                    Nov 2025 – Present
                  </span>
                  <span className="text-[1.15rem] text-[var(--text-muted)] font-medium">
                    Bengaluru, Karnataka
                  </span>
                </div>

                <h3 className="text-[1.75rem] font-bold mt-3 text-[var(--text-color)] group-hover:text-[var(--main-color)] transition-colors">
                  Software Engineer
                </h3>

                <p className="text-[1.4rem] font-bold text-[var(--main-color)] mt-0.5 tracking-wide">
                  Comminent Pvt. Ltd.
                </p>

                <p className="text-[1.3rem] text-[var(--text-muted)] mt-2.5 leading-[1.6]">
                  Developing real-time monitoring dashboards, dynamic analytics tables, and SLA tracking for Smart Metering systems using React.js, React Query, Zustand, and Keycloak authentication.
                </p>
              </div>
            </motion.div>

            {/* Absec Lab Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.1, ease: "easeOut" }}
              whileHover={{
                y: -5,
                transition: { type: "spring", stiffness: 350, damping: 20 },
              }}
              className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-md shadow-sm hover:border-[var(--main-color)] hover:shadow-[0_10px_28px_rgba(0,171,240,0.12)] transition-colors duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[1.15rem] font-semibold border border-[var(--border-color)] bg-black/5 dark:bg-white/5 text-[var(--text-muted)]">
                    May 2023 – Nov 2025
                  </span>
                  <span className="text-[1.15rem] text-[var(--text-muted)] font-medium">
                    Bhubaneswar, Odisha
                  </span>
                </div>

                <h3 className="text-[1.75rem] font-bold mt-3 text-[var(--text-color)] group-hover:text-[var(--main-color)] transition-colors">
                  Software Developer
                </h3>

                <p className="text-[1.4rem] font-bold text-[var(--main-color)] mt-0.5 tracking-wide">
                  Absec Lab Pvt. Ltd.
                </p>

                <p className="text-[1.3rem] text-[var(--text-muted)] mt-2.5 leading-[1.6]">
                  Engineered full-stack applications with MERN stack & Next.js, built secure REST APIs with Node.js, and implemented JWT authentication across enterprise dashboards.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 5. SERVICES / SPECIALIZATIONS (Duplicate block removed) */}
        <div className="flex flex-col gap-3 w-full">
          <div>
            <span className="text-[1.2rem] font-semibold text-[var(--main-color)] uppercase tracking-wider">
              Specializations
            </span>
            <h2 className="text-[2.2rem] font-bold tracking-tight mt-1">
              What I Bring to the Table
            </h2>
            <p className="text-[1.35rem] text-[var(--text-muted)] mt-1">
              Enterprise frontend architecture, clean code, and production-tested MERN solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-2 w-full">
            {SERVICES.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-md shadow-sm hover:border-[var(--main-color)] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-[4.2rem] h-[4.2rem] rounded-xl bg-[rgba(0,180,216,0.12)] text-[var(--main-color)] flex items-center justify-center text-[2rem]">
                    <Icon />
                  </div>
                  <h3 className="mt-4 text-[1.65rem] font-bold">{title}</h3>
                  <p className="mt-2 text-[1.3rem] text-[var(--text-muted)] leading-[1.6]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. ENGINEERING PILLARS */}
        <div className="flex flex-col gap-3 w-full">
          <div>
            <span className="text-[1.2rem] font-semibold text-[var(--main-color)] uppercase tracking-wider">
              Engineering Mindset
            </span>
            <h2 className="text-[2.2rem] font-bold tracking-tight mt-1">
              Architecture & Code Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mt-2 w-full">
            {ENGINEERING_PILLARS.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-md shadow-sm hover:border-[var(--main-color)] transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-[rgba(0,180,216,0.1)] text-[var(--main-color)] flex items-center justify-center text-[1.8rem] mb-3">
                  <Icon />
                </div>
                <h3 className="text-[1.65rem] font-bold">{title}</h3>
                <p className="mt-2 text-[1.3rem] text-[var(--text-muted)] leading-[1.6]">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 7. FEATURED WORK CALLOUT */}
        <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-xl p-6 sm:p-8 shadow-sm w-full">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-[70rem]">
              <span className="text-[1.2rem] font-semibold text-[var(--main-color)] uppercase tracking-wider block mb-1">
                Featured Project Archive
              </span>
              <h2 className="text-[2.2rem] font-bold tracking-tight">
                Explore Enterprise Systems & Source Code
              </h2>
              <p className="mt-2 text-[1.4rem] text-[var(--text-muted)] leading-[1.7]">
                Check out my dedicated projects page to view live deployments, case studies, architecture patterns, and GitHub repositories across Web, Mobile, and Fullstack systems.
              </p>

              <div className="flex flex-wrap gap-2.5 mt-4">
                {["Enterprise Dashboards", "State Architecture", "RBAC & Security", "REST APIs"].map((pill) => (
                  <span key={pill} className="text-[1.2rem] px-3.5 py-1.5 rounded-lg bg-black/5 dark:bg-white/5 border border-[var(--border-color)] text-[var(--text-muted)] font-medium">
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2.5 px-7 h-[4.4rem] rounded-xl bg-[var(--main-color)] text-[var(--bg-color)] text-[1.45rem] font-bold shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all self-start lg:self-center shrink-0 group"
            >
              <span>View All Projects</span>
              <FiArrowUpRight className="text-[1.8rem] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 8. CLOSING CTA */}
        <div className="rounded-2xl border border-[var(--main-color)]/30 bg-[var(--card-bg)] backdrop-blur-xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 w-full">
          <div>
            <h2 className="text-[2.2rem] font-bold tracking-tight">Have an opportunity or project in mind?</h2>
            <p className="mt-1 text-[1.35rem] text-[var(--text-muted)]">
              Let's connect. I am actively looking for Frontend & Fullstack opportunities.
            </p>
          </div>
          <Link to="/contact" className={`${btn} shrink-0 self-start md:self-auto`}>
            <FiMessageSquare className="text-[1.5rem]" /><span>Start a conversation</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default React.memo(Home);