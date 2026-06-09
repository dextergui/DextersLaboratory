"use client";

import { motion } from "motion/react";
import { Cpu, Layout, Server, Sparkles, Database, Globe } from "lucide-react";

export function Skills() {
  const categories = [
    {
      title: "Frontend Development",
      icon: <Layout className="w-6 h-6 text-indigo-400" />,
      skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Three.js"],
      description: "Crafting beautiful, interactive user interfaces with a focus on web performance and smooth animations."
    },
    {
      title: "Backend & Systems",
      icon: <Server className="w-6 h-6 text-purple-400" />,
      skills: ["Node.js", "Python", "Go", "PostgreSQL", "Redis", "GraphQL"],
      description: "Building scalable and secure server-to-server APIs and resilient database architectures."
    },
    {
      title: "Architecture",
      icon: <Cpu className="w-6 h-6 text-pink-400" />,
      skills: ["Micro-frontends", "Docker", "Kubernetes", "AWS", "CI/CD", "System Design"],
      description: "Designing decentralized application networks and composing micro-frontends into unified experiences."
    }
  ];

  return (
    <section className="py-24 px-6 relative border-b border-white/10 bg-[#0a0a0b]" id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6"
          >
            Core Expertise
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extralight tracking-tighter"
          >
            Capabilities &<br /> <span className="font-bold text-white/20">Expertise</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1 + 0.2 }}
              className="group relative p-8 bg-white/[0.02] border border-white/10 hover:bg-white/5 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative z-10">
                <div className="w-10 h-10 border border-white/20 flex items-center justify-center mb-6 bg-[#0a0a0b]">
                  {category.icon}
                </div>
                
                <h4 className="text-sm font-bold uppercase tracking-tight mb-3">{category.title}</h4>
                <p className="text-xs leading-relaxed text-white/50 mb-6">
                  {category.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-2 py-1 bg-white/5 text-[10px] uppercase tracking-widest text-white/70 border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
