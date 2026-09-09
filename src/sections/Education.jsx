import React from "react";
import { motion } from "framer-motion";
import { educationData } from "../data/portfolioData";
import SectionHeading from "../components/SectionHeading";

function EducationMilestone({ education, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
      className="education-milestone"
    >
      <div className="education-dot" aria-hidden="true" />
      <span className="block text-xs font-mono uppercase tracking-widest text-accent">{education.period}</span>
      <h3 className="mt-3 text-lg md:text-xl font-bold leading-tight text-text-primary">{education.degree}</h3>
      <p className="mt-3 text-sm leading-relaxed text-text-secondary">{education.institution}</p>
      <div className="mt-5 flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-text-primary">
        <span className="text-accent">Grade</span>
        <span>{education.cgpa}</span>
      </div>
    </motion.article>
  );
}

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 md:py-32 selection:bg-accent border-b border-border-primary relative overflow-hidden font-sans"
    >
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading
          title="Education"
          subtitle="A record of the academic milestones that shaped my foundations in computer science."
        />

        <div className="education-timeline mt-16">
          {educationData.map((education, index) => (
            <EducationMilestone key={`${education.institution}-${index}`} education={education} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
