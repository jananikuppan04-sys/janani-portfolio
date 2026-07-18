export const person = {
  name: "Janani Kuppan",
  title: "AI & Full-Stack Developer",
  email: "jananikuppan04@gmail.com",
  location: "Kanchipuram, Tamil Nadu, India",
  linkedin: "https://www.linkedin.com/in/jananikuppan",
  github: "https://github.com/jananikuppan04-sys",
  resume: "/resume/janani-kuppan-resume.pdf",
  availability:
    "Open to internships, entry-level roles, freelance projects, and startup collaborations.",
};

export const navigation = [
  "About",
  "Services",
  "Projects",
  "Experience",
  "Skills",
  "Education",
  "Contact",
];

export const services = [
  {
    title: "AI Chatbots & RAG Assistants",
    description:
      "Grounded assistants for websites, documents, policies, product information, and frequently asked questions.",
    audience: "Service businesses, internal teams, education and support workflows",
    deliverables: "Knowledge ingestion, conversational UI, grounded answers and API integration",
    icon: "brain",
  },
  {
    title: "Full-Stack Web Applications",
    description:
      "Responsive products with thoughtful interfaces, databases, APIs, authentication and deployment-ready architecture.",
    audience: "Startups, student founders and growing small businesses",
    deliverables: "Frontend, backend, database integration, testing and deployment",
    icon: "layers",
  },
  {
    title: "Java & Spring Boot Backend",
    description:
      "Structured REST APIs with database persistence, validation, error handling and maintainable application logic.",
    audience: "Teams that need a reliable backend foundation",
    deliverables: "API design, database models, validation, documentation and deployment",
    icon: "server",
  },
  {
    title: "MVP Development",
    description:
      "Focused product prototypes that validate the core workflow before time is spent on secondary features.",
    audience: "Founders, hackathon teams and early-stage product ideas",
    deliverables: "Scope, UI flow, working MVP and feedback-ready release",
    icon: "zap",
  },
];

export const projects = [
  {
    id: "clientpilot",
    number: "01",
    title: "ClientPilot AI",
    image: "janani-portfolio-complete/public/images/projects/clientpilot.png",
    category: "AI SaaS · Full Stack · RAG",
    status: "In development",
    accent: "violet",
    summary:
      "An AI-powered business platform combining lead management, appointments, a knowledge base, and a grounded customer assistant.",
    problem:
      "Small service teams often manage enquiries, appointments, FAQs and follow-ups across disconnected tools.",
    solution:
      "A single operational workspace with an AI assistant grounded in approved business information.",
    features: [
      "RAG chatbot grounded in business documents",
      "Lead capture and conversation history",
      "Appointment workflow and admin analytics",
      "English and Tamil support",
    ],
    stack: ["React", "Node.js", "RAG", "REST APIs", "PostgreSQL"],
    role:
      "Product concept, interface direction, full-stack and AI implementation",
  },

  {
    id: "agriconnect",
    number: "02",
    title: "AgriConnect AI",
    image: "janani-portfolio-complete/public/images/projects/agriconnect.png",
    category: "Social Impact · AI · Full Stack",
    status: "In development",
    accent: "green",
    summary:
      "A farm-intelligence platform designed to bring crop health, weather, market information and agricultural guidance into one accessible experience.",
    problem:
      "Farm decisions depend on fragmented information about crop condition, weather, pricing and timely interventions.",
    solution:
      "A unified dashboard that makes farm signals easier to understand and act on.",
    features: [
      "Crop-health overview and farm dashboard",
      "Weather and market-price context",
      "Crop recommendation workflow",
      "Leaf-image disease detection flow",
    ],
    stack: ["React", "Python", "Node.js", "AI/ML", "REST APIs"],
    role:
      "Product design, full-stack development and AI workflow exploration",
  },

  {
    id: "taskflow",
    number: "03",
    title: "Task Management System",
    image: "janani-portfolio-complete/public/images/projects/task-management.png",
    category: "Java · Spring Boot · REST API",
    status: "Backend build",
    accent: "blue",
    summary:
      "A backend-focused task platform built to practise structured Spring Boot architecture and reliable API workflows.",
    problem:
      "Teams need a consistent way to create, prioritise, update and track tasks through a dependable backend.",
    solution:
      "A REST-oriented application for task lifecycle operations and database-backed persistence.",
    features: [
      "Task creation and management",
      "Status and priority tracking",
      "RESTful endpoint structure",
      "Validation and error handling",
    ],
    stack: ["Java", "Spring Boot", "REST API", "PostgreSQL"],
    role:
      "Backend architecture, API implementation and database integration",
  },
];

export const skillGroups = [
  {
    name: "AI & Applied Intelligence",
    level: "Project experience / learning",
    skills: ["Python", "NLP", "RAG Systems", "LLM Applications", "Similarity Scoring"],
  },
  {
    name: "Frontend",
    level: "Project experience",
    skills: ["HTML", "CSS", "JavaScript", "React", "Responsive Design"],
  },
  {
    name: "Backend & APIs",
    level: "Project experience / learning",
    skills: ["Node.js", "REST APIs", "Java", "Spring Boot", "Python"],
  },
  {
    name: "Data, Tools & Deployment",
    level: "Working knowledge",
    skills: ["PostgreSQL", "Supabase", "Git", "GitHub", "Vercel", "Linux"],
  },
  {
    name: "Engineering Foundations",
    level: "Core",
    skills: ["OOP", "Problem Solving", "System Design", "Team Leadership", "Communication"],
  },
];

export const education = [
  {
    period: "Aug 2024 — Jul 2028",
    credential: "B.E. in Computer Science and Engineering",
    school: "University College of Engineering, Kanchipuram",
    detail: "CGPA: 8.85",
  },
  {
    period: "2023 — 2024",
    credential: "Higher Secondary — Computer Science & Mathematics",
    school: "S.S.K.V Girls Higher Secondary School",
    detail: "90%",
  },
];

export const achievements = [
  {
    title: "Smart India Hackathon 2025 — Winner",
    detail: "Built an AI surveillance system for extreme weather conditions.",
    context: "Ministry of Education · IIT Roorkee, Delhi",
  },
  {
    title: "SA Hackathon 2026 — 3rd Place",
    detail: "Built HexaPathAI, an AI-based skill-gap analysis system.",
    context: "36-hour hackathon",
  },
  {
    title: "HackHustle 2.0 — Runner-up",
    detail: "Built Trust Vault, a decentralised escrow system.",
    context: "24-hour hackathon",
  },
  {
    title: "TNWISE Hackathon 2025 — Second Round",
    detail: "Developed Smart Wheel, a real-time assistive mobility prototype.",
    context: "Government of Tamil Nadu",
  },
];

export const process = [
  ["01", "Understand", "Clarify the business problem, users and required outcome."],
  ["02", "Plan", "Define essential features, technology, timeline and delivery scope."],
  ["03", "Build", "Develop the UI, backend, database and AI integration in focused increments."],
  ["04", "Test & Deliver", "Check responsiveness, APIs, edge cases, security and deployment."],
];
