import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight, History, Layers, Cpu, Terminal, Compass } from 'lucide-react';

export default function About({ setActiveTab }) {
  const competencies = [
    { label: 'UI / UX Design', value: 85, strokeDash: "235.6", offset: "35.3" },
    { label: 'Web Designing', value: 95, strokeDash: "235.6", offset: "11.7" },
    { label: 'System Architecture', value: 75, strokeDash: "235.6", offset: "58.9" },
    { label: 'Web Development', value: 90, strokeDash: "235.6", offset: "23.5" },
  ];

  // --- SCROLL-TO-ZOOM CONTROLLERS ---
  const [heroZoom, setHeroZoom] = useState(1);
  const [bentoZoom, setBentoZoom] = useState(1);
  
  const heroRef = useRef(null);
  const bentoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Hero Image Zoom Logic
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Jab image screen par aana shuru ho tabhi calculation active ho
        if (rect.top < windowHeight && rect.bottom > 0) {
          const visibleProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
          // Scale range: 1 se lekar 1.12 tak smoothly scroll par zoom karega
          const newScale = 1 + visibleProgress * 0.12;
          setHeroZoom(Math.min(Math.max(newScale, 1), 1.15));
        }
      }

      // 2. Bento Image Zoom Logic
      if (bentoRef.current) {
        const rect = bentoRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight && rect.bottom > 0) {
          const visibleProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
          // Scale range: 1 se lekar 1.10 tak smooth flow
          const newScale = 1 + visibleProgress * 0.10;
          setBentoZoom(Math.min(Math.max(newScale, 1), 1.12));
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="space-y-24 pb-16 bg-[#252422] antialiased selection:bg-[#EB5E28]/20">
      {/* 1. HERO SECTION */}
      <section className="relative pt-8 md:pt-16 pb-12 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 space-y-6 text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#FFFCF2] tracking-tight leading-tight">
              Crafting Digital Excellence Through <br />
              <span className="text-[#EB5E28] italic font-serif font-normal">Logic, Soul &amp; Creativity </span>
            </h1>

            <p className="text-xs md:text-sm text-[#CCC5B9] leading-relaxed max-w-xl font-medium">
              I am a MERN stack developer dedicated to building high-performance web applications that bridge the gap between technical complexity and human intuition. My approach combines rigorous architectural logic with a refined aesthetic sensibility.
            </p>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => alert('Sorry, resume repository currently under version configuration.')}
                className="px-6 py-3.5 bg-[#EB5E28] hover:bg-[#d44d1d] text-[#252422] rounded-xl font-bold text-xs tracking-wide transition-all cursor-pointer active:scale-98"
              >
                Download CV
              </button>
              <button
                onClick={() => setActiveTab('work')}
                className="px-6 py-3.5 bg-[#403D39] hover:bg-[#4e4a45] text-[#FFFCF2] font-bold text-xs tracking-wide rounded-xl transition-all cursor-pointer"
              >
                View Portfolio
              </button>
            </div>
          </div>

          {/* Right Column (Hero Image with Scroll Zoom) */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end gap-5">
            <div className="w-full max-w-[380px] aspect-[4/5]">
              <div 
                ref={heroRef}
                className="w-full h-full rounded-[2.5rem] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.3)] bg-[#403D39] border border-white/[0.05]"
              >
                <img
                  className="w-full h-full object-cover transition-transform duration-100 ease-out"
                  style={{ transform: `scale(${heroZoom})` }}
                  src="https://images.unsplash.com/photo-1497215641119-bbe6d71ebaae?q=80&w=687&auto=format&fit=crop" 
                  alt="Minimal Studio Workspace"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Badges Layout */}
            <div className="w-full max-w-[380px] flex flex-col sm:flex-row gap-3">
              <div className="flex-1 bg-[#403D39] py-3.5 px-4 rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.1)] border border-white/[0.05] flex items-center gap-3">
                <div className="w-8 h-8 bg-[#252422] rounded-full flex items-center justify-center text-[#EB5E28] shrink-0">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[#FFFCF2] leading-none">MERN Specialist</p>
                  <p className="text-[9px] text-[#CCC5B9] mt-1 font-semibold">Production Ready</p>
                </div>
              </div>

              <div className="flex-1 bg-[#403D39] py-3.5 px-4 rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.1)] border border-white/[0.05] flex items-center gap-3">
                <div className="w-8 h-8 bg-[#252422] rounded-full flex items-center justify-center text-[#EB5E28] shrink-0">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[#FFFCF2] leading-none">UX Strategist</p>
                  <p className="text-[9px] text-[#CCC5B9] mt-1 font-semibold">User-Centric Focus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TECHNICAL PROFICIENCY */}
      <section className="py-12 px-6 md:px-16">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center space-y-1">
            <p className="font-bold text-[10px] text-[#CCC5B9] uppercase tracking-[0.15em]">Competencies</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#FFFCF2] tracking-tight">Technical Proficiency</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {competencies.map((comp) => (
              <div key={comp.label} className="bg-[#403D39] p-6 rounded-2xl border border-white/[0.05] flex flex-col items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
                <div className="relative w-20 h-20 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle className="text-[#252422]" cx="50" cy="50" r="37.5" fill="transparent" stroke="currentColor" strokeWidth="5" />
                    <circle
                      className="text-[#EB5E28] transition-all duration-500"
                      cx="50" cy="50" r="37.5" fill="transparent" stroke="currentColor" strokeWidth="5"
                      strokeDasharray={comp.strokeDash}
                      strokeDashoffset={comp.offset}
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute text-base font-bold text-[#FFFCF2] tracking-tight">{comp.value}%</span>
                </div>
                <p className="font-bold text-xs text-[#CCC5B9] tracking-wide uppercase mt-4 text-center">{comp.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BENTO GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          <div className="md:col-span-8 bg-[#403D39] p-8 md:p-10 rounded-[2rem] text-[#FFFCF2] flex flex-col justify-between min-h-[360px] text-left border border-white/[0.05] relative overflow-hidden">
            <div className="absolute right-0 top-0 w-64 h-64 bg-black/20 rounded-full translate-x-12 -translate-y-12 blur-2xl pointer-events-none" />
            <div className="space-y-4 z-10">
              <History className="w-5 h-5 text-[#EB5E28]" />
              <h3 className="text-2xl font-extrabold tracking-tight">A Journey of Code &amp; Creativity</h3>
              <p className="text-[#CCC5B9] text-xs md:text-sm leading-relaxed max-w-xl font-medium">
                My engineering path centers around building highly operational systems within the MERN ecosystem. From micro-optimizing database models using MongoDB pipelines to engineering strict authentication layers, I ensure products maintain stable user-centric performance profiles.
              </p>
            </div>
            <div className="flex gap-12 mt-8 pt-6 border-t border-white/10 z-10">
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold tracking-tight text-[#EB5E28]">25+</span>
                <span className="text-[9px] font-bold text-[#CCC5B9] tracking-widest uppercase mt-1">Projects Built</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold tracking-tight text-[#EB5E28]">100%</span>
                <span className="text-[9px] font-bold text-[#CCC5B9] tracking-widest uppercase mt-1">Data Accuracy</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 bg-[#252422] p-8 rounded-[2rem] flex flex-col items-center justify-center text-center gap-4 border border-white/[0.05]">
            <div className="p-3.5 bg-[#403D39] rounded-xl shadow-xs text-[#FFFCF2]">
              <Layers className="w-5 h-5 text-[#EB5E28]" />
            </div>
            <h4 className="text-base font-extrabold text-[#FFFCF2] tracking-tight">React Architecture</h4>
            <p className="text-xs text-[#CCC5B9] leading-relaxed max-w-[200px] font-medium">
              Building lightweight components utilizing modular React workflows and state persistence layers.
            </p>
          </div>

          <div className="md:col-span-4 bg-[#403D39] p-8 rounded-[2rem] border border-white/[0.05] relative flex flex-col justify-between text-left min-h-[240px] shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
            <div className="flex justify-between items-start">
              <div className="p-3 bg-[#252422] border border-white/[0.05] rounded-xl text-[#FFFCF2]">
                <Cpu className="w-4 h-4 text-[#EB5E28]" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#CCC5B9] absolute top-8 right-8" />
            </div>
            <div className="mt-6 space-y-2">
              <h4 className="text-base font-extrabold text-[#FFFCF2] tracking-tight">Robust API Backends</h4>
              <p className="text-xs text-[#CCC5B9] leading-relaxed font-medium">
                Designing performant Node.js layouts and complex routing modules optimized for zero-overhead validation checks.
              </p>
            </div>
          </div>

          {/* Intentional UI/UX Card (Bento Image with Scroll Zoom) */}
          <div className="md:col-span-8 bg-[#403D39] p-6 rounded-[2rem] border border-white/[0.05] flex flex-col md:flex-row items-center gap-6 text-left shadow-inner">
            <div 
              ref={bentoRef}
              className="w-full md:w-2/5 aspect-[4/3] rounded-2xl overflow-hidden bg-[#252422] shrink-0 shadow-xs border border-white/[0.05] relative group"
            >
              <img
                className="w-full h-full object-cover transition-transform duration-100 ease-out group-hover:brightness-110"
                style={{ transform: `scale(${bentoZoom})` }}
                src="https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?q=80&w=764&auto=format&fit=crop" 
                alt="Figma Interface Design Framework"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-3 pr-2">
              <h4 className="text-base font-extrabold text-[#FFFCF2] tracking-tight">Intentional UI/UX Engineering</h4>
              <p className="text-xs text-[#CCC5B9] leading-relaxed font-medium">
                Design is deeply functional. I architecture design components inside precise grid vectors, optimizing spacing layouts, micro-interactions, and visual focus lines before writing a single line of frontend markup.
              </p>
              <button
                onClick={() => setActiveTab('work')}
                className="inline-flex items-center gap-1.5 text-[#EB5E28] font-bold text-xs transition-all hover:gap-2 cursor-pointer"
              >
                View More About This <span>→</span>
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}