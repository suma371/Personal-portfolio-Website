/**
 * ==========================================
 *  PORTFOLIO DATA — data.js
 *  Edit this file to update portfolio content
 * ==========================================
 */

// ── Typewriter Phrases ──────────────────────
const typewriterPhrases = [
  "Full-Stack Web Apps",
  "Java Spring Boot APIs",
  "React UIs",
  "RESTful Backend Systems",
  "Scalable Enterprise Apps",
];

// ── Skills Data ─────────────────────────────
const skillsData = {
  frontend: [
    { name: "HTML5", icon: "bxl-html5", color: "#e34f26", level: "Advanced" },
    { name: "CSS3", icon: "bxl-css3", color: "#1572b6", level: "Advanced" },
    { name: "JavaScript", icon: "bxl-javascript", color: "#f7df1e", level: "Intermediate" },
    { name: "React", icon: "bxl-react", color: "#61dafb", level: "Intermediate" },
    { name: "Bootstrap", icon: "bxl-bootstrap", color: "#7952b3", level: "Advanced" },
    { name: "TailwindCSS", icon: "bxl-tailwind", color: "#38b2ac", level: "Beginner" },
  ],
  backend: [
    { name: "Java", icon: "bxl-java", color: "#f89820", level: "Advanced" },
    { name: "Spring Boot", icon: "bx-leaf", color: "#6db33f", level: "Intermediate" },
    { name: "Spring MVC", icon: "bx-code-curly", color: "#6db33f", level: "Intermediate" },
    { name: "Hibernate", icon: "bx-data", color: "#bcae79", level: "Intermediate" },
    { name: "Node.js", icon: "bxl-nodejs", color: "#339933", level: "Beginner" },
    { name: "MySQL", icon: "bx-server", color: "#4479a1", level: "Advanced" },
    { name: "JDBC", icon: "bx-link", color: "#6366f1", level: "Intermediate" },
    { name: "REST APIs", icon: "bx-transfer", color: "#8b5cf6", level: "Advanced" },
  ],
  tools: [
    { name: "Git", icon: "bxl-git", color: "#f05032", level: "Advanced" },
    { name: "GitHub", icon: "bxl-github", color: "#6e5494", level: "Advanced" },
    { name: "VS Code", icon: "bx-code-alt", color: "#007acc", level: "Expert" },
    { name: "Postman", icon: "bx-send", color: "#ff6c37", level: "Advanced" },
    { name: "Maven", icon: "bx-package", color: "#c71a36", level: "Intermediate" },
    { name: "Eclipse", icon: "bx-eclipse", color: "#2c2255", level: "Advanced" },
    { name: "IntelliJ IDEA", icon: "bx-brain", color: "#fe315d", level: "Intermediate" },
  ],
};

// Skill level → bar width mapping
const levelWidths = {
  "Expert": "95%",
  "Advanced": "80%",
  "Intermediate": "65%",
  "Beginner": "40%",
};

// ── Projects Data ────────────────────────────
const projectsData = [
  {
    title: "Personal Portfolio Website",
    category: "frontend",
    desc: "Designed and developed a responsive personal portfolio website. Implemented smooth scrolling and animations. Showcased skills, education, and projects. Focused on clean UI and performance optimization.",
    image: "assets/projects/project-1.jpg",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    liveUrl: "https://suma371.github.io/Personal-portfolio-Website/",
    codeUrl: "https://github.com/suma371/Personal-portfolio-Website",
  },
  {
    title: "Netflix Clone",
    category: "backend",
    desc: "A Netflix clone is a web application that mimics the look and basic functionality of the Netflix streaming service. It lets users browse movies/TV shows, view details, watch trailers, and optionally sign in/signup like a real platform. Most clones use data from TMDB API for movie information.",
    image: "assets/projects/project-2.jpg",
    tags: ["HTML", "CSS", "React", "Node.js", "MongoDB", "TMDB API"],
    liveUrl: "https://react-netflix-clone-beta.vercel.app/",
    codeUrl: "https://github.com/suma371/React-Netflix-Clone",
  },
  {
    title: "Food Delivery Application",
    category: "fullstack",
    desc: "Built a complete food delivery platform with restaurant management, Implemented cart, order placement, and payment workflow, Developed real-time order tracking system, Designed normalized database schema using JPA repositories.",
    image: "assets/projects/project-3.jpg",
    tags: ["HTML", "CSS", "JavaScript", "React", "Spring Boot", "Hibernate", "MySQL"],
    liveUrl: "https://food-delivery-app-live-link.com",
    codeUrl: "https://github.com/suma371/food-delivery-app",
  },
];

// ── Experience Data ──────────────────────────
const experienceData = [
  {
    role: "Full-Stack Java Developer Intern",
    company: "TAP Academy",
    location: "Bengaluru, Karnataka, India",
    duration: "August 2025 – January 2026",
    desc: "Developed and deployed full-stack applications using JAVA, Spring Boot, Hibernate, MySQL, React, and REST APIs, following clean and scalable architecture. Built backend modules with Spring Boot, implemented secure authentication, and optimized API performance. Designed responsive React components, improved page load speed, and enhanced overall user experience.",
    certificateUrl: "assets/certificates/Suma_Internship.pdf",
  },
];

// ── Contact Data ─────────────────────────────
const contactData = {
  email: "sumashavi09@gmail.com",
  phone: "+91 6361535394",
  location: "Bengaluru, India",
  socials: {
    github: "https://github.com/suma371",
    linkedin: "https://www.linkedin.com/in/suma-shavi-00523a231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
};
