"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "BUY MY PLOT",
    category: "FULL-STACK / WEB & MOBILE",
    image: "https://images.unsplash.com/photo-1582408921715-18e7806365c1?q=80&w=1000",
    desc: "A property listing platform with modules for buyers, sellers, and admins. Built with React.js and React Native."
  },
  {
    title: "INTEGRATA CRM",
    category: "CRM / ANGULAR",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000",
    desc: "Dynamic CRM platform enabling custom workflows, dynamic form generation, and configurable data handling."
  },
  {
    title: "AVITA PG MGMT",
    category: "MANAGEMENT / REACT NATIVE",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1000",
    desc: "PG management system for handling tenant operations. Features an admin dashboard and mobile app."
  },
  {
    title: "NORTHWOOD SHIPPING",
    category: "LOGISTICS / NEXT.JS",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000",
    desc: "Responsive logistics website with Google Sheets integration for lightweight backend data storage."
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex items-end justify-between mb-24">
            <div>
              <p className="text-accent font-bold tracking-widest text-sm mb-4 uppercase">Selected Work</p>
              <h2 className="text-5xl md:text-8xl font-black">LATEST PROJECTS</h2>
            </div>
          </div>
        </Reveal>

        <div className="space-y-40">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-12 items-center`}
            >
              <div className="w-full md:w-3/5 group cursor-pointer overflow-hidden rounded-3xl border border-white/5">
                <Reveal delay={0.2}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="aspect-video relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-accent/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </motion.div>
                </Reveal>
              </div>
              <div className="w-full md:w-2/5">
                <Reveal delay={0.4}>
                  <p className="text-foreground/40 font-bold mb-4">{project.category}</p>
                </Reveal>
                <Reveal delay={0.5}>
                  <h3 className="text-3xl md:text-5xl font-bold mb-4 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/40 mb-8 max-w-md text-sm leading-relaxed">
                    {project.desc}
                  </p>
                </Reveal>
                <Reveal delay={0.6}>
                  <button className="flex items-center gap-2 text-sm font-bold tracking-widest border-b border-foreground/20 pb-2 hover:border-accent hover:text-accent transition-all">
                    VIEW CASE STUDY <ArrowUpRight size={16} />
                  </button>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
