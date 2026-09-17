export type TeamSectionType =
  | "FACULTY / UNIVERSITY GUIDANCE"
  | "CLUB LEADERSHIP"
  | "CORE TEAM"
  | "STUDENT VOLUNTEERS";

export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  role: string;
  section: TeamSectionType;
  department: string;
  description: string;
  isPlaceholder: boolean;
  avatarPlaceholderText: string;
}

export const INITIAL_TEAM_DATA: TeamMember[] = [
  {
    id: "team-fac-1",
    name: "FACULTY ADVISOR",
    designation: "Faculty Coordinator & Mentor",
    role: "Institutional Guidance & Advisory",
    section: "FACULTY / UNIVERSITY GUIDANCE",
    department: "KLE Technological University, Hubballi",
    description:
      "Providing institutional oversight, academic alignment, and university mentorship for all UPSC Aspirants Club activities and lecture series.",
    isPlaceholder: true,
    avatarPlaceholderText: "Faculty Mentor",
  },
  {
    id: "team-lead-1",
    name: "STUDENT CONVENOR",
    designation: "President / Student Lead",
    role: "Club Leadership & Strategy",
    section: "CLUB LEADERSHIP",
    department: "KLE Tech UPSC Aspirants Club",
    description:
      "Directing club initiatives, coordinating student preparation sessions, and steering executive operations under university guidance.",
    isPlaceholder: true,
    avatarPlaceholderText: "Convenor",
  },
  {
    id: "team-lead-2",
    name: "CO-CONVENOR",
    designation: "Vice President / Co-Lead",
    role: "Student Engagement & Outreaches",
    section: "CLUB LEADERSHIP",
    department: "KLE Tech UPSC Aspirants Club",
    description:
      "Managing community engagement, orientation logistics, and peer-to-peer mentoring groups across academic departments.",
    isPlaceholder: true,
    avatarPlaceholderText: "Co-Convenor",
  },
  {
    id: "team-core-1",
    name: "ACADEMIC & SYLLABUS HEAD",
    designation: "Core Academic Coordinator",
    role: "Mock Tests & Study Materials",
    section: "CORE TEAM",
    department: "Academic & Research Wing",
    description:
      "Curating weekly general studies questions, mock prelims test papers, and organizing answer-writing review sessions.",
    isPlaceholder: true,
    avatarPlaceholderText: "Academic Head",
  },
  {
    id: "team-core-2",
    name: "EVENTS & LOGISTICS HEAD",
    designation: "Lead Event Organizer",
    role: "Operations & Venue Logistics",
    section: "CORE TEAM",
    department: "Operations Wing",
    description:
      "Managing stage, auditorium coordination, guest speaker protocols, and tech logistics for flagship events like Pragya and Quizkaar.",
    isPlaceholder: true,
    avatarPlaceholderText: "Events Lead",
  },
  {
    id: "team-vol-1",
    name: "STUDENT VOLUNTEER CORPS",
    designation: "Active Volunteer Network",
    role: "Session Coordination & Peer Support",
    section: "STUDENT VOLUNTEERS",
    department: "Campus Student Ambassadors",
    description:
      "Dedicated cohort of undergraduate aspirants facilitating workshop operations, registration desks, and peer study circles.",
    isPlaceholder: true,
    avatarPlaceholderText: "Volunteers",
  },
];
