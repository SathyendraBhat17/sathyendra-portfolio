import React from "react";
import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { personalData } from "../data/portfolioData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border-primary bg-bg-surface select-none font-sans">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-5">
        <p className="text-xs text-text-secondary leading-relaxed font-normal">
          © {currentYear} {personalData.name}
        </p>
        <div className="flex items-center gap-5 text-xs font-mono uppercase tracking-wider text-text-secondary">
          <a href={personalData.contact.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="inline-flex items-center gap-2 transition-colors hover:text-accent">
            <FaGithub size={14} /> GitHub
          </a>
          <a href={personalData.contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="inline-flex items-center gap-2 transition-colors hover:text-accent">
            <FaLinkedinIn size={14} /> LinkedIn
          </a>
          <a href="#home" aria-label="Back to home" className="inline-flex items-center gap-1 transition-colors hover:text-accent">
            Top <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
