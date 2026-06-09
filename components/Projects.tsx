"use client";

import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, X, Maximize2, Terminal } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: "mfe-dashboard",
    title: "Analytics Dashboard MFE",
    tech: "React • D3.js • Webpack",
    description: "A self-contained micro-frontend providing real-time data visualization.",
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/30",
    embedType: "simulated",
  },
  {
    id: "mfe-auth",
    title: "Unified Auth Module",
    tech: "Next.js • Tailwind • Auth.js",
    description: "Plug-and-play authentication widget designed to be injected across multiple domains.",
    color: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/30",
    embedType: "simulated",
  },
  {
    id: "mfe-chat",
    title: "Realtime Chat Widget",
    tech: "Vue • WebSocket • Pinia",
    description: "A federated chat module that connects distributed teams instantly.",
    color: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/30",
    embedType: "simulated",
  }
];

export function Projects() {
  const [activeProject, setActiveProject] = useState<string | null>(null);

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
              Featured Micro Frontends
            </motion.h3>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-extralight tracking-tighter text-white"
            >
              Micro-Frontend<br /><span className="font-bold text-white/20">Integrations</span>
            </motion.h2>
          </div>
          <span className="text-[10px] text-white/20 tracking-tighter hidden md:block mb-2">001 &mdash; 003</span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 relative">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1 + 0.2 }}
              onClick={() => setActiveProject(project.id)}
              className="aspect-square sm:aspect-[4/5] bg-white/5 border border-white/10 p-6 flex flex-col justify-between group hover:bg-white/10 transition-all cursor-pointer relative overflow-hidden"
            >
              <div className="w-10 h-10 border border-white/20 flex items-center justify-center bg-[#0d0d0f]/50">
                <Terminal className="w-4 h-4 text-white/50" />
              </div>
              
              <div className="relative z-10 mt-auto">
                <h4 className="text-sm font-bold uppercase tracking-tight text-white">{project.title}</h4>
                <p className="text-[10px] text-white/40 mt-2 uppercase tracking-widest leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-white/40" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for MFE display */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-[#0a0a0b]/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.98, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.98, opacity: 0, y: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-5xl h-[80vh] bg-[#0d0d0f] border border-white/20 flex flex-col overflow-hidden"
            >
              {/* Fake Browser Chrome */}
              <div className="h-12 border-b border-white/10 bg-[#0a0a0b] flex items-center justify-between px-6 shrink-0">
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-white/20"></div>
                  <div className="w-2 h-2 rounded-full bg-white/20"></div>
                  <div className="w-2 h-2 rounded-full bg-white/20"></div>
                </div>
                <div className="px-4 py-1.5 bg-white/5 border border-white/5 flex items-center gap-2 max-w-sm w-full mx-4">
                  <span className="text-[10px] text-white/40 uppercase tracking-widest truncate w-full text-center">
                    mfe-host.local:3000/{activeProject}
                  </span>
                </div>
                <button 
                  onClick={() => setActiveProject(null)}
                  className="p-2 -mr-2 text-white/40 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* MFE Container Body */}
              <div className="flex-1 bg-[#0d0d0f] relative flex items-center justify-center p-8 overflow-y-auto">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                
                <div className="relative z-10 text-center max-w-md border border-white/10 bg-[#0a0a0b] p-10">
                  <motion.div
                    initial={{ rotate: 180, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="w-12 h-12 mx-auto mb-6 border border-white/20 flex items-center justify-center"
                  >
                    <Terminal className="w-5 h-5 text-white/50" />
                  </motion.div>
                  <h4 className="text-sm font-bold uppercase tracking-tight mb-2 text-white">{projects.find(p => p.id === activeProject)?.title}</h4>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest leading-relaxed mb-8">
                    Simulated shell container — Module Federation injection point
                  </p>
                  
                  <div className="inline-flex gap-4 border border-white/10 p-3 bg-white/5">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/50">Status: Mounted</div>
                    <div className="text-[10px] uppercase tracking-widest text-white/30">Mem: 42MB</div>
                    <div className="text-[10px] uppercase tracking-widest text-white/30">Lat: 12ms</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
