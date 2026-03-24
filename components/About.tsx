"use client";

import { Reveal } from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <div className="w-full md:w-1/2">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              SCALING IDEAS INTO <span className="text-accent underline decoration-accent/30 decoration-8 underline-offset-8">REALITY</span>
            </h2>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed mb-8">
              I am a Software Developer at Quantzi InfoTech with a background in <span className="text-foreground font-bold">B.E(ECE)</span> from <span className="text-foreground font-bold">Sri Bharathi Engineering College for Women</span> (2017 – 2021). I specialize in building scalable web and mobile applications using <span className="text-foreground font-bold">React.js, Next.js, and React Native</span>.
            </p>
          </Reveal>
          <Reveal delay={0.6}>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-3xl font-bold mb-2">15+</h3>
                <p className="text-sm text-foreground/50 uppercase tracking-widest">Digital Solutions</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">2+</h3>
                <p className="text-sm text-foreground/50 uppercase tracking-widest">Years of Expertise</p>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="w-full md:w-1/2 relative group">
          <Reveal delay={0.8}>
            <div className="aspect-[4/5] bg-white/5 rounded-2xl overflow-hidden border border-white/10 relative">
               <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent" />
               <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
                 <p className="text-2xl font-bold italic text-foreground/30">
                   "DESIGN IS NOT JUST WHAT IT LOOKS LIKE. DESIGN IS HOW IT WORKS."
                 </p>
               </div>
               {/* Image Placeholder with zoom effect */}
               <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
