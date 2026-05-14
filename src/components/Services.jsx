import React from "react";
import { motion } from "framer-motion";
import { FiLayout, FiCode } from "react-icons/fi";
import { FaMobileAlt } from "react-icons/fa";

const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Services() {
  return (
    <section
      id="services"
      className="my-10 px-10 py-[5rem] bg-[#081b29] text-[#ededed]"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-[3rem] sm:text-[4rem] md:text-[5rem] text-center mb-[4rem] md:mb-[5rem]"
      >
        My <span className="text-[#00abf0]">Services</span>
      </motion.h2>

      {/* Container */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-[2rem] md:gap-[4rem]"
      >
        {/* BOX 1 */}
        <ServiceCard
          icon={<FiCode size={35} className="text-[#00abf0] mx-auto" />}
          title="Web Development"
          desc="Developed responsive UI using React & Next.js"
        />

        {/* BOX 2 */}
        <ServiceCard
          icon={<FiLayout size={35} className="text-[#00abf0] mx-auto" />}
          title="UI/UX Designing"
          desc="I create modern, user-friendly interfaces using Figma & Tailwind CSS."
        />

        {/* BOX 3 */}
        <ServiceCard
          icon={<FaMobileAlt size={35} className="text-[#00abf0] mx-auto" />}
          title="Mobile App Development"
          desc="Cross-platform apps using React Native and Kotlin."
        />
      </motion.div>
    </section>
  );
}

/* CARD COMPONENT */
function ServiceCard({ icon, title, desc }) {
  return (
    <motion.div
      variants={cardVariant}
      whileHover={{
        scale: 1.07,
        boxShadow: "0px 10px 30px rgba(0,171,240,0.25)",
      }}
      className="flex-1 min-w-[280px] max-w-[350px] bg-[#112e42] p-[3rem_2rem] md:p-[5rem_2rem] rounded-[2rem] text-center border border-[#ededed] hover:border-[#00abf0] transition-all duration-300"
    >
      {icon}

      <h3 className="text-[2.5rem] md:text-[3rem] my-[1rem]">{title}</h3>

      <p className="text-[1.4rem] md:text-[1.6rem] pb-[20px]">{desc}</p>

      <ServiceButton />
    </motion.div>
  );
}

/* BUTTON COMPONENT */
function ServiceButton() {
  return (
    <div className="inline-block w-[15rem] h-[5rem]">
     <button
        type="button"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1.8rem",
          fontWeight: 600,
          letterSpacing: "0.1rem",
          color: "#081b29",
          background: "#00abf0",
          border: "0.2rem solid #00abf0",
          borderRadius: "0.8rem",
          position: "relative",
          overflow: "hidden",
          zIndex: 1,
          transition: "all 0.5s ease",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "#00abf0";
          e.currentTarget.querySelector("span").style.width = "100%";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "#081b29";
          e.currentTarget.querySelector("span").style.width = "0";
        }}
      >
        Read More

        <span
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 0,
            height: "100%",
            background: "#081b29",
            zIndex: -1,
            transition: "width 0.5s ease",
          }}
        />
      </button>
    </div>
  );
}