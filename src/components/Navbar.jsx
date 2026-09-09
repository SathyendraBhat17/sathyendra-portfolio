import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ activeSection, theme, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("nav-open", mobileMenuOpen);
    return () => document.body.classList.remove("nav-open");
  }, [mobileMenuOpen]);

  const handleNavClick = (event, id) => {
    event.preventDefault();
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const renderLinks = (mobile = false) => (
    <div className={mobile ? "mobile-nav-links" : "sidebar-nav-links"}>
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={(event) => handleNavClick(event, item.id)}
          className={`nav-link ${activeSection === item.id ? "is-active" : ""}`}
        >
          <span>{item.label}</span>
        </a>
      ))}
    </div>
  );

  return (
    <>
      <aside className="site-sidebar" aria-label="Primary navigation">
        <a href="#home" onClick={(event) => handleNavClick(event, "home")} className="sidebar-brand">
          <span className="brand-mark">SB</span>
          <span>
            <span className="brand-name">Sathyendra Bhat</span>
            <span className="brand-role">Software engineer in progress</span>
          </span>
        </a>

        <nav aria-label="Portfolio sections">{renderLinks()}</nav>

        <div className="sidebar-footer">
          <button type="button" onClick={toggleTheme} className="nav-icon-link self-start" aria-label="Toggle theme">
            {theme === "dark" ? <Sun size={16} strokeWidth={1.8} /> : <Moon size={16} strokeWidth={1.8} />}
          </button>
          <span className="sidebar-caption">© {new Date().getFullYear()} / Portfolio</span>
        </div>
      </aside>

      <header className="mobile-header">
        <a href="#home" onClick={(event) => handleNavClick(event, "home")} className="mobile-brand">
          <span className="brand-mark">SB</span>
          <span className="brand-name">Sathyendra Bhat</span>
        </a>
        <div className="flex items-center gap-1">
          <button type="button" onClick={toggleTheme} className="nav-icon-link" aria-label="Toggle theme">
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="nav-icon-link"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
          >
            {mobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            className="mobile-drawer"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <nav aria-label="Mobile portfolio sections">{renderLinks(true)}</nav>
            <div className="mobile-drawer-footer">
              <span className="sidebar-caption">Navigate the work</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
