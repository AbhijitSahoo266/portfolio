import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen pb-[2rem] py-[5rem] px-[4%] md:px-[4%] flex flex-col items-center justify-center gap-8 "
      style={{ background: "#112e42" }} // second-bg-color
    >
      {/* Heading */}
      <h2
        className="text-center mb-12"
        style={{ fontSize: "5rem" }}
      >
        About <span style={{ color: "#00abf0" }}>Me</span>
      </h2>

      {/* Image */}
     <div className="relative flex justify-center items-center w-[25rem] h-[25rem]">
  
  {/* IMAGE */}
  <img
    src="/Abhijit.png"
    alt="profile"
    className="rounded-full"
    style={{
      width: "90%",
      border: "0.2rem solid #00abf0",
      zIndex: 2,
    }}
  />

  {/* ROTATING BORDER (FIXED) */}
  <motion.span
    animate={{ rotate: 360 }}
    transition={{
      repeat: Infinity,
      duration: 10,
      ease: "linear",
    }}
    className="absolute inset-0 rounded-full"
    style={{
      borderTop: "0.2rem solid #112e42",
      borderBottom: "0.2rem solid #112e42",
      borderLeft: "0.2rem solid #00abf0",
      borderRight: "0.2rem solid #00abf0",
    }}
  />
</div>
      {/* Content */}
      <div className="text-center">
        <h3 style={{ fontSize: "2.6rem" }}>Software Engineer</h3>

   <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            fontSize: "1.6rem",
            margin: "2rem 0 3rem",
            maxWidth: "800px",
          }}
        >
          I am a passionate Fullstack & Mobile Developer with 2.7+ years of
          experience building responsive, scalable, and user-friendly web and
          mobile applications. I specialize in React.js, Next.js, React Native,
          Node.js, Express, and PostgreSQL, along with modern UI frameworks like
          Tailwind CSS, Material UI, and Bootstrap.
          <br />
          <br />
          I have strong expertise in state management (Redux & Zustand), API
          integration, and performance optimization. I enjoy solving real-world
          problems, writing clean and efficient code, and creating seamless user
          experiences across web and mobile platforms.
          <br />
          <br />
          Currently, I work on enterprise-level applications, collaborating with
          cross-functional teams, and delivering high-quality, scalable software
          solutions.
        </motion.p>

        {/* Button */}
        <div
          className="inline-block"
          style={{ width: "15rem", height: "5rem" }}

        >
          {/* First Button */}
          <div
            style={{
              width: "15rem",
              height: "100%",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <a
              href="#contact"
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
              {/* Simulate ::before overlay */}
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
            </a>
          </div>


        </div>
      </div>
    </section>
  );
}