// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full pointer-events-none"
    >
      {/* pointer-events-auto allows the navbar to be clickable while the container is not */}
      <nav className="pointer-events-auto flex items-center gap-8 px-6 py-3 rounded-full backdrop-blur-md bg-slate-900/50 border border-white/10 shadow-xl">
        {navLinks.map((link) => {
          const isActive = pathname === link.path;

          return (
            <Link href={link.path} key={link.name} className="group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`flex items-center gap-2 text-sm transition-colors duration-300 ${
                  isActive ? "text-cyan-neon font-semibold" : "text-slate-300 hover:text-white"
                }`}
              >
                {/* Visual Connection Dot */}
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-cyan-neon shadow-[0_0_10px_2px_rgba(0,240,255,0.6)]"
                      : "bg-white/20 group-hover:bg-purple-neon group-hover:shadow-[0_0_8px_rgba(168,85,247,0.5)] group-hover:scale-125"
                  }`}
                />
                
                <span className="font-mono tracking-wide">{link.name}</span>
              </motion.div>
            </Link>
          );
        })}
      </nav>
    </motion.div>
  );
}