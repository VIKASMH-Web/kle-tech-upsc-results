export type GalleryCategory =
  | "ALL"
  | "SESSIONS"
  | "EVENTS"
  | "DEBATES"
  | "QUIZZES"
  | "INTERACTIONS"
  | "TEAM";

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  date: string;
  caption: string;
  placeholderDescription: string;
  accentColor: string;
}

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  "ALL",
  "SESSIONS",
  "EVENTS",
  "DEBATES",
  "QUIZZES",
  "INTERACTIONS",
  "TEAM",
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Pragya 5.0 Civil Services Address",
    category: "INTERACTIONS",
    date: "Annual Flagship",
    caption:
      "Auditorium gathering for Pragya 5.0: From Campus to Civil Services interactive session with aspiring civil servants.",
    placeholderDescription: "Dignitaries and students at University Auditorium for Pragya 5.0",
    accentColor: "from-blue-900 to-indigo-950",
  },
  {
    id: "gal-2",
    title: "Quizkaar 2025 Grand Finals",
    category: "QUIZZES",
    date: "2025",
    caption:
      "Participants intensely engaged during the rapid-fire buzzer rounds at Quizkaar 2025.",
    placeholderDescription: "Stage finalists competing on UPSC General Studies buzzer rounds",
    accentColor: "from-emerald-950 to-slate-900",
  },
  {
    id: "gal-3",
    title: "Manthan 2.0 Parliamentary Debate",
    category: "DEBATES",
    date: "Annual Session",
    caption:
      "Student delegates presenting structured arguments on public policy and constitutional ethics.",
    placeholderDescription: "Senate Hall podium and delegates deliberating contemporary governance bills",
    accentColor: "from-amber-950 to-slate-900",
  },
  {
    id: "gal-4",
    title: "Indian Geography Interactive Mapping",
    category: "SESSIONS",
    date: "Study Workshop",
    caption:
      "Collaborative physical map drafting and river basin plotting session by club members.",
    placeholderDescription: "Students charting topographies, passes, and river systems on map sheets",
    accentColor: "from-cyan-950 to-slate-900",
  },
  {
    id: "gal-5",
    title: "The Knowledge Gauntlet Escape Room",
    category: "EVENTS",
    date: "Interactive Challenge",
    caption:
      "Teams decrypting historical ciphers and navigating through Phase 1 Escape Envelope challenges.",
    placeholderDescription: "Teams reviewing sealed envelope clues and cipher grids in the main lobby",
    accentColor: "from-purple-950 to-slate-900",
  },
  {
    id: "gal-6",
    title: "The First Glimpse Orientation",
    category: "SESSIONS",
    date: "Foundational",
    caption:
      "Freshmen and undergraduate engineers attending their first structured UPSC CSE orientation.",
    placeholderDescription: "Full lecture hall deconstructing the Civil Services syllabus and roadmap",
    accentColor: "from-blue-950 to-slate-900",
  },
  {
    id: "gal-7",
    title: "Recognize & Recall Historical Round",
    category: "QUIZZES",
    date: "Knowledge Challenge",
    caption:
      "Participants decoding archival clues to identify makers of modern Indian governance.",
    placeholderDescription: "Student teams presenting answers on historical personality riddle cards",
    accentColor: "from-red-950 to-slate-900",
  },
  {
    id: "gal-8",
    title: "Core Team & Mentors Assembly",
    category: "TEAM",
    date: "Executive Committee",
    caption:
      "KLE Tech UPSC Aspirants Club executive committee, student coordinators, and volunteer leads.",
    placeholderDescription: "Official group assembly of the student organising committee and advisors",
    accentColor: "from-slate-900 to-indigo-950",
  },
];
