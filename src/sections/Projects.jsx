import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";
import { projectsData } from "../data/portfolioData";

function isUsableLink(link) {
  return typeof link === "string" && link.startsWith("http");
}

function ProjectVisual({ project, index }) {
  return (
    <motion.div
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group relative aspect-[16/10] overflow-hidden border border-border-primary bg-bg-surface"
    >
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.title} project interface`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      ) : (
        <div className="relative flex h-full flex-col justify-between p-6 md:p-8">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_49.5%,var(--border-primary)_50%,transparent_50.5%)] opacity-40" />
          <div className="absolute inset-6 border border-border-primary/70" />
          <span className="relative block max-w-[18rem] text-3xl md:text-5xl font-bold tracking-[-0.04em] text-text-primary transition-colors duration-300 group-hover:text-accent">
            {project.title}
          </span>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 flex items-start justify-between p-5 md:p-7">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-white drop-shadow">Project 0{index + 1}</span>
        <span className="text-xs font-mono uppercase tracking-widest text-white drop-shadow">{project.category}</span>
      </div>
    </motion.div>
  );
}

function ProjectLink({ href, projectTitle }) {
  if (!isUsableLink(href)) {
    return (
      <button type="button" disabled className="inline-flex min-h-10 cursor-not-allowed items-center gap-2 border border-border-primary/70 px-4 py-2 text-xs font-mono uppercase tracking-wider text-text-secondary/60" aria-label={`GitHub repository unavailable for ${projectTitle}`}>
        <FaGithub size={14} />
        GitHub
      </button>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open GitHub repository for ${projectTitle}`}
      className="inline-flex min-h-10 items-center gap-2 border border-border-primary px-4 py-2 text-xs font-mono uppercase tracking-wider text-text-primary transition-colors duration-200 hover:border-accent hover:bg-accent-light hover:text-accent"
    >
      <FaGithub size={14} />
      GitHub <span aria-hidden="true">↗</span>
    </a>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 md:py-32 selection:bg-accent border-b border-border-primary relative overflow-hidden font-sans"
    >
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading
          title="Projects"
          subtitle="Selected projects exploring full stack products, intelligent tools, and data-driven experiences."
        />

        <div className="mt-12">
          {projectsData.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                className="border-t border-border-primary py-10 md:py-14 last:border-b"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${isReversed ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div className="lg:col-span-7">
                    <ProjectVisual project={project} index={index} />
                  </div>
                  <div className="lg:col-span-5">
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent">0{index + 1} / {project.category}</span>
                    <h3 className="mt-4 text-3xl md:text-4xl font-bold tracking-[-0.04em] text-text-primary">{project.title}</h3>
                    <p className="mt-5 text-sm md:text-base leading-relaxed text-text-secondary">{project.description}</p>
                    <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2 text-xs font-mono text-text-primary">
                      {project.tech.map((technology, technologyIndex) => (
                        <React.Fragment key={technology}>
                          {technologyIndex > 0 && <span className="text-accent/60" aria-hidden="true">·</span>}
                          <span>{technology}</span>
                        </React.Fragment>
                      ))}
                    </div>
                    <div className="mt-8 flex flex-wrap items-center gap-5">
                      <ProjectLink href={project.github} projectTitle={project.title} />
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
