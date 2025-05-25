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
        src="/bg-call.jpg"
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
          className="mt-8 sm:mt-0 sm:absolute sm:bottom-8 sm:right-8 flex items-center justify-center bg-[#6563ff] text-white text-base sm:text-lg font-medium w-24 h-24 sm:w-32 sm:h-32 md:w-50 md:h-50 rounded-full hover:bg-indigo-600 transition-all duration-300"
        >
          Get started <ArrowUpRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </section>
  );
};

export default CallToActionSection;
