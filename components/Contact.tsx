"use client";

import { Reveal } from "./Reveal";
import { Mail, Globe, Cpu, Layers } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-accent/[0.03]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
        <div className="w-full md:w-1/2">
          <Reveal>
            <h2 className="text-6xl md:text-8xl font-black mb-12">LET'S START SOMETHING <span className="text-accent underline decoration-8 underline-offset-8 decoration-accent/20">GREAT</span></h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl text-foreground/60 mb-12 leading-relaxed">
              Based in <span className="text-foreground font-bold">Chennai</span>. 
              Currently open to new opportunities in scale-up environments. 
              Reach out via email or connect on LinkedIn.
            </p>
          </Reveal>
          
          <Reveal delay={0.4}>
            <div className="flex flex-col gap-6 mb-12">
              <a href="mailto:gowsigowsalyad0606@gmail.com" className="flex items-center gap-4 text-lg hover:text-accent transition-colors group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all">
                  <Mail size={20} />
                </div>
                gowsigowsalyad0606@gmail.com
              </a>
              <a href="https://linkedin.com/in/gowsalya-d-6b19b4281" target="_blank" className="flex items-center gap-4 text-lg hover:text-accent transition-colors group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all">
                  <Globe size={20} />
                </div>
                LinkedIn Profile
              </a>
              <div className="flex items-center gap-4 text-lg text-foreground/40">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                  <Cpu size={20} />
                </div>
                +91 8248765239
              </div>
            </div>
          </Reveal>
        </div>

        <div className="w-full md:w-1/2">
          <Reveal delay={0.6}>
            <form className="space-y-8">
              <div className="space-y-2">
                <label className="text-sm font-bold tracking-widest uppercase opacity-40">Your Name</label>
                <input type="text" className="w-full bg-transparent border-b border-white/10 py-4 focus:border-accent outline-none transition-colors" placeholder="JANE DOE" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold tracking-widest uppercase opacity-40">Email Address</label>
                <input type="email" className="w-full bg-transparent border-b border-white/10 py-4 focus:border-accent outline-none transition-colors" placeholder="JANE@EXAMPLE.COM" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold tracking-widest uppercase opacity-40">Your Message</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-white/10 py-4 focus:border-accent outline-none transition-colors resize-none" placeholder="HELLLO..." />
              </div>
              <button className="w-full bg-accent py-6 rounded-2xl font-black text-white hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_40px_rgba(59,130,246,0.2)]">
                SEND MESSAGE
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
