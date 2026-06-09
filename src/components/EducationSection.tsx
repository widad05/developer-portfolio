import React from "react";
import { motion } from "framer-motion";

const education = [
  {
    school: "OFPPT ISTA Hay Hassani 1",
    degree: "Digital Development Diploma",
    period: "2023 - 2025",
    description:
      "Full-stack web development program focused on Laravel, React, databases, and software engineering fundamentals.",
  },
  {
    school: "Specialization Projects",
    degree: "Full Stack Practice",
    period: "2024 - Present",
    description:
      "Built real-world applications including a veterinary management platform and lost animal tracking system.",
  },
];

const EducationSection = () => {
  return (
    <section className="container">

      {/* HEADER */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold">
          Education
        </h2>

        <p className="mt-5 text-muted max-w-xl mx-auto">
          My academic background and practical learning journey in software development.
        </p>
      </div>

      {/* CARDS */}
      <div className="space-y-6">

        {education.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="card p-8"
          >

            {/* TOP ROW */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">

              <h3 className="text-xl font-semibold">
                {item.school}
              </h3>

              <span className="text-sm text-[#FFB86B]">
                {item.period}
              </span>

            </div>

            {/* DEGREE */}
            <p className="text-muted mt-2">
              {item.degree}
            </p>

            {/* DESCRIPTION */}
            <p className="text-sm text-muted mt-4 leading-relaxed">
              {item.description}
            </p>

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default EducationSection;