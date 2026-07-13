// Rajiv Pandit - Portfolio content sourced from resume
export const profile = {
  name: "Rajiv Pandit",
  firstName: "Rajiv",
  role: "Full-stack Engineer",
  tagline:
    "Building production-grade web platforms across insurance, healthcare & enterprise domains — with 4+ years of shipping React, Next.js, PHP and Node.js at scale.",
  location: "Kolkata, India",
  email: "panditrajiv1998@gmail.com",
  emailComposeUrl:
    "https://mail.google.com/mail/?view=cm&fs=1&to=panditrajiv1998%40gmail.com&su=Portfolio%20inquiry",
  phone: "+91 85840 02025",
  linkedin: "https://www.linkedin.com/in/rajiv-pandit-406215127/",
  github: "https://github.com/razi1998",
  summary:
    "Full-stack engineer with 4+ years delivering production-grade web applications across insurance, healthcare, and enterprise domains. Specialises in React.js, Node.js, PHP (Laravel/Lumen) and RESTful microservices. Actively leverages AI developer tools — Cursor AI, GitHub Copilot & Codex — to ship higher-quality code in significantly less time.",
  resumeDriveViewUrl:
    "https://drive.google.com/file/d/1j2B_pNk76AZQtymOj2C511Tu6mdeGfhK/view?usp=drivesdk",
  resumeDriveDownloadUrl:
    "https://drive.google.com/uc?export=download&id=1j2B_pNk76AZQtymOj2C511Tu6mdeGfhK",
};

export const skills = [
  {
    group: "Languages",
    items: ["PHP", "JavaScript (ES6+)", "HTML5", "CSS3", "SQL"],
  },
  {
    group: "Frameworks",
    items: ["Laravel", "Lumen", "React.js", "Node.js", "Next.js", "Express.js"],
  },
  {
    group: "Backend",
    items: ["RESTful APIs", "MVC", "Microservices", "AJAX"],
  },
  {
    group: "Databases",
    items: ["MySQL", "Query Optimisation", "phpMyAdmin"],
  },
  {
    group: "DevOps & Tooling",
    items: ["Git", "GitHub", "Bitbucket", "CI/CD", "Release Mgmt"],
  },
  {
    group: "AI Dev Tools",
    items: ["Cursor AI", "GitHub Copilot", "Codex", "Antigravity"],
  },
  {
    group: "Soft Skills",
    items: ["Client Handling", "Cross-team Collab", "Reporting"],
  },
];

export const experience = [
  {
    company: "Indusnet Technologies Pvt. Ltd",
    role: "Software Engineer",
    period: "Feb 2024 — Present",
    location: "Kolkata, India",
    highlights: [
      "Owned end-to-end delivery of the SBI General Insurance YONO journey — managing change requests, client communications & operational oversight for a high-traffic insurance portal serving lakhs of users.",
      "Architected and built the backend for Super Health & Common Health Journey (Revamped) — a large-scale health platform delivering personalised user insights with sub-200ms average API response times.",
      "Designed RESTful APIs enabling seamless interoperability between the Super Health platform and multiple third-party health services.",
      "Applied caching strategies, load balancing & query optimisation to support large-scale concurrent traffic; used Cursor AI & GitHub Copilot to accelerate backend development.",
      "Delivered responsive, cross-browser React.js interfaces tightly integrated with backend APIs.",
    ],
  },
  {
    company: "Indusnet Technologies Pvt. Ltd",
    role: "Associate Software Engineer",
    period: "Sep 2021 — Jan 2024",
    location: "Kolkata, India",
    highlights: [
      "Built an internal cross-departmental portal streamlining policy creation, evaluation and approval workflows for Ageas Federal Life Insurance WeConnect.",
      "Developed a customer-facing insurance portal with Aadhaar eKYC (UIDAI), plan comparison & premium quote generation for seamless digital onboarding.",
      "Implemented features in PHP, MySQL, AJAX and jQuery within an MVC architecture ensuring maintainability and rapid delivery of change requests.",
      "Leveraged GitHub Copilot across 3+ concurrent client projects, reducing boilerplate and accelerating feature development.",
    ],
  },
  {
    company: "Indusnet Technologies Pvt. Ltd",
    role: "Project Trainee",
    period: "Mar 2021 — Aug 2021",
    location: "Kolkata, India",
    highlights: [
      "Built a multi-role hospital management system (admin / doctor / patient) with daily vitals tracking, diagnosis records, CRUD operations & role-based access control.",
    ],
  },
];

export const projects = [
  {
    id: "sbi-yono",
    url: "https://www.sbigeneral.in/",
    name: "SBI General Insurance — YONO 2.0",
    client: "SBI General Insurance",
    year: "2024 — Present",
    summary:
      "End-to-end insurance journey on SBI YONO. Drove the backend for the Super Health platform with scalable, secure REST APIs and sub-200ms response times.",
    impact:
      "Serves lakhs of users. Cut average API latency by ~40% via caching & query optimisation.",
    stack: ["PHP", "Laravel", "React.js", "Node.js", "REST APIs", "MySQL"],
    role: "Backend Lead / Full-stack",
  },
  {
    id: "weconnect",
    url: "",
    name: "Ageas Federal — WeConnect Portal",
    client: "Ageas Federal Life Insurance",
    year: "2022 — 2024",
    summary:
      "Internal cross-departmental portal streamlining policy creation, evaluation and approval workflows. Reduced review turnaround significantly.",
    impact: "Faster policy approvals across underwriting, ops & compliance teams.",
    stack: ["PHP", "MVC", "AJAX", "jQuery", "MySQL"],
    role: "Full-stack Developer",
  },
  {
    id: "ageas-customer",
    url: "https://www.ageasfederal.com/",
    name: "Ageas Federal — Customer Portal",
    client: "Ageas Federal Life Insurance",
    year: "2021 — 2022",
    summary:
      "Customer-facing insurance portal with Aadhaar eKYC (UIDAI), plan comparison and premium quote generation for seamless digital onboarding.",
    impact: "Powered digital-first onboarding for policy buyers.",
    stack: ["PHP", "MySQL", "AJAX", "UIDAI eKYC"],
    role: "Full-stack Developer",
  },
  {
    id: "hms",
    url: "",
    name: "Hospital Management System",
    client: "Academic / Trainee Project",
    year: "2021",
    summary:
      "Multi-role system (admin / doctor / patient) with daily vitals tracking, diagnosis records, CRUD operations and role-based access control.",
    impact: "Streamlined patient monitoring & staff administration modules.",
    stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    role: "Sole Developer",
  },
];

export const education = [
  {
    institution: "Saroj Mohan Institute of Technology",
    degree: "B.Tech — Information Technology",
    period: "2016 — 2020",
    location: "West Bengal, India",
  },
];
