import React from "react";
import { motion } from "framer-motion";

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary", // 'primary', 'secondary', 'text'
  href,
  download,
  className = "",
  disabled = false,
  ariaLabel,
}) {
  const isLink = !!href;
  
  const baseStyles = "inline-flex items-center justify-center font-sans font-medium text-sm transition-all duration-200 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";
  
  const variants = {
    primary: "bg-accent text-white hover:bg-highlight shadow-lvl1 hover:shadow-lvl2 rounded-btn min-h-11 px-6 py-3 border border-transparent",
    secondary: "bg-transparent text-text-primary border border-border-primary hover:border-accent hover:bg-accent-light shadow-lvl0 hover:shadow-lvl1 rounded-btn min-h-11 px-6 py-3",
    text: "bg-transparent text-text-secondary hover:text-text-primary min-h-10 px-4 py-2 rounded-btn"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  const motionProps = {
    whileHover: { y: variant === "text" ? 0 : -2 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring", stiffness: 400, damping: 25 }
  };

  if (isLink) {
    return (
      <motion.a
        href={href}
        download={download}
        onClick={onClick}
        aria-label={ariaLabel}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        className={combinedClasses}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
      className={combinedClasses}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
