import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/resume";

const Footer = () => {
  return (
    <footer
      data-testid="site-footer"
      className="border-t border-[color:var(--rp-border)] mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-heading text-[color:var(--rp-text-primary)] text-lg">
            {profile.name}
          </p>
          <p className="text-sm text-[color:var(--rp-text-secondary)] mt-1">
            {profile.role} · {profile.location}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            data-testid="footer-github"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-[color:var(--rp-text-secondary)] hover:text-[color:var(--rp-text-primary)] transition-colors duration-200"
          >
            <Github className="h-5 w-5" strokeWidth={1.5} />
          </a>
          <a
            data-testid="footer-linkedin"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-[color:var(--rp-text-secondary)] hover:text-[color:var(--rp-text-primary)] transition-colors duration-200"
          >
            <Linkedin className="h-5 w-5" strokeWidth={1.5} />
          </a>
          <a
            data-testid="footer-email"
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-[color:var(--rp-text-secondary)] hover:text-[color:var(--rp-text-primary)] transition-colors duration-200"
          >
            <Mail className="h-5 w-5" strokeWidth={1.5} />
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-8 text-xs text-[color:var(--rp-text-secondary)] font-mono">
        © {new Date().getFullYear()} {profile.name}. Crafted with care.
      </div>
    </footer>
  );
};

export default Footer;
