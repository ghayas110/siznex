'use client';

import { ArrowUpRight, Contact } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
  const router = useRouter();
  return (
    <footer className="bg-black text-white py-16 text-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-12">
        {/* Left Column - Logo */}
        <div className="flex-1 flex justify-center md:justify-start hidden md:flex">
          <Image src="/logo-xpertva.png" alt="iDC Logo" className="h-20 cursor-pointer" width={100} height={100} onClick={() => router.push("/")}/>
          
        </div>

        {/* Center Column - Links */}
        <div className="flex-[2] grid grid-cols-2 gap-6 text-white">
          <ul className="space-y-2">
            {[

"Home", "Work", "Services", "Contact"
].map((item) => (
              <li
                key={item}
                className="flex items-center justify-between border-b border-gray-700 py-2 cursor-pointer hover:text-gray-400 transition-colors"
                onClick={() => { router.push(item === "Home" ? "/" : `/${item.toLowerCase()}`); }}
              >
                {item} <ArrowUpRight size={12} />
              </li>
            ))}
          </ul>
          <ul className="space-y-2">
            {['Privacy Policy', "Team", "Blog"].map((item) => (
              <li
                key={item}
                className="flex items-center justify-between border-b border-gray-700 py-2 cursor-pointer hover:text-gray-400 transition-colors"
                onClick={() => { router.push('/privacy-policy') }}
              >
                {item} <ArrowUpRight size={12} />
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column - Social & Info */}
        <div className="flex-1 text-right space-y-4">
          {/* Social Icons */}
        {/* Real social icons */}
      <div className="flex justify-end items-center gap-4 mb-4">
  <FaFacebook className="text-white text-2xl cursor-pointer hover:text-gray-400 transition-colors" onClick={() => window.open('https://www.facebook.com/xpertva', '_blank')}/>
      <RiInstagramFill className="text-white text-2xl cursor-pointer hover:text-gray-400 transition-colors" onClick={() => window.open('https://www.instagram.com/xpertva/', '_blank')}/>
      {/* <FaLinkedin className="text-white text-2xl cursor-pointer hover:text-gray-400 transition-colors" onClick={() => window.open('https://www.linkedin.com/company/siznex/', '_blank')}/> */}
      </div>
    


          {/* Copyright */}
          <div className="text-gray-500 text-xs mt-2">© 2026. XPERTVA. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
