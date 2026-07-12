import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/resume";

const Projects = () => {
  return (
    <section
      data-testid="projects-page"
      className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28"
    >
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--rp-text-secondary)]">
          02 · Projects
        </p>
        <h2 className="mt-4 font-heading font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-[color:var(--rp-text-primary)] leading-tight max-w-3xl">
          Selected work — insurance, healthcare & internal platforms.
        </h2>
        <p className="mt-6 max-w-2xl text-[color:var(--rp-text-secondary)]">
          A shortlist of production systems I&apos;ve architected, built and shipped.
          Client names are used with permission where mentioned publicly.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((p, i) => (
          <motion.article
            key={p.id}
            data-testid={`project-card-${p.id}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group relative rp-card border border-[color:var(--rp-border)] rounded-2xl p-8 hover:bg-[color:var(--rp-surface)] transition-colors duration-300 flex flex-col"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--rp-text-secondary)]">
                {p.year}
              </span>
              <ArrowUpRight
                className="h-5 w-5 text-[color:var(--rp-text-secondary)] group-hover:text-[color:var(--rp-text-primary)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-[color,transform] duration-200"
                strokeWidth={1.5}
              />
            </div>

            <h3 className="mt-6 font-heading text-2xl text-[color:var(--rp-text-primary)] leading-snug">
              {p.name}
            </h3>
            <p className="mt-2 text-sm text-[color:var(--rp-text-secondary)]">
              {p.client} · {p.role}
            </p>

            <p className="mt-5 text-[15px] leading-relaxed text-[color:var(--rp-text-secondary)]">
              {p.summary}
            </p>

            <div className="mt-5 pt-5 border-t border-dashed border-[color:var(--rp-border)]">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--rp-text-secondary)]">
                Impact
              </p>
              <p className="mt-2 text-sm text-[color:var(--rp-text-primary)]">
                {p.impact}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-[color:var(--rp-border)] px-2.5 py-1 text-[11px] font-mono text-[color:var(--rp-text-primary)]"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
