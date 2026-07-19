import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setIsOpen(false); 
  };

  return (
    /* Navbar background updated to #252422 with a subtle blur effect on sticky scroll */
    <nav className="w-full bg-[#252422]/90 backdrop-blur-md py-5 px-6 md:px-16 sticky top-0 z-50 border-b border-white/[0.05]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Branding Title updated to Titanium Off-White (#FFFCF2) */}
        <div 
          className="font-sans text-xl font-extrabold text-[#FFFCF2] hover:text-[#EB5E28] transition-colors cursor-pointer z-50" 
          onClick={() => handleNavClick('home')}
        >
          DevPortfolio
        </div>
        
        <div className="flex items-center gap-8">
          {/* Desktop Links: Active text shifts to #EB5E28, inactive stays at #CCC5B9 */}
          <div className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-xs font-bold tracking-wide hover:text-[#EB5E28] transition-colors cursor-pointer ${
                  activeTab === item.id ? 'text-[#EB5E28]' : 'text-[#CCC5B9]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Hire Me CTA updated to Orange Accent (#EB5E28) with deep dark text for peak legibility */}
          <button 
            onClick={() => handleNavClick('contact')}
            className="hidden md:block bg-[#EB5E28] hover:bg-[#c94d1d] text-[#252422] text-xs font-extrabold px-6 py-2.5 rounded-full transition-all tracking-wide cursor-pointer active:scale-95"
          >
            Hire Me
          </button>

          {/* Mobile Menu Hamburgers updated to Theme Palette */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#FFFCF2] hover:text-[#EB5E28] focus:outline-none z-50 cursor-pointer transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay: Shifted from stark white to #403D39 layer block */}
      <div
        className={`fixed inset-x-0 top-0 bg-[#403D39] transition-all duration-300 ease-in-out md:hidden shadow-[0_15px_30px_rgba(0,0,0,0.3)] z-40 border-b border-white/10 ${
          isOpen ? 'opacity-100 translate-y-0 pt-24 pb-8 px-6' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-left text-sm font-bold py-2.5 transition-colors cursor-pointer border-b border-white/[0.04] ${
                activeTab === item.id ? 'text-[#EB5E28]' : 'text-[#CCC5B9]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('contact')}
            className="w-full bg-[#EB5E28] hover:bg-[#c94d1d] text-[#252422] text-center font-extrabold py-3 rounded-full text-xs mt-3 transition-all cursor-pointer active:scale-98"
          >
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
}