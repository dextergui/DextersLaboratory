"use client";

import { motion } from "motion/react";
import { BrainCircuit, Layout, Server } from "lucide-react";

export function Skills() {
  const categories = [
    {
      title: "Backend & Systems",
      icon: <Server className="w-6 h-6 text-purple-400" />,
      skills: ["Java", "Spring Boot", "Kafka", "AWS", "Redis", "PostgreSQL"],
      description: "Engineering production-grade microservices and event-driven architectures powering payment platforms and credit systems at scale."
    },
    {
      title: "Frontend & Full-Stack",
      icon: <Layout className="w-6 h-6 text-indigo-400" />,
      skills: ["Next.js", "React", ".NET", "AvaloniaUI", "Figma", "Tailwind CSS"],
      description: "Building responsive web applications and cross-platform desktop tools with a focus on UI/UX design and seamless user experiences."
    },
    {
      title: "AI & Data Engineering",
      icon: <BrainCircuit className="w-6 h-6 text-pink-400" />,
      skills: ["OpenAI", "Python", "TensorFlow", "NLP", "Google OCR", "Prompt Engineering"],
      description: "Developing AI-driven extraction pipelines, data augmentation tools, and intelligent automation to improve accuracy and efficiency."
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
              whileHover={{ y: -6 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1 + 0.2 }}
              className="group relative p-8 bg-white/[0.02] border border-white/10 hover:border-white/25 hover:bg-white/[0.04] transition-all duration-500 ease-out flex flex-col justify-between hover:shadow-[0_8px_32px_rgba(255,255,255,0.03)]"
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                <div className="w-10 h-10 border border-white/20 group-hover:border-white/40 flex items-center justify-center mb-6 bg-[#0a0a0b] transition-all duration-500 group-hover:shadow-[0_0_12px_rgba(255,255,255,0.06)]">
                  <div className="transition-transform duration-500 group-hover:scale-110">
                    {category.icon}
                  </div>
                </div>
                
                <h4 className="text-sm font-bold uppercase tracking-tight mb-3 transition-colors duration-500 group-hover:text-white">{category.title}</h4>
                <p className="text-xs leading-relaxed text-white/50 mb-6 transition-colors duration-500 group-hover:text-white/60">
                  {category.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-2 py-1 bg-white/5 text-[10px] uppercase tracking-widest text-white/70 border border-white/10 transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/[0.08] group-hover:text-white/90"
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
