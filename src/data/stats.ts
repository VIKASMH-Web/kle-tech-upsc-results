export interface ClubStats {
  sessionsCount: string;
  sessionsLabel: string;
  participationsCount: string;
  participationsLabel: string;
  mentorsCount: string;
  mentorsLabel: string;
  activitiesCount: string;
  activitiesLabel: string;
  lastUpdated: string;
}

export const INITIAL_STATS: ClubStats = {
  sessionsCount: "25+",
  sessionsLabel: "SESSIONS & INITIATIVES",
  participationsCount: "650+",
  participationsLabel: "STUDENT PARTICIPATIONS",
  mentorsCount: "15+",
  mentorsLabel: "EXPERT / MENTOR INTERACTIONS",
  activitiesCount: "12+",
  activitiesLabel: "KNOWLEDGE & ENGAGEMENT ACTIVITIES",
  lastUpdated: "Academic Year 2024–2025",
};

export interface GrowthYearData {
  academicYear: string;
  participations: number;
  sessions: number;
  mockTests: number;
}

export const GROWTH_METRICS: GrowthYearData[] = [
  { academicYear: "2022–23", participations: 180, sessions: 6, mockTests: 4 },
  { academicYear: "2023–24", participations: 420, sessions: 14, mockTests: 8 },
  { academicYear: "2024–25", participations: 650, sessions: 25, mockTests: 12 },
];
