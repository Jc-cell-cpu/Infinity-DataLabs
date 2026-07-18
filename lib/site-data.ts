import {
  Bot,
  Braces,
  Building2,
  ChartNoAxesCombined,
  CloudCog,
  DatabaseZap,
  Headphones,
  Network,
  ShieldCheck,
  TestTubeDiagonal,
  UsersRound,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: LucideIcon;
  capabilities: string[];
};

export const services: Service[] = [
  {
    slug: "ai-agentic-systems",
    title: "AI & Agentic Systems",
    short: "Production AI that reasons, retrieves, acts, and integrates with the systems your teams already use.",
    icon: Bot,
    capabilities: ["Agentic AI systems", "Multi-agent architecture", "Enterprise AI", "RAG systems", "LLM integration", "AI workflow automation", "MCP integration", "Fine-tuning", "AI security", "AI strategy"],
  },
  {
    slug: "software-engineering",
    title: "Software Engineering",
    short: "Resilient product platforms, APIs, and cloud-native systems engineered for long-term change.",
    icon: Braces,
    capabilities: ["Full-stack development", "React & Next.js", "Java & Spring Boot", "Python & FastAPI", ".NET & Go", "Microservices", "API platforms", "DevOps & CI/CD", "Kubernetes", "Infrastructure automation"],
  },
  {
    slug: "enterprise-solutions",
    title: "Enterprise Solutions",
    short: "Complex internal systems made simpler, faster, and easier to operate across the organization.",
    icon: Building2,
    capabilities: ["Custom enterprise software", "ERP integrations", "CRM systems", "Workflow automation", "Document management", "Government digital solutions", "Digital transformation", "Legacy modernization", "Internal portals"],
  },
  {
    slug: "cloud-platforms",
    title: "Cloud & Platforms",
    short: "Secure, observable foundations that turn cloud infrastructure into an operational advantage.",
    icon: CloudCog,
    capabilities: ["AWS", "Microsoft Azure", "Google Cloud", "Cloud architecture", "Platform engineering", "Container orchestration", "Observability", "Infrastructure as code", "Cloud migration"],
  },
  {
    slug: "cyber-security",
    title: "Cyber Security",
    short: "Security designed into architecture, delivery pipelines, applications, APIs, and cloud estates.",
    icon: ShieldCheck,
    capabilities: ["Security assessment", "Penetration testing", "Application security", "Cloud security", "API security", "DevSecOps", "Compliance consulting", "Identity management", "Zero trust"],
  },
  {
    slug: "data-engineering",
    title: "Data Engineering",
    short: "Trusted data platforms that move cleanly from source systems to insight and machine learning.",
    icon: DatabaseZap,
    capabilities: ["Data pipelines", "Analytics", "Business intelligence", "Data warehousing", "Data migration", "ETL", "ML pipelines", "Data quality", "Platform modernization"],
  },
  {
    slug: "quality-engineering",
    title: "Quality Engineering",
    short: "Quality practices embedded across delivery to improve confidence without slowing momentum.",
    icon: TestTubeDiagonal,
    capabilities: ["Manual testing", "Automation testing", "Performance testing", "API testing", "Security testing", "Regression testing", "Test strategy", "Continuous quality"],
  },
  {
    slug: "managed-support",
    title: "Managed Support",
    short: "Structured L1–L3 support and production operations that keep critical services dependable.",
    icon: Headphones,
    capabilities: ["L1, L2 & L3 support", "Application support", "Infrastructure support", "Monitoring", "Incident management", "Production support", "Runbook engineering", "Service improvement"],
  },
  {
    slug: "resource-augmentation",
    title: "Engineering Talent",
    short: "Specialists and complete teams who integrate quickly, communicate clearly, and deliver with ownership.",
    icon: UsersRound,
    capabilities: ["Dedicated developers", "AI engineers", "Cloud & DevOps engineers", "Security specialists", "QA engineers", "Data engineers", "Product roles", "Solution architects", "Delivery leadership"],
  },
];

export const industries = [
  { title: "Enterprise", copy: "Modern platforms and transformation programs built around governance, scale, and operational reality." },
  { title: "Government", copy: "Accessible, secure digital services designed for accountability and public impact." },
  { title: "Startups", copy: "Senior engineering leverage from first architecture decisions through reliable growth." },
  { title: "Mid-market", copy: "Focused modernization that improves throughput without adding organizational drag." },
];

export const technologies = ["React", "Next.js", "Angular", "Vue", "Node.js", "Java", "Spring Boot", "Python", "FastAPI", ".NET", "Go", "PostgreSQL", "MongoDB", "Redis", "AWS", "Azure", "Google Cloud", "Kubernetes", "Docker"];

export const engagementModels = [
  { number: "01", title: "Build", copy: "A focused multidisciplinary team owns the path from discovery to a production-ready product." },
  { number: "02", title: "Modernize", copy: "We improve architecture, experience, data, and delivery without destabilizing business-critical systems." },
  { number: "03", title: "Augment", copy: "Specialists join your team with clear responsibilities, flexible capacity, and shared engineering standards." },
  { number: "04", title: "Operate", copy: "Structured support, monitoring, and continuous improvement protect the systems your organization relies on." },
];

export const values = [
  { title: "Clarity over theater", copy: "We make complex choices understandable and communicate risk early." },
  { title: "Systems over patches", copy: "We solve the underlying problem and leave platforms easier to evolve." },
  { title: "Ownership over output", copy: "Delivery means accountable outcomes, not a pile of completed tickets." },
  { title: "Trust through evidence", copy: "Decisions are grounded in working software, useful metrics, and honest feedback." },
];

export const talentGroups = [
  { title: "Engineering", roles: ["Full-stack Developer", "Frontend Developer", "Backend Developer", "Java Developer", "Python Developer", "Technical Architect", "Solution Architect"] },
  { title: "AI & Data", roles: ["AI Engineer", "Agentic AI Developer", "Machine Learning Engineer", "Data Engineer", "Data Analyst"] },
  { title: "Cloud & Security", roles: ["DevOps Engineer", "Cloud Engineer", "Security Engineer", "Penetration Tester", "Support Engineer"] },
  { title: "Quality & Delivery", roles: ["QA Engineer", "Automation Tester", "Business Analyst", "Product Owner", "Scrum Master", "Project Manager"] },
  { title: "People & Design", roles: ["UI/UX Designer", "Human Resource Specialist", "Technical Recruiter"] },
];

export const process = [
  { icon: Network, title: "Understand", copy: "Align on the outcome, users, constraints, and existing systems." },
  { icon: ChartNoAxesCombined, title: "Shape", copy: "Make architecture and delivery choices visible before they become expensive." },
  { icon: Workflow, title: "Deliver", copy: "Work in small, testable increments with direct access to the team doing the work." },
  { icon: ShieldCheck, title: "Evolve", copy: "Measure, operate, and improve the system after launch—not just before it." },
];
