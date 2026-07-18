import React from 'react';
import { ArrowUpRight, History, Layers, Cpu, Terminal, Compass } from 'lucide-react';

export default function About({ setActiveTab }) {
  const competencies = [
    { label: 'Graphic Design', value: 75, strokeDash: "235.6", offset: "58.9" },
    { label: 'Web Designing', value: 95, strokeDash: "235.6", offset: "11.7" },
    { label: 'Branding Design', value: 85, strokeDash: "235.6", offset: "35.3" },
    { label: 'Web Development', value: 90, strokeDash: "235.6", offset: "23.5" },
  ];

  return (
    <div className="space-y-24 pb-16 bg-stone-50/40">
      {/* 1. HERO SECTION */}
      <section className="relative pt-8 md:pt-16 pb-12 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 space-y-6 text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-medium tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 mr-2" />
              Full-Stack Visionary
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight font-sans leading-tight">
              Crafting Digital Excellence Through <br />
              <span className="text-emerald-900 italic font-serif font-normal">Logic &amp; Soul</span>
            </h1>

            <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-xl">
              I am a MERN stack developer dedicated to building high-performance web applications that bridge the gap between technical complexity and human intuition. My approach combines rigorous architectural logic with a refined aesthetic sensibility.
            </p>

            <div className="flex gap-4 pt-4">
              <button
                onClick={() => alert('CV Downloaded')}
                className="px-6 py-3 bg-[#053321] hover:bg-emerald-900 text-white rounded-lg font-medium text-xs tracking-wide transition-all"
              >
                Download CV
              </button>
              <button
                onClick={() => setActiveTab('work')}
                className="px-6 py-3 bg-slate-200/60 hover:bg-slate-200 text-slate-800 font-medium text-xs tracking-wide rounded-lg transition-all"
              >
                View Portfolio
              </button>
            </div>
          </div>

          {/* Right Column (Image Wrapper with Absolute Badges) */}
          <div className="w-full lg:w-1/2 relative flex justify-center">
            <div className="relative w-full max-w-[420px]">
              <div className="overflow-hidden rounded-2xl bg-slate-200 shadow-sm relative z-10 border border-slate-100">
                <img
                  className="w-full h-auto object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80" 
                  alt="Developer Profile"
                />
              </div>

              {/* Top Right Floating Badge */}
              <div className="absolute -right-6 top-24 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-sm border border-slate-100 z-20 flex items-center gap-3">
                <div className="bg-emerald-50 p-2 rounded-lg text-emerald-800">
                  <Terminal className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-bold text-slate-900 leading-none">MERN Specialist</p>
                  <p className="text-[9px] text-slate-500 mt-1 font-medium">4+ Years Exp.</p>
                </div>
              </div>

              {/* Bottom Left Floating Badge */}
              <div className="absolute -left-6 bottom-24 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-sm border border-slate-100 z-20 flex items-center gap-3">
                <div className="bg-emerald-50 p-2 rounded-lg text-emerald-800">
                  <Compass className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-bold text-slate-900 leading-none">UX Strategist</p>
                  <p className="text-[9px] text-slate-500 mt-1 font-medium">User-Centric Focus</p>
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
            <p className="font-semibold text-[10px] text-slate-500 uppercase tracking-widest">Competencies</p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Technical Proficiency</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {competencies.map((comp) => (
              <div key={comp.label} className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col items-center justify-center shadow-sm">
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle className="text-slate-100" cx="50" cy="50" r="37.5" fill="transparent" stroke="currentColor" strokeWidth="6" />
                    <circle
                      className="text-[#053321] transition-all duration-500"
                      cx="50" cy="50" r="37.5" fill="transparent" stroke="currentColor" strokeWidth="6"
                      strokeDasharray={comp.strokeDash}
                      strokeDashoffset={comp.offset}
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute text-lg font-bold text-slate-900">{comp.value}%</span>
                </div>
                <p className="font-medium text-xs text-slate-600 mt-4 text-center">{comp.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BENTO GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Dark Emerald Card */}
          <div className="md:col-span-8 bg-[#053321] p-8 md:p-10 rounded-3xl text-white flex flex-col justify-between min-h-[360px] text-left">
            <div className="space-y-4">
              <History className="w-5 h-5 text-emerald-400" />
              <h3 className="text-2xl font-bold tracking-tight">A Journey of Code &amp; Creativity</h3>
              <p className="text-emerald-100/70 text-xs md:text-sm leading-relaxed max-w-xl">
                My journey began with a curiosity for how the internet works. Today, I specialize in the MERN ecosystem, delivering scalable solutions from initial wireframes to final deployment. Every line of code is written with the end-user's experience in mind.
              </p>
            </div>
            <div className="flex gap-12 mt-8 pt-6 border-t border-emerald-900/60">
              <div className="flex flex-col">
                <span className="text-2xl font-bold">50+</span>
                <span className="text-[9px] font-semibold text-emerald-300/60 tracking-wider uppercase mt-1">Projects Done</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold">20+</span>
                <span className="text-[9px] font-semibold text-emerald-300/60 tracking-wider uppercase mt-1">Happy Clients</span>
              </div>
            </div>
          </div>

          {/* Mint Green Card */}
          <div className="md:col-span-4 bg-[#cbf3e4] p-8 rounded-3xl flex flex-col items-center justify-center text-center gap-4">
            <div className="p-4 bg-white rounded-full shadow-sm text-slate-900">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900">React Mastery</h4>
            <p className="text-xs text-slate-700 leading-relaxed max-w-[200px]">
              Building dynamic, responsive interfaces with high performance in mind.
            </p>
          </div>

          {/* Scalable Architecture White Card */}
          <div className="md:col-span-4 bg-white p-8 rounded-3xl border border-slate-100 relative flex flex-col justify-between text-left min-h-[220px]">
            <div className="flex justify-between items-start">
              <div className="p-3 bg-slate-100 rounded-xl text-slate-800">
                <Cpu className="w-4 h-4" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 absolute top-6 right-6" />
            </div>
            <div className="mt-6 space-y-2">
              <h4 className="text-base font-bold text-slate-900">Scalable Architecture</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Designing robust Node.js and MongoDB backends that scale with your growth.
              </p>
            </div>
          </div>

          {/* Intentional UI/UX Horizontal Card */}
          <div className="md:col-span-8 bg-slate-200/50 p-6 rounded-3xl border border-slate-100 flex flex-col md:flex-row items-center gap-6 text-left">
            <div className="w-full md:w-2/5 aspect-[4/3] rounded-xl overflow-hidden bg-white shrink-0 shadow-sm border border-slate-200/60">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1581291518655-9523c932dedf?auto=format&fit=crop&w=300&q=80" 
                alt="UI UX Mockup"
              />
            </div>
            <div className="space-y-3">
              <h4 className="text-base font-bold text-slate-900">Intentional UI/UX</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Design is not just what it looks like, but how it works. I prioritize clarity and accessibility in every layout.
              </p>
              <button
                onClick={() => setActiveTab('work')}
                className="inline-flex items-center gap-1.5 text-[#053321] font-bold text-xs transition-all hover:gap-2.5 cursor-pointer"
              >
                Learn My Process <span className="text-xs">→</span>
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}