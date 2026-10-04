export type Experience = {
  company: string
  role: string
  period: string
  location: string
  summary: string
  highlights: string[]
  stack: string[]
}

export type Project = {
  title: string
  eyebrow: string
  description: string
  impact: string
  stack: string[]
  featured?: boolean
}

export const experiences: Experience[] = [
  {
    company: 'HCL Software',
    role: 'Senior Software Engineer',
    period: '2026 — Present',
    location: 'Bengaluru, India',
    summary: 'Building configurable enterprise experiences where product teams can create and manage application UI without repeatedly changing source code.',
    highlights: [
      'Working on a dynamic application menu projector with Kendo drag-and-drop interactions and menu-item overrides.',
      'Building a dynamic UI builder for creating components, forms and listings from configuration rather than hand-written screens.',
      'Designing configurable field and button properties, dropdown behavior and API mappings for reusable enterprise workflows.',
    ],
    stack: ['React', 'TypeScript', 'Kendo UI', 'JavaScript'],
  },
  {
    company: 'Battery Smart',
    role: 'Software Engineer II — Full-Stack Developer',
    period: 'Dec 2025 — Apr 2026',
    location: 'India',
    summary: 'Worked across React, Node.js, TypeScript and data workflows for driver onboarding and KYC operations.',
    highlights: [
      'Built driver ReKYC/eKYC workflows covering identity documents, location tracking, video verification and vehicle/battery details.',
      'Developed Node.js and TypeScript REST APIs designed for high-throughput operational workflows.',
      'Worked with SQL and GCP Pub/Sub, plus Python utilities, across backend and asynchronous processing needs.',
    ],
    stack: ['React', 'Node.js', 'TypeScript', 'SQL', 'GCP Pub/Sub'],
  },
  {
    company: 'Coforge',
    role: 'Software Engineer II — Full-Stack Developer',
    period: 'Aug 2024 — Dec 2025',
    location: 'India',
    summary: 'Delivered full-stack web features with a strong frontend focus and cloud-connected backend services.',
    highlights: [
      'Built responsive React experiences and reusable UI patterns for enterprise applications.',
      'Worked across REST APIs, AWS services and backend integrations to deliver end-to-end features.',
      'Collaborated on architecture, debugging, testing and production-oriented engineering workflows.',
    ],
    stack: ['React', 'Node.js', 'AWS', 'REST APIs', 'Jest'],
  },
]

export const projects: Project[] = [
  {
    title: 'Dynamic Application Menu Projector',
    eyebrow: 'HCL · Enterprise Platform',
    description: 'A configurable menu experience where companies can register application menus, reorder items through drag-and-drop and override menu behavior without rebuilding the shell.',
    impact: 'Configuration-first UI architecture',
    stack: ['React', 'TypeScript', 'Kendo UI'],
    featured: true,
  },
  {
    title: 'Dynamic UI Builder',
    eyebrow: 'HCL · Platform Engineering',
    description: 'A visual builder that lets teams create components, forms and listings from the UI, including field properties, buttons, dropdown configuration and API mappings.',
    impact: 'Less repetitive frontend implementation',
    stack: ['React', 'TypeScript', 'Dynamic Forms'],
    featured: true,
  },
  {
    title: 'Driver ReKYC / eKYC Platform',
    eyebrow: 'Battery Smart · Product',
    description: 'Operational workflows for driver verification, document checks, location-aware tasks and video verification across the onboarding lifecycle.',
    impact: 'Compliance-focused workflow automation',
    stack: ['React', 'Node.js', 'TypeScript', 'SQL', 'Pub/Sub'],
  },
  {
    title: 'Social Audio Product',
    eyebrow: 'Independent Product · 3+ years',
    description: 'A social audio experience for short-form audio with images, comments, feeds, hashtags, playlists, notifications and CMS tooling, with end-to-end product ownership.',
    impact: 'Product ownership from UI to architecture',
    stack: ['React', 'Node.js', 'APIs', 'System Design'],
  },
]

export const skillGroups = [
  { title: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'Redux', 'Zustand', 'React Query', 'TanStack Table', 'HTML', 'CSS'] },
  { title: 'Backend & Cloud', items: ['Node.js', 'REST APIs', 'GraphQL', 'Apollo', 'Microservices', 'AWS', 'GCP', 'Redis', 'SQL', 'DynamoDB'] },
  { title: 'Engineering', items: ['Jest', 'React Testing Library', 'Git', 'GitHub Actions', 'Jenkins', 'EventBridge', 'SQS', 'Pub/Sub', 'API Design', 'System Design'] },
]
