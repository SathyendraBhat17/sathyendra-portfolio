import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import useSmoothScroll from "./hooks/useSmoothScroll";

// Import Modular Sections
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Initialize Lenis Smooth Scroll
  useSmoothScroll();

  // Dark/Light Theme Handler
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved;
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      return prefersDark ? "dark" : "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Intersection Observer to monitor active viewport section
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const options = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // Trigger when the section fills the sweet spot
      threshold: 0,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="site-shell relative min-h-screen bg-bg-primary text-text-primary transition-colors duration-300 antialiased overflow-x-hidden selection:bg-accent selection:text-white">
      {/* Editorial Grain Overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Responsive site navigation */}
      <Navbar
        activeSection={activeSection}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Structural Flow */}
      <main className="site-main w-full relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Dedicated Site Footer */}
      <Footer />
    </div>
  );
}
