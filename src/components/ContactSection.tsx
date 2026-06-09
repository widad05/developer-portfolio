import React from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="container">

      {/* HEADER */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold">
          Let’s build something together
        </h2>

        <p className="mt-5 text-muted max-w-xl mx-auto">
          I’m currently open to internships, freelance work, and full-time opportunities in web development.
        </p>
      </div>

      {/* MAIN CARD */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        className="card p-10 text-center max-w-3xl mx-auto"
      >

        {/* EMAIL */}
        <p className="text-sm text-muted">Email</p>

        <h3 className="text-2xl md:text-3xl font-semibold mt-2">
          widad.elhajli@gmail.com
        </h3>

        {/* BUTTONS */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">

          {/* COPY EMAIL */}
          <button
            onClick={() =>
              navigator.clipboard.writeText("widad.elhajli@gmail.com")
            }
            className="btn-primary"
          >
            Copy Email
          </button>

          {/* RESUME */}
          <a
            href="/resume.pdf"
            className="btn-secondary"
          >
            Download Resume
          </a>

        </div>

      </motion.div>

     {/* FOOT NOTE */}
<p className="text-center text-muted text-sm mt-10 leading-relaxed">
  Thank you for visiting my portfolio.
  <br />
  <br />
  Full-Stack Developer | Laravel • React • MySQL
 
</p>

    </section>
  );
};

export default ContactSection;