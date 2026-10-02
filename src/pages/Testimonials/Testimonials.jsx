import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar, FaLinkedin } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function Testimonials() {
  const data = [
    {
      name: "Engineering Team Lead",
      company: "Comminent Pvt. Ltd.",
      text: "Abhijit is a highly reliable React & React Native engineer. He consistently transforms complex Figma designs into responsive, high-performance UI components with exceptional speed.",
      rating: 5,
      linkedinUrl: "https://www.linkedin.com/in/abhijit-sahoo-697913261/details/recommendations/",
    },
    {
      name: "Senior Project Manager",
      company: "AbsecLab Pvt. Ltd.",
      text: "Delivered scalable full-stack web features and mobile modules under tight deadlines. Outstanding technical communication and proactive problem-solving attitude.",
      rating: 5,
      linkedinUrl: "https://www.linkedin.com/in/abhijit-sahoo-697913261/details/recommendations/",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 px-[5%] sm:px-[8%] bg-[#112e42] text-[#ededed] relative overflow-hidden flex flex-col justify-center items-center"
    >
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--main-color)] opacity-5 blur-[140px] pointer-events-none rounded-full" />

      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 z-10"
      >
        <h2 className="text-[3rem] sm:text-[4rem] md:text-[5rem] font-bold">
          Client & Team <span className="text-[var(--main-color)]">Feedback</span>
        </h2>
        <p className="text-[1.3rem] md:text-[1.6rem] text-[#ededed]/70 mt-2 max-w-[550px] mx-auto">
          Endorsements and feedback from engineering leads and project managers.
        </p>
      </motion.div>

      {/* CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 max-w-[1250px] w-full z-10">
        {data.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4 }}
            className="relative bg-[#081b29]/90 backdrop-blur-md p-8 sm:p-10 rounded-[2rem] border border-[var(--main-color)]/30 hover:border-[var(--main-color)] transition-all duration-300 shadow-[0_0_20px_rgba(0,171,240,0.1)] hover:shadow-[0_0_30px_rgba(0,171,240,0.25)] flex flex-col justify-between group"
          >
            <div>
              {/* Top Quote Icon & Rating */}
              <div className="flex justify-between items-center mb-6">
                <FaQuoteLeft className="text-[2.5rem] text-[var(--main-color)]/50 group-hover:text-[var(--main-color)] transition-colors duration-300" />
                <div className="flex gap-1 text-[#ffd700] text-[1.4rem]">
                  {[...Array(t.rating)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-[1.4rem] sm:text-[1.5rem] text-[#ededed]/90 leading-relaxed italic mb-8">
                "{t.text}"
              </p>
            </div>

            {/* User Profile Info & LinkedIn Verification */}
            <div>
              <div className="pt-4 border-t border-[#ededed]/10 flex items-center justify-between">
                <div>
                  <h4 className="text-[1.6rem] sm:text-[1.8rem] font-bold text-[var(--main-color)]">
                    {t.name}
                  </h4>
                  <p className="text-[1.2rem] text-[#ededed]/60 font-medium">
                    {t.company}
                  </p>
                </div>

                {/* LinkedIn Badge Avatar */}
                <div className="w-12 h-12 rounded-full bg-[var(--main-color)]/10 border border-[var(--main-color)]/30 flex items-center justify-center text-[var(--main-color)] text-[1.6rem]">
                  <FaLinkedin />
                </div>
              </div>

              {/* Verify Link */}
              <a
                href={t.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[1.2rem] font-semibold text-[var(--main-color)] hover:underline mt-4 group/link"
              >
                <span>Verify on LinkedIn</span>
                <FiExternalLink className="text-[1.3rem] transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}