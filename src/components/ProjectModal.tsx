import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  title: string;
  description: string;
  tech: string[];
  status: string;
  live?: string;
};

interface Props {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<Props> = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xl px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* BACKDROP CLICK */}
          <div
            className="absolute inset-0"
            onClick={onClose}
          />

          {/* MODAL */}
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-[#111113] border border-white/10 rounded-2xl p-8 z-10"
          >

            {/* CLOSE */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/50 hover:text-white"
            >
              ✕
            </button>

            {/* TITLE */}
            <h2 className="text-3xl font-semibold">
              {project.title}
            </h2>

            <p className="text-xs text-[#FFB86B] mt-2">
              {project.status}
            </p>

            {/* OVERVIEW */}
            <Section title="Overview">
              <p className="text-white/70 leading-relaxed">
                {project.description}
              </p>
            </Section>

            {/* FEATURES (STATIC FOR NOW - YOU CAN CUSTOMIZE LATER) */}
            <Section title="Key Features">
              <ul className="list-disc list-inside text-white/70 space-y-1">
                <li>Appointment management system</li>
                <li>Medical record tracking</li>
                <li>Role-based access (Admin / Vet / Owner)</li>
                <li>Dashboard with analytics</li>
              </ul>
            </Section>

            {/* TECH STACK */}
            <Section title="Tech Stack">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 border border-white/10 rounded-full text-white/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Section>

            {/* ARCHITECTURE */}
            <Section title="Architecture">
              <ul className="text-white/70 space-y-1">
                <li>• MVC architecture (Laravel)</li>
                <li>• REST API communication</li>
                <li>• React component-based frontend</li>
                <li>• MySQL relational database</li>
              </ul>
            </Section>

            {/* IMPACT */}
            <Section title="Impact">
              <ul className="text-white/70 space-y-1">
                <li>• Reduced manual appointment tracking</li>
                <li>• Centralized animal medical records</li>
                <li>• Improved clinic workflow efficiency</li>
              </ul>
            </Section>

            {/* ACTIONS */}
            <div className="flex gap-3 mt-8">
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

              <button
                onClick={onClose}
                className="btn-secondary text-sm"
              >
                Close
              </button>
            </div>

          </motion.div>
        </motion.div>
        
      )}
      
    </AnimatePresence>
    
  );
};
const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="mt-8">
      <h3 className="text-sm uppercase tracking-wider text-white/40 mb-3">
        {title}
      </h3>
      {children}
    </div>
  );
};
export default ProjectModal;