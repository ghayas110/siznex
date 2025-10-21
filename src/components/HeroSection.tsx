'use client';

import { useEffect, useState } from 'react';

const words = ['Website', 'Mobile App', 'Web Apps', 'Digital'];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen bg-white text-black flex flex-col px-4 sm:px-6 md:px-12 py-24 sm:py-32 md:py-44 text-center">
      <div className="w-full">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-7xl font-light mb-8 leading-snug md:leading-tight">
          A digital agency for the future.
          <br className="hidden md:block" />
          We create end-to-end{' '}
          <span className="text-indigo-500 font-medium transition-all duration-500">
            {words[index]}
          </span>
        </h1>

        {/* Video */}
        <div className="w-full mt-12 sm:mt-16 md:mt-20 mx-auto">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full max-w-7xl mx-auto rounded-xl shadow-xl border border-gray-700"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            Your browser does not support video.
          </video>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
