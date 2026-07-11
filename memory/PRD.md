# PRD — Rajiv Pandit Portfolio

## Original problem statement
Build a portfolio website for Rajiv Pandit's resume with light/dark mode, navbar (Home / About / Projects / Resume), animated hexagon on home, resume download via Google Drive. Design based on the user's reference screenshot (dark minimal). Static SPA — no backend.

## Architecture
- Stack: React 19 + React Router 7 + Tailwind + framer-motion. No backend used (FastAPI/Mongo untouched).
- Fonts: Chivo (headings), Manrope (body), JetBrains Mono (labels/chips).
- Theming via `ThemeContext` — toggles `dark` class on `<html>`, persists to `localStorage` key `rp-theme`.
- Data: `/app/frontend/src/data/resume.js` — profile, skills, experience, projects, education.
- Ambient rotating multi-layer hexagon SVG animated via framer-motion.
- Global grain overlay via base64 SVG noise.

## Pages
- `/` Home — hero heading, tagline, Download Resume + View Projects CTAs, stat row, hexagon.
- `/about` About — summary, contact strip, experience timeline (3 roles), skills (7 groups), education.
- `/projects` Projects — 4 project cards (SBI YONO 2.0, Ageas WeConnect, Ageas Customer, Hospital MS).
- `/resume` Resume — file card with Google Drive Download + Preview links, highlights & core stack.

## Implemented (Dec 2025)
- Full 4-route SPA with dark-default theme toggle, mobile hamburger menu.
- Resume Drive URLs (view + download) wired using file ID `1j2B_pNk76AZQtymOj2C511Tu6mdeGfhK`.
- All resume data extracted from uploaded PDF and rendered.
- Bumped dark-mode secondary text to `#c4c4c4` for WCAG contrast.
- Testing agent: 100% pass on 8 scenarios (desktop + mobile).

## User personas
- Recruiters / hiring managers reviewing Rajiv's profile.
- Rajiv himself sharing the link on LinkedIn / job apps.

## Backlog (P1/P2)
- P1: Contact form (backend) if Rajiv wants inbound messages captured.
- P1: SEO meta tags, OG image, favicon customisation.
- P2: Individual project detail routes with screenshots.
- P2: Blog / writing section.
- P2: Testimonials.
- P2: Achievements / certifications section (currently empty in resume).
