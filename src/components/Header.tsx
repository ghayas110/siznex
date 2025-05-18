'use client';
import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Modal from './Modal'; // Import the Modal component
import MenuModal from './MenuModal';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`w-full fixed top-0 left-0 z-50 px-12 py-4 flex items-center justify-between transition-all duration-500 ease-in-out
          ${scrolled ? 'bg-transparent backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-6'}`}
      >
        <div className={`transition-all duration-500 ease-in-out ${scrolled ? 'translate-x-0' : 'translate-x-8'}`}>
          <Image src="/idc-logo-vertical.webp" alt="iDC Logo" className="h-20" width={100} height={100} />
        </div>
        {!scrolled && (
          <div className={`transition-all duration-500 ease-in-out ${scrolled ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <button
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-full flex items-center gap-2"
              onClick={() => setIsModalOpen(true)}
            >
              Get in touch <ArrowUpRight size={16} />
            </button>
          </div>
        )}
        <div onClick={() => setIsMenuOpen(!isMenuOpen)} className={`transition-all duration-500 ease-in-out ${scrolled ? 'translate-x-0' : '-translate-x-8'} text-white flex items-center gap-2`}>
          <span>Menu</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5" />
          </svg>
        </div>
      </header>
      {scrolled && (
        <div className="fixed bottom-4 left-4 z-50">
          <button
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-full flex items-center gap-2"
            onClick={() => setIsModalOpen(true)}
          >
            Get in touch <ArrowUpRight size={16} />
          </button>
        </div>
      )}
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
      {isMenuOpen && <MenuModal onClose={() => setIsMenuOpen(false)} />}
    </>
  );
};

export default Header;