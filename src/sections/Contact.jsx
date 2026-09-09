import React, { useState } from "react";
import { ArrowUpRight, Send } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import { personalData } from "../data/portfolioData";

const initialFormState = { name: "", email: "", message: "" };

function normalizeUrl(value) {
  return value.startsWith("http") ? value : `https://${value}`;
}

export default function Contact() {
  const [formState, setFormState] = useState(initialFormState);
  const [formError, setFormError] = useState("");
  const [formStatus, setFormStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((previous) => ({ ...previous, [name]: value }));
    setFormError("");
    setFormStatus("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormError("");
    setFormStatus("");

    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setFormError("Please complete all fields before sending your message.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "The message could not be sent.");
      }

      setFormState(initialFormState);
      setFormStatus("Message sent. Thank you for reaching out.");
    } catch (error) {
      setFormError(error.message || "The message could not be sent. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-32 selection:bg-accent border-b border-border-primary relative overflow-hidden font-sans"
    >
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading
          title="Let's Connect"
          subtitle="Have a project, opportunity, or simply want to connect? Feel free to reach out."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mt-12 items-start">
          <div className="lg:col-span-4">
            <div className="mt-2 border-t border-border-primary">
              <a
                href={normalizeUrl(personalData.contact.linkedin)}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-11 items-center justify-between border-b border-border-primary px-4 py-3 text-sm font-semibold text-text-primary transition-colors hover:border-accent hover:bg-accent-light hover:text-accent"
              >
                <span className="flex items-center gap-3"><FaLinkedinIn size={16} /> LinkedIn</span>
                <ArrowUpRight size={15} />
              </a>
              <a
                href={personalData.contact.github}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-11 items-center justify-between border-b border-border-primary px-4 py-3 text-sm font-semibold text-text-primary transition-colors hover:border-accent hover:bg-accent-light hover:text-accent"
              >
                <span className="flex items-center gap-3"><FaGithub size={16} /> GitHub</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate className="lg:col-span-8 border-t border-border-primary pt-5 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-text-secondary">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  value={formState.name}
                  onChange={handleInputChange}
                  className="w-full border-b border-border-primary bg-transparent px-0 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-secondary/60 focus:border-accent"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-text-secondary">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={formState.email}
                  onChange={handleInputChange}
                  className="w-full border-b border-border-primary bg-transparent px-0 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-secondary/60 focus:border-accent"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="mt-8 space-y-2">
              <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-text-secondary">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                value={formState.message}
                onChange={handleInputChange}
                className="w-full resize-y border-b border-border-primary bg-transparent px-0 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-secondary/60 focus:border-accent"
                placeholder="Tell me a little about your idea."
              />
            </div>
            <div className="mt-8 flex flex-col items-start gap-3">
              <Button type="submit" variant="primary" disabled={isSubmitting} ariaLabel="Send message">
                <Send size={14} className="mr-2" />
                {isSubmitting ? "Sending..." : "Send message"}
              </Button>
              <span className="text-[11px] text-text-secondary/75">Powered by Resend</span>
              <p role="status" aria-live="polite" className="text-xs text-accent">{formStatus}</p>
              <p role="alert" aria-live="assertive" className="text-xs text-accent">{formError}</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
