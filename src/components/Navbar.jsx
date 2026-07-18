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
    <nav className="w-full bg-white py-5 px-6 md:px-16 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        

        <div 
          className="font-sans text-xl font-extrabold text-[#013220] cursor-pointer z-50" 
          onClick={() => handleNavClick('home')}
        >
          DevPortfolio
        </div>
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-xs font-semibold tracking-wide hover:text-[#013220] transition-colors cursor-pointer ${
                  activeTab === item.id ? 'text-[#013220]' : 'text-slate-500'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button 
            onClick={() => handleNavClick('contact')}
            className="hidden md:block bg-[#013220] hover:bg-[#012215] text-white text-xs font-bold px-6 py-2.5 rounded-full transition-all tracking-wide"
          >
            Hire Me
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-700 hover:text-[#013220] focus:outline-hidden z-50 cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      <div
        className={`fixed inset-x-0 top-0 bg-white transition-all duration-300 ease-in-out md:hidden shadow-lg z-40 ${
          isOpen ? 'opacity-100 translate-y-0 pt-20 pb-6 px-6' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-left text-sm font-semibold py-2 transition-colors cursor-pointer border-b border-slate-50 ${
                activeTab === item.id ? 'text-[#013220]' : 'text-slate-600'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('contact')}
            className="w-full bg-[#013220] hover:bg-[#012215] text-white text-center font-bold py-3 rounded-full text-xs mt-2 transition-all"
          >
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
}