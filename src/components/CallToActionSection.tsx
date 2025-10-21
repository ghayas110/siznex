'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Modal from './Modal';
import { useState } from 'react';

const CallToActionSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative w-full h-[60vh] overflow-hidden bg-black">
      {/* Background Image */}
      <Image
        src="/bg-call.png"
        alt="Call to Action Background"
        layout="fill"
        objectFit="cover"
        className="opacity-90"
        priority
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-between h-full px-6 sm:px-12 max-w-7xl mx-auto text-center sm:text-left">
        {/* Headline */}
        <div className="text-white text-2xl sm:text-4xl md:text-6xl font-semibold leading-snug sm:leading-tight">
          <p>Have an idea?</p>
          <p>Let’s bring it to life</p>
        </div>

        {/* CTA Button */}
       <button
  onClick={() => setIsModalOpen(true)}
  className="mt-8 sm:mt-0 sm:absolute sm:bottom-8 sm:right-8 flex items-center justify-center 
    w-14 h-14 text-sm font-medium rounded-full 
    bg-blue-800 text-white hover:bg-indigo-600 
    transition-all duration-300
    sm:w-32 sm:h-32 sm:text-lg"
>
  <span className="hidden sm:inline">Get started</span>
  <ArrowUpRight className="w-5 h-5 sm:ml-2" />
</button>
      </div>

      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </section>
  );
};

export default CallToActionSection;
