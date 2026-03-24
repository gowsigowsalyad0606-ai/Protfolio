"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-6"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between backdrop-blur-md bg-white/5 border border-white/10 rounded-full px-8 py-3">
        <Link href="/" className="text-xl font-bold tracking-tighter hover:text-accent transition-colors uppercase">
          GOWSALYA<span className="text-accent">.</span>D
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:width-full" />
            </Link>
          ))}
        </div>
        <Link
          href="#contact"
          className="bg-accent text-white px-6 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform"
        >
          HIRE ME
        </Link>
      </nav>
    </motion.header>
  );
}
