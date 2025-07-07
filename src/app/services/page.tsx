'use client';

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import CallToActionSection from '@/components/CallToActionSection';

const servicesData = [
  {
    title: 'Web Design & Development',
    image: 'https://designindc.com/wp-content/uploads/2022/12/web-dev@2x.jpg',
    link: 'https://designindc.com/services/web-design-development/',
    items: [
      'Web Design',
      'Web Development',
      'UI / UX Design',
      'Corporate Web Design',
      'Wordpress Development',
      'E-commerce Web Development',
      'Website Maintenance',
      'Custom Web Design',
    ],
  },
  {
    title: 'App Development',
    image: 'https://designindc.com/wp-content/uploads/2023/02/app-dev@2x.jpg',
    link: 'https://designindc.com/services/app-development/',
    items: [
      'Web Applications',
      'Mobile App Development',
      'Intranet Portal Development',
      'Custom CRM / CMS Development',
      'API Integration',
      'CRM Integration',
      'Custom LMS Development',
      'QA Testing',
      'React Development',
      'Laravel / PHP',
      'Node.js',
    ],
  },
  {
    title: 'Videography & Photography',
    image: 'https://designindc.com/wp-content/uploads/2023/02/media@2x.jpg',
    link: 'https://designindc.com/services/videography-photography/',
    items: [
      'Pre-Production',
      'Video Production',
      'Post-Production',
      'Animation',
      'Motion Graphics',
      '3D Rendering',
      'Scripting',
      'Product Photography',
      'Headshots',
    ],
  },
  {
    title: 'Design & Branding',
    image: 'https://designindc.com/wp-content/uploads/2023/02/design@2x.jpg',
    link: 'https://designindc.com/services/design-branding/',
    items: [
      'UI / UX Design',
      'Design Audit',
      'Prototyping',
      'Logo Design',
      'Graphic Design',
      'Product Design',
      'Style Guides',
    ],
  },

];

export default function ServicesPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateWidth = () => setWindowWidth(window.innerWidth);
    updateWidth(); // set initial width

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = sectionRef.current.offsetHeight;
      const start = rect.top - windowHeight * 0.15;
      const end = rect.bottom - windowHeight * 0.85;

      let progress = 0;
      if (start < 0 && end > 0) {
        progress = Math.min(Math.max(-start / (sectionHeight - windowHeight * 0.3), 0), 1);
      } else if (start >= 0) {
        progress = 0;
      } else if (end <= 0) {
        progress = 1;
      }
      setScrollProgress(progress);
    };

    window.addEventListener('resize', updateWidth);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('resize', updateWidth);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const maxTranslateX = windowWidth * (servicesData.length - 1);
  const translateX = -scrollProgress * maxTranslateX;

  const minFont = 18;
  const maxFont = 32;
  const fontSize = minFont + (maxFont - minFont) * Math.min(scrollProgress * 1.2, 1);

  return (
    <section className="text-white overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute top-0 inset-0 z-0">
        <Image
          src="/bg-services.jpg"
          alt="Work Background"
          width={1920}
          height={1000}
          objectFit="cover"
          className="opacity-80 w-full h-[600px]"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-8xl mx-auto px-4 md:px-10 pt-36 pb-20">
        <div className="mb-12 pt-32 pl-2 sm:pl-8 md:pt-40 md:pl-20 text-left max-w-4xl">
          <h1 className="text-[6vw] sm:text-[4.5vw] md:text-[2.2vw] font-light mb-4 leading-tight">
            We provide a full range of web services
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-3xl">
            At DesignInDC, we take a 360° approach to our projects. A successful digital experience requires the seamless integration of multiple elements, which is why our agency offers an array of services, from interface design to custom photography to digital marketing.
          </p>
        </div>

        {/* Carousel */}
        <div ref={sectionRef} className="relative w-full h-[90vh] sm:h-[100vh]">
          {/* Sticky Tabs */}
          <div
            className="sticky top-0 z-30 bg-black/90 backdrop-blur-md py-4 px-4 transition-all duration-300 overflow-x-auto no-scrollbar"
            style={{
              fontSize: `${fontSize}px`,
              boxShadow: scrollProgress > 0.01 ? '0 2px 16px #000a' : 'none',
            }}
          >
            <div className="flex gap-4 sm:gap-8 whitespace-nowrap">
              {servicesData.map((service) => (
                <div
                  key={service.title}
                  className="text-white font-semibold transition-all duration-300"
                  style={{ fontSize: `${fontSize}px` }}
                >
                  {service.title}
                </div>
              ))}
            </div>
          </div>

          {/* Horizontal Scroll Area */}
          <div className="absolute top-24 left-0 w-full h-[calc(100vh-6rem)] overflow-hidden">
            <motion.div
              className="flex h-full w-fit"
              animate={{ x: translateX }}
              transition={{ ease: 'easeInOut', duration: 0.3 }}
              style={{ width: `${servicesData.length * 100}vw` }}
            >
              {servicesData.map((service, idx) => (
                <div
                  key={idx}
                  className="w-screen h-full flex-shrink-0 flex items-center justify-center px-4 sm:px-12"
                >
                  <div className="flex flex-col sm:flex-row w-full max-w-6xl mx-auto items-center justify-between gap-6">
                    <div className="flex-1 flex flex-col items-center sm:items-start">
                      <div className="text-xl sm:text-3xl md:text-5xl font-light mb-4 sm:mb-6 text-center sm:text-left">
                        {service.title}
                      </div>
                      <div className="relative w-full max-w-xs sm:max-w-sm aspect-[4/3] rounded-lg overflow-hidden shadow-lg mb-4 sm:mb-6">
                        <Image src={service.image} alt={service.title} fill className="object-cover" />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-center sm:pl-12 text-sm sm:text-base">
                      <ul className="mb-4 space-y-1">
                        {service.items.map((item, i) => (
                          <li key={i} className="text-white/90">• {item}</li>
                        ))}
                      </ul>
                      <a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-indigo-300 hover:text-white transition text-sm sm:text-base"
                      >
                        learn more
                        <svg width={18} height={18} viewBox="0 0 18 18" fill="none">
                          <path
                            d="M5 13L13 5M13 5H6M13 5V12"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <CallToActionSection />
    </section>
  );
}
