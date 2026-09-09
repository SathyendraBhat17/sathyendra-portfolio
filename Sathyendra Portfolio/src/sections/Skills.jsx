import React from "react";
import { motion } from "framer-motion";
import {
  SiC,
  SiCplusplus,
  SiCss,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNpm,
  SiNeo4J,
  SiNodedotjs,
  SiPostman,
  SiPython,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiVite,
  SiVscodium,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";
import { skillsData } from "../data/portfolioData";

const categories = {
  languages: "Languages",
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  tools: "Tools",
  other: "Foundations",
};

const skillIcons = {
  Java: FaJava,
  C: SiC,
  "C++": SiCplusplus,
  Python: SiPython,
  JavaScript: SiJavascript,
  HTML5: SiHtml5,
  CSS3: SiCss,
  "React.js": SiReact,
  "Tailwind CSS": SiTailwindcss,
  "Redux Toolkit": SiRedux,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Neo4j: SiNeo4J,
  Git: SiGit,
  GitHub: SiGithub,
  "VS Code": SiVscodium,
  Postman: SiPostman,
  Vite: SiVite,
  npm: SiNpm,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 md:py-32 selection:bg-accent border-b border-border-primary relative overflow-hidden font-sans"
    >
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading
          title="Skills & Tooling"
          subtitle="A practical toolkit spanning languages, interfaces, backend systems, and developer tools."
        />

        <div className="mt-12 border-t border-border-primary">
          {Object.entries(categories).map(([key, label], index) => {
            const skills = skillsData.filter((skill) => skill.category === key);
            if (skills.length === 0) return null;

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 border-b border-border-primary py-6 md:py-8"
              >
                <h3 className="md:col-span-3 text-xs font-mono uppercase tracking-[0.18em] text-accent font-semibold">
                  <span className="mr-3 text-text-secondary">0{index + 1}</span>
                  {label}
                </h3>
                <div className="md:col-span-9 flex flex-wrap gap-x-3 gap-y-2 text-sm md:text-base text-text-primary">
                  {skills.map((skill, skillIndex) => (
                    <React.Fragment key={skill.name}>
                      {skillIndex > 0 && (
                        <span className="text-accent/60" aria-hidden="true">
                          ·
                        </span>
                      )}
                      <span className="skill-token inline-flex cursor-default items-center gap-1.5">
                        {skillIcons[skill.name] && React.createElement(skillIcons[skill.name], { size: 14, className: "skill-token-icon", "aria-hidden": true })}
                        {skill.name}
                      </span>
                    </React.Fragment>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
