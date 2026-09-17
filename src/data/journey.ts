export interface TimelineItem {
  id: string;
  step: number;
  title: string;
  category: string;
  yearDate: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  themeOrMilestone?: string;
  activitySlug: string;
  status: "COMPLETED" | "ACTIVE" | "UPCOMING";
}

export const JOURNEY_TIMELINE: TimelineItem[] = [
  {
    id: "step-1",
    step: 1,
    title: "THE FIRST GLIMPSE",
    category: "UPSC ORIENTATION",
    yearDate: "DATE TO BE UPDATED",
    shortDescription:
      "Introductory orientation programme giving students their first structured exposure to the Union Public Service Commission and Civil Services Examination.",
    fullDescription:
      "The foundation stone for aspiring civil servants at KLE Tech. The session introduced students to the examination structure, syllabus breakdown, preparation mindset, and public administration opportunities.",
    highlights: [
      "Structured breakdown of Prelims, Mains & Interview",
      "Demystifying UPSC myths for engineering undergraduates",
      "Laying out year-wise preparation timelines",
    ],
    themeOrMilestone: "Foundational Orientation",
    activitySlug: "the-first-glimpse",
    status: "COMPLETED",
  },
  {
    id: "step-2",
    step: 2,
    title: "INDIAN GEOGRAPHY",
    category: "INTERACTIVE LEARNING",
    yearDate: "DATE TO BE UPDATED",
    shortDescription:
      "Transforming geographic study into an engaging hands-on mapping and spatial awareness expedition across Indian topography.",
    fullDescription:
      "Students actively mapped India's physical features, river systems, national parks, plateaus, and geopolitical significance, turning theoretical geography into retained visual memory.",
    highlights: [
      "Dynamic physical & political map plotting",
      "River systems, drainage patterns, and passes",
      "Collaborative peer mapping exercises",
    ],
    themeOrMilestone: "Knowledge Foundation",
    activitySlug: "indian-geography",
    status: "COMPLETED",
  },
  {
    id: "step-3",
    step: 3,
    title: "QUIZKAAR 2025",
    category: "KNOWLEDGE QUIZ",
    yearDate: "2025 (DATE TO BE UPDATED)",
    shortDescription:
      "High-energy competitive knowledge tournament testing awareness, speed, recall, and analytical reasoning.",
    fullDescription:
      "Bringing campus-wide curiosity together. Quizkaar 2025 tested aspirants on current national events, constitutional polity, historical inflection points, and world geography under strict timer conditions.",
    highlights: [
      "Multi-stage competitive buzzer rounds",
      "High-yield General Studies questions",
      "Campus-wide participation & merit recognition",
    ],
    themeOrMilestone: "Competitive Assessment",
    activitySlug: "quizkaar-2025",
    status: "COMPLETED",
  },
  {
    id: "step-4",
    step: 4,
    title: "RECOGNIZE & RECALL",
    category: "KNOWLEDGE ACTIVITY",
    yearDate: "DATE TO BE UPDATED",
    shortDescription:
      "Dual-phase intellectual challenge identifying pivotal historical and political personalities through riddles and contextual clues.",
    fullDescription:
      "Tested participants' memory retention and constitutional history through 'Who Am I?' clues and high-speed historical personality recall.",
    highlights: [
      "Round 1: Who Am I? — Contextual deduction",
      "Round 2: Rapid Recall — Modern Indian builders",
      "Reinforcing historical personalities for GS Paper I",
    ],
    themeOrMilestone: "Retention & Deduction",
    activitySlug: "recognize-and-recall",
    status: "COMPLETED",
  },
  {
    id: "step-5",
    step: 5,
    title: "MANTHAN — THE GREAT DEBATE",
    category: "DEBATE & DISCUSSION",
    yearDate: "DATE TO BE UPDATED",
    shortDescription:
      "Parliamentary-style debate forum cultivating critical analysis, public speaking, and evidence-based argumentation.",
    fullDescription:
      "A student platform to examine controversial national policies, ethics in governance, and socio-economic paradoxes with objectivity and constitutional nuance.",
    highlights: [
      "Structured debate on public policy issues",
      "Focus on objective, evidence-backed arguments",
      "Civil discourse and counter-examination skills",
    ],
    themeOrMilestone: "Intellectual Discourse",
    activitySlug: "manthan-the-great-debate",
    status: "COMPLETED",
  },
  {
    id: "step-6",
    step: 6,
    title: "MANTHAN 2.0",
    category: "DEBATE & DISCUSSION",
    yearDate: "DATE TO BE UPDATED",
    shortDescription:
      "Advanced edition of the debate series deepening multi-perspective analysis and balanced policy synthesis.",
    fullDescription:
      "Building on the success of Manthan, version 2.0 elevated the discourse to international relations, federal dynamics, and ethical governance dilemnas reflecting UPSC Mains standard.",
    highlights: [
      "Advanced Mains GS-II and GS-IV style deliberations",
      "Multi-dimensional perspective synthesis",
      "Refining answer articulation and spoken eloquence",
    ],
    themeOrMilestone: "Policy & Ethics Deliberation",
    activitySlug: "manthan-2-0",
    status: "COMPLETED",
  },
  {
    id: "step-7",
    step: 7,
    title: "THE KNOWLEDGE GAUNTLET — ESCAPE ENVELOPE",
    category: "COMPETITIVE KNOWLEDGE CHALLENGE",
    yearDate: "DATE TO BE UPDATED",
    shortDescription:
      "Immersive challenge combining an Escape Room with rapid-fire Fact or Fake verification across 5 GS domains.",
    fullDescription:
      "Participants unraveled encrypted ciphers and logical maps in Phase 1 before facing the rigorous rapid Fact or Fake verification round across History, Geography, Polity, Economy, and Environment.",
    highlights: [
      "Phase 1: Escape Room logic and cartography ciphers",
      "Phase 2: Fact or Fake check across core UPSC disciplines",
      "Fostering team cohesion under time pressure",
    ],
    themeOrMilestone: "Integrative Problem-Solving",
    activitySlug: "the-knowledge-gauntlet",
    status: "COMPLETED",
  },
  {
    id: "step-8",
    step: 8,
    title: "PRAGYA 5.0",
    category: "CIVIL SERVICES INTERACTION",
    yearDate: "DATE TO BE UPDATED",
    shortDescription:
      "Flagship civil services interaction bridging campus life and public administration under the theme 'From Campus to Civil Services'.",
    fullDescription:
      "Pragya 5.0 served as a pivotal beacon, connecting students directly with public servants and mentors. Focused on practical discipline, mental perseverance, and understanding the noble purpose of governance.",
    highlights: [
      "Theme: From Campus to Civil Services — A Journey Beyond Exams",
      "Real-world administrative realities and ground-level problem solving",
      "Direct interactive student dialogue on discipline and consistency",
    ],
    themeOrMilestone: "Mentorship & Public Service Beacon",
    activitySlug: "pragya-5-0",
    status: "COMPLETED",
  },
];
