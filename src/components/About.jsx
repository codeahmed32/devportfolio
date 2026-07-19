import React from 'react';
import { ArrowUpRight, History, Layers, Cpu, Terminal, Compass, Layout } from 'lucide-react';

export default function About({ setActiveTab }) {
  const competencies = [
    { label: 'UI / UX Design', value: 85, strokeDash: "235.6", offset: "35.3" },
    { label: 'Web Designing', value: 95, strokeDash: "235.6", offset: "11.7" },
    { label: 'System Architecture', value: 75, strokeDash: "235.6", offset: "58.9" },
    { label: 'Web Development', value: 90, strokeDash: "235.6", offset: "23.5" },
  ];

  return (
    <div className="space-y-24 pb-16 bg-[#fcfcfc] antialiased selection:bg-emerald-500/20">
      {/* 1. HERO SECTION */}
      <section className="relative pt-8 md:pt-16 pb-12 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 space-y-6 text-left">
            <div className="inline-flex items-center px-3.5 py-1 rounded-[8px] bg-emerald-50 text-[#013220] text-[10px] font-bold tracking-wider border border-emerald-600/10 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 mr-2 animate-pulse" />
              Full-Stack Visionary
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Crafting Digital Excellence Through <br />
              <span className="text-[#013220] italic font-serif font-normal">Logic &amp; Soul</span>
            </h1>

            <p className="text-xs md:text-sm text-slate-500 leading-relaxed max-w-xl font-medium">
              I am a MERN stack developer dedicated to building high-performance web applications that bridge the gap between technical complexity and human intuition. My approach combines rigorous architectural logic with a refined aesthetic sensibility.
            </p>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => alert('Sorry, resume repository currently under version configuration.')}
                className="px-6 py-3.5 bg-[#013220] hover:bg-[#012215] text-white rounded-xl font-bold text-xs tracking-wide transition-all cursor-pointer active:scale-98"
              >
                Download CV
              </button>
              <button
                onClick={() => setActiveTab('work')}
                className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs tracking-wide rounded-xl transition-all cursor-pointer"
              >
                View Portfolio
              </button>
            </div>
          </div>

          {/* Right Column: Premium Minimal Office Atmosphere Image (Matching Home Page) */}
          <div className="w-full lg:w-1/2 relative flex justify-center">
            <div className="relative w-full max-w-[420px]">
              <div className="overflow-hidden rounded-[2.5rem] bg-slate-50 shadow-[0_12px_40px_rgba(0,0,0,0.06)] relative z-10 border border-black/[0.04] aspect-[4/5]">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1497215641119-bbe6d71ebaae?q=80&w=687&auto=format&fit=crop" 
                  alt="Minimal Studio Workspace"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Top Right Floating Badge */}
              <div className="absolute -right-4 top-20 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-black/[0.05] z-20 flex items-center gap-3">
                <div className="bg-emerald-50 p-2 rounded-xl text-[#013220]">
                  <Terminal className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-bold text-slate-800 leading-none">MERN Specialist</p>
                  <p className="text-[9px] text-slate-400 mt-1 font-semibold">Production Ready</p>
                </div>
              </div>

              {/* Bottom Left Floating Badge */}
              <div className="absolute -left-4 bottom-20 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-black/[0.05] z-20 flex items-center gap-3">
                <div className="bg-emerald-50 p-2 rounded-xl text-[#013220]">
                  <Compass className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-bold text-slate-800 leading-none">UX Strategist</p>
                  <p className="text-[9px] text-slate-400 mt-1 font-semibold">User-Centric Focus</p>
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
            <p className="font-bold text-[10px] text-slate-400 uppercase tracking-[0.15em]">Competencies</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">Technical Proficiency</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {competencies.map((comp) => (
              <div key={comp.label} className="bg-white p-6 rounded-2xl border border-black/[0.05] flex flex-col items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.01)]">
                <div className="relative w-20 h-20 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle className="text-slate-100" cx="50" cy="50" r="37.5" fill="transparent" stroke="currentColor" strokeWidth="5" />
                    <circle
                      className="text-[#013220] transition-all duration-500"
                      cx="50" cy="50" r="37.5" fill="transparent" stroke="currentColor" strokeWidth="5"
                      strokeDasharray={comp.strokeDash}
                      strokeDashoffset={comp.offset}
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute text-base font-bold text-slate-800 tracking-tight">{comp.value}%</span>
                </div>
                <p className="font-bold text-xs text-slate-500/90 tracking-wide uppercase mt-4 text-center">{comp.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BENTO GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Dark Emerald Card */}
          <div className="md:col-span-8 bg-[#013220] p-8 md:p-10 rounded-[2rem] text-white flex flex-col justify-between min-h-[360px] text-left border border-white/5 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-64 h-64 bg-black/10 rounded-full translate-x-12 -translate-y-12 blur-2xl pointer-events-none" />
            <div className="space-y-4 z-10">
              <History className="w-5 h-5 text-emerald-400" />
              <h3 className="text-2xl font-extrabold tracking-tight">A Journey of Code &amp; Creativity</h3>
              <p className="text-emerald-100/70 text-xs md:text-sm leading-relaxed max-w-xl font-medium">
                My engineering path centers around building highly operational systems within the MERN ecosystem. From micro-optimizing database models using MongoDB pipelines to engineering strict authentication layers, I ensure products maintain stable user-centric performance profiles.
              </p>
            </div>
            <div className="flex gap-12 mt-8 pt-6 border-t border-emerald-900/60 z-10">
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold tracking-tight">25+</span>
                <span className="text-[9px] font-bold text-emerald-300/60 tracking-widest uppercase mt-1">Projects Built</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold tracking-tight">100%</span>
                <span className="text-[9px] font-bold text-emerald-300/60 tracking-widest uppercase mt-1">Data Accuracy</span>
              </div>
            </div>
          </div>

          {/* Mint Green Card */}
          <div className="md:col-span-4 bg-[#e2f3ee] p-8 rounded-[2rem] flex flex-col items-center justify-center text-center gap-4 border border-emerald-600/5">
            <div className="p-3.5 bg-white rounded-xl shadow-xs text-slate-900">
              <Layers className="w-5 h-5 text-[#013220]" />
            </div>
            <h4 className="text-base font-extrabold text-slate-900 tracking-tight">React Architecture</h4>
            <p className="text-xs text-slate-600 leading-relaxed max-w-[200px] font-medium">
              Building lightweight components utilizing modular React workflows and state persistence layers.
            </p>
          </div>

          {/* Scalable Architecture White Card */}
          <div className="md:col-span-4 bg-white p-8 rounded-[2rem] border border-black/[0.05] relative flex flex-col justify-between text-left min-h-[240px] shadow-[0_4px_15px_rgba(0,0,0,0.01)]">
            <div className="flex justify-between items-start">
              <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-slate-800">
                <Cpu className="w-4 h-4 text-slate-700" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 absolute top-8 right-8" />
            </div>
            <div className="mt-6 space-y-2">
              <h4 className="text-base font-extrabold text-slate-900 tracking-tight">Robust API Backends</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                Designing performant Node.js layouts and complex routing modules optimized for zero-overhead validation checks.
              </p>
            </div>
          </div>

          {/* Intentional UI/UX Card (Fixed & Populated with exact UI/UX Layout System) */}
          <div className="md:col-span-8 bg-slate-50 p-6 rounded-[2rem] border border-black/[0.04] flex flex-col md:flex-row items-center gap-6 text-left shadow-inner">
            <div className="w-full md:w-2/5 aspect-[4/3] rounded-2xl overflow-hidden bg-white shrink-0 shadow-xs border border-black/[0.06] relative group">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=500&auto=format&fit=crop" 
                alt="Figma Interface Design Framework"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-2 left-2 bg-slate-900/80 backdrop-blur-md px-2 py-1 rounded-md text-[9px] font-mono text-emerald-400 flex items-center gap-1 border border-white/5">
                <Layout className="w-2.5 h-2.5" /> figma_workspace.canvas
              </div>
            </div>
            <div className="space-y-3 pr-2">
              <h4 className="text-base font-extrabold text-slate-900 tracking-tight">Intentional UI/UX Engineering</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                Design is deeply functional. I architecture design components inside precise grid vectors, optimizing spacing layouts, micro-interactions, and visual focus lines before writing a single line of frontend markup.
              </p>
              <button
                onClick={() => setActiveTab('work')}
                className="inline-flex items-center gap-1.5 text-[#013220] font-bold text-xs transition-all hover:gap-2 cursor-pointer"
              >
                Learn My Process <span>→</span>
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}