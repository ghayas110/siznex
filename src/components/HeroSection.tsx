'use client';

import { useEffect, useState } from 'react';

const words = ['Website', 'Mobile App', 'Web Apps', 'Digital Experiences'];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen text-white flex flex-col py-44 px-6 text-center">
      <div className="w-full ">
        {/* Heading */}
        <h1 className="text-5xl sm:text-5xl md:text-7xl font-light  mb-8">
          A digital agency for the future.
    
          We create end-to-end{' '}
          <span className="text-indigo-500 font-medium transition-all duration-500">
            {words[index]}
          </span>
        </h1>

        {/* Video */}
        <div className="w-full mt-20  mx-auto">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full  rounded-xl shadow-xl border border-gray-700"
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
