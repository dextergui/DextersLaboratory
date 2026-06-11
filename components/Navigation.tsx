"use client";

import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import Image from "next/image";

export function Navigation() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "h-20 bg-[#0a0a0b]/90 backdrop-blur-md border-b border-white/10 flex items-center" 
          : "h-24 bg-transparent flex items-center"
      }`}
    >
      <div className="max-w-6xl mx-auto w-full px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <Image
            src="/logo.svg"
            alt="DG Logo"
            width={40}
            height={40}
            className="transition-transform group-hover:scale-105 rounded-sm"
          />
          <div className="flex flex-col">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">Dexter Gui</span>
            <span className="text-[10px] font-medium uppercase tracking-[0.1em] text-white/70">Digital Architect</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="#skills" label="Skillset" />
          <NavLink href="#projects" label="Projects" />
          <NavLink href="#contact" label="Contact" />
        </nav>

        <a 
          href="#contact" 
          className="group relative px-6 py-2 border border-white/20 text-[10px] uppercase tracking-widest font-bold overflow-hidden transition-all duration-500 hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]"
        >
          <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
          <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
            Get in Touch
          </span>
        </a>
      </div>
    </motion.header>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a 
      href={href} 
      className="text-xs uppercase tracking-widest font-semibold text-white/40 hover:text-white transition-colors relative group"
    >
      {label}
      <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
    </a>
  )
}
