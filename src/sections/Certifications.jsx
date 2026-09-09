import React from "react";
import { ArrowUpRight, Award } from "lucide-react";
import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";
import { certificationsData } from "../data/portfolioData";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-20 md:py-28 selection:bg-accent border-b border-border-primary relative overflow-hidden font-sans"
    >
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading
          title="Certifications"
          subtitle="Courses and credentials that complement my academic work and software practice."
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-border-primary">
          {certificationsData.map((certification, index) => (
            <motion.article
              key={certification.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: index * 0.06, ease: "easeOut" }}
              className="flex min-w-0 flex-col border-b border-border-primary p-6 md:min-h-[15rem] md:p-8 md:even:border-l"
            >
              <div className="flex items-start justify-between gap-5">
                <Award size={18} className="shrink-0 text-accent" strokeWidth={1.7} />
                <span className="text-xs font-mono text-accent">0{index + 1}</span>
              </div>
              <h3 className="mt-7 text-lg font-semibold leading-tight text-text-primary">{certification.title}</h3>
              <p className="mt-2 text-sm text-text-secondary">Issued by: {certification.issuer}</p>
              {certification.date && <p className="mt-1 text-xs font-mono uppercase tracking-wider text-text-secondary">Issued: {certification.date}</p>}
              <div className="mt-auto flex flex-wrap gap-4 pt-8">
                <a
                  href={certification.certificateUrl}
                  target="_blank"
                  rel="noreferrer"
                      className="inline-flex min-h-10 items-center gap-2 border border-accent bg-accent px-4 py-2 text-xs font-mono uppercase tracking-wider text-white transition-colors hover:bg-highlight"
                  aria-label={`View ${certification.title} certificate`}
                >
                  View certificate <ArrowUpRight size={14} />
                </a>
                <a
                  href={certification.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center gap-2 border border-border-primary px-4 py-2 text-xs font-mono uppercase tracking-wider text-text-primary transition-colors hover:border-accent hover:bg-accent-light hover:text-accent"
                  aria-label={`View LinkedIn post for ${certification.title}`}
                >
                  <FaLinkedinIn size={14} /> LinkedIn
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
