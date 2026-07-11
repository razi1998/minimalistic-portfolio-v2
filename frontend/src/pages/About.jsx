import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import { profile, experience, education, skills } from "../data/resume";

const About = () => {
  return (
    <section
      data-testid="about-page"
      className="max-w-4xl mx-auto px-6 md:px-10 py-20 md:py-28"
    >
      <SectionHeader eyebrow="01 · About" title="Engineer, generalist, curious builder." />

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-8 text-base sm:text-lg leading-relaxed text-[color:var(--rp-text-secondary)]"
      >
        {profile.summary}
      </motion.p>

      {/* Contact strip */}
      <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--rp-text-secondary)]">
        <span className="inline-flex items-center gap-2">
          <MapPin className="h-3.5 w-3.5" strokeWidth={1.5} /> {profile.location}
        </span>
        <a
          href={`mailto:${profile.email}`}
          data-testid="about-email"
          className="inline-flex items-center gap-2 hover:text-[color:var(--rp-text-primary)] transition-colors duration-200"
        >
          <Mail className="h-3.5 w-3.5" strokeWidth={1.5} /> {profile.email}
        </a>
        <span className="inline-flex items-center gap-2">
          <Phone className="h-3.5 w-3.5" strokeWidth={1.5} /> {profile.phone}
        </span>
      </div>

      {/* Experience */}
      <div className="mt-20" data-testid="about-experience">
        <SubHeader label="Experience" />
        <ol className="mt-10 relative border-l border-[color:var(--rp-border)] pl-8 space-y-14">
          {experience.map((job, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative"
              data-testid={`experience-item-${i}`}
            >
              <span
                aria-hidden="true"
                className="absolute -left-[37px] top-2 h-2 w-2 bg-[color:var(--rp-text-primary)]"
              />
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="font-heading text-lg text-[color:var(--rp-text-primary)]">
                  {job.role}
                </h3>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--rp-text-secondary)]">
                  {job.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-[color:var(--rp-text-secondary)]">
                {job.company} · {job.location}
              </p>
              <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-[color:var(--rp-text-secondary)]">
                {job.highlights.map((h, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="mt-2 h-px w-4 bg-[color:var(--rp-border)] shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ol>
      </div>

      {/* Skills */}
      <div className="mt-24" data-testid="about-skills">
        <SubHeader label="Skills" />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
          {skills.map((group) => (
            <div key={group.group} data-testid={`skill-group-${group.group.toLowerCase().replace(/[^a-z]+/g, "-")}`}>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--rp-text-secondary)]">
                {group.group}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-[color:var(--rp-border)] px-3 py-1 text-xs font-mono text-[color:var(--rp-text-primary)] hover:bg-[color:var(--rp-surface)] transition-colors duration-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mt-24" data-testid="about-education">
        <SubHeader label="Education" />
        <div className="mt-10 space-y-6">
          {education.map((e, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1"
            >
              <div>
                <h3 className="font-heading text-lg text-[color:var(--rp-text-primary)]">
                  {e.degree}
                </h3>
                <p className="text-sm text-[color:var(--rp-text-secondary)] mt-1">
                  {e.institution} · {e.location}
                </p>
              </div>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--rp-text-secondary)]">
                {e.period}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SectionHeader = ({ eyebrow, title }) => (
  <div>
    <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--rp-text-secondary)]">
      {eyebrow}
    </p>
    <h2 className="mt-4 font-heading font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-[color:var(--rp-text-primary)] leading-tight">
      {title}
    </h2>
  </div>
);

const SubHeader = ({ label }) => (
  <div className="flex items-baseline gap-4">
    <span className="h-px flex-1 bg-[color:var(--rp-border)]" />
    <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-[color:var(--rp-text-secondary)]">
      {label}
    </span>
    <span className="h-px flex-1 bg-[color:var(--rp-border)]" />
  </div>
);

export default About;
