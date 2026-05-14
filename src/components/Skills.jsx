import React from "react";
import { motion } from "framer-motion";

export default function Skills() {

  const codingSkills = [
    { name: "HTML5", percent: 90 },
    { name: "CSS3 / Tailwind", percent: 85 },
    { name: "JavaScript (ES6+)", percent: 80 },
    { name: "React.js", percent: 85 },
    { name: "Next.js", percent: 80 },
    { name: "React Native", percent: 70 },
    { name: "Node.js", percent: 80 },
    { name: "Express.js", percent: 75 },
    { name: "MongoDB", percent: 80 },
    { name: "PostgreSQL", percent: 75 },
  ];

  const professionalSkills = [
    { name: "Web Development", percent: 85 },
    { name: "Mobile Development", percent: 75 },
    { name: "UI/UX Design", percent: 75 },
    { name: "API Integration", percent: 80 },
    { name: "State Management", percent: 75 },
    { name: "Performance Optimization", percent: 70 },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0 },
  };

  const SkillCard = ({ title, skills }) => (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="
        relative
        bg-white/5
        backdrop-blur-md
        border border-[#00abf0]/20
        rounded-2xl
        p-8
        shadow-[0_0_30px_rgba(0,171,240,0.08)]
      "
    >
      <h3 className="text-[2.4rem] font-semibold mb-10 text-[#ededed]">
        {title}
      </h3>

      {skills.map((skill, index) => (
        <motion.div
          key={index}
          variants={item}
          className="mb-8"
        >
          {/* LABEL */}
          <div className="flex justify-between text-[1.5rem] mb-2 text-[#cfd8dc]">
            <span>⚡ {skill.name}</span>
            <span>{skill.percent}%</span>
          </div>

          {/* BAR BACKGROUND */}
          <div className="w-full h-3 bg-[#081b29] rounded-full overflow-hidden border border-[#00abf0]/20">
            
            {/* ANIMATED FILL */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.percent}%` }}
              transition={{ duration: 1 }}
              className="
                h-full
                rounded-full
                bg-gradient-to-r from-[#00abf0] to-[#00d4ff]
                shadow-[0_0_15px_rgba(0,171,240,0.6)]
              "
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <section
      id="skills"
      className="min-h-screen px-6 md:px-20 py-24 bg-[#081b29] text-[#ededed]"
    >
      {/* HEADING */}
      <motion.h2
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-[clamp(3rem,6vw,5rem)] font-bold mb-20"
      >
        My <span className="text-[#00abf0]">Skills</span>
      </motion.h2>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-12">

        <SkillCard
          title="Coding Skills"
          skills={codingSkills}
        />

        <SkillCard
          title="Professional Skills"
          skills={professionalSkills}
        />

      </div>
    </section>
  );
}