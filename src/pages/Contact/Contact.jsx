import React, { useState, useRef, useEffect, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiLoader,
  FiCheckCircle,
  FiAlertCircle
} from "react-icons/fi";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";

const cardVariant = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

// Left Contact Card
const ContactInfoCard = memo(() => (
  <motion.div
    variants={cardVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
    className="lg:col-span-5 h-full bg-[var(--second-bg-color)]/60 backdrop-blur-md p-6 sm:p-8 md:p-9 rounded-2xl border border-[var(--border-color)] hover:border-[var(--main-color)]/50 shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-300 flex flex-col justify-between gap-6"
  >
    <div className="space-y-6">
      <div>
        <h3 className="text-[2rem] sm:text-[2.2rem] font-bold text-[var(--text-color)] mb-2">
          Let's Connect
        </h3>
        <p className="text-[1.25rem] sm:text-[1.35rem] text-[var(--text-muted)] leading-relaxed">
          Feel free to reach out directly via email, phone, or professional networks to discuss projects, ideas, or opportunities.
        </p>
      </div>

      <div className="space-y-3.5">
        <a
          href="mailto:abhijitsahoo266@gmail.com"
          className="flex items-center gap-4 p-3.5 sm:p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--main-color)]/60 transition-colors group shadow-xs cursor-pointer"
        >
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[var(--main-color)]/10 text-[var(--main-color)] flex items-center justify-center text-[1.8rem] shrink-0 group-hover:bg-[var(--main-color)] group-hover:text-white transition-colors">
            <FiMail />
          </div>
          <div className="truncate">
            <p className="text-[1.05rem] text-[var(--text-muted)] uppercase tracking-wider font-semibold">Email Me</p>
            <p className="text-[1.3rem] sm:text-[1.35rem] font-medium text-[var(--text-color)] group-hover:text-[var(--main-color)] transition-colors truncate">
              abhijitsahoo266@gmail.com
            </p>
          </div>
        </a>

        <a
          href="tel:+919114126106"
          className="flex items-center gap-4 p-3.5 sm:p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--main-color)]/60 transition-colors group shadow-xs cursor-pointer"
        >
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[var(--main-color)]/10 text-[var(--main-color)] flex items-center justify-center text-[1.8rem] shrink-0 group-hover:bg-[var(--main-color)] group-hover:text-white transition-colors">
            <FiPhone />
          </div>
          <div>
            <p className="text-[1.05rem] text-[var(--text-muted)] uppercase tracking-wider font-semibold">Call Me</p>
            <p className="text-[1.3rem] sm:text-[1.35rem] font-medium text-[var(--text-color)] group-hover:text-[var(--main-color)] transition-colors">
              +91 91141 26106
            </p>
          </div>
        </a>

        <div className="flex items-center gap-4 p-3.5 sm:p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-xs">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[var(--main-color)]/10 text-[var(--main-color)] flex items-center justify-center text-[1.8rem] shrink-0">
            <FiMapPin />
          </div>
          <div>
            <p className="text-[1.05rem] text-[var(--text-muted)] uppercase tracking-wider font-semibold">Location</p>
            <p className="text-[1.3rem] sm:text-[1.35rem] font-medium text-[var(--text-color)]">
              Bhadrak, Odisha, India
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="pt-4 border-t border-[var(--border-color)]">
      <p className="text-[1.15rem] text-[var(--text-muted)] mb-3 font-semibold uppercase tracking-wider">
        Follow My Work
      </p>
      <div className="flex gap-3">
        <a
          href="https://www.linkedin.com/in/abhijit-sahoo-697913261/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="w-11 h-11 rounded-xl bg-[var(--card-bg)] border border-[var(--main-color)]/30 text-[var(--main-color)] flex items-center justify-center text-[1.6rem] hover:bg-[var(--main-color)] hover:text-white transition-all shadow-xs cursor-pointer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=919114126106&text=Hi%20Abhijit%2C%20I%20want%20to%20connect%20with%20you"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Message"
          className="w-11 h-11 rounded-xl bg-[var(--card-bg)] border border-[var(--main-color)]/30 text-[var(--main-color)] flex items-center justify-center text-[1.6rem] hover:bg-[var(--main-color)] hover:text-white transition-all shadow-xs cursor-pointer"
        >
          <FaWhatsapp />
        </a>
      </div>
    </div>
  </motion.div>
));

ContactInfoCard.displayName = "ContactInfoCard";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const formRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading || !formRef.current) return;

    setLoading(true);
    setStatus(null);

    const formData = new FormData(formRef.current);
    const templateParams = {
      name: formData.get("fullName"),
      title: formData.get("emailSubject"),
      email: formData.get("email"),
      message: formData.get("message"),
      mobileNumber: formData.get("mobileNumber"),
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_311kqwk",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_1vqwg26",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "Pwc8jAXRdeRDV8Xac"
      );

      setStatus({
        type: "success",
        message: "Your message has been sent successfully! I will get back to you shortly.",
      });

      formRef.current.reset();

      timeoutRef.current = setTimeout(() => {
        setStatus(null);
      }, 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({
        type: "error",
        message: error?.text || "Something went wrong! Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full h-[4.4rem] px-4 text-[1.3rem] sm:text-[1.35rem] bg-[var(--card-bg)] border border-[var(--border-color)] focus:border-[var(--main-color)] rounded-xl outline-none transition-colors text-[var(--text-color)] placeholder:text-[var(--text-muted)]/60 shadow-xs";

  return (
    <div className="w-full relative overflow-hidden py-2 sm:py-4">
      {/* Background Ambient Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 right-10 w-[24rem] h-[24rem] xl:w-[36rem] xl:h-[36rem] bg-[var(--main-color)] opacity-5 blur-[12rem] pointer-events-none rounded-full"
      />

      <div className="w-full mx-auto relative z-10 flex flex-col justify-center">
        {/* Page Heading */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-left mb-6 sm:mb-8"
        >
          <h2 className="text-[1.5rem] sm:text-[1.8rem] lg:text-[2rem] font-bold tracking-tight text-[var(--text-color)] leading-snug">
            Contact{" "}
            <span className="text-[var(--main-color)] drop-shadow-[0_0_10px_rgba(0,171,240,0.2)]">
              Me
            </span>
          </h2>

          <p className="text-[0.95rem] sm:text-[1.05rem] text-[var(--text-muted)] mt-1.5 max-w-xl font-normal leading-relaxed">
            Have a project in mind, an engineering role, or a collaboration opportunity? Reach out directly!
          </p>
        </motion.div>

        {/* Grid Container with items-stretch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch w-full">
          <ContactInfoCard />

          {/* Right Column: Contact Form */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="lg:col-span-7 h-full bg-[var(--second-bg-color)]/60 backdrop-blur-md p-6 sm:p-8 md:p-9 rounded-2xl border border-[var(--border-color)] hover:border-[var(--main-color)]/50 shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-300 flex flex-col"
          >
            <AnimatePresence mode="wait">
              {status && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className={`mb-4 p-4 rounded-xl border flex items-center gap-3 text-[1.25rem] sm:text-[1.35rem] ${
                    status.type === "success"
                      ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-500 dark:text-emerald-400"
                      : "bg-rose-500/10 border-rose-500/30 text-rose-500 dark:text-rose-400"
                  }`}
                >
                  {status.type === "success" ? (
                    <FiCheckCircle className="text-[1.8rem] shrink-0" />
                  ) : (
                    <FiAlertCircle className="text-[1.8rem] shrink-0" />
                  )}
                  <span>{status.message}</span>
                </motion.div>
              )}
            </AnimatePresence>

            <form ref={formRef} onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between gap-4 sm:gap-5">
              <div className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-[1.15rem] font-medium text-[var(--text-muted)] mb-1.5">
                      Full Name <span className="text-[var(--main-color)]">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Enter your full name"
                      required
                      autoComplete="name"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-[1.15rem] font-medium text-[var(--text-muted)] mb-1.5">
                      Email Address <span className="text-[var(--main-color)]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                      autoComplete="email"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-[1.15rem] font-medium text-[var(--text-muted)] mb-1.5">
                      Mobile Number <span className="text-[var(--main-color)]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="mobileNumber"
                      placeholder="Enter your phone"
                      required
                      autoComplete="tel"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-[1.15rem] font-medium text-[var(--text-muted)] mb-1.5">
                      Email Subject <span className="text-[var(--main-color)]">*</span>
                    </label>
                    <input
                      type="text"
                      name="emailSubject"
                      placeholder="Project discussion / inquiry"
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[1.15rem] font-medium text-[var(--text-muted)] mb-1.5">
                    Your Message <span className="text-[var(--main-color)]">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Type your message here..."
                    required
                    className="w-full p-4 text-[1.3rem] sm:text-[1.35rem] bg-[var(--card-bg)] border border-[var(--border-color)] focus:border-[var(--main-color)] rounded-xl outline-none resize-none transition-colors text-[var(--text-color)] placeholder:text-[var(--text-muted)]/60 shadow-xs"
                  />
                </div>
              </div>

              <button
                disabled={loading}
                type="submit"
                className="w-full h-[4.4rem] mt-2 bg-[var(--main-color)] hover:opacity-95 rounded-xl text-white font-bold text-[1.45rem] transition-all duration-200 active:scale-[0.99] flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-60 shadow-md shadow-[var(--main-color)]/25"
              >
                {loading ? (
                  <>
                    <FiLoader className="animate-spin text-[1.8rem]" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FiSend className="text-[1.6rem]" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}