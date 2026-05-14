import React, { useState } from "react";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    emailSubject: "",
    message: "",
  });

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

  // WITHOUT BACKEND
  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(formData.emailSubject);

    const body = encodeURIComponent(`
Name: ${formData.fullName}

Email: ${formData.email}

Mobile Number: ${formData.mobileNumber}

Message:
${formData.message}
    `);

    window.location.href = `mailto:abhijitsahoo266@gmail.com?subject=${subject}&body=${body}`;

    MySwal.fire(
      "Redirecting!",
      "Opening your email client...",
      "success"
    );

    resetForm();
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-6 md:px-20 py-24 bg-[#081b29] text-[#ededed]"
    >
      {/* HEADING */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-[clamp(3rem,6vw,5rem)] font-bold mb-8"
      >
        Contact <span className="text-[#00abf0]">Me!</span>
      </motion.h2>

      {/* CONTACT INFO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 mb-14 text-center"
      >
        <a
          href="mailto:abhijitsahoo266@gmail.com"
          className="text-[1.5rem] md:text-[1.7rem] text-[#00abf0] hover:underline transition"
        >
          📧 abhijitsahoo266@gmail.com
        </a>

        <a
          href="tel:+919114126106"
          className="text-[1.5rem] md:text-[1.7rem] text-[#00abf0] hover:underline transition"
        >
          📞 +91 9114126106
        </a>
      </motion.div>

      {/* FORM */}
      <motion.form
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto space-y-8"
      >
        {/* ROW 1 */}
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              name: "fullName",
              type: "text",
              placeholder: "Full Name",
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
            },
          ].map((field, i) => (
            <motion.input
              key={i}
              variants={item}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              value={formData[field.name]}
              onChange={handleChange}
              required
              className="w-full h-[5rem] px-5 text-[1.6rem] bg-transparent border-2 border-[#00abf0]/70 rounded-xl outline-none focus:border-[#00abf0] focus:shadow-[0_0_15px_rgba(0,171,240,0.3)] transition"
            />
          ))}
        </div>

        {/* ROW 2 */}
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              name: "mobileNumber",
              type: "tel",
              placeholder: "Mobile Number",
            },
            {
              name: "emailSubject",
              type: "text",
              placeholder: "Email Subject",
            },
          ].map((field, i) => (
            <motion.input
              key={i}
              variants={item}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              value={formData[field.name]}
              onChange={handleChange}
              required
              className="w-full h-[5rem] px-5 text-[1.6rem] bg-transparent border-2 border-[#00abf0]/70 rounded-xl outline-none focus:border-[#00abf0] focus:shadow-[0_0_15px_rgba(0,171,240,0.3)] transition"
            />
          ))}
        </div>

        {/* MESSAGE */}
        <motion.textarea
          variants={item}
          name="message"
          rows="6"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-5 py-4 text-[1.6rem] bg-transparent border-2 border-[#00abf0]/70 rounded-xl outline-none resize-none focus:border-[#00abf0] focus:shadow-[0_0_15px_rgba(0,171,240,0.3)] transition"
        />

        {/* BUTTON */}
        <motion.div
          variants={item}
          className="flex justify-center pt-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="relative w-[18rem] h-[5rem] rounded-xl bg-[#00abf0] text-[#081b29] font-semibold text-[1.7rem] overflow-hidden border-2 border-[#00abf0] group"
          >
            {/* Hover Layer */}
            <span className="absolute inset-0 w-0 bg-[#081b29] transition-all duration-500 group-hover:w-full" />

            {/* Button Text */}
            <span className="relative z-10 group-hover:text-[#00abf0] transition-colors duration-500">
              Send Message
            </span>
          </motion.button>
        </motion.div>
      </motion.form>
    </section>
  );
}