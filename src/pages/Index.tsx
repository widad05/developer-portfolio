import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechStackSection from "@/components/TechStackSection";
import StatsSection from "@/components/StatsSection";
import ContactSection from "@/components/ContactSection";
import EducationSection from "@/components/EducationSection";
const Index: React.FC = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-dark min-h-screen relative overflow-x-hidden"
      >
      
        <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
  <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">

    {/* LOGO */}
    <div className="text-lg font-semibold tracking-tight">
      Widad El Hajli
    </div>

    {/* NAV LINKS */}
    <nav className="hidden md:flex items-center gap-10 text-sm text-white/60">

      <a
        href="#projects"
        className="relative group hover:text-white transition"
      >
        Projects
        <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white/60 group-hover:w-full transition-all duration-300"></span>
      </a>

      <a
        href="#contact"
        className="relative group hover:text-white transition"
      >
        Contact
        <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white/60 group-hover:w-full transition-all duration-300"></span>
      </a>

    </nav>

    {/* CTA BUTTON */}
    <a
      href="/resume.pdf"
      className="
        px-5 py-2 rounded-full
        border border-white/15
        text-sm text-white/80
        hover:bg-white hover:text-black
        hover:border-white
        transition-all duration-300
      "
    >
      Resume
    </a>

  </div>
</header>

        {/* =========================
                MAIN CONTENT
        ========================= */}
     <main className="pt-28 relative z-10">

  <div className="max-w-[1100px] mx-auto px-6 space-y-40 md:space-y-52">

    {/* 1. HERO */}
    <HeroSection />

    {/* 2. TECH STACK */}
    <TechStackSection />

    {/* 3. PROJECTS */}
    <ProjectsSection />

    {/* 4. STATS */}
    <StatsSection />

    {/* 5. EDUCATION */}
    <EducationSection />

    {/* 6. CONTACT */}
    <section id="contact">
  <ContactSection />
</section>

  </div>

</main>
        {/* =========================
                FOOTER
        ========================= */}
        <footer className="py-16 px-6 border-t border-white/10 relative z-10">
          <div className="max-w-[1200px] mx-auto text-center text-white/50 text-sm">
            © {new Date().getFullYear()} Widad El Hajli — Built with React & Framer Motion
          </div>
        </footer>

      </motion.div>
    </AnimatePresence>
  );
};

export default Index;