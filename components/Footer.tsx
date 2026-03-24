"use client";

export default function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-foreground/40 text-sm font-bold tracking-widest uppercase">
          © 2026 PREMIUM PORTFOLIO. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-12">
          <a href="#" className="text-[10px] font-black tracking-[0.3em] opacity-40 hover:opacity-100 transition-opacity">PRIVACY POLICY</a>
          <a href="#" className="text-[10px] font-black tracking-[0.3em] opacity-40 hover:opacity-100 transition-opacity">TERMS OF SERVICE</a>
        </div>
      </div>
    </footer>
  );
}
