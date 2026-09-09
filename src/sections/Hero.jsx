import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Button from "../components/Button";
import { personalData } from "../data/portfolioData";
import profilePhoto from "../assets/profile-photo.webp";

export default function Hero() {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const target = document.getElementById("projects");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <link rel="preload" as="image" href={profilePhoto} />
      <section
        id="home"
        className="min-h-[82svh] flex items-center relative py-20 md:py-24 selection:bg-accent overflow-hidden font-sans border-b border-border-primary"
      >
        <div className="grid-overlay" />

        <div className="w-full max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="lg:col-span-8 flex flex-col items-start text-left"
          >
            <span className="mb-5 text-xs font-mono font-semibold uppercase tracking-[0.22em] text-accent">
              Introduction
            </span>
            <h1 className="max-w-2xl text-5xl md:text-6xl lg:text-[5.5rem] font-bold tracking-[-0.05em] text-text-primary leading-[0.9]">
              {personalData.name.split(" ").map((namePart) => (
                <span key={namePart} className="block">
                  {namePart}
                </span>
              ))}
            </h1>
            <p className="mt-7 max-w-2xl border-l-2 border-accent pl-5 text-lg md:text-xl text-text-primary leading-relaxed">
              {personalData.label}
            </p>
            <p className="mt-4 max-w-xl text-sm md:text-base text-text-secondary leading-relaxed">
              {personalData.subheading}
            </p>
            <div className="flex flex-wrap gap-3 pt-8">
              <Button
                variant="primary"
                onClick={handleScrollToProjects}
                ariaLabel="View my projects"
              >
                <span>View projects</span>
                <ArrowDown size={16} className="ml-2" />
              </Button>
              <Button
                variant="secondary"
                href={personalData.contact.github}
                ariaLabel="Open GitHub profile"
              >
                <FaGithub size={16} className="mr-2" />
                <span>GitHub</span>
              </Button>
              <Button
                variant="secondary"
                href="https://www.linkedin.com/in/sathyendrabhat/"
                ariaLabel="Open LinkedIn profile"
              >
                <FaLinkedinIn size={16} className="mr-2" />
                <span>LinkedIn</span>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-4 lg:pb-3"
          >
            <div className="profile-frame relative mx-auto mb-10 w-full max-w-[18rem] aspect-[4/5] overflow-hidden border border-border-primary bg-bg-surface">
              <img
                src={profilePhoto}
                alt="Sathyendra Bhat"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="border-t border-border-primary pt-4">
              <div className="flex items-start justify-between gap-5">
                <span className="text-xs font-mono uppercase tracking-widest text-text-secondary">
                  Focus
                </span>
                <span className="max-w-[13rem] text-right text-sm leading-relaxed text-text-primary">
                  Software engineering, artificial intelligence, and modern web
                  technologies.
                </span>
              </div>
            </div>
            <div className="mt-6 border-t border-border-primary pt-4">
              <span className="block text-xs font-mono uppercase tracking-widest text-text-secondary">
                Currently
              </span>
              <span className="mt-2 block text-sm leading-relaxed text-text-primary">
                Building full stack applications and strengthening
                problem-solving fundamentals.
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
