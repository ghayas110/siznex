'use client';

import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import { testimonials } from '@/data/testimonial';

const achievements = [
  '/logos/AGENTS MOTOR PARTS.png',
  '/logos/ASTORIA.png',
  '/logos/ATTAR MIST.png',
  '/logos/Bulbrite.png',
  '/logos/CONRAD SHOPPING.png',
  '/logos/CREEK.png',
  '/logos/DIAMOND EXCELLENCY.png',
  '/logos/EAGLES.png',
  '/logos/EARTH CIRCLE ORGANICS.png',
  '/logos/FLY.png',
  '/logos/GAX.png',
  '/logos/GLOBAL WALKOUT.png',
  '/logos/GRAPEXX.png',
  '/logos/GYMKHANA.png',
  '/logos/H.png',
  '/logos/HOLIDAY APARTMENT.png',
  '/logos/HOMELUX.png',
  '/logos/LONDON LABS.png',
  '/logos/LOOKSMITT.png',
  '/logos/NOVAVITA NUTRITION.png',
  '/logos/OFFICE-SUPPLY.png',
  '/logos/Trecto Solution.png',
  '/logos/WE LOVE RESTURANT.png',
  '/logos/eq sport.png',
  '/logos/humminghemp.png',
  '/logos/stand-store.png',
];

const ClientsSection = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
      setFade(true);
    }, 100);
  };

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setFade(true);
    }, 100);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-[#13141A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-semibold xl:text-left text-[#6563ff] md:text-center ">We love our clients</h2>
        <p className="text-base sm:text-lg mt-2 sm:text-center xl:text-left">And clients love to work with us</p>

        {/* Testimonial Slider */}
        <div className="flex flex-col md:flex-row gap-8 items-center justify-between mt-12">
          {/* Text */}
          <div className="md:w-1/2 text-center md:text-left transition-opacity duration-500" style={{ opacity: fade ? 1 : 0 }}>
            <blockquote className="italic text-lg sm:text-xl leading-relaxed">“{testimonials[current].quote}”</blockquote>
            <div className="mt-6 text-sm font-semibold uppercase tracking-wide">
              {testimonials[current].name}
              <div className="text-gray-400 text-xs font-normal">{testimonials[current].designation}</div>
            </div>
          </div>

          {/* Video */}
          {
            testimonials[current].video && (
              <div className="md:w-1/2 transition-opacity duration-500 w-full" style={{ opacity: fade ? 1 : 0 }}>
                <video
                  src={testimonials[current].video}
                  controls
                  className="rounded-md w-full h-auto aspect-video object-cover"
                />
              </div>
            )}
          </div>

        {/* Pagination and Arrows */}
        <div className="flex flex-wrap items-center justify-between mt-6 space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex space-x-1 w-full sm:w-auto justify-center sm:justify-start">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`h-[2px] ${i === current ? 'bg-[#6563ff]' : 'bg-gray-600'} w-16 sm:min-w-[400px] transition-all duration-300`}
              ></span>
            ))}
          </div>
          <div className="flex items-center space-x-4 justify-center sm:justify-end w-full sm:w-auto">
            <button onClick={prevSlide}><ArrowLeft className="text-white w-5 h-5 hover:text-[#6563ff]" /></button>
            <button onClick={nextSlide}><ArrowRight className="text-white w-5 h-5 hover:text-[#6563ff]" /></button>
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-20">
          <h3 className="text-lg sm:text-xl font-medium mb-6">Our Achievements</h3>
          <div className="w-full overflow-hidden">
            <div className="flex space-x-6 animate-scroll w-max">
              {achievements.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Achievement ${index + 1}`}
                  className="h-12 sm:h-16 w-auto flex-shrink-0"
                />
              ))}
            </div>
          </div>

          {/* Tailwind Keyframe Styles */}
          <style jsx>{`
            @keyframes scroll {
              from {
                transform: translateX(0%);
              }
              to {
                transform: translateX(-100%);
              }
            }
            .animate-scroll {
              animation: scroll 20s linear infinite;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
