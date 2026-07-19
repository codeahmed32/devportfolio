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
    /* Background changed to #252422 (Main Dark) with a very clean top border to separate content layers */
    <footer className="bg-[#252422] py-12 px-6 md:px-16 border-t border-white/[0.05]" id="app-footer">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left Section: Branding & Copyright */}
        <div className="space-y-2 text-center md:text-left">
          <button
            onClick={() => handleLinkClick('home')}
            /* Logo updated to #FFFCF2 (Off-White) */
            className="font-sans text-xl font-extrabold text-[#FFFCF2] hover:text-[#EB5E28] transition-all cursor-pointer"
          >
            DevPortfolio
          </button>
          {/* Muted text updated to #CCC5B9 (Light Taupe) */}
          <p className="text-xs text-[#CCC5B9]/60 font-medium">
            © {new Date().getFullYear()} Ahmed Abdullah. All Rights Reserved.
          </p>
        </div>

        {/* Center Section: Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleLinkClick(item.id)}
              /* Bottom-line slider effect shifted to #EB5E28 (Orange Accent) and default state text adjusted to #CCC5B9 */
              className={`text-xs font-bold tracking-wide hover:text-[#EB5E28] transition-colors cursor-pointer relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#EB5E28] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                activeTab === item.id ? 'text-[#EB5E28] after:scale-x-100' : 'text-[#CCC5B9]'
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
                  /* Icons change smoothly from light taupe to signature orange with dark hover state */
                  className="p-2 text-[#CCC5B9] hover:text-[#EB5E28] hover:bg-[#403D39] rounded-full transition-all"
                  aria-label={social.label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>

          {/* Divider updated to match dark theme guidelines */}
          <div className="w-[1px] h-6 bg-white/10 hidden sm:block" />

          {/* Back to Top button updated to #403D39 structure with dynamic hover scaling */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-2 bg-[#403D39] hover:bg-[#4e4a45] border border-white/10 rounded-full text-[#FFFCF2] hover:text-[#EB5E28] transition-all shadow-sm cursor-pointer active:scale-95"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}