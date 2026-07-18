import React from 'react';
import { ArrowUp, Linkedin, Instagram, Github, Twitter } from 'lucide-react';

export default function Footer({ activeTab, setActiveTab }) {
  const handleLinkClick = (id) => {
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ahmed-abdullah-engineer/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/codeahmed32', label: 'GitHub' },
    { icon: Instagram, href: 'https://www.instagram.com/ahmad_na_o7/', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com/YOUR_USERNAME', label: 'Twitter' },
  ];

  return (
    <footer className="bg-white py-12 px-6 md:px-16" id="app-footer">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left Section: Branding & Copyright */}
        <div className="space-y-2 text-center md:text-left">
          <button
            onClick={() => handleLinkClick('home')}
            className="font-sans text-xl font-extrabold text-[#013220] hover:opacity-80 transition-all cursor-pointer"
          >
            DevPortfolio
          </button>
          <p className="text-xs text-slate-500 font-medium">
            © {new Date().getFullYear()} Ahmed Abdullah. All Rights Reserved.
          </p>
        </div>

        {/* Center Section: Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleLinkClick(item.id)}
              className={`text-xs font-semibold tracking-wide hover:text-[#013220] transition-colors cursor-pointer relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#013220] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                activeTab === item.id ? 'text-[#013220] after:scale-x-100' : 'text-slate-500'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right Section: Social Links & Back to Top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-[#013220] hover:bg-slate-50 rounded-full transition-all"
                  aria-label={social.label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>

          <div className="w-[1px] h-6 bg-slate-200 hidden sm:block" />

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-2 border border-slate-200 hover:bg-slate-50 rounded-full text-[#013220] transition-colors shadow-sm cursor-pointer"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}