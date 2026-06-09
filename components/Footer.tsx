"use client";

import { motion } from "motion/react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0b] py-20 px-6 border-t border-white/10 relative overflow-hidden" id="contact">
      <div className="max-w-6xl mx-auto relative z-10 w-full flex flex-col md:flex-row justify-between items-start gap-16">
        <div className="flex-1">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extralight tracking-tighter mb-6 text-white"
          >
            Let&apos;s create something <br />
            <span className="font-bold text-white/20">extraordinary.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xs uppercase tracking-widest text-white/40 max-w-sm mb-10 leading-relaxed"
          >
            Open to new opportunities, freelance work, and exciting collaborations.
          </motion.p>
          
          <motion.a 
            href="mailto:dextergui.zy@gmail.com"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white text-black text-[10px] uppercase font-bold tracking-widest hover:bg-white/80 transition-colors"
          >
            <Mail className="w-4 h-4" />
            dextergui.zy@gmail.com
          </motion.a>
        </div>

        <div className="flex md:justify-end md:items-end flex-col border-l border-white/10 pl-8 h-full min-h-[200px]">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/20 mb-8 self-start md:self-end">Social Matrix</span>
          <div className="flex flex-col gap-6 w-full items-start md:items-end">
            <SocialLink href="#" icon={<Github />} label="GitHub" delay={0.3} />
            <SocialLink href="#" icon={<Linkedin />} label="LinkedIn" delay={0.4} />
            <SocialLink href="#" icon={<Twitter />} label="Twitter" delay={0.5} />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between pt-10 mt-20 border-t border-white/10 text-[10px] uppercase tracking-[0.2em] text-white/30">
        <p>&copy; {new Date().getFullYear()} DevFolio &mdash; Concept & Execution.</p>
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-pulse"></span>
          All systems operational
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label, delay }: { href: string; icon: React.ReactNode; label: string; delay: number }) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="flex items-center gap-4 text-white/40 hover:text-white transition-colors group"
    >
      <span className="text-xs font-bold tracking-widest uppercase">{label}</span>
      <div className="w-8 h-8 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity">
        <div className="scale-75">{icon}</div>
      </div>
    </motion.a>
  );
}
