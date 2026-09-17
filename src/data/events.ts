export interface EventItem {
  id: string;
  title: string;
  category: "ORIENTATION" | "MENTORSHIP" | "QUIZ" | "DEBATE" | "KNOWLEDGE ACTIVITY" | "INTERACTION";
  date: string;
  venue: string;
  speaker?: string;
  description: string;
  shortDescription: string;
  keyTakeaways: string[];
  isFeatured: boolean;
  registrationUrl?: string;
  registrationOpen: boolean;
  status: "UPCOMING" | "PAST";
  badgeText: string;
}

export const FEATURED_EVENT_DATA: EventItem = {
  id: "feat-evt-01",
  title: "PRAGYA 5.0 — FROM CAMPUS TO CIVIL SERVICES",
  category: "INTERACTION",
  date: "DATE TO BE ANNOUNCED",
  venue: "University Auditorium, KLE Technological University, Hubballi",
  speaker: "DETAILS TO BE ANNOUNCED (VERIFIED OFFICIAL GUEST)",
  shortDescription:
    "An insightful interaction session designed to bridge campus life and Civil Services, offering practical guidance on preparation, discipline, and the noble purpose of public administration.",
  description:
    "Pragya 5.0 continues the prestigious annual civil services interaction series of KLE Tech. The session offers students direct engagement with distinguished mentors and civil servants, demystifying the preparation journey and reinforcing values of leadership, ethics, and nation-building.",
  keyTakeaways: [
    "Practical transition strategies from engineering coursework to competitive examination discipline",
    "Mental endurance, self-study schedules, and handling academic pressure",
    "Understanding the ground-level role of district administration and public welfare governance",
    "Live open floor Q&A session with invited dignitaries",
  ],
  isFeatured: true,
  registrationUrl: "https://forms.gle/kletech-upsc-register",
  registrationOpen: true,
  status: "UPCOMING",
  badgeText: "FLAGSHIP ANNUAL INTERACTION",
};

export const PAST_EVENTS_DATA: EventItem[] = [
  {
    id: "evt-past-1",
    title: "Quizkaar 2025: Annual Knowledge Championship",
    category: "QUIZ",
    date: "2025 (DATE TO BE UPDATED)",
    venue: "Main Auditorium, KLE Tech Hubballi",
    shortDescription:
      "Curiosity, competition, and fast-paced general studies buzzer rounds across Indian Polity, Current Affairs, and Geography.",
    description:
      "Quizkaar 2025 gathered student aspirants across engineering branches in an electrifying knowledge arena testing retention, composure, and analytical deduction.",
    keyTakeaways: [
      "Competitive Prelims-style test environment",
      "Identification of high-yield General Studies focus areas",
      "Merit certification for top-performing campus teams",
    ],
    isFeatured: false,
    registrationOpen: false,
    status: "PAST",
    badgeText: "CAMPUS TOURNAMENT",
  },
  {
    id: "evt-past-2",
    title: "The Knowledge Gauntlet: Escape Envelope",
    category: "KNOWLEDGE ACTIVITY",
    date: "DATE TO BE UPDATED",
    venue: "B. V. Bhoomaraddi Campus",
    shortDescription:
      "A dual-phase problem-solving challenge combining an Escape Room cipher hunt with rapid-fire Fact or Fake verification.",
    description:
      "Students tackled logical ciphers, topographic clues, and multi-domain statements across History, Geography, Polity, Economy, and Environment.",
    keyTakeaways: [
      "Interdisciplinary logical synthesis under time pressure",
      "Fact vs fake news deduction across national indicators",
      "Team collaboration and rapid strategy execution",
    ],
    isFeatured: false,
    registrationOpen: false,
    status: "PAST",
    badgeText: "CHALLENGE ARENA",
  },
  {
    id: "evt-past-3",
    title: "Manthan 2.0: The Great Debate",
    category: "DEBATE",
    date: "DATE TO BE UPDATED",
    venue: "Senate Hall, KLE Tech Hubballi",
    shortDescription:
      "Parliamentary-style debate forum cultivating critical analysis, public speaking, and evidence-based argumentation.",
    description:
      "Manthan 2.0 pushed participants to dissect multi-dimensional policy issues, addressing socio-economic development, judicial doctrines, and international diplomacy.",
    keyTakeaways: [
      "Structuring multi-dimensional arguments reflecting Mains GS papers",
      "Rebuttal discipline and evidence citation from official reports",
      "Public speaking confidence in formal institutional settings",
    ],
    isFeatured: false,
    registrationOpen: false,
    status: "PAST",
    badgeText: "POLICY FORUM",
  },
  {
    id: "evt-past-4",
    title: "The First Glimpse: UPSC Orientation",
    category: "ORIENTATION",
    date: "DATE TO BE UPDATED",
    venue: "Seminar Hall 1",
    shortDescription:
      "Introductory orientation programme designed to give students their first structured exposure to the Union Public Service Commission.",
    description:
      "Demystifying the examination process for beginners. The session covered the 3-stage CSE format, syllabus interpretation, and early foundation building.",
    keyTakeaways: [
      "Full breakdown of CSE syllabus and mark allocation",
      "Resource curation: standard NCERTs and reference literature",
      "Roadmap for balancing university engineering degree with preparation",
    ],
    isFeatured: false,
    registrationOpen: false,
    status: "PAST",
    badgeText: "ORIENTATION",
  },
  {
    id: "evt-past-5",
    title: "Indian Geography Mapping Masterclass",
    category: "KNOWLEDGE ACTIVITY",
    date: "DATE TO BE UPDATED",
    venue: "Design Innovation Centre",
    shortDescription:
      "Hands-on cartographic mapping workshop exploring physical landforms, river basins, and strategic locations.",
    description:
      "Transforming abstract textbook geography into retained spatial understanding through structured map plotting and peer quiz drills.",
    keyTakeaways: [
      "Quick outline map sketching techniques for Mains answers",
      "Identification of Himalayan and Peninsular river basins",
      "Locating national parks, biosphere reserves, and key mineral belts",
    ],
    isFeatured: false,
    registrationOpen: false,
    status: "PAST",
    badgeText: "WORKSHOP",
  },
];
