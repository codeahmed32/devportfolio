import React, { useEffect, useState } from 'react';
import { ArrowRight, Database, Server, Smartphone, Cpu, Award, Download } from 'lucide-react';

export default function Home({ setActiveTab }) {
  const [animatedProgress, setAnimatedProgress] = useState({
    fullstack: 0,
    backend: 0,
    api: 0,
    cloud: 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress({
        fullstack: 75,
        backend: 95,
        api: 85,
        cloud: 80,
      });
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      title: 'MongoDB',
      description: 'Architecture and optimization of NoSQL databases for high-speed data retrieval and storage.',
      icon: Database,
    },
    {
      title: 'Express.js',
      description: 'Developing robust RESTful APIs and middleware to power complex business logic and integrations.',
      icon: Server,
    },
    {
      title: 'React.js',
      description: 'Building dynamic, interactive UI components with modern hooks and state management solutions.',
      icon: Smartphone,
    },
    {
      title: 'Node.js',
      description: 'Scalable server-side development with event-driven architectures and real-time capabilities.',
      icon: Cpu,
    },
  ];

  const skills = [
    { label: 'Full Stack Dev', value: animatedProgress.fullstack },
    { label: 'Backend Logic', value: animatedProgress.backend },
    { label: 'API Design', value: animatedProgress.api },
    { label: 'Front-End Designing', value: animatedProgress.cloud },
  ];

  return (
    <div className="w-full bg-[#fcfcfc] space-y-28 pb-20 text-left">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-[1300px] mx-auto pt-16 pb-12 px-8 lg:px-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Box */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-md bg-[#e2f3ee] text-[#013220] text-[10px] font-bold tracking-wider">
              AVAILABLE FOR HIRE
            </div>
            
            <div className="space-y-1">
              <span className="text-sm font-medium text-slate-400 block">Hello, I Am</span>
              <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-none">
                Ahmed Abdullah
              </h1>
            </div>

            <p className="text-slate-500 max-w-xl text-[14px] leading-relaxed">
              A passionate MERN Stack Developer dedicated to crafting high-performance, scalable web applications that deliver seamless user experiences.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => setActiveTab('contact')}
                className="bg-[#013220] hover:bg-[#012215] text-white px-9 py-4 rounded-full font-bold text-xs shadow-md transition-all tracking-wide"
              >
                Hire Me
              </button>
              <button
                onClick={() => setActiveTab('work')}
                className="border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 px-9 py-4 rounded-full font-bold flex items-center gap-2 text-xs transition-all shadow-xs"
              >
                See My Work
                <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
              </button>
            </div>
          </div>

          {/* Right Image Box & Badges */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end gap-6">
            <div className="w-full max-w-[380px] aspect-[4/5]">
              {/* Profile Image Container */}
              <div className="w-full h-full rounded-[3rem] overflow-hidden shadow-xl bg-slate-100">
                <img
                  className="w-full h-full object-cover"
                  // src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsyKsff4JLaldFl4lRc6uldAIu-AIqTfULTkVTxu51eVvOBG_rYvggznE-gNMU5o6wyhGsr0jsOSTvo9kHrXHt8m1stohlBgAVxaysc_0V_q5leEy8orNK_UuaQTwaW2nsElrr4FOJWYCUKAcNzh97ePhPw-lONgq42XpDhxfkPxeTU1BZG1RsnLY-s4C-E7LLqvgV_ri-T02jblb2sz_2sGW_AUCA8PtlkZMW9zBUqi1E2q4LZlOI_E3aLH9fLUbfKDV7XNmhwFw"
                  alt="Ahmed Abdullah portrait"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Badges Layout (Moved below the image) */}
            <div className="w-full max-w-[380px] flex flex-col sm:flex-row gap-3">
              {/* Award Badge */}
              <div className="flex-1 bg-white py-3 px-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3">
                <div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center text-[#013220] shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-800 leading-none">Top Position In Web-Boot Camp</p>
                  <p className="text-[9px] text-slate-400 mt-0.5 font-medium">2025 Nexskill Institute</p>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="flex-1 bg-white py-3 px-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3">
                <div className="flex -space-x-2 shrink-0">
                  <div className="w-6 h-6 rounded-full border border-white bg-slate-200 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&fit=crop&q=60" className="w-full h-full object-cover" alt="" />
                  </div>
                  <div className="w-6 h-6 rounded-full border border-white bg-[#013220] flex items-center justify-center text-[8px] text-white font-bold">
                    +50
                  </div>
                </div>
                <p className="text-[11px] font-bold text-slate-800 leading-none">8+ Months Of Experience</p>
              </div>
            </div>
          </div>

        </div>

        {/* Outer Circular Ornament Graphics */}
        <div className="w-16 h-16 rounded-full border border-slate-200 absolute left-8 bottom-0 opacity-60" />
      </section>

      {/* 2. SERVICES SECTION */}
      <section className="w-full bg-[#f4f6f8] py-20 px-8 lg:px-16">
        <div className="max-w-[1300px] mx-auto space-y-16">
          <div className="text-center space-y-2">
            <span className="text-[#013220] font-bold text-[10px] tracking-widest uppercase block">MY EXPERTISE</span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Provide Wide Range of <br /> Digital Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="bg-white p-8 rounded-xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="w-11 h-11 rounded-lg bg-slate-50 flex items-center justify-center text-slate-700">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800">{service.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{service.description}</p>
                  </div>
                  <button
                    onClick={() => setActiveTab('work')}
                    className="text-slate-700 hover:text-slate-900 font-bold text-[11px] flex items-center gap-1 transition-all cursor-pointer"
                  >
                    Read More →
                  </button>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center pt-4">
            <button
              onClick={() => setActiveTab('work')}
              className="bg-[#013220] hover:bg-[#012215] text-white px-9 py-4 rounded-full font-bold text-xs shadow-md transition-all tracking-wide"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* 3. SKILLS SECTION */}
      <section className="max-w-[1300px] mx-auto px-8 lg:px-16 py-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: 4 White Cards for Gauges */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-6">
            {skills.map((skill) => {
              const radius = 38;
              const circumference = 2 * Math.PI * radius;
              const strokeDashoffset = circumference - (skill.value / 100) * circumference;

              return (
                <div key={skill.label} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col items-center justify-center space-y-4">
                  <div className="relative w-24 h-24 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90">
                      <circle
                        className="text-slate-100"
                        cx="48"
                        cy="48"
                        r={radius}
                        fill="transparent"
                        stroke="currentColor"
                        strokeWidth="6"
                      />
                      <circle
                        className="text-[#013220] transition-all duration-1000 ease-out"
                        cx="48"
                        cy="48"
                        r={radius}
                        fill="transparent"
                        stroke="currentColor"
                        strokeWidth="6"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="absolute text-lg font-bold text-slate-800">
                      {skill.value}%
                    </span>
                  </div>
                  <p className="font-bold text-xs text-slate-500">{skill.label}</p>
                </div>
              );
            })}
          </div>

          {/* Right Side: Informational Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <span className="text-[#013220] font-bold text-[10px] tracking-widest uppercase block">MY SKILLS</span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
              Beautiful &amp; Unique <br /> Digital Experiences
            </h2>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
              I specialize in creating pixel-perfect, scalable web applications that not only look stunning but perform flawlessly. My approach combines technical excellence with user-centric design principles.
            </p>
            <p className="italic text-slate-400 text-xs border-l-2 border-slate-200 pl-4 py-0.5">
              "Great software isn't just written, it's crafted with precision and empathy for the end user."
            </p>
            <div className="pt-4">
              <button
                onClick={() => alert(' Sorry Not AvailAble Yet')}
                className="inline-flex items-center gap-2 bg-[#013220] hover:bg-[#012215] text-white px-8 py-4 rounded-full font-bold text-xs shadow-md transition-all tracking-wide"
              >
                Download CV
                <Download className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4. CALL TO ACTION BANNER */}
      <section className="max-w-[1300px] mx-auto px-8 lg:px-16 pt-8">
        <div className="w-full bg-[#034833] rounded-[2.5rem] p-12 md:p-16 flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-48 h-48 bg-black/10 rounded-full translate-x-12 -translate-y-12 blur-xs pointer-events-none" />
          <div className="space-y-3 text-center md:text-left z-10">
            <h2 className="text-3xl font-bold text-white tracking-tight">Have a Project in Mind?</h2>
            <p className="text-emerald-200/60 text-sm font-medium">Let's build something amazing together.</p>
          </div>
          <div className="z-10 shrink-0">
            <button
              onClick={() => setActiveTab('contact')}
              className="bg-white hover:bg-slate-50 text-[#034833] text-xs font-bold px-12 py-6 rounded-[2rem] transition-all tracking-wide"
            >
              Start a Conversation
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}