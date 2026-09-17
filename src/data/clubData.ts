export interface ClubIdentity {
  name: string;
  tagline: string;
  secondaryPositioning: string;
  institution: string;
  city: string;
  state: string;
  country: string;
  address: string;
  pincode: string;
  coordinates: {
    lat: string;
    lng: string;
  };
  contactEmail: string;
  instagramUrl: string;
  whatsappCommunityUrl: string;
  linkedinUrl: string;
  registrationFormUrl: string;
  volunteerFormUrl: string;
}

export interface KeyPillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  focusAreas: string[];
}

export const CLUB_IDENTITY: ClubIdentity = {
  name: "KLE TECH UPSC ASPIRANTS CLUB",
  tagline: "FROM CAMPUS TO CIVIL SERVICES.",
  secondaryPositioning: "Discover. Prepare. Learn. Aspire. Serve.",
  institution: "KLE Technological University",
  city: "Hubballi",
  state: "Karnataka",
  country: "India",
  address: "B. V. Bhoomaraddi Campus, Vidyanagar, Hubballi",
  pincode: "580031",
  coordinates: {
    lat: "15.3647° N",
    lng: "75.1240° E",
  },
  contactEmail: "upsc.club@kletech.ac.in",
  instagramUrl: "https://instagram.com/kletech_upsc",
  whatsappCommunityUrl: "https://chat.whatsapp.com/invite/kletech-upsc",
  linkedinUrl: "https://linkedin.com/company/kle-tech-upsc-club",
  registrationFormUrl: "https://forms.gle/kletech-upsc-register",
  volunteerFormUrl: "https://forms.gle/kletech-upsc-volunteer",
};

export const THREE_KEY_PILLARS: KeyPillar[] = [
  {
    number: "01",
    title: "AWARENESS",
    subtitle: "DISCOVER THE WORLD OF CIVIL SERVICES",
    description:
      "We introduce students to UPSC, Civil Services, public administration, and diverse public-service career opportunities through orientation programmes, awareness sessions, interactive activities, quizzes, and discussions.",
    focusAreas: [
      "UPSC & Civil Services Awareness",
      "Career Exploration",
      "Current Affairs",
      "Interactive Knowledge Activities",
      "Public-Service Orientation",
    ],
  },
  {
    number: "02",
    title: "PREPARATION",
    subtitle: "BUILD KNOWLEDGE. DEVELOP SKILLS. PREPARE WITH PURPOSE.",
    description:
      "We encourage students to develop a structured approach towards competitive examinations through study-oriented activities, mock examinations, answer writing, discussions, quizzes, and collaborative learning.",
    focusAreas: [
      "Prelims & Mains Orientation",
      "Mock Tests & Practice",
      "Answer Writing",
      "Subject-Based Activities",
      "Critical & Analytical Thinking",
    ],
  },
  {
    number: "03",
    title: "MENTORSHIP",
    subtitle: "LEARN FROM EXPERIENCE. GROW WITH GUIDANCE.",
    description:
      "We connect aspiring students with successful candidates, alumni, civil servants, faculty members, and subject experts, providing practical insights into preparation, career pathways, challenges, and life beyond the examination.",
    focusAreas: [
      "Expert Interactions",
      "Alumni Connect",
      "Civil Servant Interactions",
      "Career Guidance",
      "Peer & Professional Mentorship",
    ],
  },
];

export const VISION_DATA = {
  heading: "OUR VISION",
  mainStatement:
    "To build a strong and informed community of future public-service leaders by creating awareness, providing meaningful mentorship, strengthening competitive-examination preparation, and nurturing leadership, integrity, analytical thinking, and a deep commitment to nation-building.",
  supportingStatement:
    "Our objective is not merely to prepare students for an examination, but to inspire them to understand the larger purpose of public administration and their potential role in shaping society.",
  progression: [
    { from: "AWARENESS", to: "ASPIRATION" },
    { from: "ASPIRATION", to: "PREPARATION" },
    { from: "PREPARATION", to: "PURPOSEFUL PUBLIC SERVICE" },
  ],
};

export const SIGNATURE_PHRASES = [
  "FROM CAMPUS TO CIVIL SERVICES.",
  "DISCOVER. PREPARE. LEARN.",
  "FROM AWARENESS TO ASPIRATION.",
  "FROM ASPIRATION TO PREPARATION.",
  "FROM PREPARATION TO PURPOSEFUL PUBLIC SERVICE.",
  "LEARN. THINK. ENGAGE. LEAD.",
  "WHERE ASPIRATION MEETS GUIDANCE.",
  "KNOWLEDGE THAT INSPIRES. GUIDANCE THAT EMPOWERS.",
];
