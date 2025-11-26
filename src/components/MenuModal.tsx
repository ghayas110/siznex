'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { X } from 'lucide-react';
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
} from 'react-icons/fa';

const MenuModal = ({
  onClose,
  openModal,
}: {
  onClose: () => void;
  openModal?: () => void;
}) => {
  const pathname = usePathname();
  const modalRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  const leftMenu = [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/work' },
    { label: 'Services', href: '/services' },
  ];
  const rightMenu = [
    { label: 'Team', href: '/team' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    setIsClient(true);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isClient) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      ref={modalRef}
      className="fixed inset-0 z-50 bg-black text-white flex flex-col px-6 md:px-12 py-10 animate-fadeInRight"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        aria-label="Close menu"
        className="absolute top-6 right-6 text-sm text-white flex items-center gap-1"
      >
        Close <X size={18} />
      </button>

      {/* Menu */}
      <div className="flex-1 flex flex-col items-start justify-center md:items-center">
        <div className="md:flex md:flex-row md:justify-center md:gap-24 w-full md:max-w-4xl">
          {/* Left Column */}
          <div className="space-y-8">
            {leftMenu.map((item, index) => (
              <Link key={`left-${index}`} href={item.href} onClick={onClose}>
                <div className="flex items-center gap-4 group">
                  <span className="text-gray-500 font-mono text-lg">{`0${index + 1}`}</span>
                  <span
                    className={`text-2xl md:text-5xl font-light group-hover:underline ${
                      pathname === item.href ? 'text-white font-medium underline' : ''
                    }`}
                  >
                    {item.label}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-8  md:space-y-1">
            {rightMenu.map((item, index) => (
              <Link key={`right-${index}`} href={item.href} onClick={onClose}>
                <div className="flex items-center gap-4 group">
                  <span className="text-gray-500 font-mono text-lg">{`0${index + 4}`}</span>
                  <span
                    className={`text-2xl md:text-5xl font-light group-hover:underline ${
                      pathname === item.href ? 'text-white font-medium underline' : ''
                    }`}
                  >
                    {item.label}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between mt-10 sm:mt-0 text-white/70 text-sm">
        <div className="flex gap-6 mt-6 md:mt-0 text-lg">
          <a href="https://www.instagram.com/xpertva/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="cursor-pointer hover:text-white transition" />
          </a>
          <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="cursor-pointer hover:text-white transition" />
          </a>
          <a href="https://www.facebook.com/xpertva" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="cursor-pointer hover:text-white transition" />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="cursor-pointer hover:text-white transition" />
          </a>
          
        </div>

        {/* Careers */}
        {/* <div className="mt-4 md:mt-0">
          <Link
            href="/careers"
            className="hover:underline cursor-pointer"
            onClick={onClose}
            aria-label="Go to Careers page"
          >
            Careers ↗
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default MenuModal;
