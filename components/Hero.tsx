"use client";

import { motion } from "motion/react";
import { ArrowDown, Github, Linkedin, Mail, Code } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center items-center px-6 pt-32 overflow-hidden bg-[#0d0d0f] border-b border-white/10">
      {/* 3D Canvas Placeholder */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="w-full h-full flex flex-col items-center justify-center relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-24 h-24 border border-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm"
          >
            <div className="w-12 h-12 border-2 border-white/50 border-dashed rounded-full"></div>
          </motion.div>
          <h2 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-2">[ 3D Hero Canvas Placeholder ]</h2>
          <p className="text-[10px] text-white/20 italic font-serif">Interactive component to be injected here</p>
        </div>
      </div>

      <div className="relative z-10 max-w-4xl w-full text-center flex flex-col items-center mt-auto md:mb-32 mb-20 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 text-[10px] uppercase tracking-widest text-white/60 mb-8 font-bold bg-[#0a0a0b]/80 backdrop-blur-md pointer-events-auto"
        >
          <Code className="w-4 h-4 text-white" />
          <span>Full Stack Developer & Interaction Designer</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-[7rem] font-extralight tracking-tighter leading-[0.9] mb-8 pointer-events-auto mix-blend-difference"
        >
          Building <span className="font-bold text-white/20">digital</span><br />
          experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-xs uppercase tracking-[0.2em] text-white/50 max-w-2xl mb-12 leading-relaxed font-semibold pointer-events-auto"
        >
          I&apos;m a developer focused on crafting beautiful web applications, integrating complex
          micro-frontends, and delivering seamless interactive experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 pointer-events-auto"
        >
          <a href="#projects" className="px-6 py-3 bg-white text-[10px] uppercase tracking-widest text-black hover:bg-white/80 transition-colors font-bold flex items-center justify-center">
            View Projects
          </a>
          <a href="#contact" className="px-6 py-3 border border-white/20 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-colors font-bold text-white flex items-center justify-center">
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest text-zinc-500 uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4 text-zinc-500 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
