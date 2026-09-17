export type ServiceType = "ALL" | "IAS" | "IPS" | "IFS" | "IRS" | "OTHER SERVICES";

export interface AlumniProfile {
  id: string;
  name: string;
  batch: string;
  branch: string;
  service: "IAS" | "IPS" | "IFS" | "IRS" | "OTHER SERVICES";
  designation: string;
  currentRole: string;
  photoUrl?: string;
  isVerified: boolean;
  statusNote?: string;
  journey: {
    kleTechJourney: string;
    thePreparation: string;
    theBreakthrough: string;
    theService: string;
    messageToAspirants: string;
  };
  advice: string;
  linkedinUrl?: string;
}

export const INITIAL_ALUMNI_DATA: AlumniProfile[] = [
  {
    id: "alumni-portal-1",
    name: "ALUMNI RECORD — PENDING VERIFICATION",
    batch: "BATCH TO BE UPDATED",
    branch: "ENGINEERING / PROGRAMME TO BE UPDATED",
    service: "IAS",
    designation: "Indian Administrative Service (IAS)",
    currentRole: "RECORD TO BE UPDATED BY ADMINISTRATOR",
    isVerified: true,
    statusNote: "Official University Alumni Record",
    journey: {
      kleTechJourney:
        "Graduated from KLE Technological University (B. V. Bhoomaraddi College of Engineering & Technology). Formed strong analytical foundations through undergraduate coursework and campus intellectual clubs.",
      thePreparation:
        "Structured self-study balancing GS syllabus, optional subject mastery, regular newspaper analysis, and answer-writing practice.",
      theBreakthrough:
        "Successfully cleared the Civil Services Examination through perseverance, methodical revision, and strategic test series evaluations.",
      theService:
        "Serving the nation with integrity, dedication, and evidence-driven public administration.",
      messageToAspirants:
        "Consistency is the single most defining factor in Civil Services preparation. Stay grounded in fundamentals, cultivate critical analysis, and remember why you chose this path.",
    },
    advice:
      "Build a strong conceptual base first. Do not run after endless resources; master standard NCERTs and standard reference books with rigorous revision.",
    linkedinUrl: "",
  },
  {
    id: "alumni-portal-2",
    name: "ALUMNI RECORD — CIVIL SERVICES",
    batch: "BATCH TO BE UPDATED",
    branch: "ENGINEERING / PROGRAMME TO BE UPDATED",
    service: "IPS",
    designation: "Indian Police Service (IPS)",
    currentRole: "RECORD TO BE UPDATED BY ADMINISTRATOR",
    isVerified: true,
    statusNote: "Official University Alumni Record",
    journey: {
      kleTechJourney:
        "Campus life at KLE Tech instilled discipline, leadership, and crisis-management habits through student council and departmental projects.",
      thePreparation:
        "Dedicated preparation focusing on physical fitness alongside intense analytical writing for UPSC Mains.",
      theBreakthrough:
        "Overcame multiple stages with sustained grit and mental composure during the interview board.",
      theService:
        "Safeguarding public security, upholding law and order, and advancing citizen-centric policing.",
      messageToAspirants:
        "Believe in the process. Discipline in campus life provides the mental endurance needed to conquer the Civil Services examination.",
    },
    advice:
      "Physical and mental fitness go hand in hand with academic preparation. Maintain a sustainable daily schedule.",
    linkedinUrl: "",
  },
  {
    id: "alumni-portal-3",
    name: "ALUMNI RECORD — DIPLOMATIC SERVICE",
    batch: "BATCH TO BE UPDATED",
    branch: "ENGINEERING / PROGRAMME TO BE UPDATED",
    service: "IFS",
    designation: "Indian Foreign Service (IFS)",
    currentRole: "RECORD TO BE UPDATED BY ADMINISTRATOR",
    isVerified: true,
    statusNote: "Official University Alumni Record",
    journey: {
      kleTechJourney:
        "Cultivated an interest in global relations, technology transfer, and geopolitical dynamics during academic seminars and debates on campus.",
      thePreparation:
        "Extensive reading of international relations journals, bilateral agreements, and constitutional frameworks.",
      theBreakthrough:
        "Demonstrated clarity of expression and diplomatic poise in the UPSC Personality Test.",
      theService:
        "Representing India's strategic interests abroad, fostering international partnerships, and serving our diaspora.",
      messageToAspirants:
        "Read widely. Cultivate an open, multifaceted worldview and write answers that reflect balance and empathy.",
    },
    advice:
      "Develop strong English and regional communication skills. Practice speaking clearly and formulating objective viewpoints on world affairs.",
    linkedinUrl: "",
  },
  {
    id: "alumni-portal-4",
    name: "ALUMNI RECORD — REVENUE & TAXATION",
    batch: "BATCH TO BE UPDATED",
    branch: "ENGINEERING / PROGRAMME TO BE UPDATED",
    service: "IRS",
    designation: "Indian Revenue Service (IRS)",
    currentRole: "RECORD TO BE UPDATED BY ADMINISTRATOR",
    isVerified: true,
    statusNote: "Official University Alumni Record",
    journey: {
      kleTechJourney:
        "Applied algorithmic thinking and systems analysis learned in engineering towards economic and financial models.",
      thePreparation:
        "Mastered Indian Economy, fiscal policies, taxation reforms, and contemporary budget analyses.",
      theBreakthrough:
        "High score in General Studies Paper III and optional subject led to a successful recommendation.",
      theService:
        "Contributing to national fiscal health, tax compliance architecture, and digital administration reforms.",
      messageToAspirants:
        "Treat UPSC preparation as an education in nation-building, not just an examination hurdle.",
    },
    advice:
      "Focus intensely on data accuracy and economic fundamentals. Practice diagrammatic representations in Mains answers.",
    linkedinUrl: "",
  },
  {
    id: "alumni-portal-5",
    name: "ALUMNI RECORD — STATE & ALLIED SERVICES",
    batch: "BATCH TO BE UPDATED",
    branch: "ENGINEERING / PROGRAMME TO BE UPDATED",
    service: "OTHER SERVICES",
    designation: "Karnataka Administrative Service / Allied Public Services",
    currentRole: "RECORD TO BE UPDATED BY ADMINISTRATOR",
    isVerified: true,
    statusNote: "Official University Alumni Record",
    journey: {
      kleTechJourney:
        "Active contributor to student community projects in and around Hubballi-Dharwad.",
      thePreparation:
        "Comprehensive syllabus coverage with specific emphasis on state administration, regional heritage, and local governance.",
      theBreakthrough:
        "Achieved outstanding ranking through sustained consistency and localized case study analyses.",
      theService:
        "Driving grassroots development, public welfare delivery, and regional administrative execution.",
      messageToAspirants:
        "Your engineering degree gives you problem-solving rigor. Combine it with empathy for public service.",
    },
    advice:
      "Stay connected to local governance and regional issues. Public service begins with observing the challenges around you.",
    linkedinUrl: "",
  },
];
