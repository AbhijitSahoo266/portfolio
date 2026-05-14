import React from "react";
import { motion } from "framer-motion";

const card = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Education() {
  return (
    <section
      id="education"
      className="min-h-screen px-[9%] py-[5rem] bg-[#081b29] text-[#ededed]"
    >
      {/* HEADING */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-[5rem] text-center mb-[5rem]"
      >
        My <span className="text-[#00abf0]">Journey</span>
      </motion.h2>

      <div className="flex flex-wrap gap-[5rem]">

        {/* EDUCATION */}
        <div className="flex-1 min-w-[300px]">
          <h3 className="text-[2.5rem] mb-[2rem]">Education</h3>

          <div className="relative border-l-[0.2rem] border-[#00abf0]">

            {[
              {
                date: "2015-2017",
                title: "Intermediate – CHSE Odisha",
                desc: "55% at Vinayak College of Science and Commerce, Bhadrak.",
              },
              {
                date: "2017-2020",
                title: "B.Sc Computer Science",
                desc: "71% at Chitalo Degree Mahavidyalaya, Jajpur Town.",
              },
              {
                date: "2021-2023",
                title: "MCA",
                desc: "8.75 CGPA at NIIS Institute of Business Administration, Bhubaneswar.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={card}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-[2rem] mb-[3rem]"
              >
                <span className="absolute top-0 left-[-1.1rem] w-[2rem] h-[2rem] rounded-full bg-[#00abf0]" />

                <div className="bg-[#112e42] p-[2rem] rounded-[1rem] border border-[#00abf0]">
                  <div className="text-[1.4rem] mb-[0.5rem]">
                    📅 {item.date}
                  </div>
                  <h3 className="text-[2rem] font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-[1.4rem]">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* EXPERIENCE */}
        <div className="flex-1 min-w-[300px]">
          <h3 className="text-[2.5rem] mb-[2rem]">Experience</h3>

          <div className="relative border-l-[0.2rem] border-[#00abf0]">

            {[
              {
                date: "Nov 2025 - Present",
                title: "Software Engineer - comminent pvt. ltd.",
                desc: "Fullstack Developer working on React, Next.js, React Native, Node.js, PostgreSQL.",
              },
              {
                date: "July 2023 - Nov 2025",
                title: "Frontend Developer - AbsecLab pvt. ltd.",
                desc: "Built responsive UI using React & Next.js with performance optimization.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={card}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-[2rem] mb-[3rem]"
              >
                <span className="absolute top-0 left-[-1.1rem] w-[2rem] h-[2rem] rounded-full bg-[#00abf0]" />

                <div className="bg-[#112e42] p-[2rem] rounded-[1rem] border border-[#00abf0]">
                  <div className="text-[1.4rem] mb-[0.5rem]">
                    📅 {item.date}
                  </div>
                  <h3 className="text-[2rem] font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-[1.4rem]">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}