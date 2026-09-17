export interface Activity {
  id: string;
  slug: string;
  title: string;
  category: string;
  pillar: "AWARENESS" | "PREPARATION" | "MENTORSHIP";
  theme?: string;
  description: string;
  date: string;
  venue: string;
  focus?: string[];
  skills?: string[];
  rounds?: { title: string; details: string[] }[];
  phases?: { name: string; items: string[] }[];
  imagePlaceholderText: string;
  badgeColor: string;
}

export const ACTIVITIES_DATA: Activity[] = [
  {
    id: "act-1",
    slug: "the-first-glimpse",
    title: "THE FIRST GLIMPSE",
    category: "UPSC ORIENTATION",
    pillar: "AWARENESS",
    description:
      "The First Glimpse was an introductory orientation programme designed to give students their first structured exposure to the Union Public Service Commission, the Civil Services Examination, public-service careers, and the journey of becoming a UPSC aspirant.",
    date: "DATE TO BE UPDATED",
    venue: "KLE Technological University Campus",
    focus: [
      "Understanding UPSC",
      "Civil Services Awareness",
      "Examination Structure",
      "Career Pathways",
      "Preparation Roadmap",
    ],
    skills: ["Career Planning", "Syllabus Deconstruction", "Orientation", "Goal Setting"],
    imagePlaceholderText: "Orientation Session & Civil Services Introduction",
    badgeColor: "bg-blue-950/80 text-blue-300 border-blue-500/30",
  },
  {
    id: "act-2",
    slug: "indian-geography",
    title: "INDIAN GEOGRAPHY",
    category: "INTERACTIVE LEARNING",
    pillar: "PREPARATION",
    description:
      "The Indian Geography session transformed the study of important geographical locations into an engaging mapping activity. Students explored physical features, states, rivers, mountain ranges, plateaus, coastal regions, important cities, and other significant locations of India.",
    date: "DATE TO BE UPDATED",
    venue: "B. V. Bhoomaraddi Campus Seminar Hall",
    skills: [
      "Spatial Awareness",
      "Observation",
      "Memory",
      "Teamwork",
      "Analytical Thinking",
    ],
    focus: [
      "Physical Features of India",
      "River Basins & Drainage Systems",
      "Plateaus & Mountain Ranges",
      "State Capitals & Boundaries",
      "Strategic Infrastructure Points",
    ],
    imagePlaceholderText: "Interactive Physical & Political Mapping Workshop",
    badgeColor: "bg-amber-950/80 text-amber-300 border-amber-500/30",
  },
  {
    id: "act-3",
    slug: "quizkaar-2025",
    title: "QUIZKAAR 2025",
    category: "KNOWLEDGE QUIZ",
    pillar: "PREPARATION",
    description:
      "Quizkaar 2025 brought curiosity, competition, and learning together in an energetic knowledge-driven environment. The activity encouraged students to test their awareness, think quickly, recall information, and apply knowledge beyond the classroom.",
    date: "2025 (DATE TO BE UPDATED)",
    venue: "University Auditorium, Hubballi",
    skills: [
      "Recall",
      "Critical Thinking",
      "Decision-Making",
      "General Awareness",
      "Analytical Reasoning",
    ],
    focus: [
      "General Studies Prelims Standard",
      "Rapid Fire Current Affairs",
      "Visual Clues & Audio Rounds",
      "Constitutional Articles & Amendments",
      "India & Contemporary World",
    ],
    imagePlaceholderText: "Quizkaar 2025 Knowledge Arena & Buzzer Rounds",
    badgeColor: "bg-emerald-950/80 text-emerald-300 border-emerald-500/30",
  },
  {
    id: "act-4",
    slug: "recognize-and-recall",
    title: "RECOGNIZE & RECALL",
    category: "KNOWLEDGE ACTIVITY",
    pillar: "PREPARATION",
    description:
      "The Real Face of Recognize & Recall challenged participants to identify important historical and political personalities through visual clues, contextual information, and analytical riddles.",
    date: "DATE TO BE UPDATED",
    venue: "KLE Tech Campus",
    rounds: [
      {
        title: "ROUND 1 — WHO AM I?",
        details: [
          "Progressive clue identification",
          "Visual hints and archival clues",
          "Key institutional milestones",
        ],
      },
      {
        title: "ROUND 2 — RECALL ROUND",
        details: [
          "Rapid-fire historical personality recall",
          "Contribution to modern Indian governance and polity",
          "Chronological alignment",
        ],
      },
    ],
    skills: [
      "Observation",
      "Attention",
      "Retention",
      "Historical Awareness",
      "Conceptual Understanding",
    ],
    imagePlaceholderText: "Historical Personalities Clue Cards & Archival Analysis",
    badgeColor: "bg-purple-950/80 text-purple-300 border-purple-500/30",
  },
  {
    id: "act-5",
    slug: "manthan-the-great-debate",
    title: "MANTHAN — THE GREAT DEBATE",
    category: "DEBATE & DISCUSSION",
    pillar: "AWARENESS",
    description:
      "Manthan — The Great Debate created a platform for students to question, analyse, discuss, and express perspectives on contemporary issues.",
    date: "DATE TO BE UPDATED",
    venue: "Senate Hall, KLE Technological University",
    skills: [
      "Public Speaking",
      "Critical Thinking",
      "Research",
      "Argumentation",
      "Communication",
    ],
    focus: [
      "Contemporary Socio-Economic Policies",
      "Federal Structure & Constitutional Ethics",
      "Sustainable Development vs Industrialization",
      "Rebuttal & Cross-Examination Protocols",
    ],
    imagePlaceholderText: "Parliamentary Style Student Debate & Moderation",
    badgeColor: "bg-red-950/80 text-red-300 border-red-500/30",
  },
  {
    id: "act-6",
    slug: "manthan-2-0",
    title: "MANTHAN 2.0",
    category: "DEBATE & DISCUSSION",
    pillar: "PREPARATION",
    description:
      "Manthan 2.0 continued the Club’s initiative of creating a platform for meaningful discussion and intellectual engagement, encouraging students to examine contemporary issues through multiple perspectives and develop balanced, evidence-based arguments.",
    date: "DATE TO BE UPDATED",
    venue: "KLE Tech Campus",
    skills: [
      "Multi-perspective Analysis",
      "Evidence-based Debate",
      "Policy Evaluation",
      "Persuasion",
      "Nuanced Synthesis",
    ],
    focus: [
      "Mains GS-II & GS-IV Ethical Frameworks",
      "National Security & Foreign Policy Paradigms",
      "Data-Driven Arguments & Government Reports",
    ],
    imagePlaceholderText: "Manthan 2.0 Panel Discussions & Delegate Assemblies",
    badgeColor: "bg-orange-950/80 text-orange-300 border-orange-500/30",
  },
  {
    id: "act-7",
    slug: "the-knowledge-gauntlet",
    title: "THE KNOWLEDGE GAUNTLET — ESCAPE ENVELOPE",
    category: "COMPETITIVE KNOWLEDGE CHALLENGE",
    pillar: "PREPARATION",
    description:
      "The Knowledge Gauntlet — Escape Envelope combined problem-solving, general awareness, logical reasoning, teamwork, and competition in an immersive challenge.",
    date: "DATE TO BE UPDATED",
    venue: "KLE Tech Main Block",
    phases: [
      {
        name: "PHASE 1: ESCAPE ROOM",
        items: ["Puzzles", "Riddles", "Ciphers", "Maps", "Logical Challenges"],
      },
      {
        name: "PHASE 2: FACT OR FAKE CHECK",
        items: [
          "History verification",
          "Geography facts",
          "Polity & Governance checks",
          "Economy indicators",
          "Environment & Biodiversity data",
        ],
      },
    ],
    skills: [
      "Problem Solving",
      "Team Coordination",
      "Rapid Fact Checking",
      "Deductive Logic",
      "Stress Management",
    ],
    imagePlaceholderText: "Escape Room Envelopes, Ciphers & Fact-Checking Arena",
    badgeColor: "bg-cyan-950/80 text-cyan-300 border-cyan-500/30",
  },
  {
    id: "act-8",
    slug: "pragya-5-0",
    title: "PRAGYA 5.0",
    category: "CIVIL SERVICES INTERACTION",
    pillar: "MENTORSHIP",
    theme: "From Campus to Civil Services — A Journey Beyond Exams.",
    description:
      "Pragya 5.0 was an insightful interaction session designed to bridge campus life and Civil Services. The session provided students with practical perspectives on career pathways, preparation, discipline, challenges, and the larger purpose of public service.",
    date: "DATE TO BE UPDATED",
    venue: "University Auditorium, KLE Tech Hubballi",
    focus: [
      "Transition from Engineering to Administration",
      "Consistency & Mental Resilience",
      "Ethics in Governance",
      "Student Q&A with Dignitaries",
    ],
    skills: [
      "Mentorship Absorption",
      "Career Realism",
      "Public Service Ethos",
      "Discipline Frameworks",
    ],
    imagePlaceholderText: "Pragya 5.0 Stage, Keynote Addresses & Student Interaction",
    badgeColor: "bg-indigo-950/80 text-indigo-300 border-indigo-500/30",
  },
];
