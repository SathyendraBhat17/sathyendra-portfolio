import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { personalData } from "../data/portfolioData";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-32 selection:bg-accent selection:text-white border-b border-border-primary relative overflow-hidden font-sans"
    >
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading
          title="About Me"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mt-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="max-w-3xl border-l-2 border-accent pl-6 md:pl-8 text-sm md:text-base text-text-secondary leading-relaxed">
              <p>{personalData.bioParagraph1}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
