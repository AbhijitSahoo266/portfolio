import { jsPDF } from "jspdf";
import { calculateExperience } from "./experience";

// Helper function: HEX (#00abf0) to RGB ([0, 171, 240])
const hexToRgb = (hex) => {
  let c = hex.replace("#", "");
  if (c.length === 3) {
    c = c.split("").map((char) => char + char).join("");
  }
  const num = parseInt(c, 16);
  return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
};

// Internal builder: contains all your updated jsPDF generation logic
const buildCVDoc = () => {
  const savedThemeHex = localStorage.getItem("portfolioThemeColor") || "#00abf0";
  const [themeR, themeG, themeB] = hexToRgb(savedThemeHex);
  const dynamicExp = calculateExperience("2023-05-01");

  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  let y = 14;

  const checkPageBreak = (neededHeight = 14) => {
    if (y + neededHeight > 275) {
      doc.addPage();
      y = 16;
    }
  };

  const renderFormattedBullet = (prefix, text, x, maxWidth) => {
    checkPageBreak(8);
    const keywords = [
      "React.js",
      "Next.js",
      "React Native",
      "React Query",
      "Redux Toolkit",
      "Zustand",
      "Redux",
      "Material UI",
      "Tailwind CSS",
      "Axios",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "MERN",
      "RBAC",
      "Role-Based Access Control",
      "Keycloak",
      "Lazy Loading",
      "Code Splitting",
      "Memoization",
      "REST API",
      "REST APIs",
      "RESTful APIs",
      "SLA monitoring",
      "Finance Module",
      "Bulk SMS",
      "Bulk Email",
      "Context API",
      "JWT",
      "JWT Authentication",
    ];

    const regex = new RegExp(`(${keywords.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "gi");
    const parts = text.split(regex);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(50, 50, 50);

    doc.text(prefix, x, y);
    let curX = x + 4;

    parts.forEach((part) => {
      if (!part) return;

      const isKeyword = keywords.some((k) => k.toLowerCase() === part.toLowerCase());

      if (isKeyword) {
        doc.setFont("helvetica", "bold");
        doc.setTextColor(8, 27, 41);
      } else {
        doc.setFont("helvetica", "normal");
        doc.setTextColor(50, 50, 50);
      }

      const words = part.split(" ");
      words.forEach((word, idx) => {
        const wordWithSpace = idx === words.length - 1 ? word : word + " ";
        const wordWidth = doc.getTextWidth(wordWithSpace);

        if (curX + wordWidth > x + maxWidth) {
          y += 4;
          curX = x + 4;
          checkPageBreak(6);
        }

        doc.text(wordWithSpace, curX, y);
        curX += wordWidth;
      });
    });

    y += 4.5;
  };

  // 1. HEADER SECTION
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(8, 27, 41);
  doc.text("ABHIJIT SAHOO", 15, y);

  y += 6.5;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11.5);
  doc.setTextColor(themeR, themeG, themeB);
  doc.text("Frontend Engineer | MERN Stack Developer", 15, y);

  // CONTACT INFO WITH CLICKABLE HYPERLINKS
  y += 5.5;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(40, 40, 40);
  doc.text("Bhadrak, Odisha - 756122 | Phone: +91-9114126106", 15, y);

  // Line 2: Email & Portfolio Website
  y += 4.8;
  doc.setFont("helvetica", "normal");
  doc.setTextColor(0, 102, 204);

  const emailText = "abhijitsahoo266@gmail.com";
  doc.textWithLink(emailText, 15, y, { url: "mailto:abhijitsahoo266@gmail.com" });

  let line2X = 15 + doc.getTextWidth(emailText);
  doc.setTextColor(140, 140, 140);
  doc.text("   |   ", line2X, y);

  line2X += doc.getTextWidth("   |   ");

  doc.setTextColor(0, 102, 204);
  const portfolioText = "abhijitsahoo.vercel.app";
  doc.textWithLink(portfolioText, line2X, y, { url: "https://abhijitsahoo.vercel.app" });

  // Line 3: GitHub & LinkedIn Profiles
  y += 4.8;
  const githubText = "github.com/AbhijitSahoo266";
  doc.textWithLink(githubText, 15, y, { url: "https://github.com/AbhijitSahoo266" });

  let line3X = 15 + doc.getTextWidth(githubText);
  doc.setTextColor(140, 140, 140);
  doc.text("   |   ", line3X, y);

  line3X += doc.getTextWidth("   |   ");

  doc.setTextColor(0, 102, 204);
  const linkedinText = "linkedin.com/in/abhijit-sahoo-697913261";
  doc.textWithLink(linkedinText, line3X, y, { url: "https://linkedin.com/in/abhijit-sahoo-697913261" });

  // SECTION TITLE GENERATOR
  const addSectionTitle = (title) => {
    y += 6.5;
    checkPageBreak(12);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(themeR, themeG, themeB);
    doc.text(title.toUpperCase(), 15, y);

    y += 1.8;
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.4);
    doc.line(15, y, 195, y);
    y += 5.5;
  };

  // 2. PROFESSIONAL SUMMARY
  addSectionTitle("Professional Summary");

  const summaryText = `Frontend Engineer and MERN Stack Developer with ${dynamicExp} of experience building scalable, high-performance web applications using React.js, Next.js, Node.js, and modern JavaScript. Experienced in developing reusable UI components, integrating RESTful APIs, and managing application state using Redux Toolkit, Zustand, and Context API. Hands-on experience across the MERN stack (MongoDB, Express.js, React.js, Node.js), along with authentication and authorization using JWT, RBAC, and Keycloak. Strong focus on responsive UI development, frontend performance optimization, clean and maintainable code, and production-ready application delivery in Agile environments.`;

  const summaryKeywords = [
    "Frontend Engineer",
    "MERN Stack Developer",
    dynamicExp,
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "RESTful APIs",
    "Redux Toolkit",
    "Zustand",
    "JWT",
    "RBAC",
    "Keycloak",
    "performance optimization",
    "Agile",
  ];

  const renderFormattedSummary = (text, x, maxWidth) => {
    const regex = new RegExp(`(${summaryKeywords.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "gi");
    const parts = text.split(regex);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(50, 50, 50);

    let curX = x;

    parts.forEach((part) => {
      if (!part) return;

      const isKeyword = summaryKeywords.some((k) => k.toLowerCase() === part.toLowerCase());

      if (isKeyword) {
        doc.setFont("helvetica", "bold");
        doc.setTextColor(8, 27, 41);
      } else {
        doc.setFont("helvetica", "normal");
        doc.setTextColor(50, 50, 50);
      }

      const words = part.split(" ");
      words.forEach((word, idx) => {
        const wordWithSpace = idx === words.length - 1 ? word : word + " ";
        const wordWidth = doc.getTextWidth(wordWithSpace);

        if (curX + wordWidth > x + maxWidth) {
          y += 4.5;
          curX = x;
          checkPageBreak(6);
        }

        doc.text(wordWithSpace, curX, y);
        curX += wordWidth;
      });
    });

    y += 5;
  };

  renderFormattedSummary(summaryText, 15, 180);

  // 3. TECHNICAL SKILLS
  addSectionTitle("Technical Skills");
  const coreSkillKeywords = [
    "React.js",
    "Next.js",
    "React Native",
    "JavaScript (ES6+)",
    "React Query",
    "Redux Toolkit",
    "Zustand",
    "Tailwind CSS",
    "Material UI",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "JWT Authentication",
    "RBAC",
    "Keycloak",
    "Lazy Loading",
    "Code Splitting",
    "Docker",
    "Git",
    "Agile (Scrum)",
  ];

  const skillsList = [
    { cat: "Frontend:", val: "React.js, Next.js, React Native, JavaScript (ES6+), HTML5, CSS3" },
    { cat: "State & Data Fetching:", val: "Redux Toolkit, Redux, Zustand, React Query, Context API" },
    { cat: "UI Frameworks & Styling:", val: "Material UI, Tailwind CSS, Bootstrap" },
    { cat: "Backend:", val: "Node.js, Express.js, RESTful APIs" },
    { cat: "Databases:", val: "MongoDB, PostgreSQL" },
    { cat: "Authentication & Security:", val: "JWT Authentication, RBAC, Keycloak" },
    { cat: "Performance Optimization:", val: "Lazy Loading, Code Splitting, Memoization, Bundle Optimization, Virtualization" },
    { cat: "Tools:", val: "Git, GitHub, GitLab, Jira, Postman, Docker, SonarQube" },
    { cat: "Methodologies:", val: "Agile (Scrum), SDLC, Code Reviews, Reusable Component Architecture" },
  ];

  skillsList.forEach((s) => {
    checkPageBreak(7);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    doc.setTextColor(8, 27, 41);
    doc.text(`• ${s.cat}`, 15, y);
    const skillParts = s.val.split(", ");
    let curX = 68;

    skillParts.forEach((skill, idx) => {
      const isKeySkill = coreSkillKeywords.includes(skill.trim());
      const textToPrint = idx === skillParts.length - 1 ? skill : skill + ", ";

      if (isKeySkill) {
        doc.setFont("helvetica", "bold");
        doc.setTextColor(8, 27, 41);
      } else {
        doc.setFont("helvetica", "normal");
        doc.setTextColor(70, 70, 70);
      }

      const itemWidth = doc.getTextWidth(textToPrint);

      if (curX + itemWidth > 195) {
        y += 4.3;
        curX = 68;
        checkPageBreak(5);
      }

      doc.text(textToPrint, curX, y);
      curX += itemWidth;
    });

    y += 4.5;
  });

  // 4. PROFESSIONAL EXPERIENCE
  addSectionTitle("Professional Experience");

  // Distinct Unique Color for Job Headers (Rich Corporate Blue)
  const headerRoleR = 26;
  const headerRoleG = 86;
  const headerRoleB = 219;

  // --- JOB 1: COMMINENT PVT. LTD. ---
  checkPageBreak(14);

  // Role Title (Dark Slate)
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  // doc.setTextColor(8, 27, 41);
  doc.setTextColor(headerRoleR, headerRoleG, headerRoleB);
  doc.text("Software Engineer", 15, y);

  let curHeader1X = 15 + doc.getTextWidth("Software Engineer");

  // Separator
  doc.setFont("helvetica", "normal");
  doc.setTextColor(150, 150, 150);
  doc.text(" | ", curHeader1X, y);

  curHeader1X += doc.getTextWidth(" | ");

  // Company Name (Unique Corporate Blue)
  doc.setFont("helvetica", "bold");
  doc.setTextColor(themeR, themeG, themeB);
  doc.text("Comminent Pvt. Ltd.", curHeader1X, y);

  // Date & Location
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(100, 100, 100);
  doc.text("Bengaluru, Karnataka | Nov 2025 – Present", 125, y);
  y += 5;

  const job1Bullets = [
    "Developed enterprise-grade web applications and real-time monitoring dashboards using React.js for Smart Metering analytics.",
    "Built reusable, configurable, and scalable UI components for enterprise applications, improving development efficiency and maintainability.",
    "Integrated REST APIs and implemented server-state management using React Query, with client-side state management using Redux Toolkit and Zustand.",
    "Developed advanced features including dynamic tables, filtering, sorting, export functionality, and server-side pagination for large datasets.",
    "Implemented Role-Based Access Control (RBAC) and Keycloak authentication for secure module access.",
    "Optimized frontend performance using Lazy Loading, Code Splitting, Memoization, and efficient state management techniques.",
    "Developed monitoring, analytics, SLA monitoring, device health, and operational reporting interfaces for Smart Metering systems.",
    "Collaborated with backend, QA, and cross-functional teams in an Agile environment, participating in code reviews and feature delivery.",
  ];

  job1Bullets.forEach((bullet) => {
    renderFormattedBullet("•", bullet, 15, 175);
  });

  y += 2;

  // --- JOB 2: ABSEC LAB PVT. LTD. ---
  checkPageBreak(14);

  // Role Title (Dark Slate)
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  // doc.setTextColor(8, 27, 41);
  doc.setTextColor(headerRoleR, headerRoleG, headerRoleB);
  doc.text("Software Developer", 15, y);

  let curHeader2X = 15 + doc.getTextWidth("Software Developer");

  // Separator
  doc.setFont("helvetica", "normal");
  doc.setTextColor(150, 150, 150);
  doc.text(" | ", curHeader2X, y);

  curHeader2X += doc.getTextWidth(" | ");

  // Company Name (Unique Corporate Blue)
  doc.setFont("helvetica", "bold");
  // doc.setTextColor(headerRoleR, headerRoleG, headerRoleB);
    doc.setTextColor(themeR, themeG, themeB);
  doc.text("Absec Lab Pvt. Ltd.", curHeader2X, y);

  // Date & Location
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(100, 100, 100);
  doc.text("Bhubaneswar, Odisha | May 2023 – Nov 2025", 125, y);
  y += 5;

  const job2Bullets = [
    "Developed full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Next.js, contributing to both frontend and backend development.",
    "Developed and integrated RESTful APIs using Node.js and Express.js to support business workflows across ERP modules.",
    "Worked with MongoDB for data modeling, querying, and aggregation for application workflows.",
    "Implemented secure JWT authentication and Role-Based Access Control (RBAC) across administrative and institutional dashboards.",
    "Managed robust frontend state architectures using Redux and Context API while standardizing reusable UI components in Material UI.",
    "Optimized web applications through bundle optimization, code splitting, dynamic imports, and query tuning to enhance load times.",
  ];

  job2Bullets.forEach((bullet) => {
    renderFormattedBullet("•", bullet, 15, 175);
  });

  // 5. KEY PROJECTS
  addSectionTitle("Key Projects");

  checkPageBreak(14);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(0, 102, 204);
  doc.text("Network Management System (NMS)", 15, y);
  y += 4.5;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.8);
  doc.setTextColor(8, 27, 41);
  doc.text("Tech Stack: React.js, React Query, Redux Toolkit, Zustand, Tailwind CSS, Axios, Keycloak, REST APIs", 18, y);
  y += 4.5;

  const nmsBullets = [
    "Developed real-time monitoring dashboards for NIC, DCU, and Smart Meter communication analytics, enabling proactive monitoring.",
    "Built reusable enterprise components including dynamic tables with filtering, sorting, export functionality, and server-side pagination.",
    "Implemented SLA monitoring, device health tracking, network topology, and operational reporting modules through REST API integration.",
    "Integrated React Query for efficient server-state caching, automatic refetching, and seamless API data handling.",
    "Implemented RBAC and Keycloak authentication for secure module and role-based feature access.",
    "Optimized application performance using Lazy Loading, Code Splitting, Memoization, and efficient state management with Redux Toolkit and Zustand.",
  ];

  nmsBullets.forEach((bullet) => {
    renderFormattedBullet("-", bullet, 15, 175);
  });

  y += 2.5;

  checkPageBreak(14);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(0, 102, 204);
  doc.text("Sparrow Academic Management System", 15, y);
  y += 4.5;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.8);
  doc.setTextColor(8, 27, 41);
  doc.text("Tech Stack: MongoDB, Express.js, React.js, Node.js, Next.js, Material UI, Axios, Redux, Context API", 18, y);
  y += 4.5;

  const sparrowBullets = [
    "Engineered a full-stack academic management platform managing Student, Employee, Finance, HR, Payroll, and Notification operations.",
    "Developed secure RESTful APIs with Node.js and Express.js, enforcing Role-Based Access Control (RBAC) and JWT validation.",
    "Designed MongoDB data models and aggregation pipelines for fee collection, cash flow tracking, and institutional financial reporting.",
    "Built responsive user interfaces and role-specific dashboards using React.js, Next.js, and Material UI.",
    "Developed communication micro-features enabling real-time Notices, Bulk SMS, and Bulk Email delivery.",
    "Optimized frontend rendering performance and backend query response times for handling high-volume institutional records.",
  ];

  sparrowBullets.forEach((bullet) => {
    renderFormattedBullet("-", bullet, 15, 175);
  });

  // 6. EDUCATION
  addSectionTitle("Education");

  checkPageBreak(10);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(8, 27, 41);
  doc.text("Master of Computer Applications (MCA)", 15, y);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(100, 100, 100);
  doc.text("NIIS Institute of Business Administration, Bhubaneswar | 2021 – 2023", 95, y);
  y += 5;

  return doc;
};

// 1. DOWNLOAD TRIGGER
export const generateAndDownloadCV = () => {
  const doc = buildCVDoc();
  doc.save("Abhijit_Sahoo_Frontend_MERN_Stack_Developer.pdf");
};

// 2. VIEW TRIGGER (Dynamic in-browser tab)
export const viewCV = () => {
  const doc = buildCVDoc();
  const pdfBlob = doc.output("blob");
  const blobUrl = URL.createObjectURL(pdfBlob);
  window.open(blobUrl, "_blank");
};