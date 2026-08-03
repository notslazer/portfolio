"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ExternalLink } from "lucide-react"; 

// Custom SVGs for missing Lucide icons
const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);


const socialLinks = [
  { name: "GitHub", icon: GithubIcon, url: "https://github.com/notslazer", color: "#ffffff" },
  { name: "LinkedIn", icon: LinkedinIcon, url: "https://www.linkedin.com/in/harshadh-jeyaprakash/", color: "#0A66C2" },
  { name: "Email", icon: Mail, url: "mailto:harshadhjeyaprakash@gmail.com", color: "#EA4335" },
  { name: "Resume", icon: ExternalLink, url: "/resume.pdf", color: "#a855f7" },
];

export default function RadialContactMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const radius = 120;

  return (
    <div className="relative flex items-center justify-center w-64 h-64">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`relative z-20 w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-md border transition-all duration-300 ${
          isOpen 
            ? "bg-cyan-neon/20 border-cyan-neon shadow-[0_0_20px_rgba(0,240,255,0.4)]" 
            : "bg-slate-900/60 border-white/10 hover:border-cyan-neon/50"
        }`}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Mail size={24} className={isOpen ? "text-cyan-neon" : "text-white"} />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && socialLinks.map((link, index) => {
          const angle = (index / socialLinks.length) * 2 * Math.PI - Math.PI / 2;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                x, 
                y, 
                scale: 1,
                transition: { 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 15, 
                  delay: index * 0.05 
                } 
              }}
              exit={{ opacity: 0, x: 0, y: 0, scale: 0 }}
              whileHover={{ 
                scale: 1.2, 
                boxShadow: `0 0 15px ${link.color}40`,
                borderColor: link.color 
              }}
              className="absolute z-10 w-12 h-12 rounded-full bg-slate-900/80 backdrop-blur-sm border border-white/10 flex items-center justify-center group"
              style={{ left: "calc(50% - 24px)", top: "calc(50% - 24px)" }}
            >

              <link.icon size={20} className="text-slate-300 group-hover:text-white transition-colors" />
              
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-mono text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {link.name}
              </span>
            </motion.a>
          );
        })}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isOpen ? 0.3 : 0, 
          scale: isOpen ? 1 : 0.8,
          rotate: isOpen ? 360 : 0
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="absolute inset-0 rounded-full border border-dashed border-cyan-neon/30 pointer-events-none"
      />
    </div>
  );
}