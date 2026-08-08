import React, { useState } from "react";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiMail, FiPhone, FiMapPin, FiSend, FiLoader } from "react-icons/fi";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";

const formContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const inputItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    emailSubject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const MySwal = withReactContent(Swal);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      mobileNumber: "",
      emailSubject: "",
      message: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_311kqwk",
        "template_1vqwg26",
        {
          name: formData.fullName,
          title: formData.emailSubject,
          email: formData.email,
          message: formData.message,
          mobileNumber: formData.mobileNumber,
        },
        "Pwc8jAXRdeRDV8Xac"
      )
      .then(() => {
        setLoading(false);
        MySwal.fire({
          title: "Success!",
          text: "Your message has been sent successfully. I will get back to you shortly!",
          icon: "success",
          confirmButtonColor: "#00abf0",
        });

        resetForm();
      })
      .catch((error) => {
        setLoading(false);
        console.error("EmailJS Error:", error);

        MySwal.fire({
          title: "Error",
          text: error.text || "Something went wrong! Please try again.",
          icon: "error",
          confirmButtonColor: "#00abf0",
        });
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-6 sm:px-12 md:px-20 py-16 bg-[#081b29] text-[#ededed] relative overflow-x-clip flex flex-col justify-center items-center"
    >
      {/* BACKGROUND FLOATING GLOW BALL */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 right-10 w-[450px] h-[450px] bg-[var(--main-color)] blur-[130px] pointer-events-none rounded-full"
      />

      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 z-10"
      >
        <h2 className="text-[3rem] sm:text-[4rem] md:text-[5rem] font-bold tracking-wide">
          Contact <span className="text-[var(--main-color)] drop-shadow-[0_0_15px_rgba(0,171,240,0.4)]">Me</span>
        </h2>
        <p className="text-[1.3rem] md:text-[1.6rem] text-[#ededed]/70 mt-2 max-w-[550px] mx-auto">
          Have a project in mind or want to explore collaboration opportunities? Send a message below!
        </p>
      </motion.div>

      {/* TWO-COLUMN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-[1250px] w-full z-10 items-start">
        
        {/* LEFT COLUMN: DIRECT CONTACT DETAILS */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 bg-[#112e42]/80 backdrop-blur-md p-8 md:p-10 rounded-[2rem] border border-[var(--main-color)]/20 hover:border-[var(--main-color)]/50 transition-all duration-300 space-y-8 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
        >
          <div>
            <h3 className="text-[2.2rem] font-bold text-[#ededed] mb-2">
              Let's Connect
            </h3>
            <p className="text-[1.3rem] text-[#ededed]/70 leading-relaxed">
              Feel free to reach out directly via email, phone, or messaging platforms.
            </p>
          </div>

          <div className="space-y-6 pt-2">
            <motion.a
              whileHover={{ scale: 1.02, x: 5 }}
              href="mailto:abhijitsahoo266@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl bg-[#081b29]/70 border border-[#ededed]/5 hover:border-[var(--main-color)]/60 transition-all duration-300 group shadow-md"
            >
              <div className="w-12 h-12 rounded-lg bg-[var(--main-color)]/10 text-[var(--main-color)] flex items-center justify-center text-[1.8rem] shrink-0 group-hover:bg-[var(--main-color)] group-hover:text-[#081b29] transition-all duration-300">
                <FiMail />
              </div>
              <div>
                <p className="text-[1.1rem] text-[#ededed]/50 uppercase tracking-wider font-semibold">Email Me</p>
                <p className="text-[1.4rem] font-medium text-[#ededed] group-hover:text-[var(--main-color)] transition-colors">
                  abhijitsahoo266@gmail.com
                </p>
              </div>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02, x: 5 }}
              href="tel:+919114126106"
              className="flex items-center gap-4 p-4 rounded-xl bg-[#081b29]/70 border border-[#ededed]/5 hover:border-[var(--main-color)]/60 transition-all duration-300 group shadow-md"
            >
              <div className="w-12 h-12 rounded-lg bg-[var(--main-color)]/10 text-[var(--main-color)] flex items-center justify-center text-[1.8rem] shrink-0 group-hover:bg-[var(--main-color)] group-hover:text-[#081b29] transition-all duration-300">
                <FiPhone />
              </div>
              <div>
                <p className="text-[1.1rem] text-[#ededed]/50 uppercase tracking-wider font-semibold">Call Me</p>
                <p className="text-[1.4rem] font-medium text-[#ededed] group-hover:text-[var(--main-color)] transition-colors">
                  +91 91141 26106
                </p>
              </div>
            </motion.a>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#081b29]/70 border border-[#ededed]/5 shadow-md">
              <div className="w-12 h-12 rounded-lg bg-[var(--main-color)]/10 text-[var(--main-color)] flex items-center justify-center text-[1.8rem] shrink-0">
                <FiMapPin />
              </div>
              <div>
                <p className="text-[1.1rem] text-[#ededed]/50 uppercase tracking-wider font-semibold">Location</p>
                <p className="text-[1.4rem] font-medium text-[#ededed]">India</p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#ededed]/10">
            <p className="text-[1.2rem] text-[#ededed]/60 mb-3 font-medium">Follow My Work</p>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/abhijit-sahoo-697913261/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg bg-[#081b29] border border-[var(--main-color)]/30 text-[var(--main-color)] flex items-center justify-center text-[1.6rem] hover:bg-[var(--main-color)] hover:text-[#081b29] transition-all"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/919114126106?text=Hi%20Abhijit%2C%20I%20want%20to%20connect%20with%20you"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg bg-[#081b29] border border-[var(--main-color)]/30 text-[var(--main-color)] flex items-center justify-center text-[1.6rem] hover:bg-[var(--main-color)] hover:text-[#081b29] transition-all"
              >
                <FaWhatsapp />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: ANIMATED CONTACT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 bg-[#112e42]/80 backdrop-blur-md p-8 md:p-10 rounded-[2rem] border border-[var(--main-color)]/20 hover:border-[var(--main-color)]/50 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
        >
          <motion.form
            variants={formContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div variants={inputItemVariants}>
                <label className="block text-[1.2rem] font-medium text-[#ededed]/70 mb-2">
                  Full Name <span className="text-[var(--main-color)]">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full h-[4.8rem] px-5 text-[1.4rem] bg-[#081b29]/80 border border-[#ededed]/15 focus:border-[var(--main-color)] focus:shadow-[0_0_10px_rgba(0,171,240,0.3)] rounded-xl outline-none transition-all duration-300 text-[#ededed]"
                />
              </motion.div>

              <motion.div variants={inputItemVariants}>
                <label className="block text-[1.2rem] font-medium text-[#ededed]/70 mb-2">
                  Email Address <span className="text-[var(--main-color)]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full h-[4.8rem] px-5 text-[1.4rem] bg-[#081b29]/80 border border-[#ededed]/15 focus:border-[var(--main-color)] focus:shadow-[0_0_10px_rgba(0,171,240,0.3)] rounded-xl outline-none transition-all duration-300 text-[#ededed]"
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div variants={inputItemVariants}>
                <label className="block text-[1.2rem] font-medium text-[#ededed]/70 mb-2">
                  Mobile Number <span className="text-[var(--main-color)]">*</span>
                </label>
                <input
                  type="tel"
                  name="mobileNumber"
                  placeholder="Enter your phone number"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  required
                  className="w-full h-[4.8rem] px-5 text-[1.4rem] bg-[#081b29]/80 border border-[#ededed]/15 focus:border-[var(--main-color)] focus:shadow-[0_0_10px_rgba(0,171,240,0.3)] rounded-xl outline-none transition-all duration-300 text-[#ededed]"
                />
              </motion.div>

              <motion.div variants={inputItemVariants}>
                <label className="block text-[1.2rem] font-medium text-[#ededed]/70 mb-2">
                  Email Subject <span className="text-[var(--main-color)]">*</span>
                </label>
                <input
                  type="text"
                  name="emailSubject"
                  placeholder="Enter subject or project topic"
                  value={formData.emailSubject}
                  onChange={handleChange}
                  required
                  className="w-full h-[4.8rem] px-5 text-[1.4rem] bg-[#081b29]/80 border border-[#ededed]/15 focus:border-[var(--main-color)] focus:shadow-[0_0_10px_rgba(0,171,240,0.3)] rounded-xl outline-none transition-all duration-300 text-[#ededed]"
                />
              </motion.div>
            </div>

            <motion.div variants={inputItemVariants}>
              <label className="block text-[1.2rem] font-medium text-[#ededed]/70 mb-2">
                Your Message <span className="text-[var(--main-color)]">*</span>
              </label>
              <textarea
                name="message"
                rows="5"
                placeholder="Type your message here..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-5 text-[1.4rem] bg-[#081b29]/80 border border-[#ededed]/15 focus:border-[var(--main-color)] focus:shadow-[0_0_10px_rgba(0,171,240,0.3)] rounded-xl outline-none resize-none transition-all duration-300 text-[#ededed]"
              />
            </motion.div>

            <motion.div variants={inputItemVariants}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                type="submit"
                className="group relative w-full h-[5rem] bg-[var(--main-color)] border border-[var(--main-color)] rounded-xl text-[#081b29] font-bold text-[1.6rem] overflow-hidden transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(0,171,240,0.3)] disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <FiLoader className="animate-spin text-[1.8rem]" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FiSend className="text-[1.8rem] transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </motion.button>
            </motion.div>
          </motion.form>
        </motion.div>

      </div>
    </section>
  );
}