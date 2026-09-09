import React from "react";

export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-10 md:mb-12 text-left selection:bg-accent font-sans">
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm md:text-base text-text-secondary max-w-2xl font-normal leading-relaxed mt-4">
          {subtitle}
        </p>
      )}
    </div>
  );
}
