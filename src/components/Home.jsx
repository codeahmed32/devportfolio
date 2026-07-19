import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Database, Server, Smartphone, Cpu, Award, Download, CheckCircle2, Layout, Activity, Terminal } from 'lucide-react';

// Live Terminal Terminal Log Data Stream
const TERMINAL_LOGS = [
  "▸ Brewing fresh coffee... Coding engine at 99% capacity. ☕",
  "▸ Searching Stack Overflow for that one missing semicolon... 🔍",
  "▸ Debugging code... 12 errors fixed, 47 new ones created. 💀",
  "▸ Telling myself 'It works on my local machine' for the 5th time today. 🤷‍♂️",
  "▸ Forcing MongoDB to behave. It's putting up a fight. 🍃",
  "▸ Git push origin master --force... Just kidding, I'm not a psycho. 🚀",
  "▸ Express router configured. Speedometer: Fast & Furious mode. 🔥",
  "▸ Centering a div... Please send help, it's been 3 hours. 😭",
  "▸ Making sure the AI doesn't write better code than me today. 🤖",
  "▸ Production build compiled. Everything is fine (unless you press F12). 🤫"
];

export default function Home({ setActiveTab }) {
  const [animatedProgress, setAnimatedProgress] = useState({ fullstack: 0, backend: 0, api: 0, cloud: 0 });
  const [currentLogIndex, setCurrentLogIndex] = useState(0);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress({ fullstack: 75, backend: 95, api: 85, cloud: 80 });
    }, 300);
    return () => clearTimeout(timer);
  }, []);

 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogIndex((prevIndex) => (prevIndex + 1) % TERMINAL_LOGS.length);
    }, 2800); 
    return () => clearInterval(interval);
  }, []);

  const services = [
    { title: 'MongoDB', description: 'Architecture and optimization of NoSQL databases for high-speed data retrieval and storage.', icon: Database },
    { title: 'Express.js', description: 'Developing robust RESTful APIs and middleware to power complex business logic and integrations.', icon: Server },
    { title: 'React.js', description: 'Building dynamic, interactive UI components with modern hooks and state management solutions.', icon: Smartphone },
    { title: 'Node.js', description: 'Scalable server-side development with event-driven architectures and real-time capabilities.', icon: Cpu },
  ];

  const skills = [
    { label: 'Full Stack Dev', value: animatedProgress.fullstack },
    { label: 'Backend Logic', value: animatedProgress.backend },
    { label: 'API Design', value: animatedProgress.api },
    { label: 'Front-End Designing', value: animatedProgress.cloud },
  ];

  return (
    <div className="w-full bg-[#252422] space-y-28 xl:space-y-36 pb-20 text-left antialiased selection:bg-[#EB5E28]/20 relative overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-[1440px] mx-auto pt-16 xl:pt-24 pb-12 px-8 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-center">
          
          {/* Left Side Content */}
          <div className="lg:col-span-7 space-y-6 xl:space-y-8">
            <div className="space-y-1 xl:space-y-2">
              <span className="text-xs xl:text-sm font-bold text-[#CCC5B9]/60 tracking-wide block uppercase">Hello, I Am</span>
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-[#FFFCF2] tracking-tight leading-none">
                Ahmed <span className="text-[#EB5E28]">Abdullah</span>
              </h1>
            </div>

            <p className="text-[#CCC5B9] max-w-xl xl:max-w-2xl text-[14px] xl:text-[16px] leading-relaxed font-medium">
              A passionate MERN Stack Developer dedicated to crafting high-performance, scalable web applications that deliver seamless user experiences.
            </p>

            {/* UPGRADED INTERACTIVE HIGH-FEEDBACK BUTTONS */}
            <div className="flex flex-wrap gap-4 pt-2">
              <motion.button
                onClick={() => setActiveTab('contact')}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="custom-magnet bg-[#EB5E28] text-[#252422] px-8 py-3.5 xl:px-10 xl:py-4 rounded-xl font-extrabold text-xs xl:text-sm shadow-lg shadow-[#EB5E28]/10 transition-colors tracking-wide cursor-pointer flex items-center gap-2 group"
              >
                Hire Me
                <motion.span className="inline-block transition-transform duration-300 group-hover:translate-x-1">➔</motion.span>
              </motion.button>

              <motion.button
                onClick={() => setActiveTab('work')}
                whileHover={{ scale: 1.04, y: -2, backgroundColor: "#4e4a45" }}
                whileTap={{ scale: 0.98 }}
                className="custom-magnet border border-white/10 bg-[#403D39] text-[#FFFCF2] px-8 py-3.5 xl:px-10 xl:py-4 rounded-xl font-bold flex items-center gap-2 text-xs xl:text-sm transition-all shadow-md cursor-pointer group"
              >
                See My Work
                <ArrowRight className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-[#CCC5B9] transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            </div>

            {/* LIVE CODES TERMINAL COMPONENT (IDEA 2) */}
            <div className="pt-4 max-w-xl xl:max-w-2xl">
              <div className="bg-[#1C1A19] rounded-xl border border-white/[0.04] shadow-2xl p-4 font-mono text-[12px] xl:text-[13px] relative overflow-hidden flex items-center gap-3 h-14">
                <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#EB5E28]" />
                
                <div className="flex gap-1.5 items-center shrink-0">
                  <Terminal className="w-4 h-4 text-[#EB5E28]" />
                  <span className="text-[#CCC5B9]/40 font-bold">without coffee-input:</span>
                </div>

                {/* Animated Stream Terminal Wrapper */}
                <div className="flex-grow overflow-hidden relative h-full flex items-center">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={currentLogIndex}
                      initial={{ y: 12, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -12, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="text-[#FFFCF2] font-semibold tracking-wide truncate pr-4 selection:bg-[#EB5E28]/30"
                    >
                      {TERMINAL_LOGS[currentLogIndex]}
                    </motion.p>
                  </AnimatePresence>
                </div>

                <div className="w-1.5 h-3.5 bg-[#EB5E28] opacity-80 animate-pulse rounded-xs shrink-0" />
              </div>
            </div>
          </div>

          {/* Right Image Box & Badges */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end gap-5 xl:gap-6 relative z-10">
            <div className="w-full max-w-[380px] xl:max-w-[440px] aspect-[4/5]">
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.3)] bg-[#403D39] border border-white/[0.05]">
                <img
                  className="w-full h-full object-cover opacity-90 contrast-105"
                  src="https://images.unsplash.com/photo-1748372816334-3cf4563c9582?q=80&w=687&auto=format&fit=crop"
                  alt="Minimal Studio Workspace"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Badges Layout */}
            <div className="w-full max-w-[380px] xl:max-w-[440px] flex flex-col sm:flex-row gap-3">
              <div className="flex-1 bg-[#403D39] py-3.5 px-4 rounded-2xl border border-white/[0.05] flex items-center gap-3 shadow-md">
                <div className="w-8 h-8 xl:w-10 xl:h-10 bg-[#252422] rounded-full flex items-center justify-center text-[#EB5E28] shrink-0">
                  <Award className="w-4 h-4 xl:w-5 xl:h-5" />
                </div>
                <div>
                  <p className="text-[11px] xl:text-[12px] font-bold text-[#FFFCF2] leading-none">Top Position In Web-Boot Camp</p>
                  <p className="text-[9px] xl:text-[10px] text-[#CCC5B9]/60 mt-1.5 font-semibold">2025 Nexskill Institute</p>
                </div>
              </div>

              <div className="flex-1 bg-[#403D39] py-3.5 px-4 rounded-2xl border border-white/[0.05] flex items-center gap-3 shadow-md">
                <div className="flex -space-x-1.5 shrink-0">
                  <div className="w-6 h-6 xl:w-7 xl:h-7 rounded-full border border-[#403D39] bg-slate-700 overflow-hidden shadow-xs">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&fit=crop&q=60" className="w-full h-full object-cover" alt="" />
                  </div>
                  <div className="w-6 h-6 xl:w-7 xl:h-7 rounded-full border border-[#403D39] bg-[#EB5E28] flex items-center justify-center text-[8px] xl:text-[10px] text-[#252422] font-extrabold shadow-xs">
                    +50
                  </div>
                </div>
                <div>
                  <p className="text-[11px] xl:text-[12px] font-bold text-[#FFFCF2] leading-none">8+ Months Of Experience</p>
                  <p className="text-[9px] xl:text-[10px] text-[#EB5E28] mt-1.5 font-bold tracking-wide uppercase flex items-center gap-0.5">
                    <CheckCircle2 className="w-2.5 h-2.5 xl:w-3 xl:h-3" /> Verified
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section className="w-full bg-[#403D39]/40 border-y border-white/[0.05] py-20 xl:py-28 px-8 lg:px-16 relative z-10">
        <div className="max-w-[1440px] mx-auto space-y-16">
          <div className="text-center space-y-2">
            <span className="text-[#EB5E28] font-bold text-[10px] xl:text-[11px] tracking-[0.15em] uppercase block">MY EXPERTISE</span>
            <h2 className="text-3xl xl:text-4xl font-extrabold text-[#FFFCF2] tracking-tight">
              Provide Wide Range of <br /> Digital Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="bg-[#403D39] p-7 xl:p-8 rounded-2xl border border-white/[0.03] flex flex-col justify-between space-y-6 group hover:shadow-[0_12px_30px_rgba(235,94,40,0.06)] transition-all duration-300">
                  <div className="space-y-4">
                    <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-xl bg-[#252422] border border-white/5 flex items-center justify-center text-[#FFFCF2] transition-colors group-hover:bg-[#EB5E28] group-hover:text-[#252422] duration-300">
                      <Icon className="w-4 h-4 xl:w-5 xl:h-5" />
                    </div>
                    <h3 className="text-base xl:text-lg font-bold text-[#FFFCF2] tracking-tight">{service.title}</h3>
                    <p className="text-[#CCC5B9] text-xs xl:text-sm leading-relaxed font-medium">{service.description}</p>
                  </div>
                  <button
                    onClick={() => setActiveTab('work')}
                    className="custom-magnet text-[#EB5E28] font-bold text-xs xl:text-sm flex items-center gap-1 transition-all cursor-pointer group-hover:gap-1.5"
                  >
                    Read More →
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. SKILLS SECTION */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-16 py-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 xl:gap-24">
          
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-5 xl:gap-6">
            {skills.map((skill) => {
              const radius = 40;
              const circumference = 2 * Math.PI * radius;
              const strokeDashoffset = circumference - (skill.value / 100) * circumference;

              return (
                <motion.div 
                  whileHover={{ scale: 1.03, translateY: -4 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  key={skill.label} 
                  className="bg-[#403D39] p-6 xl:p-8 rounded-2xl border border-white/[0.05] flex flex-col items-center justify-center space-y-4 shadow-sm"
                >
                  <div className="relative w-20 h-20 xl:w-24 xl:h-24 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90 absolute inset-0" viewBox="0 0 100 100">
                      <circle className="text-[#252422]" cx="50" cy="50" r={radius} fill="transparent" stroke="currentColor" strokeWidth="6" />
                      <circle className="text-[#EB5E28] transition-all duration-[1200ms] ease-out" cx="50" cy="50" r={radius} fill="transparent" stroke="currentColor" strokeWidth="6" strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} strokeLinecap="round" />
                    </svg>
                    <span className="text-base xl:text-lg font-extrabold text-[#FFFCF2] tracking-tight z-10">{skill.value}%</span>
                  </div>
                  <p className="font-bold text-xs xl:text-sm text-[#CCC5B9] tracking-wide uppercase text-center">{skill.label}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="w-full lg:w-1/2 space-y-6 xl:space-y-8">
            <span className="text-[#EB5E28] font-bold text-[10px] xl:text-[11px] tracking-[0.15em] uppercase block">MY SKILLS</span>
            <h2 className="text-3xl xl:text-4xl font-extrabold text-[#FFFCF2] tracking-tight leading-snug">Beautiful &amp; Unique <br /> Digital Experiences</h2>
            <p className="text-[#CCC5B9] text-xs md:text-sm xl:text-base leading-relaxed font-medium">
              I specialize in creating pixel-perfect, scalable web applications that not only look stunning but perform flawlessly. My approach combines technical excellence with user-centric design principles.
            </p>
            <div className="pt-2">
              <motion.button
                onClick={() => alert('Sorry, resume repository currently under version configuration.')}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="custom-magnet inline-flex items-center gap-2 bg-[#EB5E28] text-[#252422] px-7 py-3.5 xl:px-9 xl:py-4 rounded-xl font-bold text-xs xl:text-sm transition-all tracking-wide cursor-pointer group"
              >
                Download CV
                <Download className="w-3.5 h-3.5 xl:w-4 xl:h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </motion.button>
            </div>
          </div>

        </div>
      </section>

      {/* 4. CALL TO ACTION BANNER */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-16 pt-8 relative z-10">
        <div className="w-full bg-[#EB5E28] rounded-[2rem] p-10 md:p-14 xl:p-16 flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden shadow-xl border border-white/10">
          <div className="space-y-2 text-center md:text-left z-10">
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-extrabold text-[#252422] tracking-tight">Have a Project in Mind?</h2>
            <p className="text-[#252422]/80 text-sm xl:text-base font-bold">Let's build something amazing together.</p>
          </div>
          <div className="z-10 shrink-0">
            <motion.button
              onClick={() => setActiveTab('contact')}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="custom-magnet bg-[#252422] text-[#FFFCF2] text-xs xl:text-sm font-extrabold px-8 py-4 xl:px-10 xl:py-4.5 rounded-xl transition-all tracking-wide cursor-pointer flex items-center gap-2 group"
            >
              Start a Conversation
              <span className="transition-transform duration-300 group-hover:translate-x-1">➔</span>
            </motion.button>
          </div>
        </div>
      </section>

    </div>
  );
}