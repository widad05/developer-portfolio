import { motion } from "framer-motion";
import React, { useState } from "react";
import ProjectModal from "@/components/ProjectModal";

const projects = [
  {
    title: "Veterinary Management Platform",
    description:
      "Full-stack SaaS system for managing clinics, appointments, medical records, and users.",
    tech: ["Laravel", "React", "MySQL","Breeze","Inertia"],
    status: "Production-level project",
    live: "https://vet-platform-production-bf90.up.railway.app/",
    code: "https://github.com/your-username/vet-platform",
  },
  // {
  //   title: "Lost Animals System",
  //   description:
  //     "Community platform to report, track, and recover lost animals in real-time.",
  //   tech: ["Laravel", "MySQL", "Maps API"],
  //   status: "Full-stack app",
  //   live: "",
  //   code: "",
  // },
  // {
  //   title: "Developer Portfolio",
  //   description:
  //     "Modern interactive portfolio built with React, Tailwind, and Framer Motion.",
  //   tech: ["React", "Tailwind", "Framer Motion"],
  //   status: "Personal project",
  //   live: "",
  //   code: "",
  // },
];

const ProjectsSection = () => {

  // ✅ MUST BE INSIDE COMPONENT
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section id="projects" className="container">

      {/* HEADER */}
      <div className="text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold"
        >
          Selected Projects
        </motion.h2>

        <p className="mt-5 text-muted max-w-xl mx-auto">
          A collection of real-world applications I designed and built from scratch,
          focusing on usability and performance.
        </p>
      </div>

      {/* PROJECT LIST */}
      <div className="space-y-6">

        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="group card p-8 relative overflow-hidden"
          >

            {/* hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-[#FFB86B]/10 to-transparent pointer-events-none" />

            {/* TOP ROW */}
            <div className="flex justify-between items-start">

              <h3 className="text-2xl font-semibold group-hover:text-[#FFB86B] transition">
                {project.title}
              </h3>

              <span className="text-xs text-muted border border-white/10 px-3 py-1 rounded-full">
                {project.status}
              </span>

            </div>

            {/* DESCRIPTION */}
            <p className="mt-4 text-muted max-w-2xl">
              {project.description}
            </p>

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-2 mt-6">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 rounded-full border border-white/10 text-muted group-hover:border-[#FFB86B]/40 transition"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex gap-3 mt-6">

              {/* LIVE DEMO */}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm"
                >
                  Live Demo
                </a>
              )}

              {/* VIEW MORE */}
              <button
                onClick={() => setSelectedProject(project)}
                className="btn-secondary text-sm"
              >
                View More
              </button>

            </div>

          </motion.div>
        ))}

      </div>

      {/* MODAL */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </section>
  );
};

export default ProjectsSection;