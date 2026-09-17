export type KnowledgeCategory =
  | "ALL"
  | "UPSC BASICS"
  | "CURRENT AFFAIRS"
  | "POLITY"
  | "HISTORY"
  | "GEOGRAPHY"
  | "ECONOMY"
  | "ENVIRONMENT"
  | "ANSWER WRITING"
  | "INTERVIEW PREPARATION"
  | "STUDY RESOURCES";

export interface KnowledgeArticle {
  id: string;
  slug: string;
  title: string;
  category: KnowledgeCategory;
  readTime: string;
  publishedDate: string;
  author: string;
  shortDescription: string;
  keyTakeaways: string[];
  content: string;
  downloadUrl?: string;
}

export const KNOWLEDGE_CATEGORIES: KnowledgeCategory[] = [
  "ALL",
  "UPSC BASICS",
  "CURRENT AFFAIRS",
  "POLITY",
  "HISTORY",
  "GEOGRAPHY",
  "ECONOMY",
  "ENVIRONMENT",
  "ANSWER WRITING",
  "INTERVIEW PREPARATION",
  "STUDY RESOURCES",
];

export const KNOWLEDGE_ARTICLES: KnowledgeArticle[] = [
  {
    id: "kb-01",
    slug: "upsc-examination-architecture-decoded",
    title: "The Architecture of UPSC Civil Services Examination: Prelims to Personality Test",
    category: "UPSC BASICS",
    readTime: "8 min read",
    publishedDate: "January 2025",
    author: "KLE Tech UPSC Academic Committee",
    shortDescription:
      "A comprehensive guide for university students deconstructing the three distinct phases of CSE: Prelims (GS + CSAT), Mains (9 Papers), and the Personality Test.",
    keyTakeaways: [
      "Understanding the objective filtering nature of Prelims (cutoffs vs qualifying CSAT)",
      "Mains structure: Essay, 4 General Studies papers, and Optional Subject selection",
      "Personality Test: Not a knowledge quiz, but an evaluation of mental alertness, integrity, and balance of judgement",
    ],
    content: `The Civil Services Examination (CSE) conducted annually by the Union Public Service Commission (UPSC) is widely recognized as one of the most rigorous competitive examinations globally. For engineering and university students at KLE Tech, demystifying this architecture is the indispensable first step.

### 1. Stage I: Preliminary Examination (Objective)
- **Paper I (General Studies - 200 Marks, 100 Questions):** Tests History, Geography, Polity, Economy, Environment, Science & Technology, and Current Events. Marks in this paper determine clearance for the Mains cutoff.
- **Paper II (CSAT - 200 Marks, 80 Questions):** Tests Comprehension, Interpersonal skills, Logical Reasoning, and Basic Numeracy. This paper is purely qualifying (requiring 33% or 66 marks).

### 2. Stage II: Mains Examination (Written Descriptive)
Consists of 9 papers written over five days:
- Two Qualifying Language Papers (English + Indian Language)
- Paper I: Essay (250 Marks)
- Paper II: GS-I (Indian Heritage & Culture, History & Geography of the World and Society)
- Paper III: GS-II (Governance, Constitution, Polity, Social Justice & International Relations)
- Paper IV: GS-III (Technology, Economic Development, Bio-diversity, Environment, Security & Disaster Management)
- Paper V: GS-IV (Ethics, Integrity & Aptitude)
- Papers VI & VII: Optional Subject (Paper 1 & 2 - 250 Marks each)

### 3. Stage III: The Personality Test (275 Marks)
The Interview Board evaluates the candidate's moral integrity, clarity of thought, unbiased social outlook, capacity for leadership, and intellectual curiosity.`,
  },
  {
    id: "kb-02",
    slug: "mastering-indian-polity-laxmikanth-framework",
    title: "Constitutional Core: Mastering Indian Polity & Fundamental Rights for GS-II",
    category: "POLITY",
    readTime: "10 min read",
    publishedDate: "February 2025",
    author: "KLE Tech UPSC Study Circle",
    shortDescription:
      "Strategic roadmap to navigating Part III (Fundamental Rights), Part IV (DPSP), Judicial Review, and Federalism with case law analysis.",
    keyTakeaways: [
      "Distinction between enforceable Fundamental Rights and directive governance principles",
      "Key landmark Supreme Court judgments (Kesavananda Bharati, Maneka Gandhi, Puttaswamy)",
      "Inter-state council, financial devolution, and Centre-State relations",
    ],
    content: `Indian Polity represents the single most consistent and scoring component across both Prelims and Mains (GS Paper II). 

### Essential Pillars:
1. **Constitutional Framework & Preamble:** Sovereign, Socialist, Secular, Democratic, Republic. Understand basic structure doctrine.
2. **Fundamental Rights (Articles 12 to 35):** Emphasize Article 14 (Equality), Article 19 (Six Freedoms), Article 21 (Life & Personal Liberty), and Article 32 (Constitutional Remedies).
3. **Union Executive & Parliament:** Powers of the President, Parliamentary Committees, Ordinance-making powers, and legislative checks and balances.
4. **Federal Structure:** Seventh Schedule distribution, emergency provisions, and cooperative federalism in practice.`,
  },
  {
    id: "kb-03",
    slug: "mains-answer-writing-structure-and-ethics",
    title: "The Art of Mains Answer Writing: The Introduction-Body-Conclusion (IBC) Blueprint",
    category: "ANSWER WRITING",
    readTime: "7 min read",
    publishedDate: "January 2025",
    author: "KLE Tech Mentorship Cell",
    shortDescription:
      "Techniques for producing structured, multi-dimensional answers within strict time constraints (7-8 minutes per question).",
    keyTakeaways: [
      "Crisp definition or context-setting introduction (20-30 words)",
      "Multi-dimensional body using PESTLE framework (Political, Economic, Social, Technological, Legal, Environmental)",
      "Forward-looking, balanced conclusion with constitutional or committee references",
    ],
    content: `In UPSC Mains, knowledge is only raw material; answer presentation and time management decide rank. Writing 20 answers in 180 minutes requires automated cognitive structuring.

### 1. The Opening (Introduction)
- Provide a precise constitutional article, recognized international definition (e.g., WHO, World Bank), or recent statistical anchor.
- Avoid lengthy narrative preambles.

### 2. The Core Analysis (Body)
- Break down multi-part questions into distinct subheadings.
- Use point format with bold keyword anchors.
- Integrate simple flowcharts, spatial India maps, and diagrams where relevant.
- Address both sides of policy debate objectively.

### 3. Way Forward (Conclusion)
- Suggest constructive, administrative solutions.
- Cite recommendations from 2nd ARC (Administrative Reforms Commission), Law Commission, or NITI Aayog documents.`,
  },
  {
    id: "kb-04",
    slug: "demystifying-indian-geography-mapping",
    title: "Indian Geography & Topography: Interactive Spatial Memorization for Aspirants",
    category: "GEOGRAPHY",
    readTime: "6 min read",
    publishedDate: "December 2024",
    author: "KLE Tech Geography Wing",
    shortDescription:
      "Synthesizing lessons from our Indian Geography Mapping session: major river systems, mountain passes, and critical agro-climatic zones.",
    keyTakeaways: [
      "Himalayan vs Peninsular river drainage characteristics and east/west flowing distinctions",
      "Western Ghats ecology, passes (Palghat, Thalghat, Bhorghat), and conservation zones",
      "Strategic straits, ports, and critical mineral belts of Peninsular India",
    ],
    content: `Geography bridges scientific understanding with human settlement patterns and economic activity.

### The Mapping Method:
- Draw India's outline map in under 20 seconds.
- Group river systems by origin: Indus basin, Ganga-Brahmaputra system, and Peninsular rivers (Godavari, Krishna, Cauvery, Narmada, Tapi).
- Mark biosphere reserves, Ramsar wetland sites, and tiger reserves along latitude lines.`,
  },
  {
    id: "kb-05",
    slug: "approaching-ethics-integrity-gs4-case-studies",
    title: "Navigating Ethics, Integrity & Aptitude (GS-IV): Case Study Resolution Matrix",
    category: "INTERVIEW PREPARATION",
    readTime: "9 min read",
    publishedDate: "November 2024",
    author: "KLE Tech Ethics & Debate Forum",
    shortDescription:
      "A systematic framework for resolving complex administrative ethical dilemmas involving conflicting duties, political pressure, and empathy.",
    keyTakeaways: [
      "Identifying all stakeholders (citizens, administration, vulnerable sections, self)",
      "Evaluating options through ethical frameworks: Deontology, Utilitarianism, and Constitutional Morality",
      "Designing viable executive action plans that safeguard integrity without paralysis",
    ],
    content: `GS Paper IV tests whether an aspirant possesses the emotional intelligence, moral courage, and bureaucratic wisdom to uphold the Constitution under acute adversity.

### The 5-Step Case Study Method:
1. **Identify the core ethical dilemma:** e.g., Duty towards strict procedure vs Compassion towards destitute beneficiary.
2. **Map Stakeholders:** Direct and indirect individuals impacted.
3. **Evaluate Course of Actions:** Option A (Pros/Cons), Option B (Pros/Cons), Preferred Pragmatic Option.
4. **Justify using Constitutional values:** Empathy, probity, transparency, Rule of Law.
5. **Implement Preventive Long-term Safeguard:** Systemic reform to prevent future occurrence.`,
  },
  {
    id: "kb-06",
    slug: "essential-upsc-resource-compendium",
    title: "Standard Reference Compendium: Essential Booklist & Open Institutional Portals",
    category: "STUDY RESOURCES",
    readTime: "5 min read",
    publishedDate: "February 2025",
    author: "KLE Tech UPSC Resource Library",
    shortDescription:
      "The definitive, clutter-free booklist compiled for college students starting their civil services preparation journey.",
    keyTakeaways: [
      "NCERT Class 6-12 foundational textbooks across History, Geography, Polity & Economics",
      "Standard references: Laxmikanth (Polity), Spectrum (Modern India), Shankar/PMF (Environment), Ramesh Singh/Mrunal (Economy)",
      "Official government portals: PIB (Press Information Bureau), PRS Legislative Research, Rajya Sabha Debates",
    ],
    content: `UPSC preparation is defined not by how many books you read, but by how many times you revise standard, authoritative sources.

### Core Foundation:
- **Polity:** *Indian Polity* by M. Laxmikanth + Bare Act of the Constitution of India.
- **Modern History:** *A Brief History of Modern India* by Spectrum + Bipan Chandra.
- **Geography:** NCERTs Class 11 (Fundamentals of Physical Geography & India: Physical Environment) + Orient BlackSwan Atlas.
- **Economy:** Class 11-12 NCERTs + Economic Survey summary & Union Budget highlights.
- **Environment:** Shankar IAS / PMF IAS Environment + MoEFCC Annual Reports.
- **Current Affairs:** The Hindu / The Indian Express editorial analysis + monthly PIB digests.`,
  },
];
