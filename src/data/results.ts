export interface SubjectScore {
  subject: string;
  marks: number;
  maxMarks: number;
}

export interface ResultRecord {
  id: string;
  usn: string;
  studentName: string;
  branch: string;
  semester: string;
  examName: string;
  date: string;
  score: number;
  totalMarks: number;
  percentile: number;
  rank: string;
  status: "Qualified" | "Merit Distinction" | "Appeared" | "Certificate Awarded";
  certificateId: string;
  subjectBreakdown: SubjectScore[];
  remarks: string;
}

export const INITIAL_RESULTS_DATA: ResultRecord[] = [
  {
    id: "res-001",
    usn: "01FE22BCS045",
    studentName: "Aditya Patil",
    branch: "Computer Science & Engineering",
    semester: "6th Semester",
    examName: "KLE Tech UPSC Prelims General Studies Diagnostic Test — 2025",
    date: "February 2025",
    score: 132,
    totalMarks: 200,
    percentile: 96.4,
    rank: "Rank 04 / 240+",
    status: "Merit Distinction",
    certificateId: "KLE-UPSC-2025-045",
    subjectBreakdown: [
      { subject: "Indian Polity & Governance", marks: 34, maxMarks: 40 },
      { subject: "Indian Economy & Budget", marks: 28, maxMarks: 36 },
      { subject: "Modern History & Culture", marks: 26, maxMarks: 40 },
      { subject: "Geography & Environment", marks: 24, maxMarks: 44 },
      { subject: "Current Affairs & S&T", marks: 20, maxMarks: 40 },
    ],
    remarks: "Outstanding conceptual clarity in Constitutional Polity and Macro-Economics. Highly recommended for Mains answer-writing mentoring circle.",
  },
  {
    id: "res-002",
    usn: "01FE22BCS001",
    studentName: "Sneha Kulkarni",
    branch: "Computer Science & Engineering",
    semester: "6th Semester",
    examName: "Quizkaar 2025 — Campus General Studies Championship",
    date: "January 2025",
    score: 154,
    totalMarks: 200,
    percentile: 98.2,
    rank: "Rank 02 / 240+",
    status: "Merit Distinction",
    certificateId: "KLE-UPSC-2025-001",
    subjectBreakdown: [
      { subject: "National & International Events", marks: 38, maxMarks: 40 },
      { subject: "General Science & Tech", marks: 36, maxMarks: 40 },
      { subject: "Indian Geography & Topography", marks: 32, maxMarks: 40 },
      { subject: "History of Modern India", marks: 26, maxMarks: 40 },
      { subject: "Logical Aptitude", marks: 22, maxMarks: 40 },
    ],
    remarks: "Exceptional speed and rapid-recall in Quizkaar buzzer rounds. Commendable retention across contemporary affairs.",
  },
  {
    id: "res-003",
    usn: "01FE21BEC012",
    studentName: "Rohan Deshmukh",
    branch: "Electronics & Communication Engineering",
    semester: "8th Semester",
    examName: "The Knowledge Gauntlet — Fact Verification & Logic Evaluation",
    date: "December 2024",
    score: 118,
    totalMarks: 160,
    percentile: 91.5,
    rank: "Rank 08 / 180+",
    status: "Qualified",
    certificateId: "KLE-UPSC-2024-012",
    subjectBreakdown: [
      { subject: "Phase 1: Escape Room Ciphers", marks: 44, maxMarks: 50 },
      { subject: "Phase 2: Fact or Fake Polity", marks: 26, maxMarks: 30 },
      { subject: "Phase 2: Fact or Fake Economy", marks: 24, maxMarks: 40 },
      { subject: "Phase 2: Environment & Ecology", marks: 24, maxMarks: 40 },
    ],
    remarks: "Demonstrated exemplary deductive reasoning and team leadership during the Escape Envelope challenge.",
  },
  {
    id: "res-004",
    usn: "01FE23BAI018",
    studentName: "Pooja Hegde",
    branch: "Artificial Intelligence & Data Science",
    semester: "4th Semester",
    examName: "Recognize & Recall — Historical Personality & Polity Challenge",
    date: "November 2024",
    score: 86,
    totalMarks: 100,
    percentile: 94.0,
    rank: "Rank 05 / 150+",
    status: "Merit Distinction",
    certificateId: "KLE-UPSC-2024-018",
    subjectBreakdown: [
      { subject: "Round 1: Who Am I? Archival Clues", marks: 46, maxMarks: 50 },
      { subject: "Round 2: Rapid Personality Recall", marks: 40, maxMarks: 50 },
    ],
    remarks: "Remarkable depth of historical context and understanding of constituent assembly debates.",
  },
  {
    id: "res-005",
    usn: "01FE22BME034",
    studentName: "Vikram Joshi",
    branch: "Mechanical Engineering",
    semester: "6th Semester",
    examName: "Manthan — The Great Debate & Policy Deliberation",
    date: "October 2024",
    score: 89,
    totalMarks: 100,
    percentile: 92.8,
    rank: "Best Delegate (GS-II)",
    status: "Certificate Awarded",
    certificateId: "KLE-UPSC-2024-034",
    subjectBreakdown: [
      { subject: "Constitutional Argumentation", marks: 28, maxMarks: 30 },
      { subject: "Public Policy Evidence", marks: 27, maxMarks: 30 },
      { subject: "Rebuttal & Parliamentary Poise", marks: 20, maxMarks: 25 },
      { subject: "Eloquence & Time Adherence", marks: 14, maxMarks: 15 },
    ],
    remarks: "Eloquent articulation of public policy issues with strong constitutional references and structured synthesis.",
  },
];
