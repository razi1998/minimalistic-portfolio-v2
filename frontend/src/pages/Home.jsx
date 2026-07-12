import { Link } from "react-router-dom";
import { ArrowUpRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import Hexagon from "../components/Hexagon";
import { profile } from "../data/resume";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const Home = () => {
  return (
    <section
      data-testid="home-hero"
      className="min-h-[calc(100vh-4rem)] flex items-center"
    >
      <div className="max-w-7xl w-full mx-auto px-6 md:px-10 py-16 md:py-24 grid grid-cols-12 gap-8 items-center">
        {/* Left */}
        <div className="col-span-12 md:col-span-7">
          <motion.p
            {...fade(0)}
            data-testid="home-eyebrow"
            className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--rp-text-secondary)] mb-6"
          >
            — {profile.location} · Available for opportunities
          </motion.p>
          <motion.h1
            {...fade(0.05)}
            data-testid="home-heading"
            className="font-heading font-semibold tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[color:var(--rp-text-primary)]"
          >
            Hello, I&apos;m{" "}
            <span className="relative inline-block">
              <span className="relative z-10">{profile.name}.</span>
              <span
                aria-hidden="true"
                className="absolute left-0 right-0 bottom-1 h-[6px] bg-[color:var(--rp-text-primary)] opacity-10"
              />
            </span>
          </motion.h1>
          <motion.p
            {...fade(0.15)}
            data-testid="home-tagline"
            className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-[color:var(--rp-text-secondary)]"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            {...fade(0.25)}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              data-testid="home-download-resume"
              href={profile.resumeDriveDownloadUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--rp-fg)] text-[color:var(--rp-fg-text)] px-5 py-3 text-sm font-medium hover:scale-[0.98] transition-transform duration-200"
            >
              <Download className="h-4 w-4" strokeWidth={1.75} />
              Download Resume
            </a>
            <Link
              to="/projects"
              data-testid="home-view-projects"
              className="group inline-flex items-center gap-2 rounded-full border border-[color:var(--rp-border)] px-5 py-3 text-sm font-medium text-[color:var(--rp-text-primary)] hover:bg-[color:var(--rp-surface)] transition-colors duration-200"
            >
              View Projects
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={1.75}
              />
            </Link>
          </motion.div>

          {/* Meta line */}
          <motion.div
            {...fade(0.35)}
            className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-lg"
          >
            <Stat label="Years shipping" value="4+" />
            <Stat label="Production projects" value="4" />
            <Stat label="Domains" value="Insurance" />
          </motion.div>
        </div>

        {/* Right - ambient hexagon */}
        <div className="col-span-12 md:col-span-5 flex justify-center md:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Hexagon />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ label, value }) => (
  <div>
    <div className="font-heading text-xl text-[color:var(--rp-text-primary)]">
      {value}
    </div>
    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--rp-text-secondary)] mt-1">
      {label}
    </div>
  </div>
);

export default Home;
