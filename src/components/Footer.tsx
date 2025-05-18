'use client';

import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 text-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-12">
        {/* Left Column - Logo */}
        <div className="flex-1 flex justify-center md:justify-start">
                    <Image src="/idc-logo-vertical.webp" alt="iDC Logo" className="h-20" width={100} height={100} />
          
        </div>

        {/* Center Column - Links */}
        <div className="flex-[2] grid grid-cols-2 gap-6 text-white">
          <ul className="space-y-2">
            {['Home', 'Work', 'Our Services', 'Our Team', 'Careers'].map((item) => (
              <li
                key={item}
                className="flex items-center justify-between border-b border-gray-700 py-2"
              >
                {item} <ArrowUpRight size={12} />
              </li>
            ))}
          </ul>
          <ul className="space-y-2">
            {['Blog', 'Contact Us', 'Employee Portal'].map((item) => (
              <li
                key={item}
                className="flex items-center justify-between border-b border-gray-700 py-2"
              >
                {item} <ArrowUpRight size={12} />
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column - Social & Info */}
        <div className="flex-1 text-right space-y-4">
          {/* Social Icons */}
          <div className="flex justify-end gap-4 text-white text-base">
            <a href="#" aria-label="Instagram">📸</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="LinkedIn">💼</a>
          </div>

          {/* Contact Button */}
          <button className="bg-white text-black rounded-xl px-4 py-2 font-medium flex items-center justify-center gap-2 ml-auto">
            Contact Us <ArrowUpRight size={14} />
          </button>

          {/* Address */}
          <div className="text-gray-400 text-xs leading-5">
            1101 Connecticut Ave NW,<br />
            Suite 450 #94<br />
            Washington, DC 20036
          </div>

          {/* Copyright */}
          <div className="text-gray-500 text-xs mt-2">© 2025. DesignInDC. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
