import { NavLink, Link } from "react-router-dom";
import { Moon, Sun, Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { profile } from "../data/resume";

const links = [
  { to: "/", label: "Home", end: true, tid: "nav-home" },
  { to: "/about", label: "About", tid: "nav-about" },
  { to: "/projects", label: "Projects", tid: "nav-projects" },
  { to: "/resume", label: "Resume", tid: "nav-resume" },
];

const Navbar = () => {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const isDark = theme === "dark";

  return (
    <header
      data-testid="site-navbar"
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-[color:var(--rp-bg)]/70 border-b border-[color:var(--rp-border)]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <Link
          to="/"
          data-testid="brand-logo"
          className="flex items-center gap-2 font-heading font-semibold tracking-tight text-[color:var(--rp-text-primary)]"
        >
          <Sparkles className="h-4 w-4" strokeWidth={1.5} />
          <span>{profile.firstName}</span>
          <span className="text-[color:var(--rp-text-secondary)]">·</span>
          <span className="text-[color:var(--rp-text-secondary)] font-normal">
            Portfolio
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              data-testid={l.tid}
              className={({ isActive }) =>
                `text-sm transition-colors duration-200 hover:text-[color:var(--rp-text-primary)] ${
                  isActive
                    ? "text-[color:var(--rp-text-primary)] font-medium"
                    : "text-[color:var(--rp-text-secondary)]"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <button
            onClick={toggle}
            data-testid="theme-toggle"
            aria-label="Toggle theme"
            className="flex items-center gap-2 text-sm text-[color:var(--rp-text-primary)] hover:opacity-80 transition-opacity duration-200"
          >
            {isDark ? (
              <Moon className="h-4 w-4" strokeWidth={1.5} />
            ) : (
              <Sun className="h-4 w-4" strokeWidth={1.5} />
            )}
            <span>{isDark ? "Night mode" : "Day mode"}</span>
          </button>
        </nav>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggle}
            data-testid="theme-toggle-mobile"
            aria-label="Toggle theme"
            className="text-[color:var(--rp-text-primary)]"
          >
            {isDark ? (
              <Moon className="h-5 w-5" strokeWidth={1.5} />
            ) : (
              <Sun className="h-5 w-5" strokeWidth={1.5} />
            )}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            data-testid="mobile-menu-toggle"
            aria-label="Toggle menu"
            className="text-[color:var(--rp-text-primary)]"
          >
            {open ? (
              <X className="h-6 w-6" strokeWidth={1.5} />
            ) : (
              <Menu className="h-6 w-6" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div
          data-testid="mobile-menu"
          className="md:hidden border-t border-[color:var(--rp-border)] bg-[color:var(--rp-bg)]/95 backdrop-blur-xl"
        >
          <nav className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                data-testid={`${l.tid}-mobile`}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-base ${
                    isActive
                      ? "text-[color:var(--rp-text-primary)] font-medium"
                      : "text-[color:var(--rp-text-secondary)]"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
