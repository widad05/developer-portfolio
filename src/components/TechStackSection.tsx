import React from "react";
import { motion } from "framer-motion";

const stacks = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    items: ["Laravel", "PHP", "REST APIs"],
  },
  {
    title: "Database",
    items: ["MySQL", "Relational Database Design", "Eloquent ORM"],
  },
  {
    title: "Dev Tools",
    items: ["Git", "GitHub", "XAMPP", "phpMyAdmin"],
  },
  {
    title: "Deployment / Cloud",
    items: ["Railway", "Basic Cloud Deployment"],
  },
  {
    title: "Languages",
    items: ["JavaScript", "Python", "PHP", "HTML", "CSS"],
  },
];

const TechStackSection = () => {
  return (
    <section className="container">

      {/* HEADER */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold">
          Tech Stack
        </h2>
        <p className="mt-5 text-muted max-w-xl mx-auto">
          Technologies I use to build scalable, performant and modern web applications.
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-6">

        {stacks.map((group, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="card p-6"
          >

            {/* TITLE */}
            <h3 className="text-lg font-semibold text-[#FFB86B]">
              {group.title}
            </h3>

            {/* ITEMS */}
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 rounded-full border border-default text-muted hover:border-[#FFB86B]/40 transition"
                >
                  {item}
                </span>
              ))}
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default TechStackSection;