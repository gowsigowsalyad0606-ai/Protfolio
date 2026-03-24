"use client";

import { Reveal } from "./Reveal";

const experiences = [
  { 
    company: "QUANTZI INFOTECH PVT LTD", 
    role: "SOFTWARE DEVELOPER", 
    date: "NOV 2023 - PRESENT",
    desc: "Developing scalable web and mobile apps using React, Next.js, and React Native. Focusing on frontend architecture and API integration."
  },
  { 
    company: "ISQL GLOBAL TRAINING", 
    role: "TRAINEE – ORACLE DBA", 
    date: "MAR 2023 - JUN 2023",
    desc: "Managed Oracle 11g/12c databases, performed backup/recovery with RMAN, and handled database migrations."
  },
  { 
    company: "FOXCONN HON HAI TECHNOLOGY", 
    role: "ASSISTANT LINE LEADER", 
    date: "JUN 2021 - MAR 2023",
    desc: "Managed motherboard production processes and quality control in a high-volume manufacturing environment."
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="mb-24">
            <p className="text-accent font-bold tracking-widest text-sm mb-4 uppercase">Career Path</p>
            <h2 className="text-5xl md:text-8xl font-black">EXPERIENCE</h2>
          </div>
        </Reveal>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="group border-b border-white/10 pb-12 last:border-0">
              <Reveal delay={idx * 0.1}>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold group-hover:text-accent transition-colors uppercase">{exp.company}</h3>
                    <p className="text-accent/60 tracking-widest font-bold mt-2 uppercase text-xs">{exp.role}</p>
                    <p className="text-foreground/40 mt-4 max-w-2xl text-sm leading-relaxed">{exp.desc}</p>
                  </div>
                  <div className="text-2xl font-bold font-mono opacity-20 group-hover:opacity-100 transition-opacity">
                    {exp.date}
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
