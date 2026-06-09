import React from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section className="container min-h-screen flex items-center justify-center">

      <div className="text-center max-w-3xl">

        {/* Small label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm tracking-widest text-muted uppercase"
        >
          Full Stack Developer
        </motion.p>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-semibold mt-6 leading-tight"
        >
          Building{" "}
          <span className="text-[#FFB86B] smooth hover:opacity-90">modern web apps</span>{" "}
          with clean architecture
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-muted text-lg"
        >
          I design and build full-stack applications using Laravel & React,
          focusing on performance, scalability, and real-world impact.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex gap-4 justify-center mt-10"
        >
          <a href="#projects" className="btn-primary">
            View Projects
          </a>

          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>
        </motion.div>

      </div>

    </section>
  );
};

export default HeroSection;
