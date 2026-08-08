import { jsPDF } from "jspdf";
import { calculateExperience } from "./experience";

export const generateAndDownloadCV = () => {
  const dynamicExp = calculateExperience("2023-04-01");

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

  // Helper function to render text with specific keywords in BOLD
  const renderFormattedBullet = (prefix, text, x, maxWidth) => {
    checkPageBreak(8);
    const keywords = [
      "React.js",
      "Next.js",
      "React Query",
      "Redux Toolkit",
      "Zustand",
      "Redux",
      "Material UI",
      "Tailwind CSS",
      "Axios",
      "RBAC",
      "Role-Based Access Control",
      "Keycloak",
      "Lazy Loading",
      "Code Splitting",
      "Memoization",
      "REST API",
      "REST APIs",
      "SLA monitoring",
      "Finance Module",
      "Bulk SMS",
      "Bulk Email",
      "Context API",
    ];

    // Split text into words and identify keywords
    const regex = new RegExp(`(${keywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join("|")})`, "gi");
    const parts = text.split(regex);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(50, 50, 50);

    // First print the bullet prefix (- or •)
    doc.text(prefix, x, y);
    let curX = x + 4;
  

    parts.forEach((part) => {
      if (!part) return;

      const isKeyword = keywords.some(
        (k) => k.toLowerCase() === part.toLowerCase()
      );

      if (isKeyword) {
        doc.setFont("helvetica", "bold");
        doc.setTextColor(8, 27, 41); // Dark Bold Accent
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
  doc.setTextColor(0, 171, 240);
  doc.text("Frontend Engineer / Software Engineer", 15, y);

  // CONTACT INFO
  y += 5.5;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(80, 80, 80);
  doc.text("Bhadrak, Odisha - 756122 | Phone: +91-9114126106", 15, y);

  y += 4.8;
  doc.setTextColor(0, 102, 204);
  doc.text(
    "abhijitsahoo266@gmail.com  |  abhijitsahoo.vercel.app  ",
    15,
    y
  );

  y += 4.8;
  doc.text(
    "github.com/AbhijitSahoo266  |  linkedin.com/in/abhijit-sahoo-697913261",
    15,
    y
  );

  // Section Header Generator Helper
  const addSectionTitle = (title) => {
    y += 6.5;
    checkPageBreak(12);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(0, 171, 240);
    doc.text(title.toUpperCase(), 15, y);
    y += 1.8;
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.4);
    doc.line(15, y, 195, y);
    y += 5.5;
  };

  // 2. PROFESSIONAL SUMMARY
  addSectionTitle("Professional Summary");
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(40, 40, 40);
  const summaryText = `Frontend Engineer with ${dynamicExp} of experience building scalable and high-performance web applications using React.js, Next.js, and modern JavaScript frameworks. Skilled in developing reusable UI components, integrating REST APIs, and optimizing frontend performance for enterprise-grade dashboards. Experienced in role-based authentication systems, state management (Redux Toolkit, Zustand), and large-scale application architecture. Strong focus on clean UI, performance optimization, and production-ready development in Agile environments.`;

  const splitSummary = doc.splitTextToSize(summaryText, 180);
  doc.text(splitSummary, 15, y);
  y += splitSummary.length * 4.3;

  // 3. TECHNICAL SKILLS
  addSectionTitle("Technical Skills");
  const skillsList = [
    { cat: "Frontend:", val: "React.js, Next.js, React Native, JavaScript (ES6+), HTML5, CSS3" },
    { cat: "State & Data Fetching:", val: "React Query, Redux Toolkit, Zustand, Context API" },
    { cat: "UI Frameworks & Styling:", val: "Tailwind CSS, Material UI, Bootstrap" },
    { cat: "Backend:", val: "Node.js, Express.js" },
    { cat: "Databases:", val: "MongoDB, PostgreSQL" },
    { cat: "Authentication & Security:", val: "JWT Authentication, RBAC, Keycloak Integration" },
    { cat: "Performance Optimization:", val: "Lazy Loading, Code Splitting, Memoization, Bundle Optimization, Virtualization" },
    { cat: "Tools:", val: "Git, GitHub, GitLab, Jira, Postman, Docker, SonarQube" },
    { cat: "Methodologies:", val: "Agile (Scrum), SDLC, Code Reviews, Reusable Component Architecture" },
  ];

  skillsList.forEach((s) => {
    checkPageBreak(6);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    doc.setTextColor(8, 27, 41);
    doc.text(`• ${s.cat}`, 15, y);

    doc.setFont("helvetica", "normal");
    doc.setTextColor(60, 60, 60);
    const splitVal = doc.splitTextToSize(s.val, 125);
    doc.text(splitVal, 65, y);
    y += Math.max(splitVal.length * 4.3, 4.3);
  });

  // 4. PROFESSIONAL EXPERIENCE
  addSectionTitle("Professional Experience");

  // Job 1
  checkPageBreak(14);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(8, 27, 41);
  doc.text("Software Engineer | Comminent", 15, y);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(100, 100, 100);
  doc.text("Bengaluru, Karnataka | Nov 2025 – Present", 130, y);
  y += 5;

  const job1Bullets = [
    "Developed enterprise-grade web applications and real-time monitoring dashboards using React.js for Smart Metering analytics.",
    "Built reusable, configurable, and scalable UI components, improving development efficiency and application maintainability.",
    "Integrated REST APIs, implemented efficient server-state management with React Query, and managed state using Redux Toolkit and Zustand.",
    "Developed advanced features including dynamic tables, filtering, sorting, export functionality, and server-side pagination for large datasets.",
    "Implemented Role-Based Access Control (RBAC) and Keycloak authentication for secure module access.",
    "Optimized frontend performance through Lazy Loading, Code Splitting, Memoization, improving application responsiveness.",
    "Collaborated with cross-functional teams in an Agile environment, participating in code reviews and feature delivery."
  ];

  job1Bullets.forEach((bullet) => {
    renderFormattedBullet("•", bullet, 15, 175);
  });

  y += 2;

  // Job 2
  checkPageBreak(14);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(8, 27, 41);
  doc.text("Frontend Developer | Absec Lab Pvt. Ltd.", 15, y);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(100, 100, 100);
  doc.text("Bhubaneswar, Odisha | Apr 2023 – Oct 2025", 125, y);
  y += 5;

  const job2Bullets = [
    "Developed and optimized the frontend using Next.js, React.js, Material UI, and JavaScript.",
    "Integrated REST APIs and managed application state using Redux for scalable and maintainable application.",
    "Collaborated with designers, backend developers, and QA teams to deliver features on time.",
    "Improved application performance through bundle optimization, code splitting, and rendering enhancements.",
    "Mentored junior developers and supported frontend best practices."
  ];

  job2Bullets.forEach((bullet) => {
    renderFormattedBullet("•", bullet, 15, 175);
  });

  // 5. KEY PROJECTS (🌟 WITH INLINE BOLD KEYWORDS)
  addSectionTitle("Key Projects");

  // Project 1
  checkPageBreak(14);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(0, 102, 204);
  doc.text("Network Management System (NMS)", 15, y);
  y += 4.5;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.8);
  doc.setTextColor(8, 27, 41);
  doc.text("Tech Stack: React.js, React Query, Redux Toolkit, Zustand, Tailwind CSS, Node.js, PostgreSQL", 18, y);
  y += 4.5;

  const nmsBullets = [
    "Developed real-time monitoring dashboards for NIC, DCU, and Smart Meter communication analytics, enabling proactive monitoring.",
    "Built reusable enterprise components, including dynamic tables with filtering, sorting, export functionality, and server-side pagination.",
    "Implemented SLA monitoring, device health tracking, and operational reporting modules through REST API integration with React Query.",
    "Designed and integrated Role-Based Access Control (RBAC) and Keycloak authentication for secure access.",
    "Optimized application performance using Lazy Loading, Code Splitting, Memoization, and Redux Toolkit & Zustand."
  ];

  nmsBullets.forEach((bullet) => {
    renderFormattedBullet("-", bullet, 15, 175);
  });

  y += 2.5;

  // Project 2
  checkPageBreak(14);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(0, 102, 204);
  doc.text("Sparrow Academic Management System", 15, y);
  y += 4.5;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.8);
  doc.setTextColor(8, 27, 41);
  doc.text("Tech Stack: React.js, Next.js, Material UI, Axios, Redux, Context API", 18, y);
  y += 4.5;

  const sparrowBullets = [
    "Enterprise academic management platform supporting student, employee, finance, HR, payroll, and communication workflows.",
    "Developed and optimized responsive frontend applications using React.js, Next.js, and Material UI.",
    "Implemented secure authentication and Role-Based Access Control (RBAC) for Students, Employees, and Administrators.",
    "Integrated REST APIs using Axios for Finance, HR, Payroll, Student Management, and Employee Management modules.",
    "Developed the Finance Module for fee collection, cash flow tracking, and financial operations.",
    "Built communication features including Notices, Bulk SMS, and Bulk Email functionality.",
    "Designed role-specific dashboards and managed application state using Redux and Context API.",
    "Optimized frontend performance while handling large-scale institutional data and complex workflows."
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
  doc.text("NIIS Institute of Business Administration, Bhubaneswar | 2021 – 2023", 110, y);
  y += 5;

  checkPageBreak(10);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(8, 27, 41);
  doc.text("Bachelor of Science in Computer Science (B.Sc.)", 15, y);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(100, 100, 100);
  doc.text("Utkal University (Chitalo Degree Mahavidyalaya) | 2017 – 2020", 110, y);

  // SAVE FILE
  doc.save("Abhijit_Sahoo_Frontend_Engineer_CV.pdf");
};