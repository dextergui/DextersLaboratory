"use client";

import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, X, Maximize2, Terminal, Github, Play, ChevronLeft, ChevronRight, Globe, Monitor, Image as ImageIcon } from "lucide-react";
import { useState, useCallback, useEffect } from "react";

type ShowcaseType = "iframe" | "video" | "screenshots";

interface Project {
  id: string;
  title: string;
  tech: string;
  description: string;
  showcaseType: ShowcaseType;
  iframeUrl?: string;
  videoUrl?: string;
  screenshots?: string[];
  liveUrl?: string;
  repoUrl?: string;
}

const projects: Project[] = [
  {
    id: "inventory-mgmt",
    title: "Inventory Management System",
    tech: "Next.js • PostgreSQL • Full-Stack",
    description: "Full-stack web application for real-time inventory tracking and management — FYP graded A.",
    showcaseType: "iframe",
    iframeUrl: "", // Add your deployed URL here
    repoUrl: "", // Add your GitHub URL here
  },
  {
    id: "wheregottimesia",
    title: "WhereGotTimeSIA",
    tech: "Python • Google OCR • Telegram Bot",
    description: "Telegram bot automating SIA timesheet extraction with OCR, paycheck calculation, and calendar integration.",
    showcaseType: "screenshots",
    screenshots: [], // Add screenshot paths here
    repoUrl: "", // Add your GitHub URL here
  },
  {
    id: "reddot-desktop",
    title: "Reddot Card Issuance Tool",
    tech: "AvaloniaUI • .NET • C#",
    description: "Cross-platform desktop application that streamlined staff onboarding and card issuance by 50%.",
    showcaseType: "video",
    videoUrl: "", // Add screen recording path here
  },
  {
    id: "nlarge",
    title: "NLarge: NLP Data Augmentation",
    tech: "Python • TensorFlow • React",
    description: "Data augmentation tool for enlarging small NLP datasets, boosting sentiment model accuracy by up to 50%.",
    showcaseType: "iframe",
    iframeUrl: "", // Add your deployed docs URL here
    repoUrl: "", // Add your GitHub URL here
  },
  {
    id: "reddot-web",
    title: "Reddot Engineering Web App",
    tech: "Next.js • MantineUI • Docker",
    description: "Responsive company web application with dynamic content delivery and modern UI/UX design.",
    showcaseType: "iframe",
    iframeUrl: "", // Add your deployed URL here
  },
  {
    id: "project-ostrich",
    title: "Project Ostrich: Cyber Range",
    tech: "Web Application • Penetration Testing",
    description: "Online cyber range platform enabling users to practice penetration testing skills in a safe environment.",
    showcaseType: "screenshots",
    screenshots: [], // Add screenshot paths here
    repoUrl: "", // Add your GitHub URL here
  },
];

const showcaseIcons: Record<ShowcaseType, React.ReactNode> = {
  iframe: <Globe className="w-3.5 h-3.5" />,
  video: <Monitor className="w-3.5 h-3.5" />,
  screenshots: <ImageIcon className="w-3.5 h-3.5" />,
};

const showcaseLabels: Record<ShowcaseType, string> = {
  iframe: "Live App",
  video: "Demo Video",
  screenshots: "Gallery",
};

