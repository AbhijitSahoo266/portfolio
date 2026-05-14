import React, { useState, useEffect } from "react";
import { FiFacebook, FiLinkedin, FiPhone,FiMail, } from "react-icons/fi";
import { TfiTwitter } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";

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

  useEffect(() => {
    const current = roles[index];
    let speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      );

      // typing complete
      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      // deleting complete
      if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-start md:justify-center pt-[8rem] pb-[2rem] px-[4%] "
    >
      <div className="max-w-full md:max-w-[60rem]">

        {/* HEADING */}
        <h1 className="text-[3rem] sm:text-[4rem] md:text-[5.6rem] font-semibold leading-[1.3]">
          Hi, I'm{" "}

          <span
            className="
      text-white
      inline-block
      relative
      transition-all
      duration-500
      hover:text-[#00abf0]
      hover:-translate-y-1
      hover:tracking-[3px]
      after:absolute
      after:left-0
      after:bottom-0
      after:w-0
      after:h-[3px]
      after:bg-[#00abf0]
      after:transition-all
      after:duration-500
      hover:after:w-full
    "
          >
            Abhijit Sahoo
          </span>
        </h1>

        {/* ROLE */}
        <div className="mt-[1rem]">
          <h3 className="text-[2rem] sm:text-[2.5rem] md:text-[3.2rem] font-bold text-white">
            And I'm a
          </h3>

          {/* TYPING TEXT */}
          <h3 className="text-[2rem] sm:text-[2.5rem] md:text-[3.2rem] font-bold">
            <span className="text-[#00abf0]">
              {text}
              <span className="animate-blink">|</span>
            </span>
          </h3>
        </div>

        {/* TEXT */}
        <p
          style={{
            fontSize: "1.6rem",
            margin: "2rem 0 3rem",
            maxWidth: "800px",
          }}
        >
          Fullstack & Mobile Developer with 2.7+ years of experience building responsive web and mobile apps using React.js, Next.js, React Native, Node.js, Express, and PostgreSQL. Skilled in Redux, Zustand, API integration, and modern UI frameworks, focused on delivering clean, scalable, and user-friendly solutions.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-[1rem] sm:gap-[2rem] my-[6rem]">

          <a
            href="/Abhijit_Sahoo_React_Frontend_Developer.pdf"
            className="flex justify-center items-center w-full sm:w-[15rem] h-[5rem] border-[0.2rem] border-[#00abf0] rounded-[0.8rem] text-[1.6rem] md:text-[1.8rem] font-semibold text-[#00abf0] relative overflow-hidden hover:text-[#081b29] transition-all duration-500 before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-[#00abf0] before:-z-10 before:transition-all before:duration-500 hover:before:w-full"
          >
            Download CV
          </a>

          <a
            href="#contact"
            className="flex justify-center items-center w-full sm:w-[15rem] h-[5rem] border-[0.2rem] border-[#00abf0] rounded-[0.8rem] text-[1.6rem] md:text-[1.8rem] font-semibold text-[#00abf0] relative overflow-hidden hover:text-[#081b29] transition-all duration-500 before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-[#00abf0] before:-z-10 before:transition-all before:duration-500 hover:before:w-full"
          >
            Let's Talk
          </a>

        </div>
      </div>

      {/* SOCIAL ICONS */}
      <div className="flex justify-center md:absolute md:bottom-[2rem] gap-[1.5rem]">
        {[
          {
            icon: FiFacebook,
            link: "#",
          },
          {
            icon: TfiTwitter,
            link: "#",
          },
          {
            icon: FiLinkedin,
            link: "https://www.linkedin.com/in/abhijit-sahoo-697913261/",
          },
          {
            icon: FaWhatsapp,
            link: "https://wa.me/919114126106?text=Hi%20Abhijit%2C%20I%20want%20to%20connect%20with%20you",
          },
          {
            icon: FiPhone,
            link: "tel:+919114126106",
          },
           {
            icon: FiMail,
            link: "abhijitsahoo266@gmail.com",
          },
        ].map((item, index) => {
          const Icon = item.icon;

          return (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center w-[40px] h-[40px] border-[0.2rem] border-[#00abf0] rounded-full text-[#00abf0] relative overflow-hidden hover:text-[#081b29] transition-all duration-500 before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-[#00abf0] before:-z-10 before:transition-all before:duration-500 hover:before:w-full"
            >
              <Icon size={18} />
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Home;