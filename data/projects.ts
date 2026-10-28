export type Category =
  | "full-stack"
  | "backend"
  | "frontend"
  | "blockchain"
  | "systems";

export type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  category: Category;
  status: "In progress" | "Shipped" | "Prototype" | "Coursework";
  links?: { label: string; href: string }[];
  /** Shown instead of links when the source isn't public. */
  private?: boolean;
  featured?: boolean;
};

export const categoryLabels: Record<Category, string> = {
  "full-stack": "full-stack",
  backend: "backend",
  frontend: "frontend",
  blockchain: "blockchain",
  systems: "systems",
};

// Edit this file to add, remove, or update your projects.
export const projects: Project[] = [
  {
    id: "kbcoffeelink",
    name: "KBCoffeeLink (BirrBeans B2B)",
    tagline: "Ethiopian B2B coffee marketplace",
    description:
      "A digital marketplace connecting regional coffee washing station owners and suppliers directly with licensed export companies. Covers lot management, contracting, negotiation, in-app messaging, quality tracking, and analytics — built for the realities of the Ethiopian coffee trade, with Amharic/English localization and ECTA regulatory considerations in mind.",
    stack: [
      "React",
      "Express",
      "TypeScript",
      "Zustand",
      "Firebase Firestore",
      "Gemini AI",
      "Vite",
    ],
    category: "full-stack",
    status: "In progress",
    featured: true,
    links: [
      { label: "Repository", href: "https://github.com/Kerob-Gebru/KBCoffee" },
    ],
  },
  {
    id: "doweit-voice",
    name: "Doweit_Voice",
    tagline: "Voice-first AI platform for generative-voice agents",
    description:
      "A reusable JS/React SDK paired with a Next.js UI to build, run, and embed generative-voice agents. Integrates multiple generative and voice providers that call registered JS functions seamlessly, with optimized JavaScript to resolve latency bottlenecks and improve component runtime efficiency.",
    stack: ["Next.js", "React", "JavaScript", "Node.js", "Tailwind CSS", "Git"],
    category: "full-stack",
    status: "Shipped",
    private: true,
  },
  {
    id: "ecommerce-microservices",
    name: "E-Commerce Microservices Platform",
    tagline: "High-throughput microservices for catalog search and cart",
    description:
      "A microservices architecture built to process real-time catalog search and cart management. Distributed messaging between services runs on NestJS and RabbitMQ, scaling parallel request throughput by 40%. Redis caching drops database lookup latency into the sub-10ms range.",
    stack: ["TypeScript", "NestJS", "RabbitMQ", "Redis"],
    category: "backend",
    status: "Shipped",
    private: true,
  },
  {
    id: "movie-platform",
    name: "Movie Platform",
    tagline: "Movie & series discovery UI with a secure API proxy",
    description:
      "A React + Vite 6 discovery interface for movies and series. A built-in server-side proxy keeps the RapidAPI key out of browser JavaScript, and adds request de-duplication, response caching, request pacing, and retry with exponential backoff that respects Retry-After — so the UI stays fast without burning API quota.",
    stack: ["React", "Vite", "Redux Toolkit", "React Router", "Axios", "RapidAPI"],
    category: "frontend",
    status: "In progress",
    links: [
      {
        label: "Repository",
        href: "https://github.com/Kerob-Gebru/Movie-Platform",
      },
    ],
  },
  {
    id: "solidity-lab",
    name: "Solidity Smart Contract Lab",
    tagline: "Team lab report on Solidity fundamentals",
    description:
      "A five-person group lab project documenting Solidity fundamentals through worked smart-contract exercises: storage variables, unsigned and signed integers, string literals, and enums, each with deployment screenshots.",
    stack: ["Solidity", "Remix"],
    category: "blockchain",
    status: "Coursework",
    links: [
      {
        label: "Repository",
        href: "https://github.com/Kerob-Gebru/Blockchain-Solidity-Lap-Project",
      },
    ],
  },
  {
    id: "os-coursework",
    name: "Operating Systems Practice",
    tagline: "Classic OS algorithms as shell scripts",
    description:
      "Coursework from ASTU implementing core operating-systems concepts in Bourne shell: First-Come-First-Served scheduling, semaphore-based synchronization, and the Banker's Algorithm for deadlock avoidance.",
    stack: ["Shell", "Bash"],
    category: "systems",
    status: "Coursework",
    links: [
      {
        label: "Repository",
        href: "https://github.com/Kerob-Gebru/Practice-in-School",
      },
    ],
  },
  {
    id: "youtube-clone",
    name: "YouTube Front-End Clone",
    tagline: "Responsive UI built from scratch",
    description:
      "A fully responsive YouTube front-end clone built with plain HTML5, CSS3, and vanilla JavaScript — practice in layout, media setups, and responsive design before moving to React.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    category: "frontend",
    status: "Shipped",
    links: [
      { label: "Repository", href: "https://github.com/Kerob-Gebru/You-Tube" },
    ],
  },
];
