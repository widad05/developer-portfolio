import React from "react";
import { motion } from "framer-motion";

const stats = [
  {
    value: "4+",
    label: "Projects Built",
  },
  {
    value: "1+",
    label: "Full Stack Apps",
  },
  {
    value: "8+",
    label: "Technologies Used",
  },
  {
    value: "1",
    label: "Production System",
  },
];

const StatsSection = () => {
  return (
    <section className="container">

      {/* HEADER */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold">
          Impact
        </h2>
        <p className="mt-5 text-muted max-w-xl mx-auto">
          A quick overview of what I’ve built and worked on so far.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {stats.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="card p-6 text-center"
          >

            {/* VALUE */}
            <div className="text-3xl md:text-4xl font-semibold text-[#FFB86B]">
              {item.value}
            </div>

            {/* LABEL */}
            <div className="mt-3 text-sm text-muted">
              {item.label}
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default StatsSection;