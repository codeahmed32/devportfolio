import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const faqs = [
    {
      q: 'What is your turnaround time?',
      a: 'Typically, I respond to all inquiries within 24–48 business hours. For new projects, initial discovery calls can usually be scheduled within a week.'
    },
    {
      q: 'Do you take on freelance work?',
      a: 'Yes! I\'m currently accepting new projects. I specialize in MERN stack applications, API ecosystems, and high-end landing page designs.'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', service: '', message: '' });
    }, 1200);
  };

  return (
    /* Main Background changed to #252422 (Main Dark) and text selection color to #EB5E28 (Orange Accent) */
    <div className="w-full bg-[#252422] text-left pb-24 antialiased selection:bg-[#EB5E28]/20">
      {/* 1. HERO SECTION */}
      <section className="max-w-[1300px] mx-auto pt-16 pb-12 px-8 lg:px-16 space-y-4">
        {/* Title updated to #FFFCF2 (Off-White) */}
        <h1 className="text-5xl font-bold text-[#FFFCF2] tracking-tight leading-[1.15]">
          Let's Build Something <br /> 
          <span className="text-[#EB5E28] italic font-serif font-normal">Extraordinary</span>
        </h1>
        {/* Description updated to #CCC5B9 (Light Taupe) */}
        <p className="text-[#CCC5B9] max-w-2xl text-[14px] leading-relaxed font-medium">
          Whether you have a specific project in mind or just want to chat about the latest in the MERN stack, I'm always open to new connections.
        </p>
      </section>

      {/* 2. MAIN GRID CONTAINER */}
      <section className="max-w-[1300px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Form Side: Changed background to #403D39 (Lighter Charcoal) and fine border */}
          <div className="lg:col-span-7 bg-[#403D39] p-10 rounded-2xl border border-white/[0.05] shadow-[0_12px_40px_rgba(0,0,0,0.2)]">
            {submitted ? (
              <div className="text-center py-24 space-y-4">
                <h3 className="text-xl font-bold text-[#FFFCF2]">Message Sent!</h3>
                <p className="text-xs text-[#CCC5B9] max-w-xs mx-auto font-medium">Thank you. I will get back to you within 24–48 business hours.</p>
                <button onClick={() => setSubmitted(false)} className="text-xs font-bold text-[#EB5E28] underline cursor-pointer">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="block text-[11px] font-bold text-[#CCC5B9] tracking-wide uppercase">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Alina Parker"
                      /* Inputs updated to contrast beautifully over #403D39 card */
                      className="w-full px-4 py-3 border border-white/10 rounded-lg text-xs outline-none focus:border-[#EB5E28] bg-[#252422]/60 text-[#FFFCF2] placeholder-[#CCC5B9]/40 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[11px] font-bold text-[#CCC5B9] tracking-wide uppercase">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="alina@example.com"
                      className="w-full px-4 py-3 border border-white/10 rounded-lg text-xs outline-none focus:border-[#EB5E28] bg-[#252422]/60 text-[#FFFCF2] placeholder-[#CCC5B9]/40 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-[11px] font-bold text-[#CCC5B9] tracking-wide uppercase">Service Type</label>
                  <div className="relative">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      /* Select field styled with custom SVG tint for arrow matching the theme */
                      className="w-full px-4 py-3 border border-white/10 rounded-lg text-xs outline-none focus:border-[#EB5E28] bg-[#252422]/60 text-[#FFFCF2] appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23CCC5B9%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:14px] bg-[right_16px_center] bg-no-repeat cursor-pointer"
                    >
                      <option value="" className="bg-[#403D39]">Select a service</option>
                      <option value="msern" className="bg-[#403D39]">MERN Stack Development</option>
                      <option value="uiux" className="bg-[#403D39]">UI/UX Design Systems</option>
                      <option value="consulting" className="bg-[#403D39]">Technical Architecture Consulting</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-[11px] font-bold text-[#CCC5B9] tracking-wide uppercase">Message</label>
                  <textarea
                    name="message"
                    required
                    rows="6"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project vision..."
                    className="w-full px-4 py-3 border border-white/10 rounded-lg text-xs outline-none focus:border-[#EB5E28] bg-[#252422]/60 text-[#FFFCF2] placeholder-[#CCC5B9]/40 transition-all resize-none leading-relaxed"
                  />
                </div>

                {/* Primary Button updated to deep #EB5E28 accent with dark text for clear readability */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2.5 bg-[#EB5E28] hover:bg-[#c94d1d] text-[#252422] px-6 py-3.5 rounded-lg font-bold text-xs tracking-wide transition-all shadow-sm disabled:opacity-50 cursor-pointer active:scale-98"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <Send className="w-3.5 h-3.5 text-[#252422]" />}
                </button>
              </form>
            )}
          </div>

          {/* Right Info Card Side */}
          <div className="lg:col-span-5 flex flex-col gap-6 h-full text-left">
            
            {/* Info details box: changed background to #403D39 */}
            <div className="bg-[#403D39] p-9 rounded-2xl flex-grow space-y-8 border border-white/[0.05] shadow-[0_12px_40px_rgba(0,0,0,0.2)]">
              <h3 className="text-xl font-bold text-[#FFFCF2] tracking-tight">Reach Out</h3>
              
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-xl bg-[#252422] flex items-center justify-center text-[#EB5E28] shrink-0">
                    <span className="text-sm">✉</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#CCC5B9] uppercase tracking-wider">Email</p>
                    <p className="text-[13px] font-semibold text-[#FFFCF2] mt-0.5">abdullahahmad6782@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-xl bg-[#252422] flex items-center justify-center text-[#EB5E28] shrink-0">
                    <span className="text-sm">📍</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#CCC5B9] uppercase tracking-wider">Location</p>
                    <p className="text-[13px] font-semibold text-[#FFFCF2] mt-0.5">Staffordshire, UK</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-xl bg-[#252422] flex items-center justify-center text-[#EB5E28] shrink-0">
                    <span className="text-sm">🕒</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#CCC5B9] uppercase tracking-wider">Availability</p>
                    <p className="text-[13px] font-semibold text-[#FFFCF2] mt-0.5">Thu – Sun: 9am – 6pm PST</p>
                  </div>
                </div>
              </div>

              {/* Social links block styling */}
              <div className="pt-8 border-t border-white/10 space-y-3">
                <p className="text-[10px] font-bold text-[#CCC5B9] uppercase tracking-wide">Follow the journey</p>
                <div className="flex gap-2.5">
                  <a href="https://www.linkedin.com/in/ahmed-abdullah-engineer/" className="w-8 h-8 bg-[#252422] text-[#FFFCF2] hover:text-[#EB5E28] rounded-full flex items-center justify-center text-xs border border-white/[0.05] transition-all">🌐</a>
                  <a href="https://github.com/codeahmed32" className="w-8 h-8 bg-[#252422] text-[#FFFCF2] hover:text-[#EB5E28] rounded-full flex items-center justify-center text-xs border border-white/[0.05] transition-all">‹›</a>
                  <a href="https://www.instagram.com/ahmad_na_o7/" className="w-8 h-8 bg-[#252422] text-[#FFFCF2] hover:text-[#EB5E28] rounded-full flex items-center justify-center text-xs border border-white/[0.05] transition-all">🔗</a>
                </div>
              </div>
            </div>

            {/* Visual map card layout: Updated to dark monotone aesthetics */}
            <div className="rounded-2xl overflow-hidden relative border border-white/[0.05] h-36 bg-[#403D39] shadow-[0_12px_40px_rgba(0,0,0,0.2)]">
              <img
                className="w-full h-full object-cover grayscale opacity-20 mix-blend-luminosity"
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80" 
                alt="Map Overlay"
              />
              <div className="absolute bottom-4 left-4 bg-[#252422] py-1.5 px-3 rounded-md border border-white/10 flex items-center gap-2">
                <span className="text-xs">🗺️</span>
                <span className="text-[10px] font-bold text-[#FFFCF2] tracking-wide uppercase">Based in UK</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMMON QUESTIONS */}
      <section className="max-w-[1300px] mx-auto px-8 lg:px-16 pt-20 mt-16 border-t border-white/10 space-y-10">
        <h2 className="text-3xl font-bold text-[#FFFCF2] tracking-tight">Common Questions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {faqs.map((faq, index) => (
            <div key={index} className="space-y-2.5">
              <h4 className="text-[15px] font-bold text-[#FFFCF2]">{faq.q}</h4>
              <p className="text-xs text-[#CCC5B9] leading-relaxed max-w-md font-medium">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}