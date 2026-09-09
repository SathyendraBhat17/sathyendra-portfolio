// Portfolio content data

export const personalData = {
  name: "Sathyendra Bhat",

  label: "Computer Science Engineering Student | Aspiring Software Engineer",

  subheading:
    "Passionate about building scalable web applications, solving real-world problems, and creating intuitive digital experiences through clean code.",

  bioParagraph1:
    "I'm a Computer Science Engineering student at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. I build full stack applications that pair thoughtful user experiences with efficient backend architecture, while exploring Software Engineering, Artificial Intelligence, and modern web technologies.",

  contact: {
    email: "sathyendrabhat2005@gmail.com",
    linkedin: "https://www.linkedin.com/in/sathyendrabhat/",
    github: "https://github.com/SathyendraBhat17",
  },
};

export const skillsData = [
  // Languages
  { name: "Java", category: "languages" },
  { name: "C", category: "languages" },
  { name: "C++", category: "languages" },
  { name: "Python", category: "languages" },
  { name: "JavaScript", category: "languages" },

  // Frontend
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend" },
  { name: "React.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Redux Toolkit", category: "frontend" },

  // Backend
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "REST APIs", category: "backend" },

  // Database
  { name: "MongoDB", category: "database" },
  { name: "MySQL", category: "database" },
  { name: "Neo4j", category: "database" },

  // Tools
  { name: "Git", category: "tools" },
  { name: "GitHub", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "Postman", category: "tools" },
  { name: "Vite", category: "tools" },
  { name: "npm", category: "tools" },

  // Other
  { name: "Data Structures & Algorithms", category: "other" },
  { name: "Object-Oriented Programming", category: "other" },
  { name: "DBMS", category: "other" },
  { name: "Operating Systems", category: "other" },
  { name: "Computer Networks", category: "other" },
  { name: "Software Engineering", category: "other" },
];

export const projectsData = [
  {
    title: "Learnify",
    category: "ai",
    description:
      "An AI-powered learning platform that generates summaries, flashcards, and quizzes to create a personalized learning experience.",
    image: "/projects/learnify.webp",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Gemini API",
      "JWT",
    ],
    github: "https://github.com/SathyendraBhat17/learnify",
  },

  {
    title: "InterviewPrep AI",
    category: "ai",
    description:
      "An AI-powered interview preparation platform that generates role-specific interview questions, evaluates responses, and provides personalized feedback.",
    image: "/projects/interviewprep-ai.webp",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Gemini API",
    ],
    github: "https://github.com/SathyendraBhat17/InterviewPrep-AI",
  },

  {
    title: "Code Equalize",
    category: "ai",
    description:
      "A multilingual AI-powered VS Code extension that leverages Retrieval-Augmented Generation (RAG) and ChromaDB to provide context-aware error explanations and intelligent debugging assistance.",
    image: "/projects/code-equalize.webp",
    tech: [
      "AI Integration",
      "RAG",
      "ChromaDB",
    ],
    github: "https://github.com/SathyendraBhat17/code-equalize",
  },
];

export const educationData = [
  {
    degree: "Bachelor of Engineering in Computer Science & Engineering",
    institution:
      "Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal",
    period: "2023 – 2027",
    cgpa: "9.30",
    description:
      "Currently pursuing a Bachelor's degree in Computer Science Engineering with a strong focus on Software Engineering, Full Stack Development, Artificial Intelligence, Database Management Systems, Computer Networks, and Data Structures & Algorithms.",
  },

  {
    degree: "Pre-University Course (PCMC)",
    institution: "Sri Venkataramana Pre-University College, Kundapura",
    period: "2021 – 2023",
    cgpa: "97%",
    description:
      "Completed the Karnataka State Board Pre-University Course in Physics, Chemistry, Mathematics, and Computer Science (PCMC), securing 97%.",
  },

  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution:
      "VKR Acharya Memorial English High School, Kundapura",
    period: "2020 – 2021",
    cgpa: "99.68%",
    description:
      "Completed SSLC under the Karnataka State Board with 99.68%, demonstrating consistent academic excellence.",
  },
];

export const certificationsData = [
  {
    title: "AI Literacy",
    issuer: "IBM SkillsBuild",
    date: "05 Feb 2026",
    certificateUrl: "/certificates/ai-literacy.pdf",
    linkedinUrl: "https://www.linkedin.com/posts/sathyendrabhat_ai-literacy-building-a-strong-foundation-activity-7495101788077977600-vVuA",
  },
  {
    title: "Databricks Fundamentals Accreditation",
    issuer: "Databricks Academy",
    date: "15 Aug 2026",
    certificateUrl: "/certificates/databricks-fundamentals.pdf",
    linkedinUrl: "https://www.linkedin.com/posts/sathyendrabhat_databricks-fundamentals-data-ai-foundations-activity-7495104082454560768-5CZ3",
  },
  {
    title: "Claude 101",
    issuer: "Anthropic",
    date: "",
    certificateUrl: "/certificates/claude-101.pdf",
    linkedinUrl: "https://www.linkedin.com/posts/sathyendrabhat_claude-101-introduction-to-ai-with-anthropic-activity-7495103155790176276-ys9-",
  },
  {
    title: "Claude Code 101",
    issuer: "Anthropic",
    date: "",
    certificateUrl: "/certificates/claude-code-101.pdf",
    linkedinUrl: "https://www.linkedin.com/posts/sathyendrabhat_claude-code-101-introduction-to-ai-powered-activity-7495103496598269952-Uvqa",
  },
];