export function Projects() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const project = projects.find((p) => p.id === activeProject);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveProject(null);
    };
    if (activeProject) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  return (
    <section className="py-24 px-6 relative bg-[#0d0d0f] border-b border-white/10" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 gap-6">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6"
            >
              Featured Projects
            </motion.h3>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-extralight tracking-tighter text-white"
            >
              Selected Work &<br /><span className="font-bold text-white/20">Case Studies</span>
            </motion.h2>
          </div>
          <span className="text-[10px] text-white/20 tracking-tighter hidden md:block mb-2">001 &mdash; {String(projects.length).padStart(3, "0")}</span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 relative">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1 + 0.2 }}
              onClick={() => setActiveProject(proj.id)}
              className="aspect-square sm:aspect-[4/5] bg-white/5 border border-white/10 hover:border-white/25 p-6 flex flex-col justify-between group hover:bg-white/[0.08] transition-all duration-500 ease-out cursor-pointer relative overflow-hidden hover:shadow-[0_12px_40px_rgba(255,255,255,0.04)]"
            >
              {/* Ambient gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="flex items-start justify-between">
                <div className="w-10 h-10 border border-white/20 group-hover:border-white/40 flex items-center justify-center bg-[#0d0d0f]/50 transition-all duration-500 group-hover:shadow-[0_0_12px_rgba(255,255,255,0.06)]">
                  <Terminal className="w-4 h-4 text-white/50 group-hover:text-white/70 transition-colors duration-500" />
                </div>
                {/* Showcase type badge */}
                <div className="flex items-center gap-1.5 px-2 py-1 bg-white/5 border border-white/10 text-white/30 group-hover:text-white/50 transition-colors duration-500">
                  {showcaseIcons[proj.showcaseType]}
                  <span className="text-[8px] uppercase tracking-widest font-bold">{showcaseLabels[proj.showcaseType]}</span>
                </div>
              </div>
              
              <div className="relative z-10 mt-auto">
                <h4 className="text-sm font-bold uppercase tracking-tight text-white transition-colors duration-500">{proj.title}</h4>
                <p className="text-[10px] text-white/30 mt-1 uppercase tracking-widest">{proj.tech}</p>
                <p className="text-[10px] text-white/40 group-hover:text-white/55 mt-2 uppercase tracking-widest leading-relaxed line-clamp-2 transition-colors duration-500">
                  {proj.description}
                </p>
              </div>
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <Maximize2 className="w-4 h-4 text-white/40 group-hover:rotate-12 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Hybrid Showcase Modal */}
      <AnimatePresence>
        {activeProject && project && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-[#0a0a0b]/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.98, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.98, opacity: 0, y: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-5xl h-[80vh] bg-[#0d0d0f] border border-white/20 flex flex-col overflow-hidden"
            >
              {/* Browser Chrome Bar */}
              <div className="h-12 border-b border-white/10 bg-[#0a0a0b] flex items-center justify-between px-6 shrink-0">
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-white/20"></div>
                  <div className="w-2 h-2 rounded-full bg-white/20"></div>
                  <div className="w-2 h-2 rounded-full bg-white/20"></div>
                </div>
                <div className="px-4 py-1.5 bg-white/5 border border-white/5 flex items-center gap-2 max-w-md w-full mx-4">
                  <span className="text-[10px] text-white/40 uppercase tracking-widest truncate w-full text-center">
                    {project.showcaseType === "iframe" && project.iframeUrl
                      ? project.iframeUrl.replace(/^https?:\/\//, "")
                      : `showcase.local/${project.id}`}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-white/30 hover:text-white transition-colors"
                      title="View Source"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-white/30 hover:text-white transition-colors"
                      title="View Live"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  <button
                    onClick={() => setActiveProject(null)}
                    className="p-2 -mr-2 text-white/40 hover:text-white transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Showcase Body */}
              <div className="flex-1 bg-[#0d0d0f] relative overflow-hidden">
                {project.showcaseType === "iframe" && (
                  <IframeShowcase project={project} />
                )}
                {project.showcaseType === "video" && (
                  <VideoShowcase project={project} />
                )}
                {project.showcaseType === "screenshots" && (
                  <ScreenshotShowcase project={project} />
                )}
              </div>

              {/* Bottom Info Bar */}
              <div className="h-10 border-t border-white/10 bg-[#0a0a0b] flex items-center justify-between px-6 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 text-white/30">
                    {showcaseIcons[project.showcaseType]}
                    <span className="text-[9px] uppercase tracking-widest font-bold">{showcaseLabels[project.showcaseType]}</span>
                  </div>
                  <div className="w-px h-3 bg-white/10" />
                  <span className="text-[9px] uppercase tracking-widest text-white/20">{project.tech}</span>
                </div>
                <span className="text-[9px] uppercase tracking-widest text-white/20">{project.title}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ─── Iframe Showcase ─── */
function IframeShowcase({ project }: { project: Project }) {
  const [isLoading, setIsLoading] = useState(true);
  const hasUrl = project.iframeUrl && project.iframeUrl.length > 0;

  if (!hasUrl) {
    return <PlaceholderState type="iframe" title={project.title} />;
  }

  return (
    <>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#0d0d0f] z-10">
          <div className="flex flex-col items-center gap-4">
            <div className="w-6 h-6 border border-white/20 border-t-white/60 rounded-full animate-spin" />
            <span className="text-[10px] uppercase tracking-widest text-white/30">Loading application...</span>
          </div>
        </div>
      )}
      <iframe
        src={project.iframeUrl}
        className="w-full h-full border-0"
        onLoad={() => setIsLoading(false)}
        title={project.title}
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
      />
    </>
  );
}

/* ─── Video Showcase ─── */
function VideoShowcase({ project }: { project: Project }) {
  const hasVideo = project.videoUrl && project.videoUrl.length > 0;

  if (!hasVideo) {
    return <PlaceholderState type="video" title={project.title} />;
  }

  return (
    <div className="w-full h-full flex items-center justify-center bg-black">
      <video
        src={project.videoUrl}
        controls
        autoPlay
        muted
        loop
        className="w-full h-full object-contain"
        title={project.title}
      />
    </div>
  );
}

/* ─── Screenshot Carousel ─── */
function ScreenshotShowcase({ project }: { project: Project }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasScreenshots = project.screenshots && project.screenshots.length > 0;

  const goNext = useCallback(() => {
    if (!project.screenshots) return;
    setCurrentIndex((prev) => (prev + 1) % project.screenshots!.length);
  }, [project.screenshots]);

  const goPrev = useCallback(() => {
    if (!project.screenshots) return;
    setCurrentIndex((prev) => (prev - 1 + project.screenshots!.length) % project.screenshots!.length);
  }, [project.screenshots]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev]);

  if (!hasScreenshots) {
    return <PlaceholderState type="screenshots" title={project.title} />;
  }

  return (
    <div className="w-full h-full relative flex items-center justify-center bg-black/50">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={project.screenshots![currentIndex]}
          alt={`${project.title} screenshot ${currentIndex + 1}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="max-w-full max-h-full object-contain"
        />
      </AnimatePresence>

      {/* Navigation */}
      {project.screenshots!.length > 1 && (
        <>
          <button
            onClick={goPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/25 transition-all flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5 text-white/60" />
          </button>
          <button
            onClick={goNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/25 transition-all flex items-center justify-center"
          >
            <ChevronRight className="w-5 h-5 text-white/60" />
          </button>

          {/* Dots indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {project.screenshots!.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "bg-white/80 w-4" : "bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

/* ─── Placeholder for empty showcase ─── */
function PlaceholderState({ type, title }: { type: ShowcaseType; title: string }) {
  const messages: Record<ShowcaseType, { heading: string; sub: string }> = {
    iframe: {
      heading: "Application Preview",
      sub: "Deploy your web app and add the URL to enable live embedding",
    },
    video: {
      heading: "Demo Recording",
      sub: "Add a screen recording to showcase this desktop application",
    },
    screenshots: {
      heading: "Screenshot Gallery",
      sub: "Add screenshots to showcase key screens of this project",
    },
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-8">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
      <div className="relative z-10 text-center max-w-md border border-white/10 bg-[#0a0a0b] p-10">
        <motion.div
          initial={{ rotate: 180, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
          className="w-12 h-12 mx-auto mb-6 border border-white/20 flex items-center justify-center"
        >
          <div className="text-white/50">
            {showcaseIcons[type]}
          </div>
        </motion.div>
        <h4 className="text-sm font-bold uppercase tracking-tight mb-2 text-white">{title}</h4>
        <p className="text-[10px] text-white/40 uppercase tracking-widest leading-relaxed mb-2">
          {messages[type].heading}
        </p>
        <p className="text-[10px] text-white/30 tracking-wide leading-relaxed">
          {messages[type].sub}
        </p>
      </div>
    </div>
  );
}
