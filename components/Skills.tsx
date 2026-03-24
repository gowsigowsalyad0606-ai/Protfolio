"use client";

import { Reveal } from "./Reveal";

const skills = [
  { name: "Frontend Development", items: ["React.js", "React Native", "Next.js", "Angular", "Tailwind CSS", "Redux Toolkit"] },
  { name: "Backend & Integration", items: ["Golang", "Node.js (Express)", "REST APIs", "API Testing (Postman)", "Axios/Fetch"] },
  { name: "Databases & Tools", items: ["Oracle 11g/12c", "RMAN Backup", "MySQL", "Git / GitHub", "Performance Optimization"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="mb-24">
            <p className="text-accent font-bold tracking-widest text-sm mb-4 uppercase">Technical Arsenal</p>
            <h2 className="text-5xl md:text-8xl font-black">CORE SKILLS</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skills.map((skill, idx) => (
            <div key={skill.name}>
              <Reveal delay={idx * 0.2}>
                <h3 className="text-2xl font-bold mb-8 border-l-4 border-accent pl-6">{skill.name}</h3>
                <ul className="space-y-4">
                  {skill.items.map((item) => (
                    <li key={item} className="text-lg text-foreground/60 hover:text-foreground transition-colors flex items-center gap-3 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent scale-0 group-hover:scale-100 transition-transform" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
