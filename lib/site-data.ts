import {
  AudioLines,
  Bot,
  Braces,
  Building2,
  ChartNoAxesCombined,
  CloudCog,
  DatabaseZap,
  FlaskConical,
  Headphones,
  LifeBuoy,
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

export type ProductStage = { title: string; detail: string };

export type Product = {
  slug: string;
  name: string;
  kicker: string;
  tagline: string;
  description: string;
  capabilities: string[];
  highlights: { title: string; body: string }[];
  architecture: ProductStage[];
  icon: LucideIcon;
};

// In-house products we build and run. Copy is capability- and architecture-led;
// per brand, it carries no invented metrics, testimonials, or client logos.
export const products: Product[] = [
  {
    slug: "voice-ai-agent",
    name: "Voice AI Agent",
    kicker: "Conversational voice",
    tagline: "Real-time voice conversations that resolve, not deflect.",
    description:
      "A production-grade voice agent that speaks and listens in real time across phone and web. It understands intent, answers from your own knowledge, acts in the systems behind the conversation, and hands off to a person with full context the moment a call needs one.",
    capabilities: [
      "Real-time speech recognition",
      "Low-latency turn-taking and barge-in",
      "Intent and entity understanding",
      "Knowledge-grounded responses (RAG)",
      "Actions in CRM, scheduling, and order systems",
      "Natural, controllable voices",
      "Telephony and WebRTC integration",
      "Warm human handoff with context",
      "Transcripts, analytics, and QA",
      "PII redaction and guardrails",
    ],
    architecture: [
      { title: "Voice ingress", detail: "Inbound and outbound audio over PSTN/SIP telephony or WebRTC, streamed in real time." },
      { title: "Speech-to-text", detail: "Streaming recognition transcribes the caller with low latency and endpointing." },
      { title: "Dialog orchestration", detail: "Manages turn-taking, interruptions, and conversation state across the call." },
      { title: "Reasoning & retrieval", detail: "An LLM grounded in your knowledge base and policies decides what to say and do." },
      { title: "Actions & tools", detail: "Executes tasks in business systems through secured APIs and MCP integrations." },
      { title: "Text-to-speech", detail: "Streams a natural spoken response back with minimal perceived latency." },
      { title: "Handoff & observability", detail: "Warm transfer to agents with context, plus full transcripts, metrics, and QA." },
    ],
    highlights: [
      { title: "Streams, not turns", body: "Listening, reasoning, and speaking overlap in real time, so conversations feel natural rather than walkie-talkie." },
      { title: "Acts mid-call", body: "It doesn't just answer — it updates records, books, and completes tasks in your systems while the caller waits." },
      { title: "Escalates with context", body: "When a person should take over, the transfer carries the full transcript and case, not a cold restart." },
    ],
    icon: AudioLines,
  },
  {
    slug: "testing-agent",
    name: "Testing Agent",
    kicker: "Autonomous quality",
    tagline: "It explores your product, writes the tests, and explains what broke.",
    description:
      "An AI agent that builds a working model of your application, generates and maintains tests across UI and API layers, runs them continuously, and turns failures into clear, reproducible reports—so quality keeps pace with delivery instead of trailing behind it.",
    capabilities: [
      "Test generation from requirements and specs",
      "UI, API, and end-to-end coverage",
      "Exploratory testing that finds edge cases",
      "Self-healing locators and maintenance",
      "Regression suites wired into CI/CD",
      "Failure triage with root-cause summaries",
      "Visual and accessibility checks",
      "Reproducible reports and artifacts",
      "Coverage and flakiness insights",
    ],
    architecture: [
      { title: "Application modeling", detail: "Crawls the app, specs, and existing tests to build a current map of behavior." },
      { title: "Test planning", detail: "An LLM derives cases, data, and edge conditions from requirements and risk." },
      { title: "Execution runners", detail: "Drives browser UI and API layers in parallel across environments." },
      { title: "Assertions & oracles", detail: "Validates functional behavior, visual state, and accessibility." },
      { title: "Failure triage", detail: "Clusters failures, isolates the likely root cause, and proposes fixes." },
      { title: "CI/CD & reporting", detail: "Runs on every change with dashboards, artifacts, and trend history." },
    ],
    highlights: [
      { title: "Self-maintaining", body: "The model and the tests evolve with the app, so coverage never quietly goes stale." },
      { title: "Parallel by default", body: "UI, API, and environment checks run together — not queued behind each other." },
      { title: "Explains failures", body: "Every break comes back clustered, root-caused, and reproducible, not as a wall of red." },
    ],
    icon: FlaskConical,
  },
  {
    slug: "support-agent",
    name: "Support Agent",
    kicker: "Autonomous support",
    tagline: "Resolves issues end-to-end—and knows exactly when to escalate.",
    description:
      "A support agent that answers from your knowledge base, takes real action on tickets and accounts, and resolves everyday issues across chat and email. When a case needs a person, it escalates with a complete summary rather than a cold transfer.",
    capabilities: [
      "Knowledge-grounded answers (RAG)",
      "Actions on tickets, accounts, and workflows",
      "Chat, email, and web channels",
      "Continuous knowledge-base sync",
      "Intent detection and routing",
      "Escalation with full case summaries",
      "Tone, policy, and safety guardrails",
      "Multilingual responses",
      "Feedback loop and resolution analytics",
    ],
    architecture: [
      { title: "Channels", detail: "Chat widgets, email, and web all route into a single agent surface." },
      { title: "Intent & routing", detail: "Classifies each request and selects the right resolution path." },
      { title: "Knowledge retrieval", detail: "Grounds answers in your documentation, policies, and past tickets." },
      { title: "Reasoning & actions", detail: "Resolves requests by acting through helpdesk and account systems." },
      { title: "Escalation & handoff", detail: "Hands complex cases to a human with a structured summary and history." },
      { title: "Learning & analytics", detail: "Feedback refines answers; dashboards track resolution and deflection." },
    ],
    highlights: [
      { title: "One route, every channel", body: "Chat, email, and web all land in the same resolution engine with the same context." },
      { title: "Resolves, doesn't deflect", body: "It answers from your knowledge and takes real account actions, then confirms the outcome." },
      { title: "Hands off case-ready", body: "Escalations arrive with owner, summary, evidence, and history already assembled." },
    ],
    icon: LifeBuoy,
  },
];

export type Office = { city: string; lines: string[]; hq?: boolean };

// Physical offices (all India). Address wording is user-provided — verify before
// publishing; no invented locations.
export const offices: Office[] = [
  { city: "Bhubaneswar", hq: true, lines: ["IDCO Tower", "Bhubaneswar, Odisha"] },
  { city: "Greater Noida", lines: ["Golden I, T3 485, Plot No. 11", "Sector Tech Zone IV, Amrapali Leisure Valley", "Greater Noida, Uttar Pradesh"] },
  { city: "Hyderabad", lines: ["Near MCEME Campus", "Begumpet, Hyderabad, Telangana"] },
];
