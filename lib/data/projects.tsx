import {
  Database,
  Bot,
  CreditCard,
  BrainCircuit,
  Globe,
  Shield,
} from "lucide-react";

export type ShowcaseType = "iframe" | "video" | "screenshots";

export interface Project {
  id: string;
  title: string;
  tech: string;
  description: string;
  longDescription: string;
  showcaseType: ShowcaseType;
  logo?: React.ReactNode;
  iframeUrl?: string;
  videoUrl?: string;
  screenshots?: string[];
  liveUrl?: string;
  repoUrl?: string;
}

const iconClass = "w-4 h-4 text-white/50 group-hover:text-white/70 transition-colors duration-500";

export const projects: Project[] = [
  {
    id: "inventory-mgmt",
    title: "Inventory Management System",
    tech: "Next.js • PostgreSQL • Full-Stack",
    description: "Full-stack web application for real-time inventory tracking and management — FYP graded A.",
    longDescription: "A comprehensive full-stack inventory management system built as my Final Year Project, graded A. The application provides real-time stock tracking, automated low-stock alerts, and detailed analytics dashboards. Built with Next.js on the frontend and PostgreSQL for robust data persistence, it features role-based access control, batch import/export functionality, and a responsive interface optimized for both desktop and tablet use in warehouse environments.",
    showcaseType: "iframe",
    logo: <Database className={iconClass} />,
    iframeUrl: "", // Add your deployed URL here
    repoUrl: "", // Add your GitHub URL here
  },
  {
    id: "wheregottimesia",
    title: "WhereGotTimeSIA",
    tech: "Python • Google OCR • Telegram Bot",
    description: "Telegram bot automating SIA timesheet extraction with OCR, paycheck calculation, and calendar integration.",
    longDescription: "WhereGotTimeSIA is a Telegram bot built to solve a real pain point for SIA cabin crew — manually calculating pay from complex timesheets. The bot uses Google Cloud Vision OCR to extract shift data from uploaded timesheet images, automatically calculates paychecks based on SIA's pay structure including flight allowances and overtime, and syncs schedules directly to Google Calendar. It handles multiple timesheet formats and provides monthly summaries with earnings breakdowns.",
    showcaseType: "screenshots",
    logo: <Bot className={iconClass} />,
    screenshots: [], // Add screenshot paths here
    repoUrl: "https://github.com/dextergui/WhereGotTimeSIA", // Add your GitHub URL here
  },
  {
    id: "reddot-desktop",
    title: "Reddot Card Issuance Tool",
    tech: "AvaloniaUI • .NET • C#",
    description: "Cross-platform desktop application that streamlined staff onboarding and card issuance by 50%.",
    longDescription: "A cross-platform desktop application developed for Reddot Engineering to digitize and streamline their staff card issuance process. Built with AvaloniaUI and .NET, the tool replaced a manual, paper-based workflow with an efficient digital pipeline — reducing processing time by 50%. Features include webcam integration for on-the-spot photo capture, smart card encoding via NFC readers, batch processing for bulk issuance, and a local SQLite database for offline operation in environments with limited connectivity.",
    showcaseType: "video",
    logo: <CreditCard className={iconClass} />,
    videoUrl: "", // Add screen recording path here
  },
  {
    id: "nlarge",
    title: "NLarge: NLP Data Augmentation",
    tech: "Python • TensorFlow • React",
    description: "Data augmentation tool for enlarging small NLP datasets, boosting sentiment model accuracy by up to 50%.",
    longDescription: "NLarge is an open-source data augmentation library designed to tackle the challenge of limited training data in NLP projects. The tool implements multiple augmentation strategies — including synonym replacement, back-translation, contextual word embeddings, and paraphrase generation — to synthetically expand small datasets while preserving semantic meaning. Paired with a React-based web interface for visualization and configuration, NLarge demonstrated accuracy improvements of up to 50% on sentiment analysis benchmarks when augmenting datasets with as few as 500 samples.",
    showcaseType: "iframe",
    logo: <BrainCircuit className={iconClass} />,
    iframeUrl: "dextergui-nlarge.vercel.app",
    repoUrl: "https://github.com/dextergui/NLarge",
  },
  {
    id: "reddot-web",
    title: "Reddot Engineering Web App",
    tech: "Next.js • MantineUI • Docker",
    description: "Responsive company web application with dynamic content delivery and modern UI/UX design.",
    longDescription: "A modern, responsive company web application built for Reddot Engineering to showcase their services and manage content dynamically. Developed with Next.js and styled using MantineUI for a polished, professional look, the app features a headless CMS integration for non-technical staff to update content, SEO-optimized pages with server-side rendering, and a containerized deployment pipeline using Docker and Docker Compose. The site includes an interactive project portfolio, team directory, and a contact system with automated email notifications.",
    showcaseType: "iframe",
    logo: <Globe className={iconClass} />,
    iframeUrl: "", // Add your deployed URL here
  },
  {
    id: "project-ostrich",
    title: "Project Ostrich: Cyber Range",
    tech: "Web Application • Penetration Testing",
    description: "Online cyber range platform enabling users to practice penetration testing skills in a safe environment.",
    longDescription: "Project Ostrich is an online cyber range platform that provides a safe, sandboxed environment for cybersecurity enthusiasts and students to practice penetration testing techniques. The platform features guided challenges across multiple difficulty levels covering web exploitation, network analysis, privilege escalation, and cryptography. Each challenge runs in isolated containers to prevent cross-contamination, with real-time scoring, hint systems, and detailed write-ups upon completion. The project was developed as a collaborative team effort to make cybersecurity training more accessible.",
    showcaseType: "screenshots",
    logo: <Shield className={iconClass} />,
    screenshots: [], // Add screenshot paths here
    repoUrl: "", // Add your GitHub URL here
  },
];
