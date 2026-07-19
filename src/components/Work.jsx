import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 
import { Eye, ArrowRight, X, Info } from 'lucide-react';

export default function Work({ setActiveTab }) {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Mascot eye-tracking states
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const mascotRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (mascotRef.current) {
        const rect = mascotRef.current.getBoundingClientRect();
        const mascotCenterX = rect.left + rect.width / 2;
        const mascotCenterY = rect.top + rect.height / 2;
        
        const angle = Math.atan2(e.clientY - mascotCenterY, e.clientX - mascotCenterX);
        const maxDistance = 4; 
        const x = Math.cos(angle) * maxDistance;
        const y = Math.sin(angle) * maxDistance;
        
        setMousePos({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const categories = ['All', 'Full-Stack', 'Backend Systems', 'UI / UX'];

  const projects = [
    {
      title: 'Real-Time Chat App',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCagnyBzdHeerAzB0WWjmDT8mP6aRFUpoJpXI8iI2JtsYPBLmsFR6lV8omwfl6uaRF4j00SxU3PsPpV8LM9LLVUSq70WxIeMI2L1dyWQhPUn2afhp0OWoLBzUIobBgWtoakdktt-mP27ut3UznYcBEoRX9G-O63b_uID6PmYJK7An0ueZciTU9t-8HGekRw7vPxRAitxvEYgniOyy6kw-2YqmvK0W_6STPORAqgmKNunpM7e9EWQon7DpjfDndSDdl3-5RMwzY-wS0',
      tags: ['React.js', 'Node.js', 'Express', 'Socket.io'],
      description: 'Instant messaging application featuring real-time bi-directional data channels, active user states, and instant web synchronization modules.',
      category: 'Full-Stack',
      github: '#',
      demo: 'https://chat-app-front-end-react-js.vercel.app/',
      details: 'Built utilizing a full development lifecycle strategy. Implements persistent database schemas via MongoDB, secure server-side message routing layers, and active communication handling optimized through intensive Postman API traffic testing routines.'
    },
    {
      title: 'Inventory Management System',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgceo6YvoQ10r9P2EjRGPgByZ6QsLXwclG5j7lz-ALN0DtV139hBKi-_0wZ8mcZMFPTEODaiGt20VEypofrhrheyEihhhhI2Spgxxq5p0z9Z2z5ZPGXD1GMufgrY91G3qcg27d9BSGpSeBR_ABrWiUMFxx8r2427iS8Tfv0Rjx7IIB0rBzQtvIVgXMdqmqCxCAKj2IQ-mAnH8qQyKbXpVMoTqh3tLYc1arkuJvHfpqstBe3PErAXvc7fwuhxnX0oih0_DWcoC8wjA',
      tags: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind'],
      description: 'Comprehensive inventory management system managing stock levels, automatic data integration tracking, and low-stock alerts.',
      category: 'Full-Stack',
      github: '#',
      demo: 'https://e-commerce-project-detail-page.netlify.app/',
      details: 'Leverages modern Next.js architecture coupled with robust server-side data validations. Features performant MongoDB aggregation logic for swift database updates, strict routing controls, and full application version tracking via GitHub pipelines.'
    },
    {
      title: 'Habits Tracker',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChNISTydaPJREw3kClgDV4913mwNvUsfZZiYiMMhqVb7eccCdArVrGLskuKqvfrTxTPytolCYTKgb61-ru0Vk0V2D2Vjjd6tuev363cgrDY1bsY_ORNGAxvJ_YgQibP5nXuTWnEX6EWDZ3c6uK5McSpC7AanHE2tUVEkh-hEBp5VEbXI8y5WAZycJnmFc8EXKfjAbsJTNytSMsHcclN4FR7984AqmC36A3x9Kj3jLrBFVAGYbY5rfDoYEtj2keO9EDjIlEbYqEs6Y',
      tags: ['React.js', 'Vite', 'MongoDB', 'Tailwind CSS'],
      description: 'Functional Productivity application focused on tracking daily habits, maintaining streaks, and visualizing personal consistency grids.',
      category: 'UI / UX',
      github: '#',
      demo: 'https://web-development-practice-code-one.vercel.app/',
      details: 'Features a highly responsive frontend layout designed using Tailwind CSS and managed cleanly with React state workflows. Backend integration handles habit completion data manipulation via Express endpoints, validated directly using Postman.'
    },
    {
      title: 'Authentication System',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChNISTydaPJREw3kClgDV4913mwNvUsfZZiYiMMhqVb7eccCdArVrGLskuKqvfrTxTPytolCYTKgb61-ru0Vk0V2D2Vjjd6tuev363cgrDY1bsY_ORNGAxvJ_YgQibP5nXuTWnEX6EWDZ3c6uK5McSpC7AanHE2tUVEkh-hEBp5VEbXI8y5WAZycJnmFc8EXKfjAbsJTNytSMsHcclN4FR7984AqmC36A3x9Kj3jLrBFVAGYbY5rfDoYEtj2keO9EDjIlEbYqEs6Y',
      tags: ['Node.js', 'Express', 'React', 'MongoDB'],
      description: 'Production-ready end-to-end secure authentication architecture featuring strict route protection and server-side token verification pipelines.',
      category: 'Backend Systems',
      github: '#',
      demo: 'https://login-signup-project-live.netlify.app/login',
      details: 'Built during my full-stack development phase. Features clean API routing, absolute session protection with secure database states, server-side programming, and rigorous route validation tested comprehensively via Postman to block unauthorized entry points.'
    },
    {
      title: 'URL Shortener Platform',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDLLgTjl_9Ev52YFJI-asK3XKrhHq39gMgpXutmLbNHyCpX8fNKUs1ksL5SqTcGJYpa2isMzzvb7ZieyK4HyYsZ4aTxzzGsUq8ieCfMwDMuB8M2Z5PzaFbsV4ZFnX3viFLTt7C72_rVhq14UmS89sPGZqf-gYzNE_jSlT_CVabhvEE0Rb1pOjNUFeh2TULE7yr_xEFgBmjBGn55qDOU3MF1XswWap6r0EpCGOU8SzsHFhCmw46ssrJpWyJvqWuiDXEMz_Jdmg4tuY',
      tags: ['Next.js', 'Express', 'Tailwind'],
      description: 'A performant web service engineered to handle quick data validation, link shortening mechanisms, and real-time frontend mapping.',
      category: 'Full-Stack',
      github: '#',
      demo: 'https://link-shortner-project.netlify.app/#',
      details: 'Leverages automated custom server-side routing combined with responsive frontend components. Implements complete project lifecycle optimization protocols, ensuring fast data query execution rates and solid UI state persistence layers.'
    },
    {
      title: 'Custom Portfolio WebSite Design',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDybHw8h6TXA8_owLp3-GRNECl5qboE0zSr-OJIMPyw6egXZiljYRWWIZltJ98oEPA1alVvRn6_KSV0h1m4z1hEcjeaJl_YF04HkpoudiPKFnxW4P9BYZDHuuR7bJFAvT3CXlZpWX4lAbwdlTBG4ZEPrrXLRhudfizfbQej4T-z5avK4FSMbYy2XqfPxH_fmNy1sR8d3B246HDkqRHyPranfpLQwz4zuf91O6fkb2IJDMxjghZB85Wm0GOdBWgasj0_J_m0o3e47JA',
      tags: ['React.js', 'Vite', 'Tailwind CSS'],
      description: 'Component-based interactive application frontend showcasing optimized responsive layout grids, state controls, and seamless API integrations.',
      category: 'UI / UX',
      github: '#',
      demo: '#',
      details: 'Developed using a modern frontend development workflow under Vite. Integrates structural contact handlers with robust validation loops on the server side, ensuring smooth user interactives and streamlined data flow structures.'
    },
    {
      title: 'Brand Identity & Interface Systems',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADmH-jyDjwS6UHPAvQItmLQAGRe_vDhd7P6jdQGBcPbRyWnpm60mdJUvoBjTPBOInpNcqf3kp6m844GHEKWZwEvXXdYCgjoeIScGzq7wPEmukTw8IltGKNWWCttyQJtERMtkepDbcBoXfXNKPONAsAJCtqfkNdNujpDtL8hI0Ienjc_ZujQPMKmmPwEGeVQeRRyvA8JIiwbGLFYDGrP6xudHRk5uwzcK5zZN7QJxFoFKsPsXoKWQ3ng8mqH0sdnXzfPaHehRU2HcI',
      tags: ['Figma', 'Adobe Suite', 'UI / UX'],
      description: 'Comprehensive core branding frameworks, user interface mockups, and visual identity strategies built for production scale.',
      category: 'UI / UX',
      github: '#',
      demo: '#',
      details: 'Focused on high development standards and user psychology. Created wireframes and fully realized high-fidelity visual layouts using advanced design software to smooth out end-user interface friction layers before final frontend code compilation stages.'
    }
  ];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="w-full bg-[#252422] min-h-screen space-y-20 pb-20 text-left antialiased selection:bg-[#EB5E28]/20 relative overflow-hidden">

      {/* 1. HEADER SECTION (With Mouse Tracking Jumping Orange) */}
      <section className="pt-12 md:pt-20 text-left space-y-3 px-6 md:px-16 max-w-7xl mx-auto w-full">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-3">
            <span className="text-[#EB5E28] font-bold text-xs tracking-[0.15em] uppercase block">MY WORK</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#FFFCF2] tracking-tight">
              My Projects And Work Experience
            </h1>
          </div>
          
          {/* Active Eye-Tracking Jumping Mascot */}
          <motion.div
            ref={mascotRef}
            className="w-14 h-14 md:w-16 md:h-16 bg-[#EB5E28] rounded-full relative shadow-[0_8px_24px_rgba(235,94,40,0.3)] flex flex-col items-center justify-center select-none shrink-0"
            animate={{
              y: [0, -14, 0],
              scaleX: [1, 0.93, 1.03, 1],
              scaleY: [1, 1.07, 0.95, 1],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-5 bg-emerald-600 rounded-tr-full rounded-bl-full rotate-12 origin-bottom-left" />
            
            <div className="flex gap-2.5 justify-center items-center mt-1">
              {/* Left Eye */}
              <div className="w-3 h-3 bg-[#FFFCF2] rounded-full relative flex items-center justify-center">
                <motion.div 
                  className="w-1.5 h-1.5 bg-[#252422] rounded-full absolute"
                  animate={{ x: mousePos.x, y: mousePos.y }}
                  transition={{ type: 'spring', damping: 15, stiffness: 180 }}
                />
              </div>
              {/* Right Eye */}
              <div className="w-3 h-3 bg-[#FFFCF2] rounded-full relative flex items-center justify-center">
                <motion.div 
                  className="w-1.5 h-1.5 bg-[#252422] rounded-full absolute"
                  animate={{ x: mousePos.x, y: mousePos.y }}
                  transition={{ type: 'spring', damping: 15, stiffness: 180 }}
                />
              </div>
            </div>

            <div className="w-3 h-1.5 border-b-2 border-[#252422] rounded-b-full mt-1.5" />
          </motion.div>
        </div>
        
        <p className="text-[#CCC5B9] text-sm md:text-base leading-relaxed max-w-3xl font-medium">
          A curated collection of full-stack web applications, custom API services, and intuitive user interfaces built with React, Node.js, and MongoDB.
        </p>
      </section>

      {/* 2. FILTERS */}
      <section className="flex justify-start px-6 md:px-16 max-w-7xl mx-auto w-full">
        <div className="inline-flex flex-wrap md:flex-nowrap p-1 bg-[#403D39] rounded-2xl gap-0.5 border border-white/[0.04] shadow-md">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-[14px] font-bold text-xs tracking-wide transition-all duration-200 ease-out cursor-pointer ${
                filter === cat
                  ? 'bg-[#252422] text-[#EB5E28] shadow-[0_4px_12px_rgba(0,0,0,0.2)]'
                  : 'text-[#CCC5B9] hover:text-[#FFFCF2] hover:bg-white/[0.02]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. PROJECT GRID (Clean Layout - Drag Removed) */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 overflow-visible">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
                key={project.title}
                className="bg-[#403D39] rounded-2xl overflow-hidden border border-white/[0.03] shadow-md hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition-all duration-300 flex flex-col justify-between group relative select-none"
              >
                <div>
                  {/* Image Container */}
                  <div className="aspect-[16/10] overflow-hidden bg-[#252422] border-b border-white/[0.02] relative">
                    <img
                      className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-[1.03]"
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#252422]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="p-3 bg-[#EB5E28] text-[#252422] rounded-full shadow-lg scale-90 group-hover:scale-100 transition-all duration-300 hover:bg-[#c94d1d] cursor-pointer"
                        title="View details"
                      >
                        <Eye className="w-4 h-4 text-[#252422]" />
                      </button>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4 text-left">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map(t => (
                        <span key={t} className="text-[10px] font-extrabold tracking-wider px-2 py-0.5 rounded-md bg-[#252422] text-[#CCC5B9] uppercase border border-white/[0.03]">
                          {t}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-lg font-bold text-[#FFFCF2] tracking-tight leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs md:text-sm text-[#CCC5B9] leading-relaxed font-medium">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-6 pt-4 flex justify-between items-center border-t border-white/[0.04] mt-2">
                  <button
                    onClick={() => {
                      if (project.demo !== '#') {
                        window.open(project.demo, '_blank', 'noopener,noreferrer');
                      } else {
                        setSelectedProject(project);
                      }
                    }}
                    className="text-[#EB5E28] font-bold text-xs flex items-center gap-1 hover:gap-2 transition-all duration-200 cursor-pointer"
                  >
                    View Case Study
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[9px] font-bold text-[#CCC5B9]/50 uppercase tracking-widest">
                    {project.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* 4. WORK WITH ME BANNER */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto w-full">
        <div className="bg-[#EB5E28] rounded-[2rem] p-10 md:p-14 text-center md:text-left text-[#252422] shadow-xl flex flex-col md:flex-row justify-between items-center gap-6 relative overflow-hidden border border-white/10">
          <div className="absolute right-0 top-0 w-80 h-80 bg-white/5 rounded-full translate-x-12 -translate-y-12 blur-2xl pointer-events-none" />
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Interested in working together?</h2>
            <p className="text-[#252422]/90 text-sm md:text-base max-w-xl font-bold">Let's map out your next product launch over a virtual coffee.</p>
          </div>
          <button
            onClick={() => setActiveTab('contact')}
            className="px-8 py-4 bg-[#252422] hover:bg-[#403D39] text-[#FFFCF2] font-extrabold text-xs rounded-xl shadow-md transition-all duration-200 active:scale-98 cursor-pointer shrink-0"
          >
            Let's Talk
          </button>
        </div>
      </section>

      {/* 5. INTERACTIVE DETAIL MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 15 }}
              transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
              className="bg-[#252422] rounded-[2rem] overflow-hidden shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col border border-white/[0.05]"
            >
              <div className="p-6 border-b border-white/[0.04] flex justify-between items-center bg-[#403D39]">
                <h3 className="text-xl font-bold text-[#FFFCF2] tracking-tight">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 hover:bg-[#252422] rounded-full text-[#CCC5B9] hover:text-[#FFFCF2] transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="overflow-y-auto p-6 md:p-8 space-y-6 flex-1 text-left">
                <div className="aspect-[16/9] rounded-xl overflow-hidden bg-[#403D39] border border-white/[0.02]">
                  <img
                    className="w-full h-full object-cover"
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    />
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1.5 items-center">
                    {selectedProject.tags.map(t => (
                      <span key={t} className="text-[10px] font-extrabold tracking-wide px-2.5 py-1 rounded-md bg-[#403D39] text-[#CCC5B9] uppercase border border-white/[0.03]">
                        {t}
                      </span>
                    ))}
                    <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-md bg-[#EB5E28]/10 text-[#EB5E28] ml-auto uppercase tracking-wide border border-[#EB5E28]/20">
                      {selectedProject.category}
                    </span>
                  </div>

                  <p className="text-sm text-[#CCC5B9] leading-relaxed font-medium">
                    {selectedProject.description}
                  </p>

                  <div className="bg-[#403D39] p-5 rounded-xl space-y-2 border border-white/[0.03]">
                    <h4 className="font-extrabold text-xs text-[#FFFCF2] flex items-center gap-1.5 uppercase tracking-wider">
                      <Info className="w-3.5 h-3.5 text-[#EB5E28]" />
                      Engineering Case Study
                    </h4>
                    <p className="text-xs md:text-sm text-[#CCC5B9] leading-relaxed font-medium">
                      {selectedProject.details}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-white/[0.04] flex justify-end gap-2.5 bg-[#403D39]/40">
                <button
                  onClick={() => {
                    if (selectedProject.github !== '#') {
                      window.open(selectedProject.github, '_blank', 'noopener,noreferrer');
                    } else {
                      alert('Source code repository private or under staging configuration.');
                    }
                    setSelectedProject(null);
                  }}
                  className="px-6 py-3 bg-[#403D39] hover:bg-[#4e4a45] text-[#FFFCF2] font-bold text-xs rounded-xl border border-white/[0.05] shadow-xs transition-all cursor-pointer"
                >
                  Source Code
                </button>
                <button
                  onClick={() => {
                    if (selectedProject.demo !== '#') {
                      window.open(selectedProject.demo, '_blank', 'noopener,noreferrer');
                    } else {
                      alert('Live environment currently offline or undergoing migration workflows.');
                    }
                    setSelectedProject(null);
                  }}
                  className="px-6 py-3 bg-[#EB5E28] hover:bg-[#c94d1d] text-[#252422] font-extrabold text-xs rounded-xl shadow-md transition-all cursor-pointer"
                >
                  Live Demo
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}