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
        src="/bg-call.jpg" // <- replace with your uploaded file path
        alt="Call to Action Background"
        layout="fill"
        objectFit="cover"
        className="opacity-90"
        priority
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between h-full px-12 max-w-7xl mx-auto">
        {/* Headline */}
        <div className="text-white text-4xl md:text-6xl font-semibold leading-tight">
          <p>Have an idea?</p>
          <p>Let’s bring it to life</p>
        </div>

        {/* CTA Button */}
        <button className="absolute bottom-8 right-8 flex items-center justify-center bg-[#6563ff] text-white text-lg font-medium w-32 h-32 md:w-50 md:h-50 rounded-full hover:bg-indigo-600 transition-all duration-300" onClick={() => setIsModalOpen(true)}>
          Get started <ArrowUpRight className="ml-2 w-5 h-5" />
        </button>
      </div>
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </section>
  );
};

export default CallToActionSection;
