import { Download, ExternalLink, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { profile, experience, skills } from "../data/resume";

const Resume = () => {
  const flatSkills = skills.flatMap((s) => s.items).slice(0, 12);
  return (
    <section
      data-testid="resume-page"
      className="max-w-4xl mx-auto px-6 md:px-10 py-20 md:py-28"
    >
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--rp-text-secondary)]">
        03 · Resume
      </p>
      <h2 className="mt-4 font-heading font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-[color:var(--rp-text-primary)] leading-tight">
        The one-page version.
      </h2>
      <p className="mt-6 max-w-2xl text-[color:var(--rp-text-secondary)]">
        Grab a copy of my resume — or preview the highlights below. Hosted on
        Google Drive.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-10 rp-card border border-[color:var(--rp-border)] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10"
      >
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-xl border border-[color:var(--rp-border)] flex items-center justify-center">
            <FileText
              className="h-6 w-6 text-[color:var(--rp-text-primary)]"
              strokeWidth={1.5}
            />
          </div>
          <div>
            <p className="font-heading text-lg text-[color:var(--rp-text-primary)]">
              Resume.pdf
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--rp-text-secondary)] mt-1">
              PDF · Google Drive
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 md:ml-auto">
          <a
            data-testid="resume-download-btn"
            href={profile.resumeDriveDownloadUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--rp-fg)] text-[color:var(--rp-fg-text)] px-5 py-3 text-sm font-medium hover:scale-[0.98] transition-transform duration-200"
          >
            <Download className="h-4 w-4" strokeWidth={1.75} />
            Download
          </a>
          <a
            data-testid="resume-view-btn"
            href={profile.resumeDriveViewUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--rp-border)] px-5 py-3 text-sm font-medium text-[color:var(--rp-text-primary)] hover:bg-[color:var(--rp-surface)] transition-colors duration-200"
          >
            <ExternalLink className="h-4 w-4" strokeWidth={1.75} />
            Preview
          </a>
        </div>
      </motion.div>

      {/* Highlights */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[color:var(--rp-text-secondary)]">
            Highlights
          </p>
          <ul className="mt-6 space-y-4 text-[color:var(--rp-text-secondary)]">
            {experience.map((e, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-mono text-[11px] tracking-[0.18em] text-[color:var(--rp-text-primary)] mt-1 shrink-0">
                  {e.period.split("—")[0].trim()}
                </span>
                <span>
                  <span className="text-[color:var(--rp-text-primary)]">
                    {e.role}
                  </span>{" "}
                  · {e.company}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[color:var(--rp-text-secondary)]">
            Core stack
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {flatSkills.map((s) => (
              <span
                key={s}
                className="rounded-full border border-[color:var(--rp-border)] px-3 py-1 text-xs font-mono text-[color:var(--rp-text-primary)]"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
