import { motion } from "framer-motion";

export default function Testimonials() {
  const data = [
    {
      name: "Team Lead",
      text: "Strong React developer with clean UI understanding.",
    },
    {
      name: "Project Manager",
      text: "Delivered scalable fullstack features with good performance.",
    },
  ];

  return (
    <section className="px-10 py-20 bg-[#112e42] text-[#ededed]">
      <h2 className="text-center text-[4rem] mb-12">
        Testimonials
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {data.map((t, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-[#081b29] rounded-2xl border border-[#00abf0]/30"
          >
            <p className="text-[1.6rem] mb-6">"{t.text}"</p>
            <h4 className="text-[#00abf0] text-[1.8rem]">
              - {t.name}
            </h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}