import React, { useEffect, useState } from 'react';
import { ArrowRight, Database, Server, Smartphone, Cpu, Award, Download, Terminal, CheckCircle2 } from 'lucide-react';

export default function Home({ setActiveTab }) {
  const [animatedProgress, setAnimatedProgress] = useState({
    fullstack: 0,
    backend: 0,
    api: 0,
    cloud: 0,
  });

  // Interactive Micro-Widget State for Left Hero Space
  const [activeTerminalTab, setActiveTerminalTab] = useState('MERN');
  const [terminalOutput, setTerminalOutput] = useState('Click a stack layer to compile micro-architecture...');

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

  const runMicroCompiler = (layer) => {
    setActiveTerminalTab(layer);
    if (layer === 'MERN') {
      setTerminalOutput('~$ init mern-app --auth-shield\n✔ Client pipeline online (React.js)\n✔ Secure token routing ready (JWT)\n✔ Aggregation logic synchronized.');
    } else if (layer === 'REST') {
      setTerminalOutput('~$ curl -X GET /api/v1/systems\n⚡ HTTP/1.1 200 OK\n⚙ Latency: 14ms\n📦 Content-Type: application/json\n{ "status": "operational" }');
    } else if (layer === 'DB') {
      setTerminalOutput('~$ mongosh --eval "db.stats()"\n💾 Connection established to cluster-0\n📊 Index sizes optimized\n🔒 Operations: 0 pooling conflicts.');
    }
  };

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
    <div className="w-full bg-[#fcfcfc] space-y-28 pb-20 text-left antialiased selection:bg-emerald-500/20">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-[1300px] mx-auto pt-16 pb-12 px-8 lg:px-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Layout Balanced to match right element gravity */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block px-3.5 py-1 rounded-[8px] bg-emerald-50 text-[#013220] text-[10px] font-bold tracking-wider border border-emerald-600/10 uppercase">
              AVAILABLE FOR HIRE
            </div>
            
            <div className="space-y-1">
              <span className="text-xs font-semibold text-slate-400 tracking-wide block uppercase">Hello, I Am</span>
              <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-none">
                Ahmed Abdullah
              </h1>
            </div>

            <p className="text-slate-500 max-w-xl text-[14px] leading-relaxed font-medium">
              A passionate MERN Stack Developer dedicated to crafting high-performance, scalable web applications that deliver seamless user experiences.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => setActiveTab('contact')}
                className="bg-[#013220] hover:bg-[#012215] text-white px-8 py-3.5 rounded-xl font-bold text-xs shadow-xs transition-all tracking-wide active:scale-98 cursor-pointer"
              >
                Hire Me
              </button>
              <button
                onClick={() => setActiveTab('work')}
                className="border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 px-8 py-3.5 rounded-xl font-bold flex items-center gap-2 text-xs transition-all shadow-xs cursor-pointer"
              >
                See My Work
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>

            {/* INTERACTIVE APPLE WORKFLOW TERMINAL (Fills Left Bottom Grid Space) */}
            <div className="pt-4 max-w-xl">
              <div className="bg-slate-950 rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col h-48">
                {/* Micro Tab Controls */}
                <div className="flex justify-between items-center px-4 py-2.5 bg-slate-900/80 border-b border-white/5 backdrop-blur-md">
                  <div className="flex gap-1.5 items-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 block" />
                    <span className="text-[10px] text-slate-500 font-mono ml-2 flex items-center gap-1">
                      <Terminal className="w-3 h-3" /> architecture.sh
                    </span>
                  </div>
                  <div className="flex gap-1 bg-black/40 p-0.5 rounded-lg border border-white/5">
                    {['MERN', 'REST', 'DB'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => runMicroCompiler(tab)}
                        className={`px-2.5 py-1 font-mono text-[9px] font-bold rounded-md transition-all cursor-pointer ${
                          activeTerminalTab === tab 
                            ? 'bg-white/10 text-emerald-400 shadow-xs' 
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>
                {/* Executable Logging Container */}
                <div className="p-4 font-mono text-[11px] text-slate-300 leading-relaxed whitespace-pre-line flex-1 overflow-y-auto">
                  {terminalOutput}
                </div>
              </div>
            </div>

          </div>

          {/* Right Image Box & Badges */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end gap-5">
            <div className="w-full max-w-[380px] aspect-[4/5]">
              {/* Profile Image Container with 3xl Squircle Radius */}
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.06)] bg-slate-100 border border-black/[0.04]">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1497215641119-bbe6d71ebaae?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="image home screen"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Badges Layout with precise 2xl Corner Curvature */}
            <div className="w-full max-w-[380px] flex flex-col sm:flex-row gap-3">
              {/* Award Badge */}
              <div className="flex-1 bg-white py-3.5 px-4 rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.01)] border border-black/[0.05] flex items-center gap-3">
                <div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center text-[#013220] shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-800 leading-none">Top Position In Web-Boot Camp</p>
                  <p className="text-[9px] text-slate-400 mt-1 font-semibold">2025 Nexskill Institute</p>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="flex-1 bg-white py-3.5 px-4 rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.01)] border border-black/[0.05] flex items-center gap-3">
                <div className="flex -space-x-1.5 shrink-0">
                  <div className="w-6 h-6 rounded-full border border-white bg-slate-200 overflow-hidden shadow-xs">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&fit=crop&q=60" className="w-full h-full object-cover" alt="" />
                  </div>
                  <div className="w-6 h-6 rounded-full border border-white bg-[#013220] flex items-center justify-center text-[8px] text-white font-bold shadow-xs">
                    +50
                  </div>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-800 leading-none">8+ Months Of Experience</p>
                  <p className="text-[9px] text-emerald-600 mt-1 font-bold tracking-wide uppercase flex items-center gap-0.5">
                    <CheckCircle2 className="w-2.5 h-2.5" /> Verified
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Structural Circle Graphic Grid Element */}
        <div className="w-16 h-16 rounded-full border border-slate-200 absolute left-8 bottom-0 opacity-40 pointer-events-none" />
      </section>

      {/* 2. SERVICES SECTION */}
      <section className="w-full bg-slate-50 border-y border-black/[0.02] py-20 px-8 lg:px-16">
        <div className="max-w-[1300px] mx-auto space-y-16">
          <div className="text-center space-y-2">
            <span className="text-[#013220] font-bold text-[10px] tracking-[0.15em] uppercase block">MY EXPERTISE</span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Provide Wide Range of <br /> Digital Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="bg-white p-7 rounded-2xl border border-black/[0.05] shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col justify-between space-y-6 group hover:shadow-[0_10px_25px_rgba(0,0,0,0.04)] transition-all duration-300">
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 transition-colors group-hover:bg-[#013220] group-hover:text-white duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-slate-800 tracking-tight">{service.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed font-medium">{service.description}</p>
                  </div>
                  <button
                    onClick={() => setActiveTab('work')}
                    className="text-[#013220] font-bold text-xs flex items-center gap-1 transition-all cursor-pointer group-hover:gap-1.5"
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
              className="bg-[#013220] hover:bg-[#012215] text-white px-8 py-3.5 rounded-xl font-bold text-xs shadow-xs transition-all tracking-wide cursor-pointer"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* 3. SKILLS SECTION */}
      <section className="max-w-[1300px] mx-auto px-8 lg:px-16 py-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Gauges with 2xl squircle shapes */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-5">
            {skills.map((skill) => {
              const radius = 36;
              const circumference = 2 * Math.PI * radius;
              const strokeDashoffset = circumference - (skill.value / 100) * circumference;

              return (
                <div key={skill.label} className="bg-white p-6 rounded-2xl border border-black/[0.05] shadow-[0_4px_15px_rgba(0,0,0,0.01)] flex flex-col items-center justify-center space-y-4">
                  <div className="relative w-20 h-20 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90">
                      <circle
                        className="text-slate-100"
                        cx="40"
                        cy="40"
                        r={radius}
                        fill="transparent"
                        stroke="currentColor"
                        strokeWidth="5"
                      />
                      <circle
                        className="text-[#013220] transition-all duration-1000 ease-out"
                        cx="40"
                        cy="40"
                        r={radius}
                        fill="transparent"
                        stroke="currentColor"
                        strokeWidth="5"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="absolute text-base font-bold text-slate-800 tracking-tight">
                      {skill.value}%
                    </span>
                  </div>
                  <p className="font-bold text-xs text-slate-500/90 tracking-wide uppercase">{skill.label}</p>
                </div>
              );
            })}
          </div>

          {/* Right Side: Informational Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <span className="text-[#013220] font-bold text-[10px] tracking-[0.15em] uppercase block">MY SKILLS</span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
              Beautiful &amp; Unique <br /> Digital Experiences
            </h2>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">
              I specialize in creating pixel-perfect, scalable web applications that not only look stunning but perform flawlessly. My approach combines technical excellence with user-centric design principles.
            </p>
            <p className="italic text-slate-400 text-xs border-l-2 border-slate-200 pl-4 py-0.5 font-medium">
              "Great software isn't just written, it's crafted with precision and empathy for the end user."
            </p>
            <div className="pt-2">
              <button
                onClick={() => alert('Sorry, resume repository currently under version configuration.')}
                className="inline-flex items-center gap-2 bg-[#013220] hover:bg-[#012215] text-white px-7 py-3.5 rounded-xl font-bold text-xs shadow-xs transition-all tracking-wide cursor-pointer"
              >
                Download CV
                <Download className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4. CALL TO ACTION BANNER (iOS App Store Premium Card Style) */}
      <section className="max-w-[1300px] mx-auto px-8 lg:px-16 pt-8">
        <div className="w-full bg-[#034833] rounded-[2rem] p-10 md:p-14 flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden border border-white/5 shadow-md">
          <div className="absolute right-0 top-0 w-64 h-64 bg-black/10 rounded-full translate-x-12 -translate-y-12 blur-2xl pointer-events-none" />
          <div className="space-y-2 text-center md:text-left z-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">Have a Project in Mind?</h2>
            <p className="text-emerald-200/60 text-sm font-semibold">Let's build something amazing together.</p>
          </div>
          <div className="z-10 shrink-0">
            <button
              onClick={() => setActiveTab('contact')}
              className="bg-white hover:bg-slate-50 text-[#034833] text-xs font-bold px-8 py-4 rounded-xl shadow-xs transition-all tracking-wide cursor-pointer active:scale-98"
            >
              Start a Conversation
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}